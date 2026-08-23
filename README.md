# i2n — portfólio

Site estático (HTML/CSS/JS puro, sem framework) hospedado no GitHub Pages.

## Estrutura

- `index.html` — a página (Home), em português.
- `en/index.html` — mesma página, em inglês. É um HTML separado (não JS de tradução) para funcionar 100% estático no GitHub Pages; os dois arquivos precisam ser editados em paralelo quando o conteúdo mudar.
- `assets/css/input.css` — fonte do CSS (diretivas Tailwind + estilos customizados).
- `assets/css/build.css` — CSS compilado pelo Tailwind, gerado a partir do `input.css`, versionado no repo.
- `assets/js/main.js` — comportamento das abas da seção de Experiência (compartilhado pelas duas páginas).
- `assets/img/` — imagens.
- `assets/resume/` — PDFs do currículo (`ivan-joaquim-curriculo-pt.pdf` e `ivan-joaquim-resume-en.pdf`), baixados pelo botão "Currículo"/"Resume" do header conforme o idioma da página.
- `tailwind.config.js` — configuração do Tailwind (cores, fonte); o `content` escaneia os dois HTMLs.

## Desenvolvimento

Instale as dependências (apenas o Tailwind CLI):

```bash
npm install
```

Durante o desenvolvimento, recompile o CSS automaticamente ao editar `index.html` ou `assets/css/input.css`:

```bash
npm run watch:css
```

Abra `index.html` direto no navegador (ou sirva a pasta com `npx serve .`) para visualizar.

Antes de commitar, gere a versão final (minificada) do CSS:

```bash
npm run build:css
```

## Deploy

GitHub Pages serve os arquivos direto da raiz da branch — não há build/Action necessário além de manter `assets/css/build.css` atualizado antes de cada push. Em Settings > Pages, configure a fonte como a branch principal, pasta raiz (`/`).
