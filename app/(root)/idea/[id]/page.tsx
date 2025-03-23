
// /idea/id
import { client } from "@/sanity/lib/client";
import { idea_by_id_query } from "@/sanity/lib/queries";
import { Heart, Share } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

import markdownit from "markdown-it";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import Likes from "@/components/Likes";
import { incrementLikes } from "@/lib/actions";
import { toast } from "sonner";
import LikeButton from "@/components/LikeButton";

const md = markdownit();

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Get ID from search parameters, and posts using corresponding id.
  const id = (await params).id;
  const post = await client.fetch(idea_by_id_query, { id });

  if (!post) return notFound();

  // The Markdown Pitch parsed as HTML
  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="m-auto flex min-h-80 max-w-5xl flex-col justify-center gap-10 p-10">
        {/* Heading Title   */}
        <div className="flex flex-col gap-7">
          <div
            id="#heading"
            className="flex flex-wrap items-end justify-between gap-5"
          >
            <h1 className="text-5xl font-bold text-rose-500">{post.title}</h1>
            <Link href={`/?search=${post.category}`}>
              <p className="font-bold hover:underline">{post.category}</p>
            </Link>
          </div>

          <div className="flex items-center justify-start gap-5">
            <Link href={`/user/${post?.author?._id}`}>
              <Image
                className="rounded-full"
                src={post?.author?.image}
                alt="Author Profile Picture"
                width={44}
                height={44}
              />
            </Link>

            <div className="flex flex-col">
              <Link
                className="hover:underline"
                href={`/user/${post?.author?._id}`}
              >
                <p className="text-md">{post.author?.name}</p>
              </Link>
              <p className="text-[12px] text-gray-500">
                {formatDate(post._createdAt)}
              </p>
            </div>
          </div>
        </div>

        {/* Banner and Interactions   */}
        <div className="flex flex-col flex-wrap items-center justify-between gap-16 md:flex-row">
          <img
            className="aspect-[3/2] w-full max-w-md rounded-2xl object-cover"
            src={post?.image}
            alt="Idea Image"
            style={{
              aspectRatio: "3/2",
              boxShadow: "1rem 1rem #4c0519",
            }}
          />
          <div className="flex flex-1 flex-col gap-10">
            <p className="text-center">{post.description}</p>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10">
              <form
                className="w-1/2 max-w-40"
                action={async () => {
                  "use server";
                  await incrementLikes(id);
                }}
              >
                <LikeButton />
              </form>
              <button className="flex w-1/2 max-w-40 items-center justify-center gap-2 rounded-3xl border border-white-100 bg-none px-4 py-3 transition-transform hover:scale-105">
                Share
                <Share width={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto flex max-w-5xl flex-col justify-center gap-10 p-10">
        <div>
          <h2 className="mb-5 text-2xl text-rose-500">Pitch</h2>
          {parsedContent ? (
            <article
              className="flex flex-col gap-5"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            ></article>
          ) : (
            <p>Pitch not found...</p>
          )}
        </div>
      </section>

      <Suspense fallback={<Skeleton className="view_skeleton" />}>
        <Likes id={id} />
      </Suspense>
    </>
  );
};

export default page;
