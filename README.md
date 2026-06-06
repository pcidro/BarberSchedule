# Barber Schedule

O Barber Schedule é um sistema de agendamento para barbearias desenvolvido com Next.js. A aplicação oferece uma experiência simples e intuitiva para organizar atendimentos por data e horário, agora com persistência em banco de dados e comunicação com APIs internas criadas com Route Handlers do Next.js.

### 🔗 [Deploy do projeto](https://barberschedule-wine.vercel.app/)

## Sobre o projeto

O projeto foca na gestão de horários de uma barbearia, permitindo selecionar data, horário e nome do cliente. Os agendamentos são organizados automaticamente entre Manhã, Tarde e Noite, sendo exibidos na interface conforme a data selecionada.

Diferente da primeira versão baseada em armazenamento local, esta versão utiliza banco de dados PostgreSQL com Prisma ORM. As operações de listagem, criação e remoção de agendamentos passam por endpoints internos da aplicação, mantendo a regra de negócio mais próxima do backend.

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Context API
- Custom Hooks
- Route Handlers do Next.js
- Prisma ORM
- PostgreSQL

## Funcionalidades

- Seleção de data com limite mínimo e máximo.
- Seleção apenas de horários disponíveis.
- Cadastro rápido do nome do cliente.
- Listagem de agendamentos por data.
- Organização automática dos atendimentos por período: Manhã, Tarde e Noite.
- Persistência dos agendamentos em banco de dados.
- Remoção de agendamentos cadastrados.
- Comunicação com API interna usando Route Handlers do Next.js.

## APIs da aplicação

A aplicação possui rotas internas para manipular os agendamentos:

- `GET /api/appointments?date=YYYY-MM-DD`: busca os agendamentos da data informada.
- `POST /api/appointments`: cria um novo agendamento.
- `DELETE /api/appointments/:id`: remove um agendamento pelo ID.

Essas rotas utilizam o Prisma Client para consultar e alterar os dados no PostgreSQL.

## Banco de dados

O projeto utiliza Prisma ORM com PostgreSQL. O modelo principal é `Appointment`, responsável por armazenar:

- `id`: identificador único do agendamento.
- `clientName`: nome do cliente.
- `date`: data do atendimento.
- `time`: horário selecionado.
- `createdAt`: data de criação do registro.

Também existe uma regra de unicidade para impedir que dois agendamentos ocupem a mesma combinação de data e horário.

## Regras de negócio e validações

Para garantir a consistência do sistema, foram implementadas as seguintes regras:

- Impedimento de agendamentos em horários que já passaram.
- Bloqueio de horários já ocupados por outros clientes.
- Impossibilidade de agendamentos retroativos.
- Limite de agendamento fixado em no máximo 10 dias no futuro.
- Atualização dinâmica da lista de horários conforme a disponibilidade.
- Validação obrigatória dos campos de data, horário e nome do cliente.
- Validação na API para evitar criação de agendamentos incompletos.
- Restrição no banco para evitar duplicidade de data e horário.

## Hooks personalizados

### `useScheduling`

Gerencia o formulário de agendamento, incluindo nome do cliente, data selecionada, horário escolhido, estado de envio e montagem do objeto que será enviado para a API.

### `useAgenda`

Responsável por buscar os agendamentos da data selecionada através da API e organizar os dados em Manhã, Tarde e Noite para exibição na interface.

## Estrutura principal

```txt
src/
  app/
    api/
      appointments/
        route.ts
        [id]/
          route.ts
    page.tsx
  context/
    AppointmentsContext.tsx
  hooks/
    useAgenda.ts
    useScheduling.ts
  modules/
    booking/
    schedule/
  utils/
prisma/
  schema.prisma
  migrations/
```

## Como rodar o projeto

Clone o repositório e instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com a variável de conexão do banco:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/barberschedule"
```

Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```txt
http://localhost:3000
```

## Scripts disponíveis

- `npm run dev`: inicia o ambiente de desenvolvimento.
- `npm run build`: gera a versão de produção.
- `npm run start`: executa a versão de produção.
- `npm run lint`: executa a verificação de lint.

## Aprendizados

Durante o desenvolvimento deste projeto, foram consolidados importantes conceitos:

- Criação de aplicações com Next.js e App Router.
- Criação de APIs internas com Route Handlers.
- Integração entre frontend, backend e banco de dados.
- Modelagem de dados com Prisma ORM.
- Persistência de dados com PostgreSQL.
- Gerenciamento de estado com Context API.
- Criação e uso de Custom Hooks para separar lógica de negócio.
- Manipulação de datas e tratamento de horários no JavaScript.
- Implementação de validação de formulários e controle de erros.
- Aplicação de regras de negócio no frontend, na API e no banco de dados.
- Construção de interfaces responsivas com Tailwind CSS.

## Possíveis melhorias futuras

- Autenticação de usuários com login e senha.
- Área administrativa para barbeiros.
- Cadastro de serviços com duração e preço.
- Confirmação ou cancelamento de agendamentos.
- Feedback visual com notificações para sucesso e erro.
- Deploy da aplicação com banco de dados em produção.
