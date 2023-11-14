import { writeFile } from "node:fs";

import type { ThemeColor } from "src/types/payload-types";

const bsThemeColors = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark",
];

export default function mySassplugin() {
  return {
    name: "my-sass-plugin",

    async options() {
      const res = await fetch(`http://127.0.0.1:2112/api/theme_colors`);
      if (!res.ok) {
        throw new Error("Failed to fetch site options.");
      }

      const data = await res.json();
      let scssColors = "";

      let scssString =
        "/* This is an auto-generated SCSS file. It gets overwritten from the CMS API. \nDo not update this file. */\n\n";
      const importString = "@import '@bootstrap/scss/_variables.scss';\n\n";
      const mapStart = "$custom-colors: ( \n";
      let mapString = "";
      const mapEnd =
        ");\n\n$theme-colors: map-merge($theme-colors, $custom-colors);\n";

      data.docs.forEach((item: ThemeColor) => {
        scssColors += `$${item.name}: ${item.color};\n`;
        if (!bsThemeColors.includes(item.name)) {
          mapString += `"${item.name}": ${item.color},\n`;
        }
      });

      if (mapString) {
        scssString +=
          importString + scssColors + "\n" + mapStart + mapString + mapEnd;
      } else {
        scssString += scssColors;
      }

      writeFile("src/styles/_colors.scss", scssString, (err: any) => {
        if (err) throw err;
        console.log("File has been written");
      });
    },
  };
}
