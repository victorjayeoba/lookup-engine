import { Inter } from "next/font/google";
import "./globals.css";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const allUserObject = await getAllUsers();
  const allUsers: User[] = await allUserObject.results;
  return (
    <>
      <main className="mx-auto container pb-10 ">
        <div className=" min-h-[50vh] flex items-center flex-col justify-center text-2xl">
          <h1 className="text-3xl font-semibold mt-6 text-center">
            Welcome to<span className="italic font-semibold "> LookUp </span>
            Search Engine🔎
          </h1>
          <p className="text-2xl font-normal mt-6  ">
            <label
              className="cursor-pointer underline block underline-offset-8 "
              htmlFor="mainSearch"
            >
              look up anything on the{" "}
              <span className="italic text-2xl">Web</span>
            </label>
          </p>
        </div>
        <section>
          <h1 className="text-center text-3xl">
            View some of our recommended profiles
          </h1>

          <div className="mt-10 md:columns-2 duration-300">
            {allUsers.map((user: User, id: number) => {
              const uniqueId = id + 1;
              return (
                <div
                  className="py-4 p-2  md:p-4 rounded-lg hover:bg-slate-950 md:hover:scale-95 transition-transform duration-300   "
                  key={uniqueId}
                >
                  <div className="flex mb-2 justify-between">
                    <div className="flex items-center gap-2">
                      <Link href={`./profilesearch/${uniqueId}`}>
                        <img
                          className="block w-12 h-12 object-cover rounded-full"
                          src={user?.picture?.thumbnail}
                          alt=""
                        />
                      </Link>
                      <div>
                        <p className="block text-xl font-base duration-700">
                          {user.name.first + " " + user.name.last}
                        </p>
                        <p className="text-sm">{"@" + user.login.username}</p>
                      </div>
                    </div>
                    <div>
                      <p>
                        <Link
                          className=" inline-block text-xs md:text-base bg-slate-800 py-2 px-3 rounded-lg hover:bg-slate-900"
                          href={`./profilesearch/${uniqueId}`}
                        >
                          View Profile
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm capitalize">Gender - {user.gender}</p>
                    <p className="text-sm">Age - {user.dob.age}</p>
                    <p className="text-sm">Lives at {user.location.country}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* 
{allUsers.map((people: User, id: string) => {
  return (
    <div
      className="p-3 py-4 rounded-lg hover:bg-slate-950 hover:scale-95 transition-transform  duration-300  mx-5"
      key={id + 1}
    >
      <div className="flex justify-between">
        <Link
          className="block text-xl font-semibold duration-700"
          href={`./profilesearch/${people.id}`}
        >
          {people.name}
        </Link>
        <p className=" inline-block text-xs md:text-base bg-slate-800 py-1 px-3 rounded-lg hover:bg-slate-900">
          <Link href={`./profilesearch/${people.id}`}>
            View Profile
          </Link>
        </p>
      </div>
      <div>
        <p className="text-sm">{people.email}</p>
        <p className="text-sm">Lives at {people.address.city}</p>
        <p className="text-sm">Works at {people.company.name}</p>
      </div>
    </div>
  );
})} */
