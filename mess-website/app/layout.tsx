import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muslim Engineering Student Society | University of Houston",
  description:
    "A clean student organization website for the Muslim Engineering Student Society at the University of Houston.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
