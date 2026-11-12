/*
  Música de abertura e letra sincronizada.
  Cada linha tem `t` = segundo em que ela começa a ser cantada.
  Para refinar os tempos: abra o site com ?sync no endereço, abra o envelope,
  toque em "letra" e use "marcar" no início de cada linha; no fim sai a lista pronta.
*/
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const TRACK = {
  src: `${base}/audio/preciso-dizer-que-te-amo.mp3`,
  title: "Preciso Dizer que Te Amo",
  artist: "Cazuza e Bebel Gilberto",
  duration: 263,
  cover: `${base}/img/capa-red-hot-rio.jpg`,
};

export const LYRICS = [
  { t: 10.4, text: "Quando a gente conversa" },
  { t: 16.8, text: "Contando casos besteiras" },
  { t: 22.2, text: "Tanta coisa em comum" },
  { t: 28.6, text: "Deixando escapar segredos" },
  { t: 33.7, text: "E eu nem sei que hora dizer" },
  { t: 38.9, text: "Me dá um medo (que medo)" },
  { t: 42.6, text: "É que eu preciso dizer que eu te amo" },
  { t: 47.5, text: "Te ganhar ou perder sem engano" },
  { t: 52.3, text: "É eu preciso dizer que eu te amo" },
  { t: 56.5, text: "Tanto" },
  { t: 62.4, text: "E até o tempo passa arrastado" },
  { t: 67.0, text: "Só pra eu ficar do teu lado" },
  { t: 71.3, text: "Você me chora dores de outro amor" },
  { t: 78.0, text: "Se abre e acaba comigo" },
  { t: 83.0, text: "E nessa novela eu não quero ser teu amigo" },
  { t: 89.3, text: "É que eu preciso dizer que eu te amo" },
  { t: 94.0, text: "Te ganhar ou perder sem engano" },
  { t: 98.7, text: "Eu preciso dizer que eu te amo" },
  { t: 101.8, text: "Tanto" },
  { t: 105.7, text: "Eu já não sei se eu tô misturando" },
  { t: 110.5, text: "Ah, eu perco o sono" },
  { t: 113.4, text: "Lembrando em cada riso teu qualquer bandeira" },
  { t: 125.0, text: "Fechando e abrindo a geladeira a noite inteira" },
  { t: 147.0, text: "É que eu preciso dizer que eu te amo" },
  { t: 151.5, text: "Te ganhar ou perder sem engano" },
  { t: 156.3, text: "E eu preciso dizer que eu te amo" },
  { t: 159.5, text: "Tanto" },
  { t: 166.9, text: "Quando a gente conversa" },
  { t: 173.8, text: "Contando casos besteiras" },
  { t: 179.5, text: "Tanta coisa em comum" },
  { t: 182.4, text: "Deixando escapar segredos" },
  { t: 187.2, text: "Eu não sei que hora dizer" },
  { t: 192.0, text: "Tenho medo" },
  { t: 200.7, text: "Que eu preciso dizer que te amo" },
  { t: 205.3, text: "Te ganhar ou perder sem engano" },
  { t: 209.9, text: "É que eu preciso dizer que eu te amo" },
  { t: 213.0, text: "Tanto" },
  { t: 218.8, text: "E até o tempo passa arrastado" },
  { t: 223.3, text: "Só pra eu ficar do teu lado" },
  { t: 227.9, text: "Você me chora dores de outro amor" },
  { t: 234.0, text: "Se abre e acaba comigo" },
  { t: 237.5, text: "E nessa novela eu não quero ser teu amigo" },
  { t: 245.9, text: "Que eu preciso dizer que te amo" },
  { t: 250.0, text: "Te ganhar ou perder sem engano..." },
];
