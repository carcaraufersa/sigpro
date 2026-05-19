# 🎓 SIGPRO - Sistema de Gestão da PROPPG

O **SIGPRO** é uma plataforma institucional desenvolvida para a Pró-Reitoria de Pesquisa e Pós-Graduação (PROPPG). O sistema visa centralizar, gerenciar e analisar os dados do corpo docente, agrupando informações sobre pesquisadores, áreas de conhecimento, grupos de pesquisa e produções científicas (com suporte à extração de dados do Currículo Lattes). 

O objetivo principal é fornecer aos Pró-Reitores e Servidores painéis gerenciais visuais e motores de filtros avançados para apoiar a tomada de decisão estratégica e a gestão de recursos institucionais.

---

## 🏗️ Arquitetura do Sistema

O projeto adota uma arquitetura **Cliente-Servidor (Client-Server)** totalmente desacoplada, operando através de uma API RESTful.

1. **Front-end (Presentation Layer):** Responsável por toda a interface do usuário, roteamento no navegador e gerenciamento de estado. Consome os dados da API de forma assíncrona.
2. **Back-end (Business Logic & Data Access Layer):** Responsável por aplicar as regras de negócio, processar integrações (como o parse do Lattes) e realizar o CRUD no banco de dados. Funciona estritamente como uma API.
3. **Segurança (Authentication Layer):** A comunicação entre as camadas é protegida via **JWT (JSON Web Token)**. O front-end armazena o token de acesso de forma segura e o envia no cabeçalho (`Authorization: Bearer <token>`) de todas as requisições privadas.

---

## 🛠️ Tecnologias Utilizadas

### Front-end
* **Framework Web:** [Next.js](https://nextjs.org/) (React)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estática)
* **Estilização:** Tailwind CSS (ou Styled Components)
* **Ícones:** `react-icons`

### Back-end
* **Framework Base:** [Django](https://www.djangoproject.com/) (Python)
* **API Framework:** Django REST Framework (DRF) ou Django Ninja
* **Banco de Dados:** PostgreSQL (Relacional)
* **Autenticação:** SimpleJWT

---

## 🗂️ Estrutura de Diretórios do Projeto

O repositório está dividido em duas frentes principais: `frontend/` e `backend/`. Cada uma possui seu próprio gerenciamento de pacotes e variáveis de ambiente.

### 1. Front-end (`/frontend`)
Organização modular e orientada a componentes.

```text
frontend/
├── public/                 # Assets estáticos (imagens, favicons)
├── src/
│   ├── components/         # Componentes reutilizáveis (Botões, Tabelas, skeleton loading)
│   ├── pages/              # Rotas e páginas da aplicação (Login, Dashboard)
│   ├── hooks/              # Custom React Hooks genéricos
│   ├── services/           # Configuração de chamadas à API do Django (Axios/Fetch)
│   ├── styles/             # Arquivos de estilo globais
│   ├── types/              # Interfaces e tipagens globais do TypeScript
│   └── utils/              # Funções auxiliares (máscaras, cálculos)
├── .env.local              # Variáveis de ambiente locais
├── package.json            # Dependências NPM
└── tsconfig.json           # Configuração do TypeScript
```

### 2. Back-end (`/backend`)
Arquitetura baseada em "apps" do Django, isolando regras de negócio por domínio.

```text
backend/
├── setup/                  # Diretório core do Django (settings, urls, wsgi)
├── apps/                   # Módulos do sistema
│   ├── accounts/           # Gestão de Usuários (Servidores, Pró-Reitores) e Autenticação
│   ├── researchers/        # Pesquisadores, Departamentos e Áreas de Conhecimento
│   └── productions/        # Produções Científicas e integrações Lattes
├── requirements.txt        # Dependências Python
├── manage.py               # Utilitário CLI do Django
└── .env                    # Variáveis de ambiente (DB, JWT Secret)
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
* [Node.js](https://nodejs.org/) (v18+)
* [Python](https://www.python.org/) (v3.10+)
* [PostgreSQL](https://www.postgresql.org/) (Rodando localmente ou via Docker)
* Git

### 1. Configurando o Banco de Dados (PostgreSQL)
Crie um banco de dados vazio no seu PostgreSQL local chamado `sigpro_db` (ou outro nome de sua preferência, desde que reflita no `.env` do backend).

### 2. Passo a Passo - Back-end (Django)
Abra um terminal e execute as instruções abaixo:

```bash
cd backend

# Crie e ative o ambiente virtual
python -m venv .venv
source .venv/bin/activate  # No Windows use: .venv\Scripts\activate

# Instale as dependências
pip install -r requirements.txt

# Crie o arquivo .env (veja o modelo na seção de Variáveis de Ambiente)
# Execute as migrações para criar as tabelas no PostgreSQL
python manage.py migrate

# Inicie o servidor
python manage.py runserver
```
*A API estará rodando em: `http://localhost:8000`*

### 3. Passo a Passo - Front-end (Next.js)
Abra um novo terminal e execute:

```bash
cd frontend

# Instale as dependências
npm install

# Crie o arquivo .env.local (veja o modelo na seção de Variáveis de Ambiente)
# Inicie o servidor de desenvolvimento
npm run dev
```
*A aplicação estará disponível em: `http://localhost:3000`*

---

## ⚙️ Variáveis de Ambiente (Templates)

Crie os arquivos ocultos na raiz das respectivas pastas. **Nunca faça commit de senhas reais!**

**Backend (`backend/.env`):**
```env
DEBUG=True
SECRET_KEY=cole-uma-chave-secreta-forte-aqui
DB_NAME=sigpro_db
DB_USER=postgres
DB_PASSWORD=sua_senha_do_postgres
DB_HOST=localhost
DB_PORT=5432
```

**Frontend (`frontend/.env.local`):**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

---

## 🚫 Configuração de Arquivos Ignorados (.gitignore)

Para garantir que o repositório nasça limpo, certifique-se de criar os arquivos `.gitignore` dentro de cada subdiretório com as seguintes regras:

**Crie o arquivo `/frontend/.gitignore` e adicione:**
```text
# dependências
/node_modules
/.pnp
.pnp.js

# build e testes
/out/
/.next/
/coverage

# env files
.env.local
.env.development.local
.env.test.local
.env.production.local

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

**Crie o arquivo `/backend/.gitignore` e adicione:**
```text
# ambientes virtuais
.venv/
venv/
env/

# compilados python
__pycache__/
*.py[cod]
*$py.class

# env files
.env

# db sqlite (se for usado localmente para testes)
db.sqlite3

# static/media
/static/
/media/
```
