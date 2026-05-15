import type { Metadata } from "next";
import "@/css/global.css";
import { clashDisplay, clashGrotesk, geist, jakarta, satoshi } from "@/fonts/main";
import { Navigation } from "@/components/layout/navigation";
import NavigationProvider from "@/provider/NavigationProvider";
import { Footer } from "@/layout/footer";
import LenisProvider from "@/provider/LenisProvider";

export const metadata:Metadata = {
  creator:'Radosław Adamczyk',
  applicationName:'AdamczykTOP',
  generator:'NextJS',
  publisher:'Radosław Adamczyk',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl-PL">
      <head>
        <meta content='Radosław Adamczyk - AdamczykTOP' name='author' />
        <meta content="teUxF4GoWvz8pKBQtWSPemc6SEfXPzOy3N4-NUP_8Hs" name="google-site-verification" />
      </head>
      <body
        className={`${clashDisplay.variable} ${clashGrotesk.variable} ${jakarta.variable} ${satoshi.variable} ${geist.variable} antialiased `}
      >
        <LenisProvider>
          <NavigationProvider>
            <Navigation/>
            {children}
            <Footer/>
          </NavigationProvider>
        </LenisProvider>
      </body>
    </html>
  );
}



