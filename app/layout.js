import "./globals.css";

export const metadata = {
  title: "Luckydev | Portfolio",
  description: "Portafolio personal de Luckydev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
      </head>
      <body
        className="bg-gray-900 text-white"
      >
        {children}
      </body>
    </html>
  );
}
