import { auth } from '@/auth'
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import { SignIn } from './signin-button';
import { SignOut } from './signout-button';

const Navbar = async() => {
  const session = await auth(); 
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
          <Image src="/logo.png"  alt='logo' width={144} height={30}/>
        </Link>
        <div className='flex items-center gap-5'>
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <SignOut />
              <Link href={`/user/${session?.user?.email}`} className='flex items-center gap-1'>
              {session?.user?.image && (
                <Image src={session?.user?.image}  alt={session?.user?.image} width={30} height={30} className='rounded-2xl'/>
              )}
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ):(
            <>
            <SignIn />
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar