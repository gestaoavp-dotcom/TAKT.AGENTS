import { connection } from "next/server";

async function checkSupabase(): Promise<boolean> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/health`,
      {
        headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY! },
        cache: "no-store",
      },
    );
    return res.ok;
  } catch {
    return false;
  }
}

export default async function Home() {
  await connection();
  const supabaseOk = await checkSupabase();

  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-4 dark:bg-black">
      <div className="w-full max-w-md rounded-2xl border border-black/[.08] bg-white p-8 dark:border-white/[.145] dark:bg-zinc-950">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          TAKT Agents
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Projeto em construção.
        </p>

        <div className="mt-8 flex items-center gap-3 rounded-lg bg-zinc-100 px-4 py-3 dark:bg-zinc-900">
          <span
            className={`h-2.5 w-2.5 rounded-full ${supabaseOk ? "bg-green-500" : "bg-red-500"}`}
          />
          <span className="text-sm text-zinc-700 dark:text-zinc-300">
            Supabase: {supabaseOk ? "conectado" : "sem conexão"}
          </span>
        </div>
      </div>
    </main>
  );
}
