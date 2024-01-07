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
  {
    id: '10',
    titulo: 'Ground bond test',
    modelo: 'EGB-2530',
    imagemRef: '/egb.jpg',
    pdfRef: '/egb.pdf',
    conteudo:
      'Medidor de resistências de ligação a terra em equipamentos ou dispositivos. Usado para verificar a integridade da conexão a terra em 25A e 30A.',
  },
  {
    id: '12',
    titulo: 'Hipot CC ou CA',
    modelo: 'HP-5432',
    imagemRef: '/hp5432.jpg',
    pdfRef: '/hp5432.pdf',
    conteudo:
      'Fonte de alta tensão CC ou CA com saída de 0 a 10, 20, 30 ou 40 KVcc OU saída de 0 a 10KVca ou 20KVca.',
  },
  {
    id: '13',
    titulo: 'Hipot CA',
    modelo: 'EH-510P',
    imagemRef: '/eh510p.jpg',
    pdfRef: '/eh510p.pdf',
    conteudo:
      'Fonte de alta tensão CA 2KV, 3KV, 3.5KV, 5KV ou 7.5KV / 5mA, 10mA, 20mA ou 30mA.',
  },
  {
    id: '14',
    titulo: 'Hipot CA',
    modelo: 'EH-4325C',
    imagemRef: '/eh4325c.jpg',
    pdfRef: '/eh4325c.pdf',
    conteudo: 'Fonte de alta tensão CA com saída de 35KV x 10mA.',
  },
  {
    id: '15',
    titulo: 'Hipot CA de alta potência',
    modelo: 'EH-5789',
    imagemRef: '/eh5789.jpg',
    pdfRef: '/eh5789.pdf',
    conteudo: 'Fonte CA de alta tensão e alta potência.',
  },
  {
    id: '16',
    titulo: 'Hipot CC',
    modelo: 'EH-510PCC',
    imagemRef: '/eh510pcc.jpg',
    pdfRef: '/eh510pcc.pdf',
    conteudo: 'Fonte de alta tensão DC 2KV, 3.5KV, 5KV, 10KV ou 12KV / 5mA.',
  },
  {
    id: '17',
    titulo: 'Hipot CC',
    modelo: 'EH-6005C',
    imagemRef: '/eh6005c.jpg',
    pdfRef: '/eh6005c.pdf',
    conteudo: 'Fonte de alta tensão CC 50KV/5mA ou 60KV/5mA.',
  },
  {
    id: '18',
    titulo: 'Hipot CC',
    modelo: 'EH-12005C',
    imagemRef: '/eh12005c.jpg',
    pdfRef: '/eh12005c.pdf',
    conteudo: 'Fonte de alta tensão CC com saída diferencial de 120KVcc.',
  },
  {
    id: '19',
    titulo: 'Medidor de ângulo de fase / Fasímetro',
    modelo: 'MA-360',
    imagemRef: '/ma360.jpg',
    pdfRef: '/ma360.pdf',
    conteudo:
      'Medidas de ângulo de fase de alta precisão entre tensões e/ou correntes nos ensaios de relés, medidores de energia e potência e sincronoscópios.',
  },
  {
    id: '20',
    titulo: 'Medidor de corrente de fuga CC',
    modelo: 'MCF-01',
    imagemRef: '/mcf01.jpg',
    pdfRef: '/mcf01.pdf',
    conteudo:
      'Medidas de correntes de fuga CC em tensões de serviços. Verifica requisito de proteção contra choques elétricos em equipamentos elétricos, eletrônicos ou de telecomunicações.',
  },
  {
    id: '21',
    titulo: 'Medidor de corrente de fuga CA',
    modelo: 'MCF-02',
    imagemRef: '/mcf02.jpg',
    pdfRef: '/mcf02.pdf',
    conteudo:
      'Medidas de correntes de fuga CA em tensões de serviços. Verifica requisito de proteção contra choques elétricos em equipamentos elétricos, eletrônicos ou de telecomunicações.',
  },
  {
    id: '22',
    titulo: 'Medidor de relação de espiras de transformador',
    modelo: 'TTR-01W',
    imagemRef: '/ttr01w.jpg',
    pdfRef: '/ttr01w.pdf',
    conteudo:
      'Para medida de K=Ns/Np=Vs/Vp ou 1/K=Np/Ns=Vp/Vs em transformadores.',
  },
]

module.exports = {
  produtos,
}
