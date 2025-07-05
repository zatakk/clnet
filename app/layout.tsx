import type { Metadata } from "next";
import '../styles/style.scss';
import '../public/fonts/fontssheet.css'
import "phosphor-icons/src/css/icons.css";
import AOSInitializer from "@/components/Shared/Aos";
import Preloader from "@/components/Shared/Preloader";

export const metadata: Metadata = {
  title: "Construction Main - Proud to be a Construction Professional",
  description: "Construction Main - Proud to be a Construction Professional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
