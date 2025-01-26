"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Adjust this import based on your project structure

const Lyrics: React.FC = () => {
  const { slug } = useParams();  // Get the slug parameter from the URL
  const [song, setSong] = useState<{ title: string; lyrics: string } | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Fetch the song data based on the slug
  useEffect(() => {
    const fetchSong = async () => {
      if (slug) {
        console.log("Fetching song for slug:", slug); // Log slug for debugging
        try {
          // Query the song data from Sanity using the slug
          const query = `*[_type == "lyrics" && slug.current == $slug][0] {
            title,
            lyrics
          }`;
          const songData = await client.fetch(query, { slug });

          if (songData) {
            setSong(songData);
          } else {
            console.error("No data found for this slug");
          }
        } catch (error) {
          console.error("Error fetching data from Sanity:", error);
        }
      }
    };

    fetchSong();
  }, [slug]);

  // Handle copy to clipboard
  const handleCopy = () => {
    if (song) {
      navigator.clipboard.writeText(song.lyrics);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset copy status after 2 seconds
    }
  };

  const shareLyrics = async () => {
    if (navigator.share && song?.lyrics) {
      try {
        await navigator.share({
          title: song.title,
          text: song.lyrics,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Sharing failed", error);
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  if (!song) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 font-urdu text-foreground">
      <div className="bg-white w-full h-auto rounded-lg border mb-4 shadow-lg">
        <h1 className="text-2xl text-center text-shadow-blueGlow text-blue-700 mt-2 underline underline-offset-8 font-bold mb-4">
          {song.title || "نامعلوم کلام"}
        </h1>
      </div>
      <div className="bg-foreground text-background p-4 rounded-md shadow-md bg-white md:text-2xl text-lg relative">
        <pre className="font-urdu whitespace-pre-wrap text-center">
          {song.lyrics || "شاعری دستیاب نہیں ہے۔"}
        </pre>
        <div className="mt-10 flex space-x-4 justify-center">
          <button
            onClick={handleCopy}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
          >
            {isCopied ? "کاپی ہوگئی!" : "کاپی کریں"}
          </button>

          {/* Share Button */}
          <button
            onClick={shareLyrics}
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600"
          >
            شیئر کریں
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
