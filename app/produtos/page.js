'use client'
import Produto from '../ui/produto'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function ProdutosPage() {
  const categorias = [
    { cat: 'all', name: 'Todos' },
    { cat: 'baixaResistencia', name: 'Baixas Resistências / SPDA' },
    { cat: 'bancoResistores', name: 'Banco de Resistores' },
    { cat: 'medicos', name: 'Médicos' },
    { cat: 'disjuntores', name: 'Disjuntores' },
    { cat: 'fasimetros', name: 'Fasímetros' },
    {
      cat: 'isolamento',
      name: 'Isolação elétrica/ Dielétricos/ EPIs e EPCs',
    },
    { cat: 'motores', name: 'Motores elétricos' },
    { cat: 'oleos', name: 'Óleos Isolantes' },
    { cat: 'reles', name: 'Reles' },
    { cat: 'telecom', name: 'Telecomunicações' },
    { cat: 'trafo', name: 'Transformadores' },
    { cat: 'outros', name: 'Outros' },
  ]

  const { produtos } = require('../../app/database/produtos-data.js')
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
        <div>
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
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-4 pr-4 ${
                          active ? 'bg-sky-500 text-white' : 'text-gray-900'
                        }`
                      }
                      value={categoria}
                    >
                      <span className="block truncate font-normal">
                        {categoria.name}
                      </span>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div className="container mx-auto grid max-w-6xl gap-6 px-2 py-1 md:grid-cols-3 md:px-4 lg:px-4">
        {produtosFiltrados.map((produto) => {
          return <Produto key={produto.id} produto={produto} />
        })}
      </div>
    </>
  )
}
