import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import "../styles/normalize.scss";
import "../styles/reset.scss";
import "../styles/page.scss";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Country API",
  description: "Search for a country!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet" />
      </head>

      <body>
        <Header />

        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
