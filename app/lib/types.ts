export type Song = {
    id:string,
    title:string,
    album: string,
    artist: string,
    genre: string,
    releaseDate: string
}
export type SongPageProps = {
    searchParams: Record<string, string> | null | undefined;
  };