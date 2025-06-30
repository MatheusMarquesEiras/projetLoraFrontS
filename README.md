# 📡 Projeto LoRa – Frontend

Frontend em **React + TypeScript + Tailwind CSS** que consome a API Python do Projeto LoRa para exibir registros de leituras RFID e permitir autenticação de usuários.

## 1. 🚀 Funcionalidades

- Registro de novos usuários
- Login de usuários
- Proteção de rota para a página de dados
- Exibição dos registros RFID (hash da tag e data/hora da leitura)
- Layout responsivo e moderno

## 2. 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

## 3. ⚙️ Instalação e Uso

### 3.1 Clone o repositório

```bash
git clone https://github.com/seu-usuario/projeto-lora-frontend.git
cd projeto-lora-frontend
```

### 3.2 Instale as dependências

```bash
npm install
```

### 3.3 Configure o ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
VITE_API_URL=http://localhost:8890
```

> Altere a URL conforme o endereço onde a **API Python** estiver rodando.

### 3.4 Inicie o projeto

```bash
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

## 4. 📁 Estrutura de Pastas

```
src/
├─ components/      # Componentes reutilizáveis (LoginForm, RegisterForm, Navbar, Footer)
├─ pages/           # Páginas (DataPage)
├─ services/        # Comunicação com API (axios)
├─ types.ts         # Tipos TypeScript compartilhados
├─ App.tsx          # Roteamento e estrutura geral
├─ main.tsx         # Ponto de entrada da aplicação
├─ index.css        # Estilos Tailwind
```

## 5. 🔐 Autenticação

- Após login bem-sucedido, um token (ou apenas um flag de login simples) é salvo no `localStorage`.
- A página de **dados** (`/data`) é protegida e só acessível se o usuário estiver autenticado.
- Para testar a proteção, tente acessar diretamente a URL `/data` sem estar logado.

## 6. ✅ TODO / Melhorias Futuras

- Adicionar logout e expiração de sessão
- Usar JWT real com a API
- Adicionar loading spinner animado
- Adicionar WebSocket para atualizar os dados em tempo real

## 7. 🤝 Contribuição

Pull requests são bem-vindos! Para grandes mudanças, por favor abra uma issue primeiro para discutir o que você gostaria de alterar.

## 8. 📄 Licença

[MIT](./LICENSE)

## 9. 👨‍💻 Desenvolvido por

João Pedro Plinta – [@joaopedroplinta](https://github.com/joaopedroplinta)