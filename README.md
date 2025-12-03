# 🍎 Cadmus Fruit Dashboard - Desafio Front-end Senior

Painel administrativo de alta performance para gestão de vendas de frutas, desenvolvido com **Next.js 16**, **TailwindCSS** e **TanStack Query**.

## 🚀 Tecnologias e Decisões Arquiteturais

* **Next.js 16 (App Router):** Utilizado para aproveitar Server Actions e otimizações de rota.
* **React Query (TanStack v5):** Escolhido para gerenciamento de estado server-side, cache e *infinite scroll*, eliminando "useEffect hell".
* **TanStack Virtual:** Implementado na tabela de frutas para garantir performance fluida mesmo com milhares de registros (DOM Recycling).
* **TailwindCSS v4:** Utilizado via variáveis CSS nativas (`@theme`) para um Design System consistente e leve.
* **Leaflet (React Leaflet):** Mapa interativo com renderização Client-Side (Lazy Loading) para evitar bloqueio da thread principal.
* **Autenticação:** Sistema híbrido utilizando **Server Actions** para comunicação segura com API e **Cookies** para persistência de sessão (compatível com SSR).

## 🛠️ Instalação e Execução

### Pré-requisitos
* Node.js 18+ (24.11.1 used)
* Backend da API rodando [https://github.com/joeydoesntsharefood/desafio-cadmus]

### Passo a Passo

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/MuriloND/desafio-cadmus-frontend.git](https://github.com/MuriloND/desafio-cadmus-frontend.git)
    cd desafio-cadmus-frontend
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente**
    Crie um arquivo `.env.local` na raiz:
    ```ini
    NEXT_PUBLIC_API_URL=SUA_API_URL
    ```

4.  **Inicie o projeto**
    ```bash
    npm run dev
    ```
    Acesse: `http://localhost:3000`

## 📱 Features Implementadas

* [x] Login com Validação e Feedback Visual
* [x] Proteção de Rotas (Middleware/Proxy)
* [x] Tabela Virtualizada com Scroll Infinito
* [x] Ordenação Server-Side
* [x] Mapa Interativo com Pins de Vendas
* [x] Skeleton Loading para melhor UX

---
Desenvolvido como parte do processo seletivo Cadmus.