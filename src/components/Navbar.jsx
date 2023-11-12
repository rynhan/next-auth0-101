'use client'

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navbar() {

  const { user, isLoading } = useUser();

  return (
    <header className='flex flex-row justify-end gap-3 pr-28'>
      {user && (
        <>
          <a href='/'>Home</a>
          <a href='/chat'>Chat</a>
          <a href='/csr'>CSR</a>
          <a href='/ssr'>SSR</a>
          <a href='/userapi'>userapi</a>
          <a href="/api/auth/logout">Logout</a>
        </>
      )}
      {!user && !isLoading && (
        <a href="/api/auth/login">Login</a>
      )}
    </header>
  )
}
