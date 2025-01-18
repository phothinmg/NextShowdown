import * as shiki from "shiki";
type Themes = {
    darkMode: true;
    theme?: {
        light: shiki.BundledTheme;
        dark: shiki.BundledTheme;
    };
} | {
    darkMode: false;
    theme?: shiki.BundledTheme;
};
type Options = {
    themes?: Themes;
};
declare function showdownShiki(opts?: Options): {
    type: string;
    filter: (text: any, converter: any, options: any) => string;
}[];
export default showdownShiki;
