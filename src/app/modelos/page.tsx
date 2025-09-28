import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motos } from "@/data/motos";

export default function ModelosPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Modelos de Motos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {motos.map((moto) => (
          <div
            key={moto.id}
            className="p-4 border rounded-xl shadow hover:shadow-lg transition bg-white"
          >
            <Image
              src={moto.imagen}
              alt={moto.nombre}
              width={400}
              height={250}
              className="rounded-lg"
            />
           <h2 className="text-xl font-semibold mt-3 text-gray-900">{moto.nombre}</h2>
            <p className="text-gray-600">{moto.descripcion}</p>
            <p className="text-green-600 font-bold mt-2">{moto.precio}</p>
            <Link
              href={`/modelos/${moto.id}`}
              className="inline-block mt-3 text-blue-600 font-medium hover:underline"
            >
              Ver detalles →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
// falta aggregar mas modelos de las motos 
