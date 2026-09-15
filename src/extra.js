// Preguntas originales: enlaces de lectura, no reproducción de bancos de examen.
const refs=[
  "https://www.gob.mx/agn/es/articulos/de-mexico-para-el-mundo-la-patente-de-la-television-a-color-de-guillermo-gonzalez-camarena",
  "https://www.gob.mx/agn/es/articulos/agnrecuerda-la-primera-transmision-televisiva-a-color?idiom=es",
  "https://www.nobelprize.org/prizes/chemistry/1995/9060-the-nobel-prize-in-chemistry-1995-1995-2/",
  "https://centromariomolina.org/mario-molina/nobel/",
  "https://www.gob.mx/cultura/prensa/juventino-rosas-autor-de-sobre-las-olas-lego-mas-de-90-piezas-musicales?idiom=es-MX",
  "https://www.gob.mx/cultura/prensa/manuel-m-ponce-enriquecio-la-musica-de-concierto-con-la-expresion-popular-mexicana-y-el-romanticismo-europeo",
  "https://ich.unesco.org/es/RL/la-pirekua-canto-tradicional-de-los-p-urhepechas-00398?RL=00398",
  "https://portales.sre.gob.mx/acervo/images/libros/can2_5.pdf",
  "https://www.gob.mx/sre/articulos/mexico-historico-promotor-del-desarme-nuclear-y-la-no-proliferacion",
  "https://www.gob.mx/conanp/documentos/reserva-de-la-biosfera-mariposa-monarca-209460",
  "https://www.gob.mx/semarnat/acciones-y-programas/acerca-de-los-santuarios-de-la-mariposa-monarca"
];
const rows=[
  [
    8,
    "Ciencia",
    "¿Qué inventor mexicano patentó un adaptador cromoscópico para televisión?",
    "Guillermo González Camarena|Alfonso García Robles|Manuel M. Ponce|Juventino Rosas",
    "González Camarena desarrolló tecnología para transmitir imágenes en color.",
    0
  ],
  [
    8,
    "Ciencia",
    "¿En qué año solicitó González Camarena su patente mexicana de televisión en color?",
    "1940|1810|1910|1995",
    "El expediente de patente corresponde a 1940.",
    0
  ],
  [
    8,
    "Ciencia",
    "¿Qué canal realizó la primera transmisión televisiva a color en México en 1963?",
    "Canal 5|Canal 22|Canal 11|Canal 40",
    "El AGN sitúa esa transmisión el 21 de enero de 1963 por Canal 5.",
    1
  ],
  [
    8,
    "Ciencia",
    "¿En qué disciplina recibió Mario Molina el Premio Nobel de 1995?",
    "Química|Literatura|Medicina|Física",
    "Compartió el Nobel de Química con Paul Crutzen y F. Sherwood Rowland.",
    2
  ],
  [
    8,
    "Ciencia",
    "¿Qué capa atmosférica ayudaron a proteger las investigaciones de Mario Molina?",
    "La capa de ozono|La corteza terrestre|El manto terrestre|La ionosfera de Marte",
    "Su investigación explicó procesos químicos que destruyen el ozono.",
    2
  ],
  [
    8,
    "Ciencia",
    "¿Qué sustancias estudió Molina por su efecto sobre el ozono?",
    "Clorofluorocarbonos (CFC)|Cloruro de sodio de mesa|Almidón|Celulosa",
    "Los CFC pueden liberar cloro que interviene en la destrucción del ozono.",
    3
  ],
  [
    7,
    "Música",
    "¿Quién compuso el vals Sobre las olas?",
    "Juventino Rosas|Manuel M. Ponce|Jaime Nunó|Carlos Fuentes",
    "Sobre las olas es una de las obras más conocidas de Rosas.",
    4
  ],
  [
    7,
    "Música",
    "¿A qué género pertenece Sobre las olas?",
    "Vals|Ópera|Corrida taurina|Novela",
    "Se trata de un vals, no de una obra literaria.",
    4
  ],
  [
    7,
    "Música",
    "¿Quién compuso Estrellita?",
    "Manuel M. Ponce|José Clemente Orozco|Juan Rulfo|Guillermo González Camarena",
    "Ponce es una figura de la música de concierto mexicana.",
    5
  ],
  [
    7,
    "Música",
    "¿En qué estado nació Manuel M. Ponce?",
    "Zacatecas|Sonora|Yucatán|Chiapas",
    "Nació en Fresnillo, Zacatecas.",
    5
  ],
  [
    7,
    "Tradiciones",
    "¿A qué pueblo pertenece el canto tradicional llamado pirekua?",
    "P’urhépecha|Rarámuri|Seri|Maya peninsular",
    "La UNESCO reconoce la pirekua como canto tradicional p’urhépecha.",
    6
  ],
  [
    7,
    "Tradiciones",
    "¿Con qué estado se asocia la pirekua?",
    "Michoacán|Baja California|Nuevo León|Campeche",
    "Es una tradición de las comunidades p’urhépechas de Michoacán.",
    6
  ],
  [
    7,
    "Tradiciones",
    "¿En qué año inscribió la UNESCO la pirekua en su lista representativa?",
    "2010|1821|1940|1967",
    "La inscripción patrimonial se realizó en 2010.",
    6
  ],
  [
    6,
    "Diplomacia",
    "¿Qué mexicano compartió el Nobel de la Paz de 1982 con Alva Myrdal?",
    "Alfonso García Robles|Mario Molina|Octavio Paz|Guillermo González Camarena",
    "García Robles fue reconocido por su trabajo en favor del desarme.",
    7
  ],
  [
    6,
    "Diplomacia",
    "¿Qué armas busca proscribir el Tratado de Tlatelolco?",
    "Armas nucleares|Herramientas agrícolas|Instrumentos musicales|Satélites meteorológicos",
    "El tratado impulsa una zona libre de armas nucleares.",
    8
  ],
  [
    6,
    "Diplomacia",
    "¿Qué región comprende el Tratado de Tlatelolco?",
    "América Latina y el Caribe|Sólo Europa|Sólo Asia central|Únicamente Oceanía",
    "El acuerdo regional es un instrumento de desarme nuclear.",
    8
  ],
  [
    6,
    "Diplomacia",
    "¿En qué año se abrió a firma el Tratado de Tlatelolco?",
    "1967|1810|1917|1995",
    "La ceremonia tuvo lugar en la Ciudad de México el 14 de febrero de 1967.",
    8
  ],
  [
    6,
    "Diplomacia",
    "¿Qué organismo regional está ligado al Tratado de Tlatelolco?",
    "OPANAL|FIFA|OPEP|OTAN",
    "OPANAL es el organismo para la proscripción de las armas nucleares en América Latina y el Caribe.",
    8
  ],
  [
    8,
    "Naturaleza",
    "¿Qué dos estados comparten la Reserva de la Biosfera Mariposa Monarca?",
    "Michoacán y Estado de México|Sonora y Sinaloa|Yucatán y Campeche|Puebla y Veracruz",
    "La reserva protege sitios de hibernación de la monarca en ambos estados.",
    9
  ],
  [
    8,
    "Naturaleza",
    "¿Qué árboles caracterizan los bosques de los santuarios de la monarca?",
    "Oyamel y pino|Manglar rojo y palma de coco|Cacao y papaya|Olivo y dátil",
    "Los bosques templados de oyamel y pino ofrecen refugio invernal.",
    10
  ]
];
export const extraQuestions=rows.map(([level,topic,text,options,explanation,ref],i)=>({id:`b${i+1}`,level,topic,text,options:options.split('|'),explanation,source:refs[ref]}));
