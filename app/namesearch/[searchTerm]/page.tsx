import React from "react";
import getWikiResults from "@/lib/getWikiResults";
import ItemCol from "../../components/ItemCol";

type Prop = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Prop) {
  const searchItemValue: string = await searchTerm.replaceAll("%20", " ");
  const wikiData: Promise<SearchResult> = await getWikiResults(searchItemValue);
  const data = await wikiData;

  if (data?.query?.pages) {
    return {
      title: searchItemValue,
      description: `Search results for ${searchItemValue}`,
    };
  } else {
    return {
      title: ` ${searchItemValue} Not Found`,
      description: `Search results for ${searchItemValue} not found`,
    };
  }
}

export default async function ({ params: { searchTerm } }: Prop) {
  const searchItemValue: string = await searchTerm.replaceAll("%20", " ");
  const wikiData: Promise<SearchResult> = await getWikiResults(searchItemValue);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;
  console.log(results);
  const content = (
    <main className="container mx-auto">
      {results ? (
        Object.values(results).map((result: Result) => {
          return <ItemCol key={result.pageid} result={result} />;
        })
      ) : (
        <div>{`${searchItemValue} cannot be found`}</div>
      )}
    </main>
  );

  return content;
}
