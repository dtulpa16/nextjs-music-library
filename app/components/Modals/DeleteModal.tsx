import { deleteSong, editSong } from "@/app/lib/actions";
import { title } from "process";
import React from "react";
import InputField from "../InputField";
import CloseIcon from "../icons/CloseToHomeIcon";
import Modal from "./ModalLayout";
import Link from "next/link";

export default function DeleteModal({ id }: any) {
  return (
    <Modal>
      <h2 className="text-xl font-bold mb-4">Delete Song</h2>
      <p>
        Are you sure you want to delete this song? This action cannot be undone.
      </p>
      <div className="flex justify-end space-x-4">
        <Link
          href="/"
          className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Cancel
        </Link>
        <form action={deleteSong}>
          <input type="hidden" name="id" value={id} />
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            type="submit"
          >
            Delete
          </button>
        </form>
      </div>
    </Modal>
  );
}
