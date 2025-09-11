import React from "react";

interface Accesorio {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

const accesorios: Accesorio[] = [
  {
    id: 1,
    nombre: "Casco Integral",
    descripcion: "Protección total para cabeza y rostro.",
    imagen: "https://share.google/images/TLw2PmKW9xTAD8qyr",
  },
  {
    id: 2,
    nombre: "Casco Abierto",
    descripcion: "Más ventilado y ligero para ciudad.",
    imagen: "https://images.unsplash.com/photo-1603076736345-98e35ef9d847?w=600",
  },
  {
    id: 3,
    nombre: "Guantes Racing",
    descripcion: "Guantes reforzados para pista y largas rutas.",
    imagen: "https://images.unsplash.com/photo-1622279407040-c5c7f4a2dfc5?w=600",
  },
  {
    id: 4,
    nombre: "Chaqueta de Cuero",
    descripcion: "Resistente al viento y con protecciones.",
    imagen: "https://images.unsplash.com/photo-1584467735815-f778f274e68d?w=600",
  },
  {
    id: 5,
    nombre: "Botas Touring",
    descripcion: "Botas impermeables para viajes largos.",
    imagen: "https://images.unsplash.com/photo-1608568742553-6e7c8e93bffa?w=600",
  },
  {
    id: 6,
    nombre: "Rodilleras",
    descripcion: "Protección extra para las rodillas en caídas.",
    imagen: "https://images.unsplash.com/photo-1624537065104-9ef32ed07e4d?w=600",
  },
  {
    id: 7,
    nombre: "Escape Deportivo",
    descripcion: "Mejora el sonido y el rendimiento de la moto.",
    imagen: "https://images.unsplash.com/photo-1602143407650-4bb6d0d508d4?w=600",
  },
  {
    id: 8,
    nombre: "Luz LED Frontal",
    descripcion: "Mayor visibilidad nocturna y ahorro energético.",
    imagen: "https://images.unsplash.com/photo-1611043714353-bc3c2e3aa8b0?w=600",
  },
  {
    id: 9,
    nombre: "Top Case",
    descripcion: "Maletero trasero amplio y seguro.",
    imagen: "https://images.unsplash.com/photo-1651268936201-2bba5670202a?w=600",
  },
  {
    id: 10,
    nombre: "Manillares Deportivos",
    descripcion: "Mayor control y comodidad en conducción.",
    imagen: "https://images.unsplash.com/photo-1634045850692-cb6c72e7e4dc?w=600",
  },
];

const CardsAccesorios: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {accesorios.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform"
        >
          <img
            src={item.imagen}
            alt={item.nombre}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{item.nombre}</h2>
            <p className="text-gray-600 mt-2">{item.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsAccesorios;
