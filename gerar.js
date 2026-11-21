// gerar.js — cria uma página para cada marca e modelo, mais o sitemap.xml
// Lê a base de dados que já existe no script.js. Corre sozinho no GitHub
// (ver publicar.yml). Não precisa de editar mais nada.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ===== CONFIGURAÇÃO =====
// Endereço do site, terminado em "/". Se um dia tiver domínio próprio, mude só aqui.
const BASE = 'https://smartpedia-world.github.io/Smartpedia/';
// ========================

const RAIZ = __dirname;

// 1) Ler a base de dados do script.js (só a parte dos dados, sem o resto do código)
const src = fs.readFileSync(path.join(RAIZ, 'script.js'), 'utf8');
const corte = src.indexOf('const content = document');
if (corte < 0) throw new Error('Não encontrei o fim da base de dados no script.js');
const dados = vm.runInNewContext(src.slice(0, corte) + '\n;smartphoneData', {});

// 2) Funções de apoio
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slug = (s) =>
  String(s)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\+/g, '-plus')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
const valido = (v) => Boolean(v) && !/^confirmar/i.test(String(v).trim());
const cortar = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…');

const usados = new Set();
function slugUnico(base) {
  let s = base;
  let n = 2;
  while (usados.has(s)) s = base + '-' + n++;
  usados.add(s);
  return s;
}

// 3) Organizar marcas, linhas e modelos
const marcas = [];
const modelos = [];
for (const [marca, dm] of Object.entries(dados)) {
  const bslug = slug(marca);
  const linhas = [];
  for (const [linha, lista] of Object.entries(dm.lines || {})) {
    const itens = lista.map((m) => {
      const nome = m.model.toLowerCase().startsWith(marca.toLowerCase()) ? m.model : marca + ' ' + m.model;
      const item = { ...m, marca, bslug, linha, nome, slug: slugUnico(slug(nome)) };
      modelos.push(item);
      return item;
    });
    linhas.push({ nome: linha, itens });
  }
  marcas.push({ nome: marca, slug: bslug, historia: dm.history || '', linhas });
}

// 4) Modelo comum das páginas (usa o mesmo style.css do site)
function pagina({ caminho, titulo, descricao, crumbs, corpo }) {
  const prof = caminho.split('/').filter(Boolean).length;
  const raiz = '../'.repeat(prof);
  const url = BASE + caminho;
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.nome,
      item: BASE + c.caminho,
    })),
  };
  const migalhas = crumbs
    .map((c, i) => (i < crumbs.length - 1 ? `<a href="${raiz}${c.caminho}">${esc(c.nome)}</a>` : esc(c.nome)))
    .join(' › ');
  return `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(titulo)}</title>
  <meta name="description" content="${esc(descricao)}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${esc(titulo)}">
  <meta property="og:description" content="${esc(descricao)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="${raiz}style.css">
  <style>
    .sp-crumbs{font-size:.85rem;margin-bottom:12px}
    .sp-crumbs a{color:var(--primary-color,#2563eb);text-decoration:none}
    .sp-text{line-height:1.7;max-width:800px}
    .sp-chips{list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:8px}
    .sp-chips a{display:inline-block;padding:8px 14px;border-radius:999px;background:rgba(37,99,235,.08);color:var(--primary-color,#2563eb);text-decoration:none;font-size:.9rem}
    a.brand-card{text-decoration:none;color:inherit}
    .sp-foot{text-align:center;padding:28px 16px}
    .sp-foot a{color:var(--primary-color,#2563eb);text-decoration:none;margin:0 8px}
  </style>
  <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>
</head>
<body>
  <header class="navbar">
    <div class="nav-container">
      <a href="${raiz}" class="logo">
        <span class="logo-icon"><i class="fas fa-mobile-screen-button"></i></span>
        <span class="logo-text">Smart<strong>Pédia</strong></span>
      </a>
    </div>
  </header>
  <main id="content">
    <section class="page-section">
      <nav class="sp-crumbs">${migalhas}</nav>
${corpo(raiz)}
    </section>
  </main>
  <footer class="sp-foot"><a href="${raiz}">Início</a><a href="${raiz}marcas/">Todas as marcas</a></footer>
</body>
</html>
`;
}

function escrever(caminho, html) {
  const pasta = path.join(RAIZ, caminho);
  fs.mkdirSync(pasta, { recursive: true });
  fs.writeFileSync(path.join(pasta, 'index.html'), html);
}

// 5) Páginas de modelos
const CAMPOS = [
  ['Ecrã', 'screen'],
  ['Processador', 'processor'],
  ['RAM / Armazenamento', 'ramStorage'],
  ['Bateria', 'battery'],
  ['Câmara principal', 'camera'],
  ['Câmara frontal', 'frontCamera'],
  ['Zoom', 'zoom'],
  ['Dimensões e peso', 'dimensions'],
  ['Resistência', 'resistance'],
  ['S Pen', 'sPen'],
  ['Sistema operativo', 'os'],
  ['Preço', 'price'],
];

for (const marca of marcas) {
  for (const linha of marca.linhas) {
    linha.itens.forEach((m, i) => {
      const ant = linha.itens[i - 1];
      const seg = linha.itens[i + 1];
      const ano = m.year ? ` (${m.year})` : '';
      const titulo = `${m.nome}${ano} — ficha técnica e especificações | SmartPédia`;
      const resumo = [
        valido(m.screen) && `ecrã ${m.screen}`,
        valido(m.processor) && m.processor,
        valido(m.ramStorage) && m.ramStorage,
        valido(m.battery) && `bateria ${m.battery}`,
      ]
        .filter(Boolean)
        .join(', ');
      const descricao = cortar(`${m.nome}${ano}: ${resumo}. Ficha técnica completa na SmartPédia.`, 160);
      const caminho = `modelos/${m.slug}/`;

      const crumbs = [
        { nome: 'Início', caminho: '' },
        { nome: 'Marcas', caminho: 'marcas/' },
        { nome: marca.nome, caminho: `marcas/${marca.slug}/` },
        { nome: m.nome, caminho },
      ];

      const corpo = (raiz) => {
        const linhasTabela = CAMPOS.filter(([, k]) => valido(m[k]))
          .map(([rot, k]) => `          <div><small>${rot}</small><strong>${esc(m[k])}</strong></div>`)
          .join('\n');
        const imagem = m.image
          ? `<img src="${raiz}${esc(m.image)}" alt="${esc(m.nome)}" class="detail-image" loading="lazy" onerror="this.style.display='none'">`
          : `<div class="detail-phone"></div>`;
        const resumoTexto = [
          valido(m.screen) && `ecrã ${m.screen}`,
          valido(m.processor) && `processador ${m.processor}`,
          valido(m.ramStorage) && `memória ${m.ramStorage}`,
          valido(m.battery) && `bateria ${m.battery}`,
          valido(m.camera) && `câmara principal ${m.camera}`,
        ].filter(Boolean);
        const primeiro = linha.itens[0];
        const ultimo = linha.itens[linha.itens.length - 1];
        const paragrafo1 = `${esc(m.nome)} é um smartphone da linha ${esc(linha.nome)} da ${esc(marca.nome)}${
          m.year ? `, lançado em ${esc(m.year)}` : ''
        }.${resumoTexto.length ? ` Principais especificações: ${esc(resumoTexto.join('; '))}.` : ''}`;
        const paragrafo2 = `Faz parte da linha ${esc(linha.nome)}, que tem ${linha.itens.length} ${
          linha.itens.length === 1 ? 'modelo' : 'modelos'
        } na SmartPédia${
          linha.itens.length > 1 && primeiro.year && ultimo.year ? ` (de ${esc(primeiro.year)} a ${esc(ultimo.year)})` : ''
        }.`;
        const vizinhos = [
          ant && `Modelo anterior: <a href="${raiz}modelos/${ant.slug}/">${esc(ant.nome)}</a>.`,
          seg && `Modelo seguinte: <a href="${raiz}modelos/${seg.slug}/">${esc(seg.nome)}</a>.`,
        ]
          .filter(Boolean)
          .join(' ');
        const outros = linha.itens
          .filter((x) => x !== m)
          .slice(0, 24)
          .map((x) => `<li><a href="${raiz}modelos/${x.slug}/">${esc(x.nome)}</a></li>`)
          .join('');
        return `      <p class="eyebrow">${esc(marca.nome)} / ${esc(linha.nome)}</p>
      <h1>${esc(m.nome)}</h1>
      ${m.year ? `<p>Lançado em ${esc(m.year)}</p>` : ''}
      <div class="phone-detail">
        <div class="detail-visual">${imagem}</div>
        <div>
          <h2 style="color:var(--navy);font-size:1.3rem;margin-bottom:16px;">Especificações técnicas</h2>
          <div class="spec-list">
${linhasTabela}
          </div>
        </div>
      </div>
      <h2>Sobre o ${esc(m.model)}</h2>
      <p class="sp-text">${paragrafo1}</p>
      <p class="sp-text">${paragrafo2} ${vizinhos}</p>
      ${outros ? `<h2>Outros modelos ${esc(linha.nome)}</h2>\n      <ul class="sp-chips">${outros}</ul>` : ''}
      <p><a href="${raiz}marcas/${marca.slug}/">Ver todos os modelos ${esc(marca.nome)}</a></p>`;
      };

      escrever(caminho, pagina({ caminho, titulo, descricao, crumbs, corpo }));
    });
  }
}

// 6) Páginas de marcas e lista de marcas
for (const marca of marcas) {
  const caminho = `marcas/${marca.slug}/`;
  const total = marca.linhas.reduce((s, l) => s + l.itens.length, 0);
  const titulo = `Smartphones ${marca.nome}: linhas e modelos | SmartPédia`;
  const descricao = cortar(
    marca.historia || `Todos os smartphones ${marca.nome} na SmartPédia: ${total} ${total === 1 ? 'modelo' : 'modelos'} com especificações técnicas.`,
    160
  );
  const crumbs = [
    { nome: 'Início', caminho: '' },
    { nome: 'Marcas', caminho: 'marcas/' },
    { nome: marca.nome, caminho },
  ];
  const corpo = (raiz) => {
    const blocos = marca.linhas
      .map(
        (l) => `      <h2>${esc(l.nome)}</h2>
      <ul class="sp-chips">${l.itens
        .map((m) => `<li><a href="${raiz}modelos/${m.slug}/">${esc(m.model)}${m.year ? ` (${esc(m.year)})` : ''}</a></li>`)
        .join('')}</ul>`
      )
      .join('\n');
    return `      <p class="eyebrow">MARCA</p>
      <h1>Smartphones ${esc(marca.nome)}</h1>
      ${marca.historia ? `<p class="sp-text">${esc(marca.historia)}</p>` : ''}
      <p>${total} ${total === 1 ? 'modelo' : 'modelos'} em ${marca.linhas.length} ${marca.linhas.length === 1 ? 'linha' : 'linhas'}.</p>
${blocos}`;
  };
  escrever(caminho, pagina({ caminho, titulo, descricao, crumbs, corpo }));
}

escrever(
  'marcas/',
  pagina({
    caminho: 'marcas/',
    titulo: 'Marcas de smartphones | SmartPédia',
    descricao: cortar(
      `Explore ${marcas.length} marcas de smartphones e os seus modelos: ${marcas.slice(0, 6).map((m) => m.nome).join(', ')} e mais.`,
      160
    ),
    crumbs: [
      { nome: 'Início', caminho: '' },
      { nome: 'Marcas', caminho: 'marcas/' },
    ],
    corpo: (raiz) => `      <p class="eyebrow">CATÁLOGO MUNDIAL</p>
      <h1>Marcas de smartphones</h1>
      <div class="brand-grid large-grid">
${marcas
  .map(
    (m) =>
      `        <a class="brand-card" href="${raiz}marcas/${m.slug}/"><div class="brand-symbol">${esc(
        m.nome.substring(0, 2).toUpperCase()
      )}</div><strong>${esc(m.nome)}</strong><small>${m.linhas.length} linhas</small></a>`
  )
  .join('\n')}
      </div>`,
  })
);

// 7) Sitemap com todas as páginas
const hoje = new Date().toISOString().slice(0, 10);
const urls = ['', 'marcas/', ...marcas.map((m) => `marcas/${m.slug}/`), ...modelos.map((m) => `modelos/${m.slug}/`)];
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${BASE}${u}</loc><lastmod>${hoje}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'), sitemap);

console.log(`Pronto: ${modelos.length} modelos, ${marcas.length} marcas, ${urls.length} endereços no sitemap.`);
