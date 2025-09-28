"use client";

import React from "react";

const motos = [
  {
    nombre: "Yamaha R1",
    cilindrada: "998 cc",
    hp: 200,
    torque: "112 Nm",
    peso: "200 kg",
    velocidad: "299 km/h",
  },
  {
    nombre: "Kawasaki Ninja 400",
    cilindrada: "399 cc",
    hp: 48,
    torque: "38 Nm",
    peso: "168 kg",
    velocidad: "190 km/h",
  },
  {
    nombre: "Honda CBR600RR",
    cilindrada: "599 cc",
    hp: 120,
    torque: "66 Nm",
    peso: "186 kg",
    velocidad: "250 km/h",
  },
  {
    nombre: "Suzuki GSX-R1000R",
    cilindrada: "999 cc",
    hp: 202,
    torque: "117 Nm",
    peso: "202 kg",
    velocidad: "299 km/h",
  },
  {
    nombre: "Ducati Panigale V4",
    cilindrada: "1103 cc",
    hp: 214,
    torque: "124 Nm",
    peso: "198 kg",
    velocidad: "305 km/h",
  },
];

export default function CompararPage() {
  return (
    <main className="min-h-screen bg-gray-900 p-10">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-white drop-shadow-lg">
        ⚡ Comparativa de Motos Deportivas
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-gray-800 shadow-2xl rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-red-700 text-white text-lg uppercase">
              <th className="p-4 text-left">Modelo</th>
              <th className="p-4">Cilindrada</th>
              <th className="p-4">HP</th>
              <th className="p-4">Torque</th>
              <th className="p-4">Peso</th>
              <th className="p-4">Vel. Máxima</th>
            </tr>
          </thead>
          <tbody>
            {motos.map((moto, index) => (
              <tr
                key={index}
                className={`text-center text-lg font-semibold ${
                  index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                } hover:bg-red-600 hover:text-white transition`}
              >
                <td className="p-4 font-bold text-white text-left">
                  {moto.nombre}
                </td>
                <td className="p-4 text-gray-200">{moto.cilindrada}</td>
                <td className="p-4 text-gray-200">{moto.hp} HP</td>
                <td className="p-4 text-gray-200">{moto.torque}</td>
                <td className="p-4 text-gray-200">{moto.peso}</td>
                <td className="p-4 text-gray-200">{moto.velocidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
