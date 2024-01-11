'use client'
import Produto from '../ui/produto'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function ProdutosPage() {
  const categorias = [
    { cat: 'all', name: 'Todos' },
    { cat: 'baixaResistencia', name: 'Baixas Resistências / SPDA' },
    { cat: 'bancoResistores', name: 'Banco de Resistores' },
    { cat: 'disjuntores', name: 'Disjuntores' },
    { cat: 'medicos', name: 'Equipamentos Médicos' },
    { cat: 'telecom', name: 'Equipamentos de Telecomunicações' },
    { cat: 'fasimetros', name: 'Fasímetros' },
    { cat: 'isolamento', name: 'Isolação elétrica/ Dielétricos/ EPIs e EPCs' },
    { cat: 'motores', name: 'Motores elétricos' },
    { cat: 'oleos', name: 'Óleos Isolantes' },
    { cat: 'reles', name: 'Reles' },
    { cat: 'trafo', name: 'Transformadores' },
    { cat: 'geral', name: 'Geral' },
  ]

  const { produtos } = require('../../app/database/produtos-data.js')
  const [selected, setSelected] = useState(categorias[0])
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos)

  function handleFilterChange(e) {
    console.log(e)
    setSelected(e)
    const catSelecionada = e.cat
    console.log(catSelecionada)

    if (catSelecionada !== 'all') {
      const produtosAposFiltro = produtos.filter(
        (produto) => produto.categoria === catSelecionada,
      )
      setProdutosFiltrados(produtosAposFiltro)
      console.log(produtosAposFiltro)
    } else {
      setProdutosFiltrados(produtos)
    }
  }

  return (
    <>
      <div className="mx-auto w-full max-w-6xl p-2">
        <div>
          <Listbox value={selected} onChange={handleFilterChange}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left text-sm shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 md:text-base">
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
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
                  {categorias.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
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
      <div className="container mx-auto grid max-w-6xl gap-6 p-2 md:grid-cols-3 md:p-0 ">
        {produtosFiltrados.map((produto) => {
          return <Produto key={produto.id} produto={produto} />
        })}
      </div>
    </>
  )
}
