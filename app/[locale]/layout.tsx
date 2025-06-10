import { notFound } from "next/navigation";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/context/ThemeContext";

import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata({ params }: Omit<Props, "children">) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  console.log(locale, "locale");

  return {
    title: t("PAGE_TITLE"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className="h-full" data-theme="light">
      <body className={`${inter.className} flex h-full flex-col`}>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={{}}>
            {children}
            <ToastContainer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
