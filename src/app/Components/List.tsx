import Link from "next/link";

const List: React.FC = () => {
  const songs = [
    { id: 1, name: "گانا نمبر 1" },
    { id: 2, name: "گانا نمبر 2" },
    { id: 3, name: "گانا نمبر 3" },
  ];

  return (
    <div className="min-h-screen bg-background p-4 font-urdu text-foreground">
      <h1 className="text-2xl font-bold mb-4">گانے کی فہرست</h1>
      <ul className="space-y-2">
        {songs.map((song) => (
          <li key={song.id} className="bg-foreground p-4 rounded-md shadow-md">
            <Link href={`/lyrics/${song.id}`} className="text-background">
              {song.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
