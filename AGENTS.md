# Instrucoes para agentes

## Projeto
- Aplicacao Next.js chamada `biagui`.
- Use JavaScript; nao adicione TypeScript nem ESLint.
- Use o App Router em `src/app`.
- Mantenha os componentes e estilos proximos das rotas quando fizer sentido.

## Desenvolvimento
- Instale dependencias com `npm install` e execute localmente com `npm run dev`.
- Antes de adicionar uma dependencia, confira se o projeto ja oferece uma alternativa adequada.
- Prefira componentes pequenos, acessiveis e responsivos.
- Preserve as convencoes existentes e atualize este arquivo quando as instrucoes do projeto mudarem.

## Convite digital (protótipo)
- A direção de arte está descrita no briefing do projeto: álbum/scrapbook em roxo e laranja, polaroids, recortes de papel e lírios; sem nomes, datas ou textos de evento.
- Componentes em `src/app/_components` (Envelope, Paper, Photo, Polaroid, Flower, Note, Memory, Section, Album); cada um com seu CSS Module.
- Sem Tailwind/Bootstrap/frameworks CSS. Paleta e fontes ficam em variáveis CSS em `globals.css`.
- Para personalizar: passe `src` em `<Polaroid>`/`<Photo>` (arquivos em `public/fotos`) e `children` em `<Note>`; a ordem e o layout das seções ficam em `Album.js`.
