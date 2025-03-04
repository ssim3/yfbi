// /idea/id

import { client } from "@/sanity/lib/client";
import { idea_by_id_query } from "@/sanity/lib/queries";
import { Heart, Share } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import markdownit from "markdown-it";

const md = markdownit();

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Get ID from search parameters, and posts using corresponding id.
  const id = (await params).id;
  const post = await client.fetch(idea_by_id_query, { id });

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="m-auto flex min-h-80 max-w-5xl flex-col justify-center gap-10 p-10">
        {/* Heading Title   */}
        <div
          id="#heading"
          className="flex flex-wrap items-start justify-between gap-5"
        >
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl text-rose-500">{post.title}</h1>
            <div className="flex items-center justify-start gap-5">
              <Image
                className="rounded-full"
                src={post?.author?.image}
                alt="Author Profile Picture"
                width={36}
                height={36}
              />
              <div>
                <p>{post.author?.name}</p>
              </div>
            </div>
          </div>
          <p>posted on {post._createdAt}</p>
        </div>

        {/* Banner and Interactions   */}
        <div className="flex flex-col flex-wrap items-center justify-between gap-16 md:flex-row">
          <img
            className="obc flex-1 rounded-2xl"
            src={post?.image}
            alt="Idea Image"
            width="300px"
          />
          <div className="flex flex-1 flex-col gap-10">
            <p>{post.description}</p>
            <div className="flex flex-wrap items-center justify-start gap-5 sm:gap-10">
              <button className="flex w-1/2 max-w-40 items-center justify-center gap-2 rounded-3xl bg-rose-500 px-4 py-3 transition-transform hover:scale-105">
                Like
                <Heart width={20} />
              </button>
              <button className="flex w-1/2 max-w-40 items-center justify-center gap-2 rounded-3xl border border-white-100 bg-none px-4 py-3 transition-transform hover:scale-105">
                Share
                <Share width={20} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-rose-500">Pitch</h2>
          {parsedContent ? (
            <article
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            ></article>
          ) : (
            <p>Pitch not found...</p>
          )}
        </div>

        <div>
          <h2 className="text-2xl text-rose-500">Comments</h2>
        </div>
      </section>
    </>
  );
};

export default page;
