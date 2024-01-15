'use client'
import Produto from '../ui/produto'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function ProdutosPage() {
  const {
    produtos,
    categorias,
  } = require('../../app/database/produtos-data.js')
  const [selectedCategory, setSelectedCategory] = useState(categorias[0])
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos)

  function handleFilterChange(e) {
    setSelectedCategory(e)
    const catSelecionada = e.cat
    if (catSelecionada !== 'all') {
      setProdutosFiltrados(filtrarPorCategoria(produtos, catSelecionada))
    } else {
      setProdutosFiltrados(produtos)
    }
  }

  function filtrarPorCategoria(produtos, categoriaSelecionada) {
    const produtosFiltrados = produtos.filter((produto) => {
      return produto.categoria.includes(categoriaSelecionada)
    })
    return produtosFiltrados
  }

  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-2 md:px-4">
        <Listbox value={selectedCategory} onChange={handleFilterChange}>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md border-sky-600 bg-gray-100 py-2 pl-3 pr-10 text-left text-sm shadow-lg outline-none ring-1 focus:outline-none focus-visible:border-sky-500 focus-visible:ring-1 focus-visible:ring-offset-2  md:text-base lg:text-lg">
              <span className="block truncate">{selectedCategory.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="size-5 text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 h-fit w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none md:text-base">
                {categorias.map((categoria) => (
                  <Listbox.Option
                    key={categoria.cat}
                    value={categoria}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-sky-500 text-white' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {categoria.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-900">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div className="container mx-auto grid max-w-6xl gap-6 px-2 py-1 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-4">
        {produtosFiltrados.map((produto) => {
          return <Produto key={produto.id} produto={produto} />
        })}
      </div>
    </>
  )
}
