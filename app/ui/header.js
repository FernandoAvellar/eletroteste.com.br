'use client'
import {
  HomeIcon,
  LightBulbIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import DropDropDownMenu from './dropdownmenu'

export default function Header() {
  return (
    <header className="mb-2 bg-sky-600 p-4">
      <nav className="container relative mx-auto flex h-20 w-auto max-w-6xl items-center">
        <div className="flex shrink-0">
          <Link href="/home">
            <Image
              src="/logo.png"
              alt='alt="Logo da empresa Eletroteste'
              width={250}
              height={46}
            ></Image>
          </Link>
        </div>
        <ul className="invisible absolute right-0 flex md:visible">
          <li>
            <div className="p-2">
              <Link href="/home">
                <div className="group flex flex-col items-center">
                  <HomeIcon className="size-7 text-white group-hover:text-stone-800" />
                  <h2 className="text-white group-hover:text-stone-800">
                    Home
                  </h2>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-2">
              <Link href="/produtos">
                <div className="group flex flex-col items-center">
                  <LightBulbIcon className="size-7 text-white group-hover:text-stone-800" />
                  <h2 className="text-white group-hover:text-stone-800">
                    Produtos
                  </h2>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-2">
              <Link href="/sobre">
                <div className="group flex flex-col items-center">
                  <SparklesIcon className="size-7 text-white group-hover:text-stone-800" />
                  <h2 className="text-white group-hover:text-stone-800">
                    Sobre
                  </h2>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-2">
              <Link href="/assistencia">
                <div className="group flex flex-col items-center">
                  <WrenchScrewdriverIcon className="size-7 text-white group-hover:text-stone-800" />
                  <h2 className="text-white group-hover:text-stone-800">
                    Assistência
                  </h2>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-2">
              <Link href="contatos">
                <div className="group flex flex-col items-center">
                  <EnvelopeIcon className="size-7 text-white group-hover:text-stone-800" />
                  <h2 className="text-white group-hover:text-stone-800">
                    Contatos
                  </h2>
                </div>
              </Link>
            </div>
          </li>
        </ul>
        <div className="absolute right-0 md:invisible">
          <div>
            <DropDropDownMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}
