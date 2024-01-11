'use client'
import Produto from '../ui/produto'
import React, { useState } from 'react'

export default function ProdutosPage() {
  const { produtos } = require('../../app/database/produtos-data.js')
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos)
  const [selectedFilter, setSelectedFilter] = useState('todos')

  function handleFilterChange(e) {
    const filtroSelecionado = e.target.value
    setSelectedFilter(filtroSelecionado)

    if (filtroSelecionado !== 'todos') {
      const produtosAposFiltro = produtos.filter(
        (produto) => produto.categoria == filtroSelecionado,
      )
      setProdutosFiltrados(produtosAposFiltro)
    } else {
      setProdutosFiltrados(produtos)
    }
  }

  return (
    <div>
      <div className="container mx-auto flex w-auto max-w-6xl flex-row items-center justify-center gap-4">
        <div className="flex flex-col gap-2">
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="todos"
              checked={selectedFilter === 'todos'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            ></input>
            <span className="ml-1 text-gray-900">Todos</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="oleos"
              checked={selectedFilter === 'oleos'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            ></input>
            <span className="ml-1 text-gray-900">Oleos</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="telecom"
              checked={selectedFilter === 'telecom'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            />
            <span className="ml-1 text-gray-900">Telecomunicações</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="bancoResistores"
              checked={selectedFilter === 'bancoResistores'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            ></input>
            <span className="ml-1 text-gray-900">Banco de resistores</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="medicos"
              checked={selectedFilter === 'medicos'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            ></input>
            <span className="ml-1 text-gray-900">Médicos</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="isolamento"
              checked={selectedFilter === 'isolamento'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            ></input>
            <span className="ml-1 text-gray-900">Isolamentos</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="baixaResistencia"
              checked={selectedFilter === 'baixaResistencia'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            />
            <span className="ml-1 text-gray-900">Baixas resistências</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="disjuntores"
              checked={selectedFilter === 'disjuntores'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            />
            <span className="ml-1 text-gray-900">Disjuntores</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="fasimetros"
              checked={selectedFilter === 'fasimetros'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            />
            <span className="ml-1 text-gray-900">Fasímetros</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="motores"
              checked={selectedFilter === 'motores'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            />
            <span className="ml-1 text-gray-900">Motores</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="trafo"
              checked={selectedFilter === 'trafo'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            />
            <span className="ml-1 text-gray-900">Transformadores</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="reles"
              checked={selectedFilter === 'reles'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            />
            <span className="ml-1 text-gray-900">Reles</span>
          </label>
          <label className="md:text-md inline-flex items-center text-sm md:font-medium">
            <input
              type="radio"
              name="filtro"
              value="geral"
              checked={selectedFilter === 'geral'}
              onChange={handleFilterChange}
              className="size-4 md:size-5"
            />
            <span className="ml-1 text-gray-900">Geral</span>
          </label>
        </div>
      </div>
      <div className="container mx-auto grid max-w-6xl gap-6 p-2 md:grid-cols-3 md:p-0 ">
        {produtosFiltrados.map((produto) => {
          return <Produto key={produto.id} produto={produto} />
        })}
      </div>
    </div>
  )
}
