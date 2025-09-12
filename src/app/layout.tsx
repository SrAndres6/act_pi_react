import "./globals.css";
import Link from "next/link";

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
            <Link href="/" className="hover:underline">Login</Link>
            <Link href="/home" className="hover:underline">Inicio</Link>
            <Link href="/modelos" className="hover:underline">Modelos</Link>
            <Link href="/accesorios" className="hover:underline">Accesorios</Link>
            <Link href="/noticias" className="hover:underline">Noticias</Link>
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
