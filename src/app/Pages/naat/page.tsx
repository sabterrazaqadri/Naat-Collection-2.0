"use client";
import Link from "next/link";

const hamd: React.FC = () => {
  const songs = [
    { id: 101, name: "الصُّبْحُ بدَا مِنْ طَلْعَتِہ" },
    { id: 102, name: "چوں ماہ در ارض و سماں" },
    { id: 103, name: "رفعت عرش سے بھی رتبہ ہے بالا تیرا" },
    { id: 104, name: "میرے آقا کی ہے رحمت" },
    { id: 105, name: "محمد مصطفےٰ ﷺ صلِ علیٰ تشریف لے آئے" },
    { id: 106, name: "" },
    { id: 107, name: "" },
    { id: 108, name: "" },
    { id: 109, name: "" },
    { id: 110, name: "" },
    { id: 111, name: "" },
    { id: 112, name: "" },
    { id: 113, name: "" },
    { id: 114, name: "" },
    { id: 115, name: "" },
    { id: 116, name: "" },
    { id: 117, name: "" },
    { id: 118, name: "" },
    { id: 1, name: "" },
  ];

  return (
    <div className="min-h-screen bg-background p-4 font-urdu text-foreground">
      <h1 className="text-2xl font-bold mb-4 text-center text-shadow-blueGlow text-blue-600">نعت کی فہرست</h1>
      <ul className="space-y-2">
        {songs.map((song) => (
          <li key={song.id} className="bg-white p-4 rounded-lg md:text-2xl text-center shadow-md font-semibold border ">
            <Link href={`/pages/lyrics/${song.id}`}>
             <h3 className="text-background border-b-2">{song.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default hamd;
