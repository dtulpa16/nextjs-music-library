import { supabase } from "./lib/supaBaseInit";
import AddSongModal from "./components/Modals/AddSongModal";
import SongList from "./components/SongList";
import { Song, SongPageProps } from "./lib/types";
import EditSongModal from "./components/Modals/EditSongModal";
import DeleteModal from "./components/Modals/DeleteModal";
import Navbar from "./components/Navbar";

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
    <main>
      <SongList data={data} />

      {showAddSongModal && <AddSongModal />}
      {showEditSongModal && <EditSongModal searchParams={searchParams} />}
      {showDeleteModal && <DeleteModal id={searchParams?.id || null} />}
    </main>
  );
}
