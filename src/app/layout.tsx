import "./globals.css";

export const metadata = {
  title: "Motor-Sport",
  description: "Página dedicada al mundo del motociclismo 🚀",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <header className="p-4 bg-black text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">🏍️ Motor-Sport</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Login</a>
            <a href="/home" className="hover:underline">Inicio</a>
            <a href="/modelos" className="hover:underline">Modelos</a>
            <a href="/accesorios" className="hover:underline">Accesorios</a>
            <a href="/noticias" className="hover:underline">Noticias</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="p-4 mt-8 bg-black text-white text-center">
          © {new Date().getFullYear()} Motor-Sport. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
