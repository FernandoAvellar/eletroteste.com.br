import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import {
  HomeIcon,
  LightBulbIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid'

export default function MenuItem({ href, iconName, label, pathname }) {
  return (
    <li
      className={clsx('', {
        'group bg-sky-700': pathname === href,
      })}
    >
      <div className="p-2">
        <Link href={href}>
          <div className="group flex flex-col items-center">
            {renderIcon(iconName)}
            <h2 className="text-white group-hover:text-stone-800">{label}</h2>
          </div>
        </Link>
      </div>
    </li>
  )
}

function renderIcon(name) {
  switch (name) {
    case 'home':
      return (
        <HomeIcon className="size-7 text-white group-hover:text-stone-800" />
      )
    case 'lightbulb':
      return (
        <LightBulbIcon className="size-7 text-white group-hover:text-stone-800" />
      )
    case 'sparklesicon':
      return (
        <SparklesIcon className="size-7 text-white group-hover:text-stone-800" />
      )
    case 'wrenchscrewdrivericon':
      return (
        <WrenchScrewdriverIcon className="size-7 text-white group-hover:text-stone-800" />
      )
    case 'envelopeicon':
      return (
        <EnvelopeIcon className="size-7 text-white group-hover:text-stone-800" />
      )
  }
}
