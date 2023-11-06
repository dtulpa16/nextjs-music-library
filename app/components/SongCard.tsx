import React from 'react';
import { Song } from '../lib/types';

const SongCard: React.FC<{ song: Song }> = ({ song }) => (
  <div key={song.id} className="bg-white shadow-lg rounded-lg p-4">
    <h2 className="text-xl font-semibold text-gray-800">{song.title}</h2>
    <p className="text-gray-600">Artist: {song.artist}</p>
    <p className="text-gray-600">Album: {song.album}</p>
    <p className="text-gray-600">Genre: {song.genre}</p>
    <p className="text-gray-600">Release Date: {song.releaseDate}</p>
  </div>
);
export default SongCard