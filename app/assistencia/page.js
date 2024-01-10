import Link from 'next/link'

export default function AssistenciaPage() {
  return (
    <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center p-4">
      <div className="flex h-10 w-full items-center justify-center rounded bg-sky-600">
        <p className="text-xs font-medium text-white md:text-lg">
          PROCEDIMENTOS PARA MANUTENÇÃO/CALIBRAÇÃO
        </p>
      </div>
      <div className="h-fill flex w-full flex-col items-start rounded bg-white p-4 text-sm text-gray-900">
        <p className="mb-1 font-semibold underline">
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
      <div className="h-fill flex w-full flex-col items-start rounded bg-white p-4 text-sm text-gray-900">
        <p className="mb-1 font-semibold underline">
          Como enviar o equipamento:
        </p>
        <p>
          Devido a legislação vigente, favor enviar o equipamento com uma nota
          fiscal de &quot;Remessa para Conserto&quot; ou uma
          &quot;Declaração/Carta Fiscal&quot; no caso de sua empresa estar
          isenta de emitir nota fiscal, mencionando que o equipamento segue para
          conserto com posterior retorno.
        </p>
        <br></br>
        <div>
          <p>
            Para agilizar o processo de análise, favor seguir as recomendações
            abaixo:
          </p>
          <br></br>
          <ol className="list-decimal p-4">
            <li>
              Enviar o equipamento em embalagem <u>adequada e segura</u> para
              evitar danos no transporte;
            </li>
            <li>
              Enviar junto com o equipamento a descrição do defeito apresentado
              e os dados do responsável pelo envio (nome, telefone e e-mail);
            </li>
            <li>O frete de ida e volta será por conta do cliente.</li>
            <li>
              Para emitir a Nota Fiscal de remessa para conserto, utilizar um
              dos seguintes dados abaixo:
              <ul className="list-none text-start">
                <li>
                  CFOP = 5.915: Remessa para conserto (empresa dentro do estado
                  de Minas Gerais)
                </li>
                <li>
                  CFOP = 6.915: Remessa para conserto (empresa situada fora do
                  estado Minas Gerais)
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className="h-fill flex w-full flex-col items-start rounded bg-white p-4 text-sm text-gray-900">
        <p className="mb-1 font-semibold underline">Dados da empresa:</p>
        <p>
          <u>Razão Social:</u> Eletroteste Indústria e Comércio Ltda.
          <br></br>
          <u>CNPJ:</u> 25.390.832/0001-92
          <br></br>
          <u>Insc. Estadual:</u>
          596.581.1550090
          <br></br>
          <u>Endereço:</u> Rua José Pinto Vilela, 474: Centro. CEP: 37.540-000
          Santa Rita do Sapucaí - MG
        </p>
      </div>
      <div className="h-fill flex w-full flex-col items-start rounded bg-white p-4 text-sm text-gray-900">
        <p className="mb-1 font-semibold underline">Prazos:</p>
        <p>
          Uma análise será feita e em até dez dias úteis após a entrada do
          equipamento e um orçamento será enviado para aprovação do cliente.
        </p>
      </div>
      <div className="h-fill flex w-full flex-col items-start rounded bg-white p-4 text-sm text-gray-900">
        <p className="mb-1 font-semibold underline">Condições de pagamento:</p>
        <p>
          Não temos um preço fixo de reparo dos produtos, cada caso é analisado
          individualmente e o orçamento é feito de acordo com os defeitos
          diagnosticados. &nbsp;
          <u>
            Nenhum serviço será executado sem a aprovação prévia do cliente.
          </u>
        </p>
      </div>
    </div>
  )
}
