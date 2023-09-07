import UserPosts from "@/app/components/UserPosts";
import getUserPost from "@/lib/getUserPost";
import getQueryUsers from "@/lib/getQueryUsers";
import Link from "next/link";
import React, { Suspense } from "react";

type Props = {
  params: {
    userId: string;
  };
  searchParams: {
    batchId: string;
  };
};

export async function generateMetadata({ params, searchParams }: Props) {
  const allUserObject = await getQueryUsers(searchParams.batchId);
  const convertedString = +params.userId - 1;
  const user: User = await allUserObject.results[convertedString];
  const UserPost: Promise<userPost[]> = await getUserPost(params.userId);
  if (user) {
    return {
      title: user.name.first + " " + user.name.last,
      description: `Search results for ${user.name}`,
    };
  } else {
    return {
      title: ` ${params.userId} Not Found`,
      description: `Search results for ${params.userId} not found`,
    };
  }
}

export default async function page({ params, searchParams }: Props) {
  const allUserObject = await getQueryUsers(searchParams.batchId);
  const convertedString = +params.userId - 1;
  const user: User = await allUserObject.results[convertedString];
  const UserPost: Promise<userPost[]> = await getUserPost(params.userId);

  console.log(searchParams);
  if (user) {
    return (
      <main className="-z-5 relative pt-5 bg-blue-800">
        <section>
          <div className=" z-10 overflow-hidden  px-3 custom_before relative">
            <div className="m-auto justify-between flex md:container">
              <img
                className=" w-20  border-2 border-cyan-600 md:w-36 aspect-square rounded-full block"
                src={user.picture?.large}
                alt=""
              />
              <div className="flex items-center justify-center">
                <Link
                  href={`mailto:${user.email}`}
                  className="px-6 text-xl max-h py-2 block flex-0 bg-slate-50    rounded-3xl text-black active:scale-95"
                >
                  Send Message
                </Link>
              </div>
            </div>
          </div>
          <section className="bg-gray-900 px-3">
            <div className="mx-auto md:container p-2 pb-8">
              <p className="block text-lg font-bold ">
                {user.name.first + " " + user.name.last}
              </p>
              <p className="text-sm font-extralight">
                {"@" + user.login.username}
              </p>
              <p className="text-sm font-extralight">Age - {user.dob.age}</p>
              <p className="text-sm font-extralight capitalize">
                Gender - {user.gender}
              </p>
            </div>
            <section className="md:container mx-auto">
              <h2 className="text-4xl font-bold mb-2">Posts</h2>
              <hr />
              <div>
                <Suspense fallback={<h2>Lorem, ipsum.</h2>}>
                  {(await UserPost).map((post: userPost) => {
                    {
                    }
                    return (
                      <>
                        <UserPosts post={post} user={user} />
                      </>
                    );
                  })}
                </Suspense>
              </div>
            </section>
          </section>
        </section>
      </main>
    );
  }
}
