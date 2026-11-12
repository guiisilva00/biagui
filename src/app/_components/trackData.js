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
  { t: 38.2, text: "Quando a gente conversa" },
  { t: 42.9, text: "Contando casos besteiras" },
  { t: 47.4, text: "Tanta coisa em comum" },
  { t: 51.6, text: "Deixando escapar segredos" },
  { t: 56.8, text: "E eu nem sei que hora dizer" },
  { t: 65.3, text: "Me dá um medo (que medo)" },
  { t: 70, text: "É que eu preciso dizer que eu te amo" },
  { t: 74.7, text: "Te ganhar ou perder sem engano" },
  { t: 79.3, text: "É eu preciso dizer que eu te amo" },
  { t: 83.5, text: "Tanto" },
  { t: 88.4, text: "E até o tempo passa arrastado" },
  { t: 92.9, text: "Só pra eu ficar do teu lado" },
  { t: 97.9, text: "Você me chora dores de outro amor" },
  { t: 102.9, text: "Se abre e acaba comigo" },
  { t: 109.9, text: "E nessa novela eu não quero ser teu amigo" },
  { t: 115.7, text: "É que eu preciso dizer que eu te amo" },
  { t: 120.4, text: "Te ganhar ou perder sem engano" },
  { t: 124.5, text: "Eu preciso dizer que eu te amo" },
  { t: 128.3, text: "Tanto" },
  { t: 133.9, text: "Eu já não sei se eu tô misturando" },
  { t: 138.4, text: "Ah, eu perco o sono" },
  { t: 146.4, text: "Lembrando em cada riso teu qualquer bandeira" },
  { t: 155.4, text: "Fechando e abrindo a geladeira a noite inteira" },
  { t: 159.8, text: "É que eu preciso dizer que eu te amo" },
  { t: 164.8, text: "Te ganhar ou perder sem engano" },
  { t: 169.4, text: "E eu preciso dizer que eu te amo" },
  { t: 174, text: "Tanto" },
  { t: 178.4, text: "Quando a gente conversa" },
  { t: 182.6, text: "Contando casos besteiras" },
  { t: 187.4, text: "Tanta coisa em comum" },
  { t: 191.7, text: "Deixando escapar segredos" },
  { t: 195.5, text: "Eu não sei que hora dizer" },
  { t: 200.8, text: "Tenho medo" },
  { t: 204.6, text: "Que eu preciso dizer que te amo" },
  { t: 210.1, text: "Te ganhar ou perder sem engano" },
  { t: 213.7, text: "É que eu preciso dizer que eu te amo" },
  { t: 218.9, text: "Tanto" },
  { t: 223.4, text: "E até o tempo passa arrastado" },
  { t: 227.3, text: "Só pra eu ficar do teu lado" },
  { t: 232.5, text: "Você me chora dores de outro amor" },
  { t: 236.8, text: "Se abre e acaba comigo" },
  { t: 246, text: "E nessa novela eu não quero ser teu amigo" },
  { t: 249.8, text: "Que eu preciso dizer que te amo" },
  { t: 257.8, text: "Te ganhar ou perder sem engano..." },
];
