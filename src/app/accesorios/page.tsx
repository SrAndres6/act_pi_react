import React from "react";
import CardsAccesorios from "@/app/components/CardsAccesorios";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Accesorios y Piezas de Motos</h1>
      <CardsAccesorios />
    </main>
  );
}
