const AboutSection = () => {
  return (
    <section className="flex justify-center items-center px-4">
      <div className="w-full max-w-4xl bg-white text-gray-800 shadow-lg rounded-3xl p-10 border border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center flex items-center justify-center gap-2 text-gray-900">
          <span role="img" aria-label="info">📘</span>
          Sobre o Projeto
        </h2>

        <p className="text-lg leading-relaxed text-justify mb-4 text-gray-700">
          Este projeto foi criado com o objetivo de facilitar a conversão entre formatos populares de arquivos, como imagens e documentos, por meio de uma interface moderna e intuitiva.
        </p>

        <p className="text-lg leading-relaxed text-justify mb-6 text-gray-700">
          A aplicação combina um back-end performático desenvolvido em <strong className="text-gray-900">FastAPI</strong> com um front-end responsivo construído em <strong className="text-gray-900">React</strong> e estilizado com <strong className="text-gray-900">TailwindCSS</strong>, oferecendo uma experiência fluida, rápida e compatível com diferentes dispositivos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-base text-gray-800">
          <div className="flex items-start gap-2">
            <span className="text-xl">🖼️</span>
            <span>Conversão de imagens (JPG, JPEG, PNG) para PDF e outros formatos</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xl">📄</span>
            <span>Conversão de documentos entre PDF e DOCX</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xl">⬇️</span>
            <span>Download automático dos arquivos convertidos</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xl">⚡</span>
            <span>Interface responsiva, rápida e intuitiva</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
