import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white rounded-xl shadow-md transition-colors">
      <LoginForm />
    </div>
  );
};

export default Login;