import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="container mx-auto grid max-w-6xl grid-cols-3 gap-6">
        <div className="col-span-3 row-span-2 overflow-hidden rounded-lg border-4 border-solid border-white shadow-md">
          <Image src="/jumbotron.jpg" width={1200} height={472}></Image>
        </div>
        <div className="relative w-fit overflow-hidden rounded-lg border-4 border-solid border-white shadow-md">
          <div className=" absolute bottom-0 w-full bg-gray-900/80 text-center text-xl tracking-wide text-white">
            <span>PRODUTOS</span>
          </div>
          <Link href="/produtos">
            <Image src="/produto-tile.jpg" width={400} height={250}></Image>
          </Link>
        </div>
        <div className="relative w-fit overflow-hidden rounded-lg border-4 border-solid border-white shadow-md">
          <div className="absolute bottom-0 inline-block w-full bg-gray-900/80 text-center text-xl tracking-wide text-white">
            <span>CONTATOS</span>
          </div>
          <Link href="/contatos">
            <Image src="/contato-tile.jpg " width={400} height={250}></Image>
          </Link>
        </div>

        <div className="relative w-fit overflow-hidden rounded-lg border-4 border-solid border-white shadow-md">
          <div className="absolute bottom-0 w-full bg-gray-900/80 text-center text-xl tracking-wide text-white">
            <span>LOCALIZAÇÃO</span>
          </div>
          <a
            href="https://www.google.com/maps/place/ELETROTESTE+IND+E+COM+LTDA/@-22.246412,-45.708897,15z/data=!4m6!3m5!1s0x94cba2fdceb70c69:0x3d823c2cfddf278e!8m2!3d-22.246412!4d-45.708897!16s%2Fg%2F1tp28ctj?hl=pt-BR&entry=ttu"
            target="_blank"
          >
            <Image src="/mapa.png" width={400} height={250}></Image>
          </a>
        </div>
      </div>
    </main>
  )
}
