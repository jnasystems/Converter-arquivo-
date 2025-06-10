const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 text-sm py-4 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-col sm:flex-row text-center sm:text-left">
        <p>© {new Date().getFullYear()} Conversor de Arquivos. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por <a href="https://github.com/jnasystems/Converter-arquivo-" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">JNA Systems</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
