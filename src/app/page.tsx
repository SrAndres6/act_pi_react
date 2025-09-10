export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
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
