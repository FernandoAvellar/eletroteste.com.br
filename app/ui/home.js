import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="container mx-auto grid max-w-6xl gap-4 p-1 md:grid-cols-3">
        <div className="hidden overflow-hidden rounded-lg md:col-span-3 md:grid">
          <Image
            src="/jumbotron.jpg"
            width={1200}
            height={472}
            alt="Imagem de capa"
            priority={true}
          ></Image>
        </div>
        <div className="relative mx-auto h-auto w-full overflow-hidden rounded-lg">
          <div className=" absolute bottom-0 w-full bg-gray-900/80 text-center text-xl tracking-wide text-white">
            <span>PRODUTOS</span>
          </div>
          <Link href="/produtos">
            <Image
              className="h-auto w-full"
              src="/produto-tile.jpg"
              width={400}
              height={250}
              sizes="100vw"
              alt="Imagem de alguns produtos"
            ></Image>
          </Link>
        </div>
        <div className="relative mx-auto h-auto w-full overflow-hidden rounded-lg">
          <div className="absolute bottom-0 inline-block w-full bg-gray-900/80 text-center text-xl tracking-wide text-white">
            <span>CONTATOS</span>
          </div>
          <Link href="/contatos">
            <Image
              className="h-auto w-full"
              src="/contato-tile.jpg"
              width={400}
              height={250}
              sizes="100vw"
              alt="Imagem de telefone"
            ></Image>
          </Link>
        </div>

        <div className="relative mx-auto h-auto w-full overflow-hidden rounded-lg">
          <div className="absolute bottom-0 w-full bg-gray-900/80 text-center text-xl tracking-wide text-white">
            <span>LOCALIZAÇÃO</span>
          </div>
          <Link
            href="https://www.google.com/maps/place/ELETROTESTE+IND+E+COM+LTDA/@-22.246412,-45.708897,15z/data=!4m6!3m5!1s0x94cba2fdceb70c69:0x3d823c2cfddf278e!8m2!3d-22.246412!4d-45.708897!16s%2Fg%2F1tp28ctj?hl=pt-BR&entry=ttu"
            target="_blank"
          >
            <Image
              className="h-auto w-full"
              src="/mapa.png"
              width={400}
              height={250}
              sizes="100vw"
              alt="Imagem do mapa"
            ></Image>
          </Link>
        </div>
      </div>
    </main>
  )
}
