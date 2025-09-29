interface Noticia {
  id: number;
  titulo: string;
  fecha: string;
  descripcion: string;
  imagen: string;
}

const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "Yamaha presenta su nuevo modelo 2025",
    fecha: "1 de Septiembre, 2025",
    descripcion:
      "La marca japonesa lanza al mercado una moto deportiva con un motor de 150cc que promete revolucionar el segmento urbano.",
    imagen: "/noticias/yamaha_MT03_ABS.jpg"
  },
  {
    id: 2,
    titulo: "Comparativa: Honda vs Suzuki 2025",
    fecha: "20 de Agosto, 2025",
    descripcion:
      "Analizamos a fondo los dos modelos más vendidos para saber cuál ofrece la mejor relación calidad-precio.",
    imagen: "/noticia2.jpg",
  },
  {
    id: 3,
    titulo: "5 consejos para cuidar tu moto",
    fecha: "15 de Agosto, 2025",
    descripcion:
      "Aprende a mantener tu moto en buen estado y evitar reparaciones costosas con estos tips básicos.",
    imagen: "/noticia3.jpg",
  },
];

export default function NoticiasPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Últimas Noticias</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={noticia.imagen}
              alt={noticia.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{noticia.titulo}</h2>
              <p className="text-gray-500 text-sm">{noticia.fecha}</p>
              <p className="mt-2">{noticia.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}