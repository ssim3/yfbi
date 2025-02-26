import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="font-work-sans absolute left-0 top-0 w-full p-5 shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={80} height={28} />
        </Link>
        <div className="flex items-center gap-10 text-white">
          {session && session.user ? (
            <>
              <Link href="/idea/create">
                <span>Create Idea</span>
              </Link>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button className="rounded-[1em] border-none bg-rose-500 px-3 pb-2 pt-1">
                  Logout
                </button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button>Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
