'use client'

import {useRouter} from "next/navigation";

export default function Home() {

  const nav = useRouter();

  const navigateToDisciplines = () => {
    nav.push("/disciplines");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HOME PAGE

      <button onClick={navigateToDisciplines}>DISCIPLINES</button>
    </main>
  );
}
