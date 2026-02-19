# 🚗 AutoMarket – Portal de Veículos

AutoMarket é um marketplace de veículos desenvolvido com React + Vite + TypeScript, focado em uma base técnica sólida, modular e escalável.

## 🛠️ Tecnologias

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) – estado global
- [Axios](https://axios-http.com/) – cliente HTTP

## 📁 Estrutura do Projeto

```
src/
 ├── app/
 ├── modules/
 │    └── vehicles/
 │         ├── pages/
 │         ├── components/
 │         ├── services/
 │         ├── store.ts
 │         ├── types.ts
 │         └── mocks.ts
 ├── shared/
 │    ├── components/
 │    ├── hooks/
 │    ├── services/
 │    └── utils/
 ├── routes/
 ├── styles/
 └── main.tsx
```

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

O app estará disponível em `http://localhost:5173`.

## 🧭 Funcionalidades

- **Página inicial**: listagem de veículos em cards com foto, marca, modelo, ano, preço e localização
- **Página de detalhe**: informações completas do veículo, galeria de fotos e botão "Tenho interesse"
- **Navegação**: roteamento via React Router
- **Estado global**: gerenciado com Zustand
- **Dados mockados**: prontos para substituição por API real via Axios

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://api.automarket.com
```

Quando `VITE_API_URL` não estiver definido, o app utiliza dados mockados locais.

## 📦 Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Serve a build de produção localmente |
| `npm run lint` | Executa o ESLint |

