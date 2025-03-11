import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { Toaster } from "@/components/ui/sonner";

const gagalinSans = localFont({
  src: [
    {
      path: "./fonts/Gagalin-Regular.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gagalinSans",
});

const lexendSans = localFont({
  src: [
    {
      path: "./fonts/Lexend-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Lexend-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Lexend-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Lexend-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Lexend-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Lexend-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Lexend-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Lexend-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Lexend-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-lexendSans",
});

export const metadata: Metadata = {
  title: "YFBI. | Business Ideas",
  description: "Your Fantastic Business Ideas, all in one platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${lexendSans.variable} ${gagalinSans.variable} relative antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
