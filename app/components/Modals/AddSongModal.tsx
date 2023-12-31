import Modal from "./ModalLayout";
import React from "react";
import { addSong } from "../../lib/actions";
import InputField from "../InputField";
import CloseIcon from "../icons/CloseToHomeIcon";
export default function AddSongModal() {
  return (
    <Modal>
      <CloseIcon />
      <h2 className="text-xl font-bold mb-4">Add a New Song</h2>
      <form action={addSong} className="space-y-4">
        <InputField label="Title" id="title" />
        <InputField label="Artist" id="artist" />
        <InputField label="Album" id="album" />
        <InputField label="Genre" id="genre" />
        <InputField label="Release Date" id="releaseDate" type="date" />
        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Song
          </button>
        </div>
      </form>
    </Modal>
  );
}
