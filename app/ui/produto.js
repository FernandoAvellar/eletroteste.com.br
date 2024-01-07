import Image from 'next/image'

export default function Produto({ produto }) {
  return (
    <div className="overflow-hidden rounded border-4 border-solid border-white bg-white px-1">
      <Image
        className="mb-2 w-full"
        src={produto.imagemRef}
        width={350}
        height={254}
        alt="Imagem de produto"
      ></Image>
      <h3 className="mb-2 text-left text-2xl">{produto.titulo}</h3>
      <h4 className="mb-2 text-left font-normal">{`Mod:(${produto.modelo})`}</h4>
      <p className="mb-2 justify-center text-sm">{produto.conteudo}</p>
      <a href={produto.pdfRef} target="_blank">
        <button className="mb-2 mt-2 rounded bg-sky-600 p-2 text-center text-sm text-white hover:bg-sky-700">
          Ver detalhes
        </button>
      </a>
    </div>
  )
}
