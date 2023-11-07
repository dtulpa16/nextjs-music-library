import { supabase } from "./lib/supaBaseInit";
import AddSongModal from "./components/Modals/AddSongModal";
import SongList from "./components/SongList";
import { Song } from "./lib/types";
import Link from "next/link";
import EditSongModal from "./components/Modals/EditSongModal";
import AddSongButton from "./components/AddSongButton";

type SongPageProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: SongPageProps) {
  const showAddSongModal = searchParams?.add;
  const showEditSongModal = searchParams?.edit;
  let { data: songs, error } = await supabase.from("songs").select("*").order('id', { ascending: true });
  const data = songs as Song[];
  if (error) throw new Error("An error occurred fetching data");
  return (
    <main className="bg-gray-100 p-5 h-screen">
      <div className="flex justify-between items-center mb-8 xl:px-72">
        <h1 className="text-3xl font-bold text-gray-900">Music Library</h1>
       <AddSongButton/>
      </div>

      <SongList data={data} />

      {showAddSongModal && <AddSongModal />}
      {showEditSongModal && <EditSongModal searchParams={searchParams}/>}
    </main>
  );
}
