import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/form": {
      en: "/form",
      de: "/form",
    },
  },
});
