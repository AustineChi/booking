"use client";

import Image from "next/image";
import { Button } from "@/components/form-fields/Button/Button";
import { ThemeContext } from "@/context/ThemeContext";
import { Link } from "@/i18n/navigation";
import { useContext } from "react";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)!;

  return (
    <header className="shadow-lg min-h-[70px] flex items-center z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Premier Inn Logo"
              width={158}
              height={49}
              priority
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/form"
            locale="de"
            className="text-sm font-serif text-purple-800 hover:underline"
            aria-label="View form in German"
          >
            Deutsch
          </Link>
          <Button
            variant="ghost"
            onClick={toggleTheme}
            className="p-2 rounded-full flex items-center"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? "🌙" : "☀️"}
            <span className="ml-4 text-sm font-serif italic text-purple-800">
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header";

export { Header };
