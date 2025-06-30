import { useState } from "react";
import { registerUser } from "../services/api";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tag, setTag] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await registerUser({ username, password, tag });
      setMessage(response.data.message);
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Erro ao registrar");
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <h2 className="text-2xl font-semibold text-center">Criar Conta</h2>

      <label className="block">
        <span className="text-gray-700">Usuário</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring focus:ring-blue-300"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Senha</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring focus:ring-blue-300"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Tag</span>
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:ring focus:ring-blue-300"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Registrar
      </button>

      {message && (
        <div className="mt-4 text-sm text-center text-blue-700 bg-blue-100 p-2 rounded">
          {message}
        </div>
      )}
    </form>
  );
};

export default RegisterForm;