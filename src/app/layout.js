import { Afacad_Flux } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/_components/NavigationBar";

const afacadFlux = Afacad_Flux({
  variable: "--font-afacad-flux",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jack's Portfolio Website",
  description: "Generated by Muhammad Zaki Dzulfikar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Astro description" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Jack's Portfolio Website</title>
      </head>
      <body
        className={`bg-light-base text-dark-base ${afacadFlux.variable} antialiased font-[family-name:var(--font-afacad-flux)]`}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
