import type { Metadata } from "next";
import { Bebas_Neue, Holtwood_One_SC, Anton_SC, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const holtwoodOneSC = Holtwood_One_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title",     // nomeei pela FUNÇÃO, não pela fonte
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const antonSC = Anton_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",   // ou o nome que fizer sentido pro uso que você quer
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Avelino - Música ao Vivo",
  description: "Música ao vivo para bares, restaurantes e eventos",
  openGraph: {
    title: "João Avelino — Música ao Vivo",
    description: "Música ao vivo para bares, restaurantes e eventos.",
    images: [
      {
        url: "/picsLive/og.png",
        width: 587,
        height: 887,
        alt: "João Avelino — Música ao Vivo",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${holtwoodOneSC.variable} ${bebasNeue.variable} ${antonSC.variable} ${geistSans.variable} ${geistMono.variable} h-screen antialiased bg-bg`}
    >
      <body className="min-h-screen w-screen bg-bg flex justify-cente p-0 m-0">
        <div className="w-full max-w-[425px] md:max-w-[1200px] mx-auto min-h-screen bg-bg flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
