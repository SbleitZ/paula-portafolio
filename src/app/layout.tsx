import type { Metadata } from "next";
import { DM_Sans, Nanum_Pen_Script, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({weight:["400","700"],subsets:["latin"],variable:'--font-spaceMono'});
const dmSans = DM_Sans({weight:["100","200","300","400","500","600","700","800"],subsets:["latin"],variable:'--font-dmSans'});
const nanumPen = Nanum_Pen_Script({weight:["400"],subsets:["latin"],variable:'--font-nanumPen'});

export const metadata: Metadata = {
  title: "Paula Gareis - Diseño UX/UI",
  description: "la descripción aquí",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${spaceMono.variable} ${dmSans.variable} ${nanumPen.variable}`}>{children}</body>
    </html>
  );
}
