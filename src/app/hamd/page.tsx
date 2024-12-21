"use client";
import Link from "next/link";

const hamd: React.FC = () => {
  const songs = [
    { id: 1, name: "تیری شان عم نوالہ اللہ جل جلالہ" },
    { id: 2, name: "راحت افزا عجب ہے ذکر ترا" },
    { id: 3, name: "حاضر ہیں حاضر ہیں حاضر ہیں ہم" },
    { id: 4, name: "يا رب العلمين ﷲ ہو ﷲ" },
    { id: 5, name: "وہ تنہا کون ہے اﷲ ہو ﷲ" },
    { id: 6, name: "اللہ نے بلایا ہے اللہ کے گھر میں ہوں" },
    { id: 7, name: "کعبہ دکھا دے مولا" },
    { id: 8, name: "مرے مولا میں حاضر ہوں" }
  ];

  return (
    <div className="min-h-screen bg-background p-4 font-urdu text-foreground">
      <h1 className="text-3xl font-bold mb-4 text-center text-shadow-blueGlow text-blue-600">حمد کی فہرست</h1>
      <ul className="space-y-2">
        {songs.map((song) => (
          <li key={song.id} className="bg-white p-4 rounded-lg md:text-2xl text-lg text-center shadow-md font-semibold border ">
            <Link href={`/lyrics/${song.id}`}>
             <h3 className="text-background border-b-2">{song.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default hamd;
