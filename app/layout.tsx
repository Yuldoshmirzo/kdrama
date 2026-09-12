import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Мир дорам Мохинур",
  description: "Киношная коллекция любимых корейских дорам Мохинур.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
