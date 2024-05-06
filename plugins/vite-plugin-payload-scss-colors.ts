import { writeFile } from "node:fs";

import type { ThemeColor } from "src/types/payload-types";
import 'dotenv/config';

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
  "black",
  "white"
];



export default function payloadColorsSCSS() {
  console.log('processENV', process.env)
  return {
    name: "my-sass-plugin",
    //TODO: add subtle-colors, maybe setup in PayloadCMS
    async options() {
      const prefix = process.env.PAYLOAD_URL || 'http://127.0.0.1:2112';
      const res = await fetch(`${prefix}/api/theme_colors`);
      if (!res.ok) {
        throw new Error("Failed to fetch site options.");
      }
      const data = await res.json();

      let generatedComment =
        "/* This is an auto-generated SCSS file. It gets overwritten from the CMS API. \nDo not update this file. */\n\n";

      let scssVars = "";
      let scssMap = "";
      let customColors = "";
      let customSubtle = "";
      let customBgSubtle = "";

      let customColorsStart = "$custom-colors: (\n";
      let customSubtleStart = "$custom-subtle-colors: (\n";
      let customBgSubtleStart = "$custom-utilities-bg-subtle: (\n";
      let mapMerge = `
$theme-colors: map-merge($theme-colors, $custom-colors);
$theme-colors-bg-subtle: map-merge($theme-colors-bg-subtle, $custom-subtle-colors);
$utilities-bg-subtle: map-merge($utilities-bg-subtle, $custom-utilities-bg-subtle);
`

      data.docs.forEach((item: ThemeColor) => {
        scssVars += `$${item.name}: ${item.color};\n`;
        if(!bsThemeColors.includes(item.name)){
          scssVars += `$${item.name}-bg-subtle: tint-color($${item.name}, 80%);\n`;
          customColors += `'${item.name}': $${item.name},\n`;
          customSubtle += `'${item.name}': $${item.name}-bg-subtle,\n`;
          customBgSubtle += `'${item.name}-subtle': var(--#{$prefix}${item.name}-bg-subtle),\n`;
        }
      });

      if(customColors){
        scssMap += customColorsStart + customColors + ');\n\n';
        scssMap += customSubtleStart + customSubtle + ');\n\n';
        scssMap += customBgSubtleStart + customBgSubtle + ');\n\n';
        scssMap += mapMerge;
      }

      const scssVarsFile = generatedComment + scssVars;
      const scssMapFile = generatedComment + scssMap;

      writeFile("src/styles/_custom_variables.scss", scssVarsFile, (err: any) => {
        if (err) throw err;
        console.log("File has been written");
      });

      writeFile("src/styles/_custom_maps.scss", scssMapFile, (err: any) => {
        if (err) throw err;
        console.log("File has been written");
      });
    },
  };
}
