import React from "react";

import { Song } from "../lib/types";
type SongListProps = {
  data: Song[];
};
import SongCard from "./SongCard";
export default function SongList({ data }: SongListProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}
