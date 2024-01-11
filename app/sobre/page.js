import Image from 'next/image'

export default function SobrePage() {
  return (
    <>
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center p-8 md:p-12">
        <div className="-mt-8 mb-2 flex h-full max-w-6xl items-center justify-between gap-8 md:-mt-12 md:gap-16 lg:gap-28">
          <div>
            <Image
              src="/feitonobrasil.png"
              width={300}
              height={225}
              alt="Imagem"
            ></Image>
          </div>
          <div>
            <Image
              src="/iso9000.png"
              width={250}
              height={250}
              alt="Imagem"
            ></Image>
          </div>
          <div>
            <Image
              className="overflow-hidden rounded-2xl"
              src="/sindvel.png"
              width={300}
              height={225}
              alt="Imagem"
            ></Image>
          </div>
        </div>
        <div className="flex h-10 w-full items-center justify-center rounded bg-sky-600">
          <p className="text-lg font-medium text-white">A EMPRESA</p>
        </div>
        <div className="h-fill flex w-full flex-col rounded bg-white p-4 text-sm text-gray-900">
          <p>
            Fundada em 1988 pelo atual diretor, Waldir Reis, a ELETROTESTE
            fornece equipamentos especiais de teste e medidas para as companhias
            de eletricidade, produção de petróleo, engenharia de campo e outras.
          </p>
          <br></br>
          <p>
            Sempre atenta as novas tecnologias e tomando as diversas normas
            (IEC, ABNT, ASTM, JIS, UNE, BS, CEI, VDE, etc.) como ponto de
            referência, desenvolve e produz instrumentos de precisão para
            análise da operação de:
          </p>
          <br></br>
          <ul className="pl-10">
            <li>Disjuntores de potência;</li>
            <li>Relés de proteção;</li>
            <li>Geradores;</li>
            <li>Transformadores;</li>
            <li>Ensaios de isolação;</li>
            <li>Testes de propriedades químicas e isolantes de fluídos.</li>
          </ul>
          <br></br>
          <p>
            Atualmente produz também equipamentos para estabelecer requisitos de
            compatibilidade eletromagnética EMC na simulação de teste de impulso
            em análise de equipamentos de telecomunicações além de fontes de
            alimentação AC e DC para laboratórios.
          </p>
        </div>
        <br></br>
        <div className="flex h-10 w-full items-center justify-center rounded bg-sky-600">
          <p className="text-lg font-medium text-white">MISSÃO</p>
        </div>
        <div className="h-fill flex w-full flex-col rounded bg-white p-4 text-sm text-gray-900">
          <p>
            &quot;Ser reconhecida como uma empresa de excelência por
            desenvolver, produzir e comercializar produtos de alta qualidade em
            todos os seus segmentos e se expandir no mercado, com o compromisso
            de aperfeiçoamento contínuo de seus produtos e desenvolvimento
            sustentável.&quot;
          </p>
        </div>
        <br></br>
        <div className="flex h-10 w-full items-center justify-center rounded bg-sky-600">
          <p className="text-lg font-medium text-white">VISÃO</p>
        </div>
        <div className="h-fill flex w-full flex-col rounded bg-white p-4 text-sm text-gray-900">
          <p>
            &quot;Ser uma empresa líder de mercado e desenvolvimento tecnológico
            de produtos para testes e medidas de sistemas elétricos, segurança
            elétrica e controle de qualidade tendo como compromisso o bom
            relacionamento com seus colaboradores e clientes.&quot;
          </p>
        </div>
        <br></br>
        <div className="flex h-10 w-full items-center justify-center rounded bg-sky-600">
          <p className="text-lg font-medium text-white">VALORES</p>
        </div>
        <div className="h-fill flex w-full flex-col rounded bg-white p-4 text-sm text-gray-900">
          <p>
            &quot;Respeito, Dedicação e Responsabilidade são os princípios que
            regem a ELETROTESTE.&quot;
          </p>
        </div>
        <br></br>
        <div className="flex h-10 w-full items-center justify-center rounded bg-sky-600">
          <p className="text-lg font-medium text-white">
            POLÍTICA DA QUALIDADE
          </p>
        </div>
        <div className="h-fill flex w-full flex-col rounded bg-white p-4 text-sm text-gray-900">
          <p>
            &quot;Desenvolver, produzir e comercializar equipamentos de alta
            qualidade nas áreas em que atuamos através da melhoria contínua da
            eficácia do sistema de gestão da qualidade visando a satisfação dos
            clientes e colaboradores, inovação constante e sustentabilidade nos
            negócios.&quot;
          </p>
        </div>
        <br></br>
        <div className="flex h-10 w-full items-center justify-center rounded bg-sky-600">
          <p className="text-lg font-medium text-white">DESENVOLVIMENTO</p>
        </div>
        <div className="h-fill flex w-full flex-col rounded bg-white p-4 text-sm text-gray-900">
          <p>
            Todos os produtos de nossa fabricação tem desenvolvimento 100%
            nacional. Os softwares utilizados nos microcontroladores, os
            circuitos analógicos, lineares e placas de hardwares, todos
            desenvolvidos e programados pela ELETROTESTE.
          </p>
        </div>
        <br></br>
        <div className="flex h-10 w-full items-center justify-center rounded bg-sky-600">
          <p className="text-lg font-medium text-white">
            CONTROLE DE QUALIDADE
          </p>
        </div>
        <div className="h-fill flex w-full flex-col rounded bg-white p-4 text-sm text-gray-900">
          <p>
            O C.Q da ELETROTESTE monitora todo o processo produtivo e antes de
            ser liberado para o cliente, cada equipamento é submetido
            individualmente a 48 horas de funcionamento contínuo e uma sequência
            de inspeção, testes e medidas, gerando um relatório que acompanhe o
            manual de utilização.
          </p>
          <br></br>
          <p>
            Ao detectar possíveis falhas ou pontos de melhorias, busca
            juntamente com o cliente, a adequação das características técnicas e
            operacionais dos equipamentos.
          </p>
          <br></br>
          <p>
            Os equipamentos de medidas utilizados na calibração e testes de
            nossos produtos são de alta qualidade e rastreados por órgãos
            qualificados.
          </p>
        </div>
      </div>
    </>
  )
}
