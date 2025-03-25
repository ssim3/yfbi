import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { LogOut } from "lucide-react";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="font-work-sans left-0 top-0 w-full p-5 shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={80} height={28} />
        </Link>
        <div className="flex items-center gap-10 text-white">
          {session && session.user ? (
            <>
              <Link className="hover:underline" href="/create">
                <button className="rounded-3xl border border-white-100 px-3 py-2 transition-all duration-500 hover:border-rose-500 hover:bg-rose-500">
                  Create Idea
                </button>
              </Link>

              <Link className="hover:underline" href={`/user/${session?.id}`}>
                <Image
                  className="rounded-full"
                  src={session?.user?.image || ""}
                  alt="Profile Picture"
                  width={45}
                  height={45}
                />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
                className="h-[30px] w-[30px]"
              >
                <button className="flex gap-5">
                  <LogOut
                    size={30}
                    className="text-white transition-colors hover:text-rose-500"
                  />
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
