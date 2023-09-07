"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  post: userPost;
  user: User;
};
export default function UserPosts(props: Props) {
  const [notification, setNotification] = useState<boolean>(false);
  return (
    <>
      <section key={props.post.userId}>
        {notification && (
          <div className=" z-50   fixed top-0 left-0 w-full text-center bg-red-500 py-2 p-2  ">
            <span className="font-semi-bold">Like ,</span>
            <span className="font-semi-bold"> Comment</span> and
            <span className="font-semi-bold"> Share </span>
            functionalities is unavailable in this version of LookUp engine but
            our developers are working on it - it will be available in future
            versions
            <span
              onClick={() => {
                setNotification((prev) => !prev);
              }}
              className="block cursor-pointer underline"
            >
              Close
            </span>
          </div>
        )}
        <article className="p-2 border-y-[1px]">
          <div className="flex items-center  gap-3">
            <img
              className=" w-10 h-10 border-2 border-cyan-600 md:w-15 md:h-15 aspect-square rounded-full block"
              src={props.user.picture?.medium}
              alt=""
            />
            <div className="flex  flex-col mb-3">
              <p className="block text-lg font-bold ">
                {props.user.name.first + " " + props.user.name.last}
              </p>
              <p className="text-sm font-extralight">
                {"@" + props.user.login.username}
              </p>
            </div>
          </div>
          <h1 className="text-xl font-semibold">{props.post.title}</h1>
          <p className=" text-base">{props.post.body}</p>
          <div className="flex  text-xl gap-5 mt-2 py-2">
            <div>
              <Link
                onClick={() => {
                  setNotification((prev) => !prev);
                }}
                className="p-1 px-3 rounded-xl hover:bg-[rgba(255,255,255,0.42)] "
                href={"javascript:void(0)"}
              >
                Like👍
              </Link>
            </div>
            <div>
              <Link
                className="p-1 px-3 rounded-xl hover:bg-[rgba(255,255,255,0.42)] "
                href={"javascript:void(0)"}
                onClick={() => {
                  setNotification((prev) => !prev);
                }}
              >
                Comment💬
              </Link>
            </div>
            <div>
              <Link
                className="p-1 px-3 rounded-xl hover:bg-[rgba(255,255,255,0.42)] "
                href={"javascript:void(0)"}
                onClick={() => {
                  setNotification((prev) => !prev);
                }}
              >
                Share↗️
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
