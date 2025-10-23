"use client";
import Header from "@/app/components/common/ui/Header";
import CustomCursor from "@/app/components/common/ui/CustomCursor";
import Footer from "@/app/components/common/ui/Footer";
import WhatsAppButton from "@/app/components/common/ui/WhatsAppButton";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--primary-font",
});
const plusJakartaSansSecondary = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--secondary-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <title>Arino Creative Agency Next JS Template</title>
      </head>
      <body className={`${plusJakartaSans.variable} ${plusJakartaSansSecondary.variable}`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
