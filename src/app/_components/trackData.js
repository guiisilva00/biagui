/*
  Música de abertura e letra sincronizada.

  Cada linha tem `t` = segundo em que ela começa a ser cantada.
  Os tempos abaixo são uma ESTIMATIVA. Para acertar: abra o site com ?sync no
  endereço (ex.: http://localhost:3000/?sync), abra o envelope, toque em "letra"
  e use o botão "marcar" no início de cada linha enquanto a música toca. No fim
  aparece a lista pronta para colar aqui.
*/
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const TRACK = {
  src: `${base}/audio/preciso-dizer-que-te-amo.mp3`,
  title: "Preciso Dizer que Te Amo",
  artist: "Cazuza e Bebel Gilberto",
  duration: 263,
};

export const LYRICS = [
  { t: 20, text: "Quando a gente conversa" },
  { t: 24, text: "Contando casos, besteiras" },
  { t: 28, text: "Tanta coisa em comum" },
  { t: 32, text: "Deixando escapar segredos" },
  { t: 37, text: "E eu não sei que hora dizer" },
  { t: 41, text: "Me dá um medo, que medo" },
  { t: 46, text: "É que eu preciso dizer que eu te amo" },
  { t: 51, text: "Te ganhar ou perder sem engano" },
  { t: 56, text: "Eu preciso dizer que eu te amo tanto" },
  { t: 62, text: "E até o tempo passa arrastado" },
  { t: 67, text: "Só pra eu ficar do teu lado" },
  { t: 72, text: "Você me chora dores de outro amor" },
  { t: 77, text: "Se abre e acaba comigo" },
  { t: 82, text: "E nessa novela eu não quero ser seu amigo" },
  { t: 88, text: "Ah não" },
  { t: 92, text: "É que eu preciso dizer que eu te amo" },
  { t: 97, text: "Te ganhar ou perder sem engano" },
  { t: 102, text: "Eu preciso dizer que eu te amo tanto" },
  { t: 118, text: "Eu já não sei se eu tô misturando" },
  { t: 124, text: "Eu perco o sono" },
  { t: 128, text: "Lembrando em cada gesto teu, qualquer bandeira" },
  { t: 134, text: "Fechando e abrindo a geladeira a noite inteira" },
  { t: 141, text: "É, eu preciso dizer que eu te amo" },
  { t: 147, text: "Te ganhar ou perder sem engano" },
  { t: 152, text: "Eu preciso dizer que eu te amo tanto, tanto" },
  { t: 170, text: "É, preciso dizer que te amo tanto" },
  { t: 177, text: "Preciso dizer que eu te amo" },
  { t: 184, text: "Te amo, te amo, te amo, te amo, te amo, te amo." },
];
