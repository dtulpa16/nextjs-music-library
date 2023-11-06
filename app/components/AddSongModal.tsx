import Link from "next/link";
import React from "react";

export default function AddSongModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      {/* Modal content */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <Link href="/" className="text-black absolute top-4 right-4 text-5xl">
          &times;
        </Link>
        <h2 className="text-xl font-bold mb-4">Add a New Song</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="artist"
              className="text-sm font-medium text-gray-700"
            >
              Artist
            </label>
            <input
              type="text"
              id="artist"
              name="artist"
              required
              className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="album"
              className="text-sm font-medium text-gray-700"
            >
              Album
            </label>
            <input
              type="text"
              id="album"
              name="album"
              required
              className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="genre"
              className="text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              required
              className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="releaseDate"
              className="text-sm font-medium text-gray-700"
            >
              Release Date
            </label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              required
              className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Song
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
