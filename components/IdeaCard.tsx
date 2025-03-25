import React from "react";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Author, Idea } from "@/sanity.types";

export type IdeaCardType = Omit<Idea, "author"> & { author?: Author };

const IdeaCard = ({ post }: { post: IdeaCardType }) => {
  const {
    _id,
    _createdAt,
    title,
    image,
    description,
    likes,
    category,
    author,
  } = post;

  console.log(category);

  return (
    <li className="flex break-inside-avoid flex-col justify-between rounded-xl border border-white text-sm shadow-lime-400 transition-all duration-200 ease-in hover:z-10 hover:bg-[#181818] hover:shadow-2xl">
      <div>
        <div className="flex items-center justify-between gap-3 p-3">
          <div className="flex items-center gap-3">
            <img
              src={author?.image || ""}
              alt="Profile Picture"
              className="h-8 w-8 rounded-full object-cover"
            />
            <Link href={`user/${author?._id}`}>
              <p className="hover:underline">{author?.username}</p>
            </Link>
          </div>
          <div className="flex items-center justify-end gap-2 text-rose-500">
            <p>{likes}</p>
            <Heart size={24} color="#f43f5e" />
          </div>
        </div>

        <img src={image} alt={title} className="w-full object-cover" />

        <div className="flex flex-col gap-2 p-5 pb-0">
          <Link href={`/idea/${_id}`}>
            <h3
              id="title"
              className="!text-xl font-bold transition-colors ease-in-out hover:text-rose-500 hover:underline"
            >
              {title}
            </h3>
          </Link>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between p-5 text-gray-300">
        <p className="idea-card-subtext">{formatDate(_createdAt)}</p>

        <Link
          href={`/?search=${category?.toLowerCase()}`}
          className="transition-colors hover:text-rose-500 hover:underline"
        >
          <p className="">{category}</p>
        </Link>
      </div>
    </li>
  );
};

export default IdeaCard;
