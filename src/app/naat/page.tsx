"use client";
import Link from "next/link";

const hamd: React.FC = () => {
  const songs = [
    { id: 101, name: "الصُّبْحُ بدَا مِنْ طَلْعَتِہ" },
    { id: 102, name: "چوں ماہ در ارض و سماں" },
    { id: 103, name: "رفعت عرش سے بھی رتبہ ہے بالا تیرا" },
    { id: 104, name: "میرے آقا کی ہے رحمت" },
    { id: 105, name: "محمد مصطفےٰ ﷺ صلِ علیٰ تشریف لے آئے" },
    { id: 106, name: "تمہاری یاد سے دل کو ہیں راحتیں کیا کیا" },
    { id: 107, name: "حسن یوسف اور طہ کا جلوہ اور ہے" },
    { id: 108, name: "مصطفی کا خدا اور خود مصطفی" },
    { id: 109, name: "میرے لفظوں میں شمس الضحیٰ" },
    { id: 110, name: "مدينے بلانا ہمیں جان عالم" },
    { id: 111, name: "میں کہ بے وقعت و بے مایا ہوں" },
    { id: 112, name: "میں تو خود ان کےدر کا گدا ہوں" },
    { id: 113, name: "اوج پانا میرے حضور کا ہے" },
    { id: 114, name: "تم نور ہو میں اک ذرا ہوں" },
    { id: 115, name: "روک لیتی ہے آپ کی نسبت" },
    
  ];

  return (
    <div className="min-h-screen bg-background p-4 font-urdu text-foreground">
      <h1 className="text-3xl font-bold mb-4 text-center text-shadow-blueGlow text-blue-600">نعت کی فہرست</h1>
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
