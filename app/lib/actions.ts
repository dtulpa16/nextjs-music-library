"use server"
import { revalidatePath } from "next/cache"
import { supabase } from "../api"
import { redirect } from "next/navigation"
export async function addSong(data:FormData){
    const title = data.get("title")
    const artist = data.get("artist")
    const album = data.get("album")
    const releaseDate = data.get("releaseDate")
    const genre = data.get("genre")
    try{
        await supabase
        .from('songs')
        .insert([
          {
            title: title,
            artist: artist,
            album: album,
            releaseDate: releaseDate,
            genre:genre
          }
        ])
        revalidatePath("/")
    }catch(er){
        console.log(er)
    }
    redirect("/")
}