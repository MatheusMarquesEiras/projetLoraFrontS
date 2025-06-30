import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex items-center justify-between">
      <h1 className="text-2xl font-bold">Projeto LoRa</h1>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">Início</Link>
        <Link to="/register" className="hover:underline">Registrar</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/data" className="hover:underline">Dados</Link>
        <button
          onClick={handleLogout}
          className="ml-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
        >
          Sair
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
