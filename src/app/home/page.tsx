"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      
      {/* 👤 Datos del usuario */}
      {user && (
        <div className="flex flex-col items-center mb-8">
          <img
            src={user.photo}
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full shadow-md mb-3"
          />
          <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      )}

      {/* 🏍️ Contenido de Motor-Sport */}
      <h1 className="text-4xl font-bold text-red-600 mb-6">Motor-Sport 🏍️</h1>
      
      <p className="text-lg text-gray-700 mb-4 text-center max-w-xl">
        Bienvenido a Motor-Sport, la página dedicada al motociclismo. Aquí encontrarás información sobre modelos, accesorios, noticias y mucho más del mundo motero.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">🏍️ Modelos</h2>
          <p className="text-gray-600">Descubre los últimos modelos de motos deportivas, touring y urbanas.</p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">⚙️ Accesorios</h2>
          <p className="text-gray-600">Encuentra cascos, guantes, chaquetas y todo lo que necesitas.</p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">📰 Noticias</h2>
          <p className="text-gray-600">Mantente al día con las últimas novedades del motociclismo.</p>
        </div>
      </section>
    </main>
  );
}
