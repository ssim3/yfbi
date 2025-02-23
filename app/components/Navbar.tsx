import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {

  const session = await auth();

  return (
    <header className='p-5 shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={80} height={28} />
            </Link>
            <div className='flex items-center gap-5 text-white'>
                {session && session.user ? (
                    <>
                        <Link href="/idea/create">
                            <span>create Idea</span>
                        </Link>

                        <button onClick={async () => {
                            "use server";
                            await signOut
                        }}>
                            <span>Logout</span>
                        </button>

                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ) : (
                    <button onClick={async () => {
                        "use server";
                        await signIn
                    }}>
                        <span>Login</span>
                    </button>
                )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar