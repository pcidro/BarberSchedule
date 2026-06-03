import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { AppointmentsProvider } from "@/context/AppointmentsContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Barber Schedule",
  description: "Agende com segurança e agilidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${roboto.variable} h-full antialiased`}
    >
      <AppointmentsProvider>
        <body>{children}</body>
      </AppointmentsProvider>
    </html>
  );
}
