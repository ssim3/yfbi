import { client } from "@/sanity/lib/client";
import { idea_by_author_query } from "@/sanity/lib/queries";
import React from "react";
import IdeaCard, { IdeaCardType } from "./IdeaCard";

const UserIdeas = async ({ id }: { id: string }) => {
  const ideas = await client.fetch(idea_by_author_query, { id });

  return (
    <ul className="mt-10 grid grid-cols-1 items-start gap-5 md:grid-cols-2">
      {ideas?.length > 0 ? (
        ideas?.map((idea: IdeaCardType) => (
          <IdeaCard key={idea?._id} post={idea} />
        ))
      ) : (
        <p>No posts found</p>
      )}
    </ul>
  );
};

export default UserIdeas;
