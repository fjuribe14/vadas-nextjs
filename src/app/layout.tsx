import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Inter, Corben } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import { ServicesArr } from "@/components/landing/ServicesList";

const inter = Inter({
  preload: true,
  display: "swap",
  subsets: ["latin"],
});

const corben = Corben({
  preload: true,
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Vadas Producciones",
  description:
    "Desde barras móviles hasta música en vivo, te ofrecemos todo lo que necesitas para que tu evento sea inolvidable.",
  keywords: ServicesArr.map((item) => [item.title, item.subtitle, item.description].join(",")),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn([
          inter.className,
          corben.className,
          "bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased",
        ])}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {children}
            <Toaster />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
