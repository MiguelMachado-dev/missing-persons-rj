# Sistema de Pessoas Desaparecidas - RJ

Aplicação web para visualização e busca de dados de pessoas desaparecidas no estado do Rio de Janeiro.

## Sobre o Projeto

Este projeto utiliza a API oficial de pessoas desaparecidas da Polícia Civil do Rio de Janeiro para apresentar informações sobre pessoas que estão atualmente desaparecidas. A aplicação permite:

- Visualizar uma lista paginada de pessoas desaparecidas
- Buscar pessoas pelo nome
- Ver detalhes completos de cada pessoa desaparecida
- Interface responsiva e amigável

## Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript tipado
- **Vite** - Build tool e dev server
- **TanStack Query** - Gerenciamento de estado e cache para dados remotos
- **Tailwind CSS 4** - Framework CSS para estilização
- **Lucide React** - Biblioteca de ícones

## API

A aplicação consome dados da API oficial de desaparecidos da Polícia Civil do RJ:
```
https://desaparecidos-api.pcivil.rj.gov.br/
```

## Como Executar

### Requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/MiguelMachado-dev/missing-persons-rj.git
cd missing-persons-rj

# Instalar dependências
npm install
# ou
yarn
```

### Execução em Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173/`

### Build para Produção

```bash
npm run build
# ou
yarn build
```

Os arquivos para produção serão gerados na pasta `dist/`.

## Estrutura do Projeto

- `/src/components` - Componentes React
- `/src/hooks` - Custom React hooks para busca de dados
- `/src/api` - Funções para comunicação com a API
- `/src/types` - Definições de tipos TypeScript
- `/src/assets` - Imagens e outros recursos estáticos
- `/src/styles` - Estilos globais
