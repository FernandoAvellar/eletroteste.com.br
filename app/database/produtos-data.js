const produtos = [
  {
    id: '01',
    titulo: 'Carga artificial ou Carga fantasma',
    modelo: 'PHL-03',
    imagemRef: '/phl03.jpg',
    pdfRef: '/phl03.pdf',
    categoria: ['reles'],
    conteudo:
      'Carga trifásica, utilizada na calibração de medidores de energia, mono ou trifásicos.',
  },
  {
    id: '02',
    titulo: 'Carga resistiva',
    modelo: 'CR-77',
    imagemRef: '/cr77.jpg',
    pdfRef: '/cr77.pdf',
    categoria: ['bancoResistores'],
    conteudo: 'Cargas puramente resistivas cosFi=0°: 70A X 120V e 140A X 60V.',
  },
  {
    id: '03',
    titulo: 'Carga resistiva',
    modelo: 'TCR-23',
    imagemRef: '/tcr23.jpg',
    pdfRef: '/tcr23.pdf',
    categoria: ['telecom'],
    conteudo:
      'Carga resistiva para ensaio de equipamentos de telecomunicações de acordo com as resoluções da ANATEL para teste de risco contra incêndio.',
  },
  {
    id: '04',
    titulo: 'Carga resistiva',
    modelo: 'CR-15',
    imagemRef: '/cr15.jpg',
    pdfRef: '/cr15.pdf',
    categoria: ['bancoResistores'],
    conteudo:
      'Para qualquer aplicação onde se faz necessário corrente limitada através de elementos puramente resistivos.',
  },
  {
    id: '05',
    titulo: 'Contador de tempo / Cronômetro',
    modelo: 'ET-42W',
    imagemRef: '/et42w.jpg',
    pdfRef: '/et42w.pdf',
    categoria: ['disjuntores'],
    conteudo:
      'Cronometragem do tempo de abertura e fechamento de relés, contatores, etc.',
  },
  {
    id: '06',
    titulo: 'Fonte de alimentação estabilizada',
    modelo: 'FET',
    imagemRef: '/fet.jpg',
    pdfRef: '/fet.pdf',
    categoria: ['outros'],
    conteudo:
      'Fonte de alimentação CC linear, estabilizada e variável. Possui medidores de precisão integrado. Para uso em laboratório ou com fontes de potencia com alimentação trifásica.',
  },
  {
    id: '07',
    titulo: 'Fonte de alta corrente',
    modelo: 'TC-3000W',
    imagemRef: '/tc3000w.jpg',
    pdfRef: '/tc3000w.pdf',
    categoria: ['trafo', 'reles'],
    conteudo:
      'Fonte CA de altas corrente para teste de disjuntores e de relação e excitação de TCs.',
  },
  {
    id: '08',
    titulo: 'Gerador de pertubações eletromagnéticas',
    modelo: 'TR-601T',
    imagemRef: '/tr601t.jpg',
    pdfRef: '/tr601t.pdf',
    categoria: ['telecom'],
    conteudo:
      'Produz perturbações eletromagnéticas de tensão de circuito aberto em frequência industrial nos terminais de energia e de telecomunicações conectados à rede externa.',
  },
  {
    id: '09',
    titulo: 'Ground bond test',
    modelo: 'EGB-2530',
    imagemRef: '/egb2530.jpg',
    pdfRef: '/egb2530.pdf',
    categoria: ['medicos'],
    conteudo:
      'Medidor de resistências de ligação a terra em equipamentos ou dispositivos. Usado para verificar a integridade da conexão a terra em 25A e 30A.',
  },
  {
    id: '10',
    titulo: 'Hipot CC ou CA',
    modelo: 'HP-5432',
    imagemRef: '/hp5432.jpg',
    pdfRef: '/hp5432.pdf',
    categoria: ['isolamento'],
    conteudo:
      'Fonte de alta tensão CC ou CA com saída de 0 a 10, 20, 30 ou 40 KVcc OU saída de 0 a 10KVca ou 20KVca.',
  },
  {
    id: '11',
    titulo: 'Hipot CA',
    modelo: 'EH-510P',
    imagemRef: '/eh510p.jpg',
    pdfRef: '/eh510p.pdf',
    categoria: ['isolamento', 'medicos', 'telecom', 'motores'],
    conteudo:
      'Fonte de alta tensão CA 2KV, 3KV, 3.5KV, 5KV ou 7.5KV / 5mA, 10mA, 20mA ou 30mA.',
  },
  {
    id: '12',
    titulo: 'Hipot CA',
    modelo: 'EH-4325C',
    imagemRef: '/eh4325c.jpg',
    pdfRef: '/eh4325c.pdf',
    categoria: ['isolamento'],
    conteudo: 'Fonte de alta tensão CA com saída de 35KV x 10mA.',
  },
  {
    id: '13',
    titulo: 'Hipot CA de alta potência',
    modelo: 'EH-5789P',
    imagemRef: '/eh5789p.jpg',
    pdfRef: '/eh5789p.pdf',
    categoria: ['isolamento'],
    conteudo: 'Fonte CA de alta tensão e alta potência.',
  },
  {
    id: '14',
    titulo: 'Hipot CC',
    modelo: 'EH-510PCC',
    imagemRef: '/eh510pcc.jpg',
    pdfRef: '/eh510pcc.pdf',
    categoria: ['isolamento'],
    conteudo: 'Fonte de alta tensão DC 2KV, 3.5KV, 5KV, 10KV ou 12KV / 5mA.',
  },
  {
    id: '15',
    titulo: 'Hipot CC',
    modelo: 'EH-6005C',
    imagemRef: '/eh6005c.jpg',
    pdfRef: '/eh6005c.pdf',
    categoria: ['isolamento'],
    conteudo: 'Fonte de alta tensão CC 50KV/5mA ou 60KV/5mA.',
  },
  {
    id: '16',
    titulo: 'Hipot CC',
    modelo: 'EH-12005C',
    imagemRef: '/eh12005c.jpg',
    pdfRef: '/eh12005c.pdf',
    categoria: ['isolamento'],
    conteudo: 'Fonte de alta tensão CC com saída diferencial de 120KVcc.',
  },
  {
    id: '17',
    titulo: 'Medidor de ângulo de fase / Fasímetro',
    modelo: 'MA-360',
    imagemRef: '/ma360.jpg',
    pdfRef: '/ma360.pdf',
    categoria: ['fasimetros'],
    conteudo:
      'Medidas de ângulo de fase de alta precisão entre tensões e/ou correntes nos ensaios de relés, medidores de energia e potência e sincronoscópios.',
  },
  {
    id: '18',
    titulo: 'Medidor de corrente de fuga CC',
    modelo: 'MCF-01',
    imagemRef: '/mcf01.jpg',
    pdfRef: '/mcf01.pdf',
    categoria: ['telecom'],
    conteudo:
      'Medidas de correntes de fuga CC em tensões de serviços. Verifica requisito de proteção contra choques elétricos em equipamentos elétricos, eletrônicos ou de telecomunicações.',
  },
  {
    id: '19',
    titulo: 'Medidor de corrente de fuga CA',
    modelo: 'MCF-02',
    imagemRef: '/mcf02.jpg',
    pdfRef: '/mcf02.pdf',
    categoria: ['medicos', 'telecom'],
    conteudo:
      'Medidas de correntes de fuga CA em tensões de serviços. Verifica requisito de proteção contra choques elétricos em equipamentos elétricos, eletrônicos ou de telecomunicações.',
  },
  {
    id: '20',
    titulo: 'Medidor de relação de espiras de transformador',
    modelo: 'TTR-01W',
    imagemRef: '/ttr01w.jpg',
    pdfRef: '/ttr01w.pdf',
    categoria: ['trafo'],
    conteudo:
      'Para medida de K=Ns/Np=Vs/Vp ou 1/K=Np/Ns=Vp/Vs em transformadores.',
  },
  {
    id: '21',
    titulo: 'Medidor de rigidez dielétrica de óleo isolante',
    modelo: 'TRZ-60',
    imagemRef: '/trz60.jpg',
    pdfRef: '/trz60.pdf',
    categoria: ['oleos'],
    conteudo:
      'Análise da rigidez dielétrica do óleo isolante, satisfazendo grande variedade de normas existentes (ASTM, VDE e outras).',
  },
  {
    id: '22',
    titulo: 'Medidor de simultaneidade',
    modelo: 'MS-03',
    imagemRef: '/ms03.jpg',
    pdfRef: '/ms03.pdf',
    categoria: ['disjuntores'],
    conteudo:
      'Registra o tempo de atuação de disjuntores trifásicos para verificar a sua simultaneidade.',
  },
  {
    id: '23',
    titulo: 'Microhmímetro',
    modelo: 'MR-10W',
    imagemRef: '/mr10w.jpg',
    pdfRef: '/mr10w.pdf',
    categoria: ['baixaResistencia', 'motores', 'trafo'],
    conteudo:
      'Mede com precisão resistências de valores muito baixo (1µohms), como resistência de contato de disjuntores, seccionadores e outras.',
  },
  {
    id: '24',
    titulo: 'Surge test de impulso',
    modelo: 'ST-7350',
    imagemRef: '/st7350.jpg',
    pdfRef: '/st7350.pdf',
    categoria: ['telecom'],
    conteudo:
      'Estabelece requisitos de compatibilidade eletromagnética EMC. Simula teste de impulso com tensões de pico de 1.5 a 4KV nas entradas de energia elétrica e de telecomunicações.',
  },
  {
    id: '25',
    titulo: 'Surge test ressonante',
    modelo: 'ST-2530',
    imagemRef: '/st2530.jpg',
    pdfRef: '/st2530.pdf',
    categoria: ['motores'],
    conteudo:
      'Descobre defeitos em motores, geradores e bobinas pelo método da comparação. Analisa a condição operacional de um motor (bobina) verificando se existe curto entre espiras. Também faz o ensaio entre bobinas e entre as bobinas e a carcaça.',
  },
  {
    id: '26',
    titulo: 'Unidade de ensaio de relés',
    modelo: 'UEE-110D/S',
    imagemRef: '/uee110ds.jpg',
    pdfRef: '/uee110ds.pdf',
    categoria: ['disjuntores', 'reles'],
    conteudo: 'Para calibração de relés de corrente/tensão.',
  },
  {
    id: '27',
    titulo: 'Unidade de ensaio de relés trifásicos',
    modelo: 'UEE-3F',
    imagemRef: '/uee3f.jpg',
    pdfRef: '/uee3f.pdf',
    categoria: ['fasimetros', 'reles'],
    conteudo:
      'Para calibração de relés trifásicos de ângulo, corrente e tensão.',
  },
  {
    id: '28',
    titulo: 'Unidade de ensaio de relés',
    modelo: 'UEE-400',
    imagemRef: '/uee400.jpg',
    pdfRef: '/uee400.pdf',
    categoria: ['reles'],
    conteudo:
      'Para calibração de disjuntores e relés térmicos (200A, 300A ou 400A).',
  },
  {
    id: '29',
    titulo: 'Unidade de ensaio de relés',
    modelo: 'VMA-200',
    imagemRef: '/vma200.jpg',
    pdfRef: '/vma200.pdf',
    categoria: ['reles'],
    conteudo: 'Para calibração de relés direcionais.',
  },
]

const categorias = [
  { cat: 'all', name: 'Todos' },
  { cat: 'baixaResistencia', name: 'Baixas Resistências / SPDA' },
  { cat: 'bancoResistores', name: 'Banco de Resistores' },
  { cat: 'medicos', name: 'Médicos' },
  { cat: 'disjuntores', name: 'Disjuntores' },
  { cat: 'fasimetros', name: 'Fasímetros' },
  {
    cat: 'isolamento',
    name: 'Isolação elétrica/ Dielétricos/ EPIs e EPCs',
  },
  { cat: 'motores', name: 'Motores Elétricos' },
  { cat: 'oleos', name: 'Óleos Isolantes' },
  { cat: 'reles', name: 'Reles' },
  { cat: 'telecom', name: 'Telecomunicações' },
  { cat: 'trafo', name: 'Transformadores' },
  { cat: 'outros', name: 'Outros' },
]

module.exports = {
  produtos,
  categorias,
}
