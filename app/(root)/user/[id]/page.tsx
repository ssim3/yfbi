// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { auth } from "@/auth";
import UserIdeas from "@/components/UserIdeas";
import { client } from "@/sanity/lib/client";
import { author_by_id, ideas_by_author } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export const experimental_ppr = true;

const user = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(author_by_id, { id });
  if (!user) return notFound();

  const ideaCount = await client.fetch(ideas_by_author, { id });

  return (
    <>
      <section className="m-auto mt-10 flex max-w-7xl flex-col items-center justify-center gap-5 p-5 md:flex-row md:items-start md:p-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center gap-5 text-center md:items-start md:justify-start md:text-left">
          <Image
            src={user.image}
            alt={user.name}
            width={300}
            height={300}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl text-rose-500">{user.name}</h1>
            <p className="text-gray-500">@{user.username}</p>
          </div>
          <p>{user.bio}</p>
          <p className="font-bold">
            Ideas Shared: <span className="text-rose-500">{ideaCount}</span>
          </p>
        </div>
        {/* Posts Section */}
        <div className="mt-10 flex w-full flex-col sm:w-3/4 md:m-auto">
          <h1 className="text-center text-4xl font-bold text-rose-500 md:text-left">
            {session?.id === id ? "Your" : "All"} Ideas
          </h1>
          <UserIdeas id={id} />
        </div>
      </section>
    </>
  );
};

export default user;
