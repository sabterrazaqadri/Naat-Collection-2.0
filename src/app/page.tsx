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
    { name: "حمد", href: "/hamd", bgImage: "url('hamd.jpg')" },
    { name: "نعت", href: "/naat", bgImage: "url('naat.jpg')" },
    { name: "منقبت", href: "/1", bgImage: "url('manqabat.jpg')" },
    { name: "سلام", href: "/2", bgImage: "url('salam.jpg')" },
    { name: "مناجات", href: "/3", bgImage: "url('dua.jpg')" },
    { name: "متفرقات", href: "/miscellaneous", bgImage: "url('misc.jpg')" },
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
      <header className="flex justify-between items-center py-4">
        {/* Search Input / Icon */}
        <div className="flex items-center gap-2">
          {/* Show input on larger screens or if toggled */}
          {(showSearch || isWideScreen) && (
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="تلاش کریں..."
              className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-md shadow-md focus:outline-none"
            />
          )}
          {/* Show search icon for smaller screens */}
          <button
            className="sm:hidden bg-white text-black p-2 rounded-md shadow-md"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Toggle Search"
          >
            <FiSearch />
          </button>
        </div>

        {/* App Title */}
        <h1 className="text-3xl font-bold lg:pr-44 lg:text-7xl">نعتیہ کلام</h1>

        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-white text-black px-4 py-2 rounded-md shadow-md"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </header>

      {/* Menu Navigation */}
      {menuOpen && (
        <nav className="bg-opacity-50 bg-black p-4 rounded-md text-white">
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" className="block">
                ہمارے بارے میں
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="block">
                رابطہ کریں
              </Link>
            </li>
            <li>
              <Link href="/share" className="block">
                ایپ شیئر کریں
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Main Content */}
        <main className="mt-16">
          <h2 className="text-xl mb-8 font-semibold text-center text-shadow-blueGlow text-blue-600 underline underline-offset-4 lg:text-3xl">
            موضوعات
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {filteredTopics.length > 0 ? (
              filteredTopics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="p-4 rounded-md shadow-md text-center bg-cover bg-center text-2xl lg:h-60 lg:p-44 lg:text-6xl"
                  style={{ backgroundImage: topic.bgImage }}
                >
                  <div className="bg-opacity-50 bg-black font-bold text-3xl text-white p-4 rounded-md">
                    {topic.name}
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center col-span-2">کوئی نتیجہ نہیں ملا۔</p>
            )}
          </div>
        </main>
      </div>
  );
};

export default HomePage;
