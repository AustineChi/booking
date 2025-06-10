"use client";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[--color-background] text-[--color-text]">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

PageLayout.displayName = "PageLayout";

export { PageLayout };
