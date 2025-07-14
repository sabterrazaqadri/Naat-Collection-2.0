"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { FiArrowLeft, FiCopy, FiShare2 } from "react-icons/fi";

const highlight = (text: string, term: string) => {
  if (!term) return text;
  const regex = new RegExp(`(${term})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-accent text-white rounded px-1">{part}</mark>
    ) : (
      part
    )
  );
};

const Lyrics: React.FC = () => {
  const { slug } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [song, setSong] = useState<{ title: string; lyrics: string } | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const searchTerm = searchParams.get("q") || "";

  useEffect(() => {
    const fetchSong = async () => {
      if (slug) {
        try {
          const query = `*[_type == "lyrics" && slug.current == $slug][0] { title, lyrics }`;
          const songData = await client.fetch(query, { slug });
          if (songData) setSong(songData);
        } catch (error) {
          console.error("Error fetching data from Sanity:", error);
        }
      }
    };
    fetchSong();
  }, [slug]);

  const handleCopy = () => {
    if (song) {
      navigator.clipboard.writeText(song.lyrics);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
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
        <div className="w-16 h-16 border-t-4 border-accent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-2 font-urdu text-foreground flex flex-col items-center">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 bg-gradient-to-r from-accent/80 to-accent text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-lg font-semibold backdrop-blur-md border border-accent/30 mb-4 mt-2 self-start"
      >
        <FiArrowLeft /> <span className="text-lg">واپس</span>
      </button>
      <div className="w-full max-w-3xl bg-gradient-to-br from-deepgreen/90 to-black/90 backdrop-blur-xl rounded-3xl border border-accent/30 shadow-2xl p-6 mb-4">
        <h1 className="heading-1 mb-6">
          {song.title || "نامعلوم کلام"}
        </h1>
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 shadow-inner border border-accent/20">
          <div className="text-white text-lg md:text-xl lg:text-2xl whitespace-pre-wrap text-center font-urdu leading-relaxed min-h-[300px] flex items-center justify-center">
            {highlight(song.lyrics || "شاعری دستیاب نہیں ہے۔", searchTerm)}
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-gradient-to-r from-accent/80 to-accent text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-lg font-semibold backdrop-blur-md border border-accent/30"
          >
            <FiCopy /> {isCopied ? "کاپی ہوگئی!" : "کاپی کریں"}
          </button>
          <button
            onClick={shareLyrics}
            className="flex items-center gap-2 bg-gradient-to-r from-deepgreen/80 to-deepgreen text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-lg font-semibold backdrop-blur-md border border-deepgreen/30"
          >
            <FiShare2 /> شیئر کریں
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
