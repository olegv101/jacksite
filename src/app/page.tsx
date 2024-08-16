import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";

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
        
        <CardSpotlight className="h-96 mt-8">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Sharing is Caring!
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
I believe in giving up all your personal information to big corporations.            <ul className="list-none mt-2">
              <Step title="Share your full name and birthdate so I can fwd it to google" />
              <Step title="Give me your address so I can send it to meta" />
              <Step title="Accept all cookies and tracking so I can send ur data!" />
              <Step title="Share your location at all times to make sure snapchat can push targeted ads!!!" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Remember, the more you share, the more personalized your online experience becomes!
          </p>
        </CardSpotlight>
      </div>
    </main>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};