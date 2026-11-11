# Site IBR Sobral

Página única. Os textos ficam em `index.html`; o visual, na pasta `css/`; os comportamentos, na pasta `js/`. Cada arquivo CSS tem, no topo, o trecho de HTML que ele estiliza. O ajuste de celular fica no final do mesmo arquivo.

```
index.html            textos, fotos e links (seções marcadas com comentário)
css/
  variables.css       cores, fontes e espaçamentos — edite aqui primeiro
  base.css            reset, títulos, .script, .eyebrow, .lead
  layout.css          .section, .container, .grid, .split
  header.css          menu e barra de progresso
  components.css      botões, cards e pílulas
  photos.css          fotos em sequência e carrossel
  sections.css        hero, visão missionária, banner IBR Music e mapa
  footer.css          rodapé
  animations.css      revelação ao rolar ([data-reveal])
js/
  menu.js             menu do celular
  reveal.js           animações ao rolar
  scroll-effects.js   barra de progresso, header e parallax
  tilt.js             efeito 3D dos cards ([data-tilt])
  carousel.js         carrossel dos cultos ([data-carousel])
  footer.js           ano do rodapé
img/                  imagens do site
```

No HTML, `data-reveal="up|left|right|zoom"` e `data-delay="1..4"` animam a entrada do bloco. `data-tilt` inclina o card com o mouse.
