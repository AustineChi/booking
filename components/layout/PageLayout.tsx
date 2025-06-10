"use client";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  translations: {
    BOOKING_DETAILS: string;
    CONTACT_DETAILS: string;
    ROOM_REQUIREMENTS: string;
    [key: string]: string;
  };
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
