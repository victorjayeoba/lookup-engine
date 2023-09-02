import getAllUsers from "@/lib/getAllUsers";
import getUserPost from "@/lib/getUserPost";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  params: {
    userId: string;
  };
};
export default async function page({ params: { userId } }: Props) {
  const allUserObject = await getAllUsers();
  const convertedString = +userId - 1;
  const user: User = await allUserObject.results[convertedString];
  const UserPost: Promise<userPost[]> = await getUserPost(userId);
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
              <button className="px-4 text-xl max-h py-1 block flex-0 bg-slate-50   rounded-2xl text-black">
                Follow
              </button>
            </div>
          </div>
        </div>
        <section className="bg-gray-900 px-3">
          <div className="mx-auto md:container p-3 pb-8">
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
              {(await UserPost).map((post: userPost) => {
                return (
                  <section key={post.userId}>
                    <article className="p-2 border-y-[1px]">
                      <div className="flex items-center  gap-3">
                        <img
                          className=" w-10 h-10 border-2 border-cyan-600 md:w-15 md:h-15 aspect-square rounded-full block"
                          src={user.picture?.medium}
                          alt=""
                        />
                        <div className="flex  flex-col mb-3">
                          <p className="block text-lg font-bold ">
                            {user.name.first + " " + user.name.last}
                          </p>
                          <p className="text-sm font-extralight">
                            {"@" + user.login.username}
                          </p>
                        </div>
                      </div>
                      <h1 className="text-xl font-semibold">{post.title}</h1>
                      <p className=" text-base">{post.body}</p>
                      <div className="flex  text-xl gap-5 mt-2 py-2">
                        <div>
                          <Link href={"javascript:void(0)"}>Like👍</Link>
                        </div>
                        <div>
                          <Link href={"javascript:void(0)"}>Comment💬</Link>
                        </div>
                        <div>
                          <Link href={"javascript:void(0)"}>Share↗️</Link>
                        </div>
                      </div>
                    </article>
                  </section>
                );
              })}
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
