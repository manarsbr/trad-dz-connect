import Link from "next/link";
export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">TradDz Connect</h1>
      <Link href="/login"><a className="mt-5 inline-block bg-blue-500 text-white px-4 py-2">Connexion / Inscription</a></Link>
    </div>
  );
}
