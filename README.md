# i2n — portfólio

Site estático (HTML/CSS/JS puro, sem framework).

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
