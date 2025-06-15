import "./globals.css";
import Cabezera from "@/components/cabezera.js";
import Foot from "@/components/piecera.js"

export const metadata = {
  title: "Luckydev | Portfolio",
  description: "Portafolio personal de Luckydev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.avif" type="image/png" />
        
      </head>
      <body className="">
        <Cabezera />
        {children}
        
      </body>
    </html>
  );
}
