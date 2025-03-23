"use client";

import { Heart } from 'lucide-react';
import React from 'react'
import { toast } from 'sonner';

const handleLike = () => {
  toast("Liked! ❤️", {
    description: "You liked this idea! Refresh to see updated likes!",
  });
}

const LikeButton = () => {
  return (
    <button type="submit" onClick={handleLike} 
    className="w-full flex items-center justify-center gap-2 rounded-3xl bg-rose-500 px-4 py-3 transition-transform hover:scale-105">
      Like
      <Heart width={20} />
    </button>
  )
}

export default LikeButton