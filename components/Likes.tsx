import { client } from "@/sanity/lib/client";
import { likes_by_id } from "@/sanity/lib/queries";
import { Flame } from "lucide-react";
import React from "react";

// TODO: Update likes whenever likes gets updated

const Likes = async ({ id }: { id: string }) => {
  const { likes } = await client
    .withConfig({ useCdn: false })
    .fetch(likes_by_id, { id });

  return (
    <div className="opacity-30 hover:opacity-100 transition-opacity fixed bottom-5 left-5 flex w-16 items-center justify-center gap-2">
      <Flame color="#f43f5e" size={44} />
      <span className="text-center text-lg font-bold text-rose-500">{likes}</span>
    </div>
  );
};

export default Likes