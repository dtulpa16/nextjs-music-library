import { supabase } from "./api";
import AddSongModal from "./components/AddSongModal";
import SongList from "./components/SongList";
import { Song } from "./lib/types";
import Link from "next/link";

type SongPageProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: SongPageProps) {
  const showAddSongModal = searchParams?.add;
  
  let { data: songs, error } = await supabase.from("songs").select("*");
  const data = songs as Song[];

  return (
    <main className="bg-gray-100 p-5 h-screen">
      <div className="flex justify-between items-center mb-8 xl:px-72">
        <h1 className="text-3xl font-bold text-gray-900">Music Library</h1>
        <Link
          href={"/?add=true"}
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          Add Song
        </Link>
      </div>

      <SongList data={data} />

      {showAddSongModal && <AddSongModal />}
    </main>
  );
}
