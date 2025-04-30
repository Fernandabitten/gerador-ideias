## Gerador de Ideias Inovadoras com Gemini

Este projeto é um gerador de ideias criativas com foco em impacto social, usando a IA do **Google Gemini** para criar sugestões inovadoras de sistemas ou aplicativos baseados em temas pré-definidos. O usuário pode visualizar, gerar novas ideias e salvar suas favoritas em um banco de dados.

## Funcionalidades
-  Geração de ideias originais com IA (Google Gemini)
-  Marcar/desmarcar ideias como favoritas
-  Armazenamento persistente com banco Tembo (PostgreSQL)
-  Interface responsiva com atualização dinâmica via API
-  Backend e frontend unificados com Next.js + API Routes

## Como funciona
O sistema utiliza uma lista de temas fixos (como *segurança digital*, *comunidades rurais*, *mobilidade acessível*, etc.). A cada geração, um tema é escolhido aleatoriamente e enviado à API do Google Gemini com um prompt cuidadosamente elaborado para evitar respostas genéricas.

A IA retorna um **objeto JSON** contendo título, descrição, funcionalidades, tecnologias e público-alvo da ideia, que é então exibida para o usuário.

## Tecnologias utilizadas
| Categoria         | Ferramenta                                   |
|------------------|-----------------------------------------------|
| Frontend         | React (Next.js + App Router)                  |
| Estilização      | Tailwind CSS                                  |
| Backend/API      | Next.js API Routes                            |
| Banco de Dados   | PostgreSQL via Tembo Cloud                    |
| ORM              | Prisma                                        |
| Autenticação     | (Não implementado, mas possível com NextAuth) |
| IA               | Google Gemini via API                         |
| Hospedagem       | Vercel                                        |
--------------------------------------------------------------------

## Estrutura de Pastas
```bash
src/
├── app/                   # Rotas e páginas do Next.js (incluindo rotas API)
│   ├── api/               # Rotas de API do backend (favoritar ideia e gerar ideia com Gemini)
│   │   ├── favoritos/     # Endpoints para listar, adicionar e remover ideias favoritas
│   │   └── gerar-ideia/   # Endpoint que consome a IA do Gemini para gerar ideias
│   ├── favoritos/         # Página que exibe as ideias favoritas salvas
│   └── page.tsx           # Página inicial que gera e exibe a ideia
├── components/            # Componentes reutilizáveis da interface
│   ├── Header.tsx         # Cabeçalho do site
│   ├── IdeaCard.tsx       # Cartão de exibição das ideias
│   └── Toast.tsx          # Componente de feedback visual (sucesso, erro, etc.)
├── hooks/                 # Hooks personalizados para lógica de favoritos e geração de ideias
│   ├── useFavoritos.ts    # Hook para interações com ideias favoritas (GET, POST, DELETE)
│   └── useIdeia.ts        # Hook para geração de ideias com Gemini
├── lib/
│   └── prisma.ts          # Instância do cliente Prisma para conexão com o banco
├── prisma/
│   └── schema.prisma      # Definição do modelo de dados usado pelo Prisma ORM

```

## Banco de dados
O projeto utiliza o **Tembo**, uma solução cloud-native para PostgreSQL, oferecendo performance aprimorada e suporte a extensões.

- **Tipo**: PostgreSQL via Tembo Cloud
- **ORM**: Prisma
- **Tabelas**:
  - `favoritos`: armazena ideias marcadas como favoritas
  - 
## Como utilizar localmente
1. Clone o repositório:
```
git clone https://github.com/Fernandabitten/gerador-ideias.git
cd gerador-ideias
```
2. Instale as dependências:
```
npm install
```
## Configure o banco e API
- Crie um arquivo .env.local com:
```
DATABASE_URL=postgresql://usuario:senha@host:porta/nome-do-banco
GEMINI_API_KEY=sua-chave-aqui
```
- Execute as migrações
```
npx prisma migrate dev
```
- Inicie o servidor de desenvolvimento
```
npm run dev
```
## Licença
Distribuído sob a licença MIT.


