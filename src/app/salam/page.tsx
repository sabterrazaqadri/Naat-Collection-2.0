"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "../../sanity/lib/client"; // Adjust the import path based on your project structure

const Salam: React.FC = () => {
  const [songs, setSongs] = useState<{
    slug: any; _id: string; title: string 
}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHamdSongs = async () => {
      try {
        const query = `*[_type == "lyrics" && category->name == "Salam"] {
          _id,
          title,
          slug
        }`;
        const fetchedSongs = await client.fetch(query);
        setSongs(fetchedSongs);
      } catch (error) {
        console.error("Error fetching Hamd songs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHamdSongs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }
  

  return (
    <div className="min-h-screen bg-background p-4 font-urdu text-foreground">
      <h1 className="text-3xl font-bold mb-4 text-center text-shadow-blueGlow text-blue-600">
      سلام کی فہرست
      </h1>
      {songs.length > 0 ? (
        <ul className="space-y-2">
          {songs.map((song) => (
            <li
              key={song._id}
              className="bg-white p-4 rounded-lg md:text-2xl text-lg text-center shadow-md font-semibold border"
            >
              <Link href={`/lyrics/${song.slug.current}`}>
                <h3 className="text-background border-b-2">{song.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">کوئی سلام موجود نہیں ہے۔</p>
      )}
    </div>
  );
};

export default Salam;
