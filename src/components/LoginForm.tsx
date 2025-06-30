import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password });
      setMessage(response.data.message);

      // Salva o status de login no localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Redireciona para a página de dados após login
      navigate("/data");
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Erro ao logar");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <label className="block mb-2">
        <span className="text-gray-700">Usuário</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Senha</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </label>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
      >
        Entrar
      </button>
      {message && <p className="mt-4 text-center text-red-600">{message}</p>}
    </form>
  );
};

export default LoginForm;
