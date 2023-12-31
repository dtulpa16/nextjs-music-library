"use server";
import { revalidatePath } from "next/cache";
import { supabase } from "./supaBaseInit";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
export async function addSong(data: FormData) {
  const {userId} = auth();
  const title = data.get("title");
  const artist = data.get("artist");
  const album = data.get("album");
  const releaseDate = data.get("releaseDate");
  const genre = data.get("genre");
  try {
    await supabase.from("songs").insert([
      {
        title: title,
        artist: artist,
        album: album,
        releaseDate: releaseDate,
        genre: genre,
        userId: userId
      },
    ]);
    revalidatePath("/");
  } catch (er) {
    console.log(er);
  }
  redirect("/");
}
export async function editSong(data: FormData) {
  const id = data.get("id");
  const title = data.get("title");
  const artist = data.get("artist");
  const album = data.get("album");
  const releaseDate = data.get("releaseDate");
  const genre = data.get("genre");
  try {
    const { error } = await supabase
      .from("songs")
      .update({ title, artist, album, releaseDate, genre })
      .eq("id", id);
    revalidatePath("/");
  } catch (er) {
    console.log(er);
  }
  redirect("/");
}
export async function deleteSong(data: FormData) {
  const id = data.get("id");
  try {
    const { error } = await supabase.from("songs").delete().eq("id", id);
    revalidatePath("/");
  } catch (er) {
    console.log(er);
  }
  redirect("/");
}
