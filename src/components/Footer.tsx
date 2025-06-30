const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 text-center">
      <p>© {new Date().getFullYear()} João Pedro Plinta. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;