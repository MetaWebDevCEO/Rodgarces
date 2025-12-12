import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  icons: {
    icon: '/RodGarces.svg',
  },
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
        {children}
      </body>
    </html>
  );
}
