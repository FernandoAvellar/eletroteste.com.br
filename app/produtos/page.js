import Produto from '../ui/produto'

export default function ProdutosPage() {
  const { produtos } = require('../../app/database/produtos-data.js')
  const produto = produtos[0]
  return (
    <>
      <div className="container mx-auto grid max-w-6xl grid-cols-3 gap-6 ">
        <Produto produto={produto} />
        <Produto produto={produto} />
        <Produto produto={produto} />
        <Produto produto={produto} />
        <Produto produto={produto} />
        <Produto produto={produto} />
      </div>
    </>
  )
}
