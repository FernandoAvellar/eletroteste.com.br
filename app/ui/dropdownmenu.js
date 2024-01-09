import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import {
  Bars4Icon,
  HomeIcon,
  LightBulbIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
} from '@heroicons/react/20/solid'

const links = [
  { href: '/home', label: 'Home', icon: 'HomeIcon' },
  { href: '/produtos', label: 'Produtos', icon: 'HomeIcon' },
  { href: '/sobre', label: 'Sobre', icon: 'HomeIcon' },
  { href: '/assistencia', label: 'Assistência', icon: 'HomeIcon' },
  { href: '/contatos', label: 'Contatos', icon: 'HomeIcon' },
]

export default function DropDropDownMenu() {
  return (
    <div>
      <Menu as="div">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <Bars4Icon className="size-7 text-white" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {links.map((link) => (
                <Menu.Item key={link.href} as={Fragment}>
                  {({ active }) => (
                    <a href={link.href}>
                      <button
                        className={`${
                          active ? 'bg-sky-700 text-white' : 'text-gray-900'
                        } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <HomeIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                        {link.label}
                      </button>
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>

            {/* <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-700 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <HomeIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    Home
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-700 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <LightBulbIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Produtos
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-700 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <SparklesIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    Sobre
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-700 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <WrenchScrewdriverIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Assistência
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-700 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <EnvelopeIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    Contatos
                  </button>
                )}
              </Menu.Item>
            </div> */}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
