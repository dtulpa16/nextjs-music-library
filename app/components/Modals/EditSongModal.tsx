import React from "react";
import { Song } from "../../lib/types";
import { editSong } from "../../lib/actions";
import InputField from "../InputField";
import CloseIcon from "../icons/CloseToHomeIcon";
import Modal from "./ModalLayout";

function getSongDetails(searchParams: any) {
  console.log(searchParams);
  const params = {
    id: searchParams?.id || "",
    title: searchParams.title || "",
    artist: searchParams.artist || "",
    album: searchParams.album || "",
    releaseDate: searchParams.releaseDate || "",
    genre: searchParams.genre || "",
  };
  return params;
}
export default async function EditSongModal({ searchParams }: any) {
  console.log(searchParams);
  const { id, title, artist, album, releaseDate, genre }: Song =
    getSongDetails(searchParams);
  return (
    <Modal>
      <CloseIcon />
      <h2 className="text-xl font-bold mb-4">Edit Song</h2>
      <form action={editSong} className="space-y-4">
        <input name="id" value={id} className=" hidden" />
        <InputField label="Title" id="title" defaultValue={title} />
        <InputField label="Artist" id="artist" defaultValue={artist} />
        <InputField label="Album" id="album" defaultValue={album} />
        <InputField label="Genre" id="genre" defaultValue={genre} />
        <InputField
          label="Release Date"
          id="releaseDate"
          type="date"
          defaultValue={releaseDate}
        />
        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Update Song
          </button>
        </div>
      </form>
    </Modal>
  );
}
