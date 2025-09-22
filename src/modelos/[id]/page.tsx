import React from "react";
import { motos } from "@/data/motos";
import Image from "next/image";

export default function MotoDetallePage({ params }: { params: { id: string } }) {
  const moto = motos.find((m) => m.id.toString() === params.id);

  if (!moto) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold">Modelo no encontrado</h1>
      </main>
    );
  }

  return (
    <main className="p-6">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-6">
        <Image
          src={moto.imagen}
          alt={moto.nombre}
          width={600}
          height={350}
          className="rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{moto.nombre}</h1>
        <p className="text-gray-700 mt-2">{moto.descripcion}</p>
        <p className="text-green-600 font-bold mt-4">Precio: {moto.precio}</p>
      </div>
    </main>
  );
}
