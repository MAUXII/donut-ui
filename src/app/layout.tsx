import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "donut/ui",
  description: "donut/ui, a free creative tailwindcss components library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={poppins.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
