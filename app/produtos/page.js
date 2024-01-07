import Produto from '../ui/produto'

export default function ProdutosPage() {
  const { produtos } = require('../../app/database/produtos-data.js')
  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === 'telecomunicações',
  )
  return (
    <>
      <div className="container mx-auto grid max-w-6xl grid-cols-3 gap-6 ">
        {produtosFiltrados.map((produto) => {
          return <Produto key={produto.id} produto={produto} />
        })}
      </div>
    </>
  )
}
