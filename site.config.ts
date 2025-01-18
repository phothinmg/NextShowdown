import { Configuration } from "@/config/types";
import showdownShiki from "@/shiki-ext";
//
export default {
  siteName: "NextShowdown",
  meta: {},
  showdown: {
    converterOptions: {
      emoji: true,
      parseImgDimensions: true,
      noHeaderId: true,
      openLinksInNewWindow: true,
      headerLevelStart: 2,
      extensions: [
        showdownShiki({
          themes: {
            darkMode: true,
            theme: { light: "github-light", dark: "github-dark" },
          },
        }),
      ],
    },
    flavor: "github",
  },
  socialLinks: [
    {
      name: "github",
      link: "https://github.com/",
    },
  ],
} satisfies Configuration;
