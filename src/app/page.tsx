"use client";

import { useState } from "react";
import { signInWithPopup, signOut, User } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { useRouter } from "next/navigation"; // 👈 Importar router

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter(); // 👈 Inicializar router

  // Login con Google
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);

      // 👇 Guardamos en localStorage para la HomePage
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("user"); // 👈 limpiar datos guardados
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  // Redirigir a Home
  const goToHome = () => {
    router.push("/home"); // 👈 Esto lleva a src/app/home/page.tsx
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md text-center w-80">
        {user ? (
          <>
            <img
              src={user.photoURL || ""}
              alt="avatar"
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h2 className="mt-2 font-semibold">{user.displayName}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>

            <button
              onClick={goToHome}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Ir a página principal
            </button>

            <button
              onClick={handleLogout}
              className="mt-2 w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500"
            >
              Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold mb-4">Login con Google</h1>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Iniciar Sesión
            </button>
          </>
        )}
      </div>
    </main>
  );
}
