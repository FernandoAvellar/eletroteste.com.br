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
    <>
      <div className="container mx-auto flex max-w-6xl gap-4">
        <div className="mb-6 flex items-center gap-4">
          <p className="text-xl font-semibold">Filtro:</p>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="filtro"
              value="todos"
              checked={selectedFilter === 'todos'}
              onChange={handleFilterChange}
              className="size-5"
            />
            <span className="ml-1 text-gray-900">Todos</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="filtro"
              value="fontes"
              checked={selectedFilter === 'fontes'}
              onChange={handleFilterChange}
              className="size-5"
            />
            <span className="ml-1 text-gray-900">Fontes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="filtro"
              value="telecom"
              checked={selectedFilter === 'telecom'}
              onChange={handleFilterChange}
              className="size-5"
            />
            <span className="ml-1 text-gray-900">Telecomunicações</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="filtro"
              value="medidores"
              checked={selectedFilter === 'medidores'}
              onChange={handleFilterChange}
              className="size-5"
            />
            <span className="ml-1 text-gray-900">Medidores</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="filtro"
              value="cargas"
              checked={selectedFilter === 'cargas'}
              onChange={handleFilterChange}
              className="size-5"
            />
            <span className="ml-1 text-gray-900">Cargas</span>
          </label>
        </div>
      </div>
      <div className="container mx-auto grid max-w-6xl gap-6 md:grid-cols-3 ">
        {produtosFiltrados.map((produto) => {
          return <Produto key={produto.id} produto={produto} />
        })}
      </div>
    </>
  )
}
