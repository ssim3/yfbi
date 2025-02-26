import Image from "next/image";
import React from "react";
import { formatDate } from "@/lib/utils";

const IdeaCard = ({ post }: { post: IdeaCardType }) => {
  return (
    <li className="idea-card text-sm">
      <div>
        <div className="flex items-center gap-3 p-3">
          <img
            src={post.author.profile_img}
            alt="Profile Picture"
            className="h-8 w-8 rounded-full object-cover"
          />
          <p className="">{post.author.name}</p>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="w-full object-cover"
        />

        <div className="flex flex-col gap-2 p-5 pb-0">
          <p className="!text-xl font-bold">{post.title}</p>
          <p>{post.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between p-5 text-gray-300">
        <p className="idea-card-subtext">{formatDate(post._createdAt)}</p>

        <p className="">{post.category}</p>
      </div>
    </li>
  );
};

export default IdeaCard;
