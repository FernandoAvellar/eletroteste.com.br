import Image from 'next/image'
import Link from 'next/link'

export default function ContatosPage() {
  return (
    <>
      <div className="container mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:p-0">
        <div className="overflow-hidden rounded border-4 border-solid border-white bg-white p-4">
          <Image
            className="mb-4 w-full"
            src="/contato_telefone.jpg"
            width={350}
            height={254}
            alt="Imagem"
          ></Image>
          <h3 className="mb-2 text-left text-2xl">Telefones</h3>
          <div>
            <p>Estamos prontos para atendê-los:</p>
            <Link
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
              href="tel: 03534712123"
            >
              <p>(35) 3471-2123</p>
            </Link>
            <Link
              href="tel: 03534714244"
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
            >
              <p>(35) 3471-4244</p>
            </Link>
            <Link
              href="https://wa.me/5535988054435"
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
              target="_blank"
            >
              <p>(35) 98805-4435 (WhatsApp)</p>
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded border-4 border-solid border-white bg-white p-4">
          <Image
            className="mb-4 w-full"
            src="/contato_email.jpg"
            width={350}
            height={254}
            alt="Imagem"
          ></Image>
          <h3 className="mb-2 text-left text-2xl">Emails</h3>
          <div className="text-left">
            <p>
              Caso tenha interesse por um de nosssos produtos e/ou gostaria de
              mais informações:
            </p>
            <Link
              href="mailto:eletrovendas@eletroteste.com.br"
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
            >
              <p>eletrovendas@eletroteste.com.br</p>
            </Link>
            <br></br>
            <p>Caso seja fornecedor:</p>
            <Link
              href="mailto:eletrocompras@eletroteste.com.br"
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
            >
              eletrocompras@eletroteste.com.br
            </Link>
            <br></br>
            <br></br>
            <p>Caso queira enviar seu Curriculo:</p>
            <Link
              href="mailto:rheletro@eletroteste.com.br"
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
            >
              <p>rheletro@eletroteste.com.br</p>
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded border-4 border-solid border-white bg-white p-4">
          <Image
            className="mb-4 w-full"
            src="/contato_endereco.jpg"
            width={350}
            height={254}
            alt="Imagem"
          ></Image>
          <h3 className="mb-2 text-left text-2xl">Endereço</h3>
          <div>
            <div>
              <Link
                href="https://www.google.com/maps/place/ELETROTESTE+IND+E+COM+LTDA/@-22.246412,-45.708897,15z/data=!4m6!3m5!1s0x94cba2fdceb70c69:0x3d823c2cfddf278e!8m2!3d-22.246412!4d-45.708897!16s%2Fg%2F1tp28ctj?hl=pt-BR&entry=ttu"
                target="_blank"
                className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
              >
                <br></br>
                <p>
                  Rua José Pinto Vilela, 474 - Centro - Santa Rita do Sapucaí -
                  MG - CEP: 37540-000
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
