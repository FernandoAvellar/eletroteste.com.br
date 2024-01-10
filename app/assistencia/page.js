import Link from 'next/link'

export default function AssistenciaPage() {
  return (
    <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center p-4">
      <div className="flex h-10 w-full items-center justify-center rounded bg-sky-600">
        <p className="ml-2 font-medium text-white">
          PROCEDIMENTOS PARA MANUTENÇÃO/CALIBRAÇÃO
        </p>
      </div>
      <div className="h-fill flex w-full flex-col items-start rounded bg-white p-3 text-sm text-gray-900">
        <p className="mb-1 font-bold underline">
          Formas de entrar em contato com a Assistência Técnica:
        </p>
        <p>Através do telefone ou email:</p>
        <Link
          className="text-sm font-light text-blue-500 hover:text-sky-700 hover:underline"
          href="tel:03534712123"
        >
          <p>(35) 3471-2123</p>
        </Link>
        <Link
          className="text-sm font-light text-blue-500 hover:text-sky-700 hover:underline"
          href="mailto:manutencao@eletroteste.com.br"
        >
          <p>manutencao@eletroteste.com.br</p>
        </Link>
      </div>
    </div>
  )
}
