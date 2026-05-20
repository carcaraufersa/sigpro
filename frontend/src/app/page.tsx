'use client';

import Link from 'next/link';

export default function WelcomePage() {
  return (
  <main>
      <h1>
        Bem-vindo ao SIGPRO
      </h1>

      <Link href="/login">
        Ir para Login
      </Link>
    
    </main>
  );
}
