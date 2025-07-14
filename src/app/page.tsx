"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi"; // Search Icon from React Icons

const HomePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);

  const topics = [
    { name: "حمد", href: "/hamd" },
    { name: "نعت", href: "/naat" },
    { name: "منقبت", href: "/manqabat" },
    { name: "سلام", href: "/salam" },
    { name: "مناجات", href: "/munajaat" },
    { name: "متفرقات", href: "/miscellaneous" },
  ];

  const filteredTopics = topics.filter((topic) =>
    topic.name.includes(searchTerm)
  );

  // Update `isWideScreen` on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 640);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 text-foreground font-urdu">
      <main className="flex flex-col items-center justify-center mt-8 w-full">
        <div className="w-full max-w-sm mb-6">
          <div className="bg-card backdrop-blur-lg rounded-xl shadow-md p-2 flex items-center gap-2">
            <FiSearch className="text-accent text-lg" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="تلاش کریں..."
              className="flex-1 bg-transparent outline-none text-base py-1 px-2 text-white placeholder-white/70 focus:placeholder-white"
            />
          </div>
        </div>
        <h1 className="heading-1 mb-8">موضوعات</h1>
        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-deepgreen/80 to-black/80 backdrop-blur-lg border border-accent/20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-32 sm:h-40 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-white text-3xl sm:text-4xl font-calligraphic font-bold tracking-wide drop-shadow-lg group-hover:text-accent transition-colors duration-300">
                    {topic.name}
                  </h3>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center col-span-2 text-lg">کوئی نتیجہ نہیں ملا۔</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
