'use client'
import {useRouter} from "next/navigation";

export default function Discipline() {
  const nav = useRouter();

  const navigateToHome = () => {
    nav.push("/");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Discipline PAGE
      <button onClick={navigateToHome}>HOME</button>
    </main>
  );
}
