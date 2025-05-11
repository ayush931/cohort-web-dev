"use client";

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

function RealHome() {
  const session = useSession();

  return (
    <div>
      {session.status === "authenticated" && <button onClick={() => signOut()}>Logout</button>}
      {session.status === "unauthenticated" && <button onClick={() => signIn()}>Login</button>}
    </div>
  )
}

export default function Home() {
  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  );
}
