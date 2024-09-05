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
      const imports = `@import "./custom_color_variables";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/variables-dark";
@import "@bootstrap/scss/maps";\n\n
`
      let generatedComment = '/* This is an auto-generated SCSS file. It gets overwritten from the CMS API. \nDo not update this file. */\n\n';

      const additionalMapUtilities = `
// Additional utility maps, hopefully this can be streamlined at some point.
$theme-colors-rgb: map-loop($theme-colors, to-rgb, "$value");
$utilities-colors: $theme-colors-rgb;
$utilities-text: map-merge( $utilities-colors, ("black": to-rgb($black),"white": to-rgb($white),"body": to-rgb($body-color)));
$utilities-text-colors: map-loop($utilities-text, rgba-css-var, "$key", "text");
$utilities-bg: map-merge(
$utilities-colors, ( "black": to-rgb($black), "white": to-rgb($white), "body": to-rgb($body-bg)));
$utilities-bg-colors: map-loop($utilities-bg, rgba-css-var, "$key", "bg");
$utilities-border: map-merge( $utilities-colors, ( "black": to-rgb($black),"white": to-rgb($white)));
$utilities-border-colors: map-loop($utilities-border, rgba-css-var, "$key", "border");
      `
      let scssVars = "";
      let scssMap = "";
      let customColors = "";
      let customBgSubtle = "";
      let customUtilityBgSubtle = "";
      let customText = "";
      let customUtilityTextEmphasis = "";
      let customBorderSubtle = "";
      let customUtilityBorderSubtle = "";

      let customColorsStart = "$custom-colors: (\n";
      let customBGSubtleStart = "$custom-subtle-colors: (\n";
      let customUtilityBgSubtleStart = "$custom-utilities-bg-subtle: (\n";
      let customTextStart = "$custom-text-emphasis: (\n";
      let customUtilityTextEmphasisStart = "$custom-utitity-text-emphasis: (\n";
      let customBorderSubtleStart = "$custom-border-subtle: (\n";
      let customUtilityBorderSubtleStart = "$custom-utility-border-subtle: (\n";


      let mapMerge = `
$theme-colors: map-merge($theme-colors, $custom-colors);
$theme-colors-bg-subtle: map-merge($theme-colors-bg-subtle, $custom-subtle-colors);
$utilities-bg-subtle: map-merge($utilities-bg-subtle, $custom-utilities-bg-subtle);
$theme-colors-text: map-merge($theme-colors-text, $custom-text-emphasis);
$utilities-text-emphasis-colors: map-merge($utilities-text-emphasis-colors, $custom-utitity-text-emphasis);
$theme-colors-border-subtle: map-merge($theme-colors-border-subtle, $custom-border-subtle);
$utilities-border-subtle: map-merge($utilities-border-subtle, $custom-utility-border-subtle);
`

      data.docs.forEach((item: ThemeColor) => {
        scssVars += `$${item.name}: ${item.color};\n`;
        if(!bsThemeColors.includes(item.name)){
          scssVars += `$${item.name}-bg-subtle: tint-color($${item.name}, 80%);\n`;
          scssVars += `$${item.name}-text-emphasis: shade-color($${item.name}, 60%);\n`;
          scssVars += `$${item.name}-border-subtle: tint-color($${item.name}, 60%);\n`;
          customColors += `'${item.name}': $${item.name},\n`;
          customBgSubtle += `'${item.name}': $${item.name}-bg-subtle,\n`;
          customUtilityBgSubtle += `'${item.name}-subtle': var(--#{$prefix}${item.name}-bg-subtle),\n`;
          customText += `'${item.name}': $${item.name}-text-emphasis, \n`;
          customUtilityTextEmphasis += `'${item.name}-emphasis': var(--#{$prefix}${item.name}-text-emphasis),\n`;
          customBorderSubtle += `'${item.name}': $${item.name}-border-subtle,\n`;
          customUtilityBorderSubtle += `'${item.name}-subtle': var(--#{$prefix}${item.name}--border-subtle),\n`;

        }
      });

      if(customColors){
        scssMap += customColorsStart + customColors + ');\n\n';
        scssMap += customBGSubtleStart + customBgSubtle + ');\n\n';
        scssMap += customUtilityBgSubtleStart + customUtilityBgSubtle + ');\n\n';
        scssMap += customTextStart + customText + ');\n\n';
        scssMap += customUtilityTextEmphasisStart + customUtilityTextEmphasis + ');\n\n';
        scssMap += customBorderSubtleStart + customBorderSubtle + ');\n\n';
        scssMap += customUtilityBorderSubtleStart + customUtilityBorderSubtle + ');\n\n';
  
        scssMap += mapMerge;
      }

      const scssVarsFile = generatedComment + scssVars;
      const scssMapFile = generatedComment + imports + scssMap + additionalMapUtilities;

      writeFile("src/styles/_custom_color_variables.scss", scssVarsFile, (err: any) => {
        if (err) throw err;
        console.log("File has been written");
      });

      writeFile("src/styles/_custom_color_maps.scss", scssMapFile, (err: any) => {
        if (err) throw err;
        console.log("File has been written");
      });
    },
  };
}
