import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {

    const session = await auth();

    return (
        <header className='absolute top-0 w-screen p-5 shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={80} height={28} />
                </Link>
                <div className='flex items-center gap-10 text-white'>
                    {session && session.user ? (
                        <>
                            <Link href="/idea/create">
                                <span>Create Idea</span>
                            </Link>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>

                            <form action={async () => {
                                "use server";
                                await signOut({redirectTo : "/"});
                            }}>
                                <button className='bg-rose-500 px-3 pt-1 pb-2 border-none rounded-[1em]'>
                                    Logout
                                </button>
                            </form>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";
                            await signIn("github");
                        }}>
                            <button>
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar