# 🛍️ Drip Store - Frontend

E-commerce moderno de moda e acessórios desenvolvido com React e Vite, oferecendo uma experiência de compra fluida e intuitiva.

## ✨ Funcionalidades

- **Catálogo de produtos** com grid responsivo
- **Filtros por categoria** (Camisetas, Calças, Bonés, Headphones, Tênis)
- **Carrinho de compras** com gerenciamento de itens
- **Página de detalhes do produto** com galeria de imagens e seleção de tamanho/cor
- **Carrossel animado** na página inicial
- **Sistema de busca** de produtos
- **Área de cadastro e login** de usuários
- **Página de pedidos** com resumo do carrinho
- **Design responsivo** adaptado para mobile, tablet e desktop

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **React 19** | Biblioteca para construção da interface |
| **Vite** | Build tool e dev server rápido |
| **React Router DOM** | Gerenciamento de rotas |
| **Tailwind CSS** | Estilização utilitária |
| **React Icons** | Conjunto de ícones |
| **Axios** | Requisições HTTP (para integração futura com backend) |

## 📁 Estrutura do Projeto
src/
├── assets/ # Imagens e ícones locais
├── components/ # Componentes reutilizáveis
│ ├── AbaProdutos/
│ ├── HomePage/
│ └── ...
├── contexts/ # Contextos React (Carrinho)
├── data/ # Dados mockados dos produtos
├── pages/ # Páginas da aplicação
├── services/ # Configuração de API
├── App.jsx # Componente principal
├── main.jsx # Ponto de entrada
└── index.css # Estilos globais

text

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/tatianadev2207/loja-drip-frontend.git
cd loja-drip-frontend
Instale as dependências

bash
npm install
Execute o servidor de desenvolvimento

bash
npm run dev
Acesse no navegador

text
http://localhost:5173
Scripts Disponíveis
Comando	Descrição
npm run dev	Inicia o servidor de desenvolvimento
npm run build	Gera a build de produção
npm run preview	Visualiza a build localmente
npm run lint	Executa o ESLint
📸 Capturas de Tela
Página Inicial	Detalhes do Produto	Carrinho
Carrossel com ofertas	Galeria de imagens	Resumo de itens
Categorias em destaque	Seleção de tamanho/cor	Finalização de pedido
Produtos recomendados	Botão de adicionar	Simulação de pagamento
🔧 Melhorias Recentes
✅ Adicionado efeito cursor: pointer em todos os botões e links

✅ Implementado carrossel com transição suave

✅ Substituídas imagens externas quebradas por imagens locais

✅ Corrigido layout responsivo

✅ Melhorada acessibilidade visual

👩‍💻 Desenvolvido por
Tatiana dos Santos Lima
Mickaelly da Silva Costa
Kássia Moreira Santos
