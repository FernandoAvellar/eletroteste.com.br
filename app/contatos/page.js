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
          <h3 className="mb-2 text-left text-2xl">Telefone</h3>
          <p>
            Estamos prontos para atendê-los: <br></br>
            <Link
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
              href="tel: 03534712123"
            >
              (35) 3471-2123
            </Link>
            <br></br>
            <Link
              href="tel: 03534714244"
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
            >
              (35) 3471-4244
            </Link>
            <br></br>
            <Link
              href="https://wa.me/5535988054435"
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
              target="_blank"
            >
              (35) 98805-4435 (WhatsApp)
            </Link>
          </p>
        </div>
        <div className="overflow-hidden rounded border-4 border-solid border-white bg-white p-4">
          <Image
            className="mb-4 w-full"
            src="/contato_email.jpg"
            width={350}
            height={254}
            alt="Imagem"
          ></Image>
          <h3 className="mb-2 text-left text-2xl">Email</h3>
          <p className="text-left">
            Caso tenha interesse por um de nosssos produtos e/ou gostaria de
            mais informações:
            <br></br>
            <a
              href="mailto:eletrovendas@eletroteste.com.br"
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
            >
              eletrovendas@eletroteste.com.br
            </a>
            <br></br>
            <br></br>
            Caso seja fornecedor:
            <br></br>
            <a
              href="mailto:eletrocompras@eletroteste.com.br"
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
            >
              eletrocompras@eletroteste.com.br
            </a>
            <br></br>
            <br></br>
            Caso queira enviar seu Curriculo:
            <br></br>
            <a
              href="mailto:rheletro@eletroteste.com.br"
              className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
            >
              rheletro@eletroteste.com.br
            </a>
          </p>
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
          <p>
            <p>
              <Link
                href="https://www.google.com/maps/place/ELETROTESTE+IND+E+COM+LTDA/@-22.246412,-45.708897,15z/data=!4m6!3m5!1s0x94cba2fdceb70c69:0x3d823c2cfddf278e!8m2!3d-22.246412!4d-45.708897!16s%2Fg%2F1tp28ctj?hl=pt-BR&entry=ttu"
                target="_blank"
                className="text-sm text-blue-500 hover:text-sky-700 hover:underline"
              >
                Rua José Pinto Vilela, 474 - Centro - Santa Rita do Sapucaí - MG
                - CEP: 37540-000
              </Link>
            </p>
          </p>
        </div>
      </div>
    </>
  )
}
