'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MenuItem from './menuitem'
import CollapsedMenu from './collapsedmenu'

export default function Header() {
  const pathname = usePathname()
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
        <ul className="absolute right-0 hidden md:flex">
          <MenuItem
            href="/home"
            iconName="home"
            label="Home"
            pathname={pathname}
          />
          <MenuItem
            href="/produtos"
            iconName="lightbulb"
            label="Produtos"
            pathname={pathname}
          />
          <MenuItem
            href="/sobre"
            iconName="sparklesicon"
            label="Sobre"
            pathname={pathname}
          />
          <MenuItem
            href="/assistencia"
            iconName="wrenchscrewdrivericon"
            label="Assistência"
            pathname={pathname}
          />
          <MenuItem
            href="/contatos"
            iconName="envelopeicon"
            label="Contatos"
            pathname={pathname}
          />
        </ul>
        <div className="absolute right-0 z-50 md:hidden">
          <div>
            <CollapsedMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}
