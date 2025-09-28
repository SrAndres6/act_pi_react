"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 overflow-hidden">
      {/* 🏍️ Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200')",
          opacity: 0.70,
        }}
      />

      {/* 👤 Datos del usuario */}
      {user && (
        <div className="flex flex-col items-center mb-8 z-10">
          <img
            src={user.photo}
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full shadow-md mb-3"
          />
          <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
          <p className="text-gray-700">{user.email}</p>
        </div>
      )}

      {/* 🏍️ Encabezado */}
      <h1 className="text-4xl font-extrabold text-red-600 mb-6 drop-shadow-lg z-10">
        Motor-Sport 🏍️
      </h1>

      <p className="text-lg text-gray-900 mb-4 text-center max-w-xl leading-relaxed z-10">
        Bienvenido a Motor-Sport, la página dedicada al motociclismo. Aquí encontrarás
        información sobre modelos, accesorios, noticias y mucho más del mundo motero.
      </p>

      {/* 📌 Secciones */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 w-full max-w-6xl z-10">
        <Link
          href="/modelos"
          className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <h2 className="text-2xl font-bold text-gray-900 hover:text-red-600 transition">
            🏍️ Modelos
          </h2>
          <p className="text-gray-700 mt-2">
            Descubre los últimos modelos de motos deportivas, touring y urbanas.
          </p>
        </Link>

        <Link
          href="/accesorios"
          className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <h2 className="text-2xl font-bold text-gray-900 hover:text-red-600 transition">
            ⚙️ Accesorios
          </h2>
          <p className="text-gray-700 mt-2">
            Encuentra cascos, guantes, chaquetas y todo lo que necesitas.
          </p>
        </Link>

        <Link
          href="/noticias"
          className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <h2 className="text-2xl font-bold text-gray-900 hover:text-red-600 transition">
            📰 Noticias
          </h2>
          <p className="text-gray-700 mt-2">
            Mantente al día con las últimas novedades del motociclismo.
          </p>
        </Link>

        {/* 🔥 Nueva sección Comparar Motos */}
        <Link
          href="/comparar"
          className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <h2 className="text-2xl font-bold text-gray-900 hover:text-red-600 transition">
            ⚡ Comparar Motos
          </h2>
          <p className="text-gray-700 mt-2">
            Compara especificaciones y elige la mejor moto para ti.
          </p>
        </Link>
      </section>
    </main>
  );
}
