import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "The Noodle House",
  description: "Chinese traditional cuisine at Iffland str.92 Hamburg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
