import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";

// Configuração da fonte Serif / Display
const fontDisplay = Instrument_Serif({
  subsets: ["latin"],
  weight: "400", // Instrument Serif suporta peso 400
  variable: "--font-display",
  display: "swap",
});

// Configuração da fonte Sans (Inter Tight)
const fontSans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOIR TATTOO — Estúdio de tatuagem autoral em São Paulo",
  description: "Tatuagem autoral feita com intenção: blackwork, fine line e projetos custom em estúdio privado na Vila Madalena.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fontDisplay.variable} ${fontSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
