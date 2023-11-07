import Link from 'next/link'
import React from 'react'

export default function AddSongButton() {
  return (
    <Link
    href={"/?add=true"}
    className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
  >
    Add Song
  </Link>
  )
}
