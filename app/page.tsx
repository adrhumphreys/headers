import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();
  const entries = Array.from(headersList.entries());

  return (
    <main className="flex flex-col justify-between p-24">
      <h1 className="text-xl font-bold mb-2">Headers</h1>
      {entries.map((e) => (
        <p key={e[0]}>
          <span className="font-bold">{e[0]}:</span> {e[1]}
        </p>
      ))}
    </main>
  );
}
