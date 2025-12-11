import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollObserver from "@/components/scroll-observer";

const clashDisplay = localFont({
  src: [
    {
      path: "../fonts/ClashDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodrigo Garcés - Escritor & Conferencista",
  description: "Sanar para Volver a Vivir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${clashDisplay.variable} antialiased font-sans`}
      >
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
