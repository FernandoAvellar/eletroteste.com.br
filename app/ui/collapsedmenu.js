import { Listbox, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import Link from 'next/link'
import {
  Bars4Icon,
  HomeIcon,
  LightBulbIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
} from '@heroicons/react/20/solid'

export default function CollapsedMenu() {
  const menus = [
    { name: 'Home', href: '/home', icon: 'home' },
    { name: 'Produtos', href: '/produtos', icon: 'lightbulb' },
    { name: 'Sobre', href: '/sobre', icon: 'sparklesicon' },
    {
      name: 'Assistência',
      href: '/assistencia',
      icon: 'wrenchscrewdrivericon',
    },
    { name: 'Contatos', href: '/contatos', icon: 'envelopeicon' },
  ]

  const [selectedMenu, setSelectedMenu] = useState(menus[0])

  return (
    <div>
      <Listbox value={selectedMenu} onChange={setSelectedMenu}>
        <div className="relative">
          <Listbox.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <Bars4Icon className="size-7 text-white" aria-hidden="true" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              {menus.map((menu) => (
                <Link href={menu.href} key={menu.name}>
                  <Listbox.Option
                    key={menu.name}
                    value={menu.name}
                    className={({ active }) =>
                      `${active ? 'bg-sky-500 text-white' : 'text-gray-900'}`
                    }
                  >
                    {({ selected }) => (
                      <div
                        className={`my-1 ml-1 flex flex-row items-center p-2 ${
                          selected ? 'bg-sky-500 text-white' : 'text-gray-900'
                        }`}
                      >
                        {renderIcon(menu.icon)}
                        {menu.name}
                      </div>
                    )}
                  </Listbox.Option>
                </Link>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

function renderIcon(name) {
  switch (name) {
    case 'home':
      return <HomeIcon className="mr-2 size-5" aria-hidden="true" />
    case 'lightbulb':
      return <LightBulbIcon className="mr-2 size-5" aria-hidden="true" />
    case 'sparklesicon':
      return <SparklesIcon className="mr-2 size-5" aria-hidden="true" />
    case 'wrenchscrewdrivericon':
      return (
        <WrenchScrewdriverIcon className="mr-2 size-5" aria-hidden="true" />
      )
    case 'envelopeicon':
      return <EnvelopeIcon className="mr-2 size-5" aria-hidden="true" />
  }
}
