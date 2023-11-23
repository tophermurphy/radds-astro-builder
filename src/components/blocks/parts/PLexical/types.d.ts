export type ElementTypes = "heading" | "paragraph" | "upload" | "quote";
export type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type Format = "" | "left" | "right" | "center";
export interface BaseNode {
  children: SerializedLexicalNode[];
  indent: number;
  direction: "ltr" | "rtl";
  type: ElementTypes;
  tag?: Headings;
  value?: PLexicalMedia["content"]["value"];
  format: Format;
}
export interface HeadingNode extends BaseNode {
  tag: Headings;
}
export interface MediaNode extends BaseNode {
  value: PLexicalMedia["content"]["value"];
}
export type ElementNode = BaseNode & HeadingNode & MediaNode;

export interface PLexical {
  [k: string]: unknown;
}

export type LexicalEditor = {
  root: {
    type: "root";
    format: string;
    indent: number;
    version: number;
    children: ElementNode[];
  };
};

export type SerializedLexicalNode = {
    children?: SerializedLexicalNode[];
    direction: string;
    format: number;
    indent?: string | number;
    type: string;
    version: number;
    style?: string;
    mode?: string;
    text?: string;
    [other: string]: any;
  };
  
  export interface PLexicalParse {
    content: SerializedLexicalNode[];
  }
  
  
  export interface NodeProps {
    format: number;
    text?: string;
    type: string;
    style: string;
    fields?: {
      [key: string]: any;
    };
    children?: NodeProps[];
  }
  
  export type Node = {
    format: number;
    text?: string;
    type: string;
    fields?: {
      [key: string]: any;
    };
  };
  