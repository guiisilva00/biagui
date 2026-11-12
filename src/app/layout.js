import { Cormorant_Garamond, Caveat, Fraunces } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import LenisScroll from "./_components/LenisScroll";

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

/* letras "gordinhas" da seção de músicas */
const fat = Fraunces({
  variable: "--font-fat",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata = {
  title: "Um álbum para você",
  description: "Um pequeno álbum de memórias, feito à mão.",
};

export const viewport = {
  themeColor: "#302733",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${hand.variable} ${fat.variable}`}>
      <body>
        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}
