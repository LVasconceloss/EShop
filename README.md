# EShop

Eshop é um e-commerce simples com carrinho e uma área de anúncios inspirada na OLX. Você pode listar produtos, ver detalhes, adicionar ao carrinho, finalizar uma compra fictícia e criar seus próprios anúncios com fotos (armazenados no navegador via localStorage).

## 🚀 Como executar localmente

Pré‑requisitos:
- Node.js 18+ (recomendado) e npm

Passos:
1. Instale as dependências
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev
   ```
   Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

3. (Opcional) Gerar build de produção
   ```bash
   npm run build
   npm run preview
   ```

## 📁 Estrutura principal

- `index.html` – HTML base do Vite
- `src/` – código React
  - `main.jsx` – bootstrap do app
  - `App.jsx` – rotas e layout principal
  - `components/` – componentes reutilizáveis (Header, Footer, ProductCard)
  - `pages/` – páginas (Home, Products, ProductDetail, Cart, Checkout, CreateListing)
  - `context/CartContext.jsx` – estado do carrinho (add/remover/atualizar/limpar + totais)
  - `data/products.js` – produtos de exemplo e utilitários para listar/buscar
  - `data/userProducts.js` – anúncios criados pelo usuário (salvos em localStorage)
  - `styles.css` – estilos globais
- `public/images/` – imagens estáticas (ex.: `CAMISA.png`, `BONE.png`, `MOCHILA.png`, `GARRAFA.png`)

## 🛒 Funcionalidades
- Listagem de produtos e página de detalhes com galeria
- Carrinho com persistência (localStorage), frete simples e totais
- Checkout fictício (limpa o carrinho)
- Criar anúncios (título, preço, descrição e múltiplas fotos)

## 🖼️ Imagens dos produtos
- Arquivos estáticos ficam em `public/images` e podem ser referenciados como `/images/NOME_ARQUIVO.png` no código.
- Se alguma imagem não carregar, um placeholder é mostrado automaticamente.

## ❗ Problemas comuns
- Porta ocupada: altere a porta do Vite com `--port 5174` ou pare o processo que usa a 5173.
- Imagem não aparece: verifique o caminho em `src/data/products.js` e se o arquivo existe em `public/images`.
- Mudanças que não aparecem: faça um hard refresh (Ctrl+F5) ou reinicie `npm run dev`.

## 🧪 Versões
- React 19, React Router 6, Vite 5/7 (compatível).

## 📄 Licença
Uso livre para estudos/demonstração. Ajuste conforme sua necessidade.
