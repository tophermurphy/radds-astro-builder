/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export type ListPart =
  | {
      title: string;
      textEditor?:
        | {
            [k: string]: unknown;
          }[]
        | null;
      id?: string | null;
    }[]
  | null;

export interface Config {
  collections: {
    pages: Page;
    media: Media;
    theme_colors: ThemeColor;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    siteOptions: SiteOption;
  };
}
export interface Page {
  id: string;
  title?: string | null;
  sections?: (SectionSection | SectionRow | SectionColumns | SectionCarousel)[] | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface SectionSection {
  blocks?:
    | (
        | BlockHeading
        | BlockParagraph
        | BlockAccordion
        | BlockCard
        | BlockButtons
        | BlockTextEditor
        | BlockDivider
        | BlockImage
        | BlockQuote
        | BlockTabs
      )[]
    | null;
  section_options?: SectionOptions;
  id?: string | null;
  blockName?: string | null;
  blockType: 'section';
}
export interface BlockHeading {
  size?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') | null;
  heading?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'heading';
}
export interface BlockParagraph {
  paragraph?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'paragraph';
}
export interface BlockAccordion {
  title?: string | null;
  columns?: ('1' | '2' | '3' | '4') | null;
  list?: ListPart;
  id?: string | null;
  blockName?: string | null;
  blockType: 'accordion';
}
export interface BlockCard {
  title?: string | null;
  subtitle?: string | null;
  image?: string | Media | null;
  textEditor?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  card_color?: (string | null) | ThemeColor;
  id?: string | null;
  blockName?: string | null;
  blockType: 'card';
}
export interface Media {
  id: string;
  alt?: string | null;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    small?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    medium?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface ThemeColor {
  id: string;
  name: string;
  color?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface BlockButtons {
  size?: ('sm' | 'md' | 'lg') | null;
  justify?: ('flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-evenly') | null;
  buttons: {
    button: ButtonPart;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'buttons';
}
export interface ButtonPart {
  label: string;
  link_type?: ('page' | 'url') | null;
  newTab?: boolean | null;
  page_link?: (string | null) | Page;
  url_link?: string | null;
  icon?: string | null;
  style?: ('primary' | 'secondary') | null;
  color?: (string | null) | ThemeColor;
}
export interface BlockTextEditor {
  textEditor?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'textEditor';
}
export interface BlockDivider {
  height: number;
  color?: (string | null) | ThemeColor;
  id?: string | null;
  blockName?: string | null;
  blockType: 'divider';
}
export interface BlockImage {
  justify: 'left' | 'center' | 'right';
  align: 'flex-start' | 'center' | 'flex-end';
  fill?: boolean | null;
  image: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'image';
}
export interface BlockQuote {
  text: string;
  source?: string | null;
  color?: (string | null) | ThemeColor;
  id?: string | null;
  blockName?: string | null;
  blockType: 'quote';
}
export interface BlockTabs {
  list?: ListPart;
  id?: string | null;
  blockName?: string | null;
  blockType: 'tabs';
}
export interface SectionOptions {
  width?: ('container' | 'container-sm' | 'container-full' | 'container-bleed') | null;
  padding?: ('top_bottom' | 'top' | 'bottom' | 'none') | null;
  bg_color?: (string | null) | ThemeColor;
  variant?: string | null;
  anchor?: string | null;
}
export interface SectionRow {
  columns?: ('1' | '2') | null;
  layout?: ('6_6' | '5_7' | '7_5' | '4_8' | '8_4' | '3_9' | '9_3') | null;
  col_1_blocks?:
    | (
        | BlockHeading
        | BlockParagraph
        | BlockAccordion
        | BlockCard
        | BlockButtons
        | BlockTextEditor
        | BlockDivider
        | BlockImage
        | BlockQuote
      )[]
    | null;
  col_2_blocks?:
    | (
        | BlockHeading
        | BlockParagraph
        | BlockAccordion
        | BlockCard
        | BlockButtons
        | BlockTextEditor
        | BlockDivider
        | BlockImage
        | BlockQuote
      )[]
    | null;
  section_options?: SectionOptions;
  id?: string | null;
  blockName?: string | null;
  blockType: 'row';
}
export interface SectionColumns {
  blocks?:
    | (
        | BlockHeading
        | BlockParagraph
        | BlockAccordion
        | BlockCard
        | BlockButtons
        | BlockTextEditor
        | BlockDivider
        | BlockImage
      )[]
    | null;
  column_options?: ColumnOptions;
  section_options?: SectionOptions;
  id?: string | null;
  blockName?: string | null;
  blockType: 'columns';
}
export interface ColumnOptions {
  columns?: ('2' | '3' | '4' | '5' | '6') | null;
  justify?: ('flex-start' | 'center' | 'flex-end' | 'stretch') | null;
}
export interface SectionCarousel {
  blocks?: BlockImage[] | null;
  section_options?: SectionOptions;
  id?: string | null;
  blockName?: string | null;
  blockType: 'carousel';
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface SiteOption {
  id: string;
  data: {
    org_name: string;
    title: string;
    description: string;
    favicon?: string | Media | null;
    meta_image?: string | Media | null;
    host_name?: string | null;
    ga_id?: string | null;
    gtm_id?: string | null;
  };
  header?: {
    logo?: string | Media | null;
    nav?:
      | {
          page?: (string | null) | Page;
          label?: string | null;
          has_sublinks?: boolean | null;
          sublinks?:
            | {
                page: string | Page;
                label?: string | null;
                id?: string | null;
              }[]
            | null;
          id?: string | null;
        }[]
      | null;
  };
  footer?: {
    logo?: string | Media | null;
    copywrite_year?: string | null;
    colophon?: string | null;
    footer_nav?: ('none' | 'main_nav' | 'site_map' | 'custom') | null;
    footer_links?:
      | {
          label: string;
          link_type?: ('page' | 'url') | null;
          newTab?: boolean | null;
          page_link?: (string | null) | Page;
          url_link?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  contact?: {
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    address_street?: string | null;
    address_street_2?: string | null;
    address_city?: string | null;
    address_state?: string | null;
    zip_code?: string | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}