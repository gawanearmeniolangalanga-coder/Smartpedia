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
