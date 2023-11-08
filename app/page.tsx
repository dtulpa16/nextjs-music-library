import { supabase } from "./lib/supaBaseInit";
import AddSongModal from "./components/Modals/AddSongModal";
import SongList from "./components/SongList";
import { Song, SongPageProps } from "./lib/types";
import EditSongModal from "./components/Modals/EditSongModal";
import AddSongButton from "./components/AddSongButton";
import DeleteModal from "./components/Modals/DeleteModal";

const fetchSongs = async () => {
  let { data: songs, error } = await supabase
    .from("songs")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw new Error("An error occurred fetching data");
  }

  return { data: songs as Song[], error: error };
};

export default async function Home({ searchParams }: SongPageProps) {
  const showAddSongModal = searchParams?.add;
  const showEditSongModal = searchParams?.edit;
  const showDeleteModal = searchParams?.delete;
  const { data, error } = await fetchSongs();
  if (error) throw new Error("An error occurred fetching data");
  return (
    <main className="bg-gray-100 p-5 h-screen">
      <div className="flex justify-between items-center mb-8 xl:px-72">
        <h1 className="text-3xl font-bold text-gray-900">Music Library</h1>
        <AddSongButton />
      </div>

      <SongList data={data} />

      {showAddSongModal && <AddSongModal />}
      {showEditSongModal && <EditSongModal searchParams={searchParams} />}
      {showDeleteModal && <DeleteModal id={searchParams?.id || null} />}
    </main>
  );
}
