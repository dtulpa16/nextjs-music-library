import React from 'react'
import Link from 'next/link'
import { Song } from '../lib/types'
type SongListProps = {
    data: Song[]
}
export default function SongList({data}:SongListProps) {
  return (
    <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((song) => (
            <div key={song.id} className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-800">{song.title}</h2>
              <p className="text-gray-600">Artist: {song.artist}</p>
              <p className="text-gray-600">Album: {song.album}</p>
              <p className="text-gray-600">Genre: {song.genre}</p>
              <p className="text-gray-600">Release Date: {song.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>
  )
}
