import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Expense controller | Nunes",
  description: "website developed by Guilherme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
