import { readFileSync, mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = p => readFileSync(resolve(root, p), 'utf8');
const json = p => JSON.stringify(JSON.parse(read(p))).replace(/</g, '\\u003c');
const html = read('index.html').replace('__COURSES__', json('data/lecture1.json')).replace('__VOCAB__', json('data/vocabulary.json')).replace('__EXTRA_COURSES__', '[' + ['data/lecture2.json', 'data/lecture3.json'].map(json).join(',') + ']');
mkdirSync(resolve(root, 'dist'), { recursive: true });
writeFileSync(resolve(root, 'dist/index.html'), html);
for (const file of ['app.js', 'style.css']) copyFileSync(resolve(root, file), resolve(root, 'dist', file));
console.log('Built dist/index.html, app.js, style.css');


