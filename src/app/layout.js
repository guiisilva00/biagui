import { Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "Um álbum para você",
  description: "Um pequeno álbum de memórias, feito à mão.",
};

export const viewport = {
  themeColor: "#240046",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
