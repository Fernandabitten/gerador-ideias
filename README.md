# Gerador de Ideias Inovadoras com Gemini

![Vercel](https://vercelbadge.vercel.app/api/Fernandabitten/gerador-ideias)
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)
![Gemini API](https://img.shields.io/badge/Google%20Gemini-4285F4?logo=google&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Este projeto gera ideias criativas e impactantes, utilizando a inteligência artificial do **Google Gemini** para criar sugestões de sistemas e aplicativos a partir de temas pré-definidos. 

## ✨ Destaques

- **Geração de Ideias Originais:** Utiliza a IA do Google Gemini para sugerir ideias inovadoras com foco em impacto social.
- **Favoritos e Persistência:** Marque e salve suas ideias favoritas com um backend Next.js integrado e banco de dados PostgreSQL.
- **Interface Moderna:** Desenvolvida com Next.js, Tailwind CSS e API Routes para uma experiência rápida e responsiva.

 **Deploy do projeto:** [https://gerador-ideias.vercel.app/](https://gerador-ideias.vercel.app/) 

 ## 📷 Galeria de Imagens

<details>
  <summary>Ver Screenshots</summary>

  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <img src="https://github.com/user-attachments/assets/a00d33f3-89b7-488b-ad35-bd4143ceb365" alt="Screenshot 1" style="width: 300px;">
    <img src="https://github.com/user-attachments/assets/10aca613-107c-4b28-b655-eba2e0012b25" alt="Screenshot 2" style="width: 300px;">
    <img src="https://github.com/user-attachments/assets/954de5ba-cdf7-4f31-8297-9b3f2ebb2f7f" alt="Screenshot 3" style="width: 300px;">
  </div>

</details>

## Como funciona
1. **Tema Aleatório:** A cada execução, o sistema seleciona automaticamente um tema da lista predefinida (ex: segurança digital, mobilidade acessível).
2. **Prompt Personalizado:** O tema selecionado é enviado à API do Gemini com um prompt específico para obter respostas criativas e contextualizadas.
3. **Resposta Estruturada:** A IA retorna um objeto JSON com:
   - Título
   - Descrição
   - Funcionalidades
   - Tecnologias
   - Público-alvo

## Exemplo de Ideia Gerada
```
json
{
  "titulo": "Plataforma de Apoio à Educação Rural",
  "descricao": "Sistema que conecta educadores voluntários a escolas rurais para aulas remotas e mentorias, promovendo inclusão digital e acesso igualitário ao conhecimento.",
  "funcionalidades": [
    "Cadastro de escolas e voluntários",
    "Agendamento de aulas online",
    "Biblioteca de materiais didáticos digitais",
    "Relatórios de impacto"
  ],
  "tecnologias": ["Next.js", "PostgreSQL", "Google Gemini API", "WebRTC"],
  "publico_alvo": ["Escolas rurais, professores voluntários, ONGs de educação"]
}
```

## Tecnologias utilizadas
| Categoria         | Ferramenta                                   |
|------------------|-----------------------------------------------|
| Frontend         | React (Next.js + App Router)                  |
| Estilização      | Tailwind CSS                                  |
| Backend/API      | Next.js API Routes                            |
| Banco de Dados   | PostgreSQL                   |
| ORM              | Prisma                                        |
| Autenticação     | (Não implementado, mas possível com NextAuth) |
| IA               | Google Gemini via API                         |
| Hospedagem       | Vercel                                        |
--------------------------------------------------------------------

## Estrutura do Projeto
```bash
src/
├── app/                   # Rotas e páginas do Next.js (incluindo rotas API)
│   ├── api/               # Endpoints do backend (geração de ideia e gerenciamento de favoritos)
│   ├── favoritos/         # Página de ideias favoritas
│   └── page.tsx           # Página principal que gera e exibe a ideia
├── components/            # Componentes reutilizáveis da interface
│   ├── Header.tsx         # Cabeçalho do site
│   ├── IdeaCard.tsx       # Cartão de exibição das ideias
│   └── Toast.tsx          # Feedback visual para ações
├── hooks/                 # Hooks personalizados (para favoritos e geração de ideias)
├── lib/                   # Instância do Prisma e outras libs utilitárias
├── prisma/                # Schema e migrations do Prisma
```
## Como Executar
### Pré-requisitos
- Node.js instalado
- Acesso a um banco de dados PostgreSQL (utilizando o Tembo Cloud é recomendado)
### Passos para rodar localmente
1. Clone o repositório:
```
git clone https://github.com/Fernandabitten/gerador-ideias.git
cd gerador-ideias
```
2. Instale as dependências:
```
npm install
```
3. Configure o ambiente criando o arquivo .env.local:
```
DATABASE_URL=postgresql://usuario:senha@host:porta/nome-do-banco
GEMINI_API_KEY=sua-chave-aqui
```
4. Execute as migrações
```
npx prisma migrate dev
```
6. Inicie o servidor de desenvolvimento
```
npm run dev
```
## Contribuindo
Contribuições são sempre bem-vindas! Para ajudar a melhorar o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature: git checkout -b feature/nome-da-feature
3. Realize commits das suas alterações: git commit -m 'feat: nova feature'
4. Envie sua branch:: git push origin feature/nome-da-feature
5. Abra um Pull Request para revisão.

## Contato
Dúvidas ou sugestões? Entre em contato pelo  [Linkedin](https://www.linkedin.com/in/fernandabbittencourt/) ou abra uma issue neste repositório.

## 🔗 Links Úteis
- Deploy do Projeto: [Acessar o Deploy](https://gerador-ideias.vercel.app/)
- Google Gemini API: [Documentação](https://ai.google.dev/gemini-api/docs?hl=pt-br)
- Next.js Documentation: [Next.js](https://nextjs.org/docs)
- Prisma ORM: [Prisma](https://github.com/prisma/prisma)

## Licença
Distribuído sob a licença MIT. 


