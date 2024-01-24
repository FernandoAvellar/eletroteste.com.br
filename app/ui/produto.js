import Image from 'next/image'
import Link from 'next/link'

export default function Produto({ produto }) {
  return (
    <div className="overflow-hidden rounded border-4 border-solid border-white bg-white">
      <Image
        className="mb-2 h-auto w-full"
        src={produto.imagemRef}
        width={0}
        height={0}
        sizes="100vw"
        alt="Imagem do produto"
        priority={true}
      ></Image>
      <h3 className="mb-2 text-left text-2xl">{produto.titulo}</h3>
      <h4 className="mb-2 text-left font-normal">{`Mod:(${produto.modelo})`}</h4>
      <p className="mb-2 justify-center text-sm">{produto.conteudo}</p>
      <Link href={produto.pdfRef} target="_blank">
        <button className="mb-2 mt-2 rounded bg-sky-600 p-2 text-center text-sm text-white hover:bg-sky-700">
          Ver detalhes
        </button>
      </Link>
    </div>
  )
}
