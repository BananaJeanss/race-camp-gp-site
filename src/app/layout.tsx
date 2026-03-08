import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Race Camp GP",
  description: "You Ship: An F1 Project | We Ship: F1 prizes!",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}
