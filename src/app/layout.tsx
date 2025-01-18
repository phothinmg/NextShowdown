import type { Metadata } from "next";
import { meta } from "@/config";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  ...meta,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-base-100 text-base-content">
        <ThemeProvider>
          <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <NavBar />
            <main className="mb-auto">{children}</main>
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
