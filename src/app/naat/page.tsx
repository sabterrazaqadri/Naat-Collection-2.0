/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { FiSearch } from "react-icons/fi";

const Naat: React.FC = () => {
  const [songs, setSongs] = useState<{ slug: any; _id: string; title: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const query = `*[_type == "lyrics" && category->name == "Naat"] { _id, title, slug }`;
        const fetchedSongs = await client.fetch(query);
        setSongs(fetchedSongs);
      } catch (error) {
        console.error("Error fetching Naat songs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  }, []);

  const filtered = songs.filter(song => song.title.toLowerCase().includes(search.toLowerCase())).sort((a, b) => a.title.localeCompare(b.title));

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-t-4 border-accent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-2 font-urdu text-foreground">
      <div className="w-full max-w-sm mb-6">
        <div className="bg-card backdrop-blur-lg rounded-xl shadow-md p-2 flex items-center gap-2">
          <FiSearch className="text-accent text-lg" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="تلاش کریں..."
            className="flex-1 bg-transparent outline-none text-base py-1 px-2 text-white placeholder-white/70 focus:placeholder-white"
          />
        </div>
      </div>
      <h1 className="heading-1">نعت کی فہرست</h1>
      {filtered.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map(song => (
            <li key={song._id} className="bg-gradient-to-br from-deepgreen/80 to-black/80 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-accent/20 hover:scale-105 transition-transform">
              <Link href={`/lyrics/${song.slug.current}`} className="block text-xl font-semibold text-center text-white hover:text-accent transition-colors">
                {song.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-8">کوئی نعت موجود نہیں ہے۔</p>
      )}
    </div>
  );
};

export default Naat;
