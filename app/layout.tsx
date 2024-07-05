import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary bg-opacity-50`}>
        <main className="flex h-lvh p-5">
          <nav className="w-1/6 min-h-full">
            <Sidebar />
          </nav>
          <section className="w-5/6 bg-white bg-opacity-50 rounded-lg shadow-md">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
