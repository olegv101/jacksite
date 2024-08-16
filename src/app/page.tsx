import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold">
          My Favourite Things
        </h1>
        <h2 className="text-2xl font-bold mb-20 text-white/30">A thread...</h2>
        <Image 
          src="https://phantom-marca.unidadeditorial.es/743d383b5f9098a3f279f48658c59069/resize/414/f/jpg/assets/multimedia/imagenes/2023/05/22/16847731437964.jpg" 
          alt="Elon Musk" 
          width={414} 
          height={414} 
          priority 
          className="mb-4"
        />
        <p>Musk is an inspiring individual. I particularly like his view on worker rights, and his political views!</p>
      </div>
    </main>
  );
}