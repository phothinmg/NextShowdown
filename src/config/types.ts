import type { Metadata } from "next";
import Showdown from "@/showdown";
import { IconName } from "lwe8-icons-react";
export interface Configuration {
  baseUrl?: string;
  siteName?: string;
  meta?: Omit<Metadata, "title">;
  socialLinks?: Array<{
    name: IconName;
    link: string;
  }>;
  showdown?: {
    converterOptions?: Showdown.ConverterOptions;
    flavor?: Showdown.Flavor;
  };
  /**
   * Directory info for markdown files
   */
  markdownDirectory?: {
    /**
     * Main directory of markdown files
     * @default "content"
     *
     * */
    dir?: string;
    /**
     * Name of the file that serve as Home Page
     * @default "content/index.md"
     */
    indexFile?: string;
    /**
     * Sub-directory for pages
     * @default "content/pages"
     */
    pages?: string;
    /**
     * Sub-directory for blog's posts
     * @default "content/posts"
     */
    posts?: string;
  };
}
