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
    imagen: "https://ichhelmets.com/wp-content/uploads/2022/05/0000_ICH-503-SP-SOLID-NM-LAT-3.4-IZQ.png",
  },
  {
    id: 2,
    nombre: "Casco Abierto",
    descripcion: "Más ventilado y ligero para ciudad.",
    imagen: "https://www.yamahasports.com.co/wp-content/uploads/2024/08/WhatsApp-Image-2024-10-24-at-10.07.40-AM.jpeg",
  },
  {
    id: 3,
    nombre: "Guantes Racing",
    descripcion: "Guantes reforzados para pista y largas rutas.",
    imagen: "https://astrobiker.com/storage/captura-de-pantalla-2024-05-28-162833.png",
  },
  {
    id: 4,
    nombre: "Chaqueta de Cuero",
    descripcion: "Resistente al viento y con protecciones.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_748445-MCO70088068743_062023-F.webp",
  },
  {
    id: 5,
    nombre: "Botas Touring",
    descripcion: "Botas impermeables para viajes largos.",
    imagen: "https://enmoto.co/cdn/shop/products/14_264_varianti_gallery_pop_Adventure2_Gore_Brown.jpg?v=1608726947&width=360",
  },
  {
    id: 6,
    nombre: "Rodilleras",
    descripcion: "Protección extra para las rodillas en caídas.",
    imagen: "https://shafthelmets.com/wp-content/uploads/ver_mas_rodilleras_2.png",
  },
  {
    id: 7,
    nombre: "Escape Deportivo",
    descripcion: "Mejora el sonido y el rendimiento de la moto.",
    imagen: "https://yourmotoparts.com/wp-content/uploads/2024/04/1-1.webp",
  },
  {
    id: 8,
    nombre: "Luz LED Frontal",
    descripcion: "Mayor visibilidad nocturna y ahorro energético.",
    imagen: "https://i5.walmartimages.com/asr/e8c088e4-1136-4033-9e0a-f1004c0ddc58.1aaeeddbd9568087a0d46fb8eec5a2fd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: 9,
    nombre: "Top Case",
    descripcion: "Maletero trasero amplio y seguro.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_973621-MCO93186049899_092025-F.webp",
  },
  {
    id: 10,
    nombre: "Manillares Deportivos",
    descripcion: "Mayor control y comodidad en conducción.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_964431-MCO90414710214_082025-F.webp",
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
            <h2 className="text-blue-900 font-semibold">{item.nombre}</h2>
            <p className="text-blue-900 mt-2 font-semibold">{item.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsAccesorios;
