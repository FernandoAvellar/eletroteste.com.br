'use client'
import Produto from '../ui/produto'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function ProdutosPage() {
  const categorias = [
    { id: 1, cat: 'all', name: 'Todos' },
    { id: 2, cat: 'baixaResistencia', name: 'Baixas Resistências / SPDA' },
    { id: 3, cat: 'bancoResistores', name: 'Banco de Resistores' },
    { id: 4, cat: 'disjuntores', name: 'Disjuntores' },
    { id: 5, cat: 'medicos', name: 'Equipamentos Médicos' },
    { id: 6, cat: 'telecom', name: 'Equipamentos de Telecomunicações' },
    { id: 7, cat: 'fasimetros', name: 'Fasímetros' },
    {
      id: 8,
      cat: 'isolamento',
      name: 'Isolação elétrica/ Dielétricos/ EPIs e EPCs',
    },
    { id: 9, cat: 'motores', name: 'Motores elétricos' },
    { id: 10, cat: 'oleos', name: 'Óleos Isolantes' },
    { id: 11, cat: 'reles', name: 'Reles' },
    { id: 12, cat: 'trafo', name: 'Transformadores' },
    { id: 13, cat: 'outros', name: 'Outros' },
  ]

  const { produtos } = require('../../app/database/produtos-data.js')
  const [selected, setSelected] = useState(categorias[0])
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos)

  function handleFilterChange(e) {
    setSelected(e)
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
          <Listbox value={selected} onChange={handleFilterChange}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-50 py-2 pl-3 pr-10 text-left text-sm shadow-md focus:outline-none focus-visible:border-sky-600 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-600 md:text-base">
                <span className="block truncate">{selected.name}</span>
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
                      key={categoria.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-sky-700 text-white' : 'text-gray-900'
                        }`
                      }
                      value={categoria}
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
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-700">
                              <CheckIcon
                                className="size-5"
                                aria-hidden="true"
                              />
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
      </div>
      <div className="container mx-auto grid max-w-6xl gap-6 px-2 py-1 md:grid-cols-3 md:px-4 lg:px-4">
        {produtosFiltrados.map((produto) => {
          return <Produto key={produto.id} produto={produto} />
        })}
      </div>
    </>
  )
}
