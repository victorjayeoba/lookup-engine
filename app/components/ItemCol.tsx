import React from "react";

type Props = {
  result: Result;
};

export default function ItemCol({ result }: Props) {
  return (
    <ul defaultValue={1}>
      {result.thumbnail?.source ? (
        <li>
          <div
            className=" py-2 my-5 flex items-center gap-5"
            key={result.pageid}
          >
            <img
              className=" block w-[80px] aspect-square object-cover border-2 rounded-md"
              src={result.thumbnail?.source}
              alt=""
            />
            <div>
              <a
                className="underline underline-offset-4 text-xl"
                href={result.thumbnail?.source}
              >
                {result.title}
              </a>
              <p className="text-normal">{result.extract}</p>
            </div>
          </div>
        </li>
      ) : (
        <li>
          <div className=" py-2 my-5" key={result.pageid}>
            <p>{result.extract}</p>
          </div>
        </li>
      )}
    </ul>
  );
}
