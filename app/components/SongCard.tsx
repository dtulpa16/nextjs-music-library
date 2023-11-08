import React from "react";
import { Song } from "../lib/types";
import EditIcon from "./icons/EditIcon";
import Link from "next/link";
import DeleteIcon from "./icons/DeleteIcon";

const SongCard: React.FC<{ song: Song }> = ({ song }) => (
  <div
    key={song.id}
    className="bg-white shadow-lg rounded-lg p-4 flex flex-row relative"
  >
    <div className="flex-1">
      <h2 className="text-xl font-semibold text-gray-800">{song.title}</h2>
      <p className="text-gray-600">Artist: {song.artist}</p>
      <p className="text-gray-600">Album: {song.album}</p>
      <p className="text-gray-600">Genre: {song.genre}</p>
      <p className="text-gray-600">Release Date: {song.releaseDate}</p>
    </div>
    <div className="absolute top-0 right-0 p-4 flex flex-col gap-1">
      <Link href={`/?delete=true&id=${song.id}`}>
        <DeleteIcon />
      </Link>
      <Link
        href={`/?edit=true&id=${song.id}&title=${song.title}&artist=${song.artist}&album=${song.album}&releaseDate=${song.releaseDate}&genre=${song.genre}`}
      >
        <EditIcon />
      </Link>
    </div>
  </div>
);
export default SongCard;
