import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shimane-u-fest-map",
  description: "島根大学祭の非公式マップ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  );
}
