import {
  HomeIcon,
  LightBulbIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="mb-6 bg-sky-600">
      <nav className="container mx-auto flex h-24 max-w-6xl items-center">
        <div>
          <Link href="/home">
            <Image
              src="/logo.png"
              alt='alt="Logo da empresa Eletroteste'
              width={250}
              height={46}
            ></Image>
          </Link>
        </div>
        <ul className="ml-auto flex">
          <li>
            <div className="p-3">
              <Link href="/home">
                <div className="group flex flex-col items-center">
                  <HomeIcon className="size-8 text-white group-hover:text-stone-800" />
                  <h2 className="text-white group-hover:text-stone-800">
                    Home
                  </h2>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-3">
              <Link href="/produtos">
                <div className="group flex flex-col items-center">
                  <LightBulbIcon className="size-8 text-white group-hover:text-stone-800" />
                  <h2 className="text-white group-hover:text-stone-800">
                    Produtos
                  </h2>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-3">
              <Link href="/sobre">
                <div className="group flex flex-col items-center">
                  <SparklesIcon className="size-8 text-white group-hover:text-stone-800" />
                  <h2 className="text-white group-hover:text-stone-800">
                    Sobre
                  </h2>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-3">
              <Link href="/assistencia">
                <div className="group flex flex-col items-center">
                  <WrenchScrewdriverIcon className="size-8 text-white group-hover:text-stone-800" />
                  <h2 className="text-white group-hover:text-stone-800">
                    Assistência
                  </h2>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-3">
              <Link href="contatos">
                <div className="group flex flex-col items-center">
                  <EnvelopeIcon className="size-8 text-white group-hover:text-stone-800" />
                  <h2 className="text-white group-hover:text-stone-800">
                    Contatos
                  </h2>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
