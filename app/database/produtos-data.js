const produtos = [
  {
    id: '01',
    titulo: 'Carga artificial ou Carga fantasma',
    modelo: 'PHL-03',
    imagemRef: '/phl.jpg',
    pdfRef: '/phl.pdf',
    conteudo:
      'Carga trifásica, utilizada na calibração de medidores de energia, mono ou trifásicos.',
  },
  {
    id: '02',
    titulo: 'Carga resistiva',
    modelo: 'CR-60',
    imagemRef: '/cr60.jpg',
    pdfRef: '/cr60.pdf',
    conteudo:
      'Carga trifásica, utilizada na calibração de medidores de energia, mono ou Cargas puramente resistivas cosF=0°. Modelos: (CR60): 60/30A em 120V/240V; (CR30): 30/15A em 120/240V e (CR150): 150A em 48V.',
  },
  {
    id: '03',
    titulo: 'Carga resistiva',
    modelo: 'CR-77',
    imagemRef: '/cr77.jpg',
    pdfRef: '/cr77.pdf',
    conteudo: 'Cargas puramente resistivas cosFi=0°: 70A X 120V e 140A X 60V.',
  },
  {
    id: '04',
    titulo: 'Carga resistiva',
    modelo: 'TCR-23',
    imagemRef: '/tcr23.jpg',
    pdfRef: '/tcr23.pdf',
    conteudo:
      'Carga resistiva para ensaio de equipamentos de telecomunicações de acordo com as resoluções da ANATEL para teste de risco contra incêndio.',
  },
  {
    id: '05',
    titulo: 'Carga resistiva',
    modelo: 'CR-15',
    imagemRef: '/cr15.jpg',
    pdfRef: '/cr15.pdf',
    conteudo:
      'Para qualquer aplicação onde se faz necessário corrente limitada através de elementos puramente resistivos.',
  },
  {
    id: '06',
    titulo: 'Contador de tempo / Cronômetro',
    modelo: 'ET-42W',
    imagemRef: '/et42w.jpg',
    pdfRef: '/et42w.pdf',
    conteudo:
      'Cronometragem do tempo de abertura e fechamento de relés, contatores, etc.',
  },
  {
    id: '07',
    titulo: 'Fonte de alimentação estabilizada',
    modelo: 'FET',
    imagemRef: '/fet.jpg',
    pdfRef: '/fet.pdf',
    conteudo:
      'Fonte de alimentação CC linear, estabilizada e variável. Possui medidores de precisão integrado. Para uso em laboratório ou com fontes de potencia com alimentação trifásica.',
  },
  {
    id: '08',
    titulo: 'Fonte de alta corrente',
    modelo: 'TC-3000W',
    imagemRef: '/tc3000w.jpg',
    pdfRef: '/tc3000w.pdf',
    conteudo:
      'Fonte CA de altas corrente para teste de disjuntores e de relação e excitação de TCs.',
  },
  {
    id: '09',
    titulo: 'Gerador de pertubações eletromagnéticas',
    modelo: 'TR-601T',
    imagemRef: '/tr601t.jpg',
    pdfRef: '/tr601t.pdf',
    conteudo:
      'Produz perturbações eletromagnéticas de tensão de circuito aberto em frequência industrial nos terminais de energia e de telecomunicações conectados à rede externa.',
  },
]

module.exports = {
  produtos,
}
