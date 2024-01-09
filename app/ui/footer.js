import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-4 bg-sky-600">
      <div className="container mx-auto grid max-w-6xl justify-center p-3 md:grid-cols-4">
        <div className="flex flex-col gap-2 py-8 pt-0 text-center text-xs text-white md:py-1 md:text-left">
          <strong className="text-sm">Contatos:</strong>
          <span>(35)3471-2123</span>
          <span>(35)3471-4244</span>
          <span>eletroteste@eletroteste.com.br</span>
          <a
            href="https://wa.me/5535988054435"
            target="_blank"
            className="hover:scale-102 flex flex-row items-center transition duration-700 ease-in-out hover:-translate-y-1"
          >
            <Image
              src="/whatsapp.png"
              alt='alt="Logo do Whatsapp'
              width={31}
              height={31}
            ></Image>
            <span className="ml-2 text-xs underline">
              Fale conosco no Whatsapp
            </span>
          </a>
          <div className="flex flex-row items-center justify-center lg:justify-start">
            <a
              href="https://www.facebook.com/eletrotestebrasil"
              target="_blank"
              className="hover:scale-102 transition duration-700 ease-in-out hover:-translate-y-1"
            >
              <Image
                src="/facebook.png"
                alt='alt="Logo do Facebook'
                width={31}
                height={31}
              ></Image>
            </a>
            <a
              href="https://www.instagram.com/eletroteste/"
              target="_blank"
              className="hover:scale-102 m-2 transition duration-700 ease-in-out hover:-translate-y-1"
            >
              <Image
                src="/instagram.png"
                alt='alt="Logo do Instagram'
                width={31}
                height={31}
              ></Image>
            </a>
            <a
              href="https://www.linkedin.com/company/eletrotestebrasil"
              target="_blank"
              className="hover:scale-102 transition duration-700 ease-in-out hover:-translate-y-1"
            >
              <Image
                src="/linkedin.png"
                alt='alt="Logo do Linkedin'
                width={31}
                height={31}
              ></Image>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-8 pt-0 text-center text-xs text-white md:py-1 md:text-left">
          <strong className="text-sm">Aceitamos:</strong>
          <span>Todos cartões de crédito</span>
          <span>Financiamento PROGER</span>
          <span>FINAME e Cartão BNDES</span>
          <div className="flex flex-row justify-center md:justify-start">
            <a
              href="https://www.cartaobndes.gov.br/cartaobndes/"
              target="_blank"
              className="hover:scale-102 transition duration-700 ease-in-out hover:-translate-y-1"
            >
              <Image
                src="/cartao-bndes.png"
                alt='alt="Logo do cartão BNDES'
                width={100}
                height={86}
              ></Image>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-8 pt-0 text-center text-xs text-white md:py-1 md:text-left">
          <strong className="text-sm">Endereço:</strong>
          <span>Rua José Pinto Vilela, 474 - Centro</span>
          <span>Santa Rita do Sapucaí - MG</span>
          <span>37540-000</span>
        </div>
        <div className="flex flex-col gap-2 py-1 pt-0 text-center text-xs text-white md:py-1 md:text-left">
          <strong className="text-sm">Horário de funcionamento:</strong>
          <span className="underline">Segunda-feira a quinta-feira:</span>
          <span>07:00h às 12:00h - 13:25h às 17:25h</span>
          <span className="underline">Sexta-feira:</span>
          <span>07:00h às 12:00h - 13:25h às 16:25h</span>
        </div>
      </div>
      <div className="py-1 text-center text-sm text-white md:py-2">
        &copy;Copyright Eletroteste Ind. e Com. LTDA
      </div>
    </footer>
  )
}
