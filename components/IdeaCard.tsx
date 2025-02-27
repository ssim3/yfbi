import Image from "next/image";
import React from "react";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Heart } from "lucide-react";

const IdeaCard = ({ post }: { post: IdeaCardType }) => {
  const {
    _createdAt,
    title,
    image,
    description,
    category,
    author: { _id: authorId, name, profile_img },
    _id,
  } = post;

  return (
    <li className="idea-card text-sm">
      <div>
        <div className="flex items-center justify-between gap-3 p-3">
          <div className="flex items-center gap-3">
            <img
              src={profile_img}
              alt="Profile Picture"
              className="h-8 w-8 rounded-full object-cover"
            />
            <Link href={`users/${authorId}`}>
              <p className="hover:underline">{name}</p>
            </Link>
          </div>
          <button className="hover:scale-110 transition-transform">
            <Heart size={24} color="#f43f5e" />
          </button>
        </div>

        <img src={image} alt={title} className="w-full object-cover" />

        <div className="flex flex-col gap-2 p-5 pb-0">
          <Link href={`/idea/${_id}`}>
            <h3 id="title" className="!text-xl font-bold transition-colors ease-in-out hover:text-rose-500">
              {title}
            </h3>
          </Link>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between p-5 text-gray-300">
        <p className="idea-card-subtext">{formatDate(_createdAt)}</p>

        <p className="">{category}</p>
      </div>
    </li>
  );
};

export default IdeaCard;
