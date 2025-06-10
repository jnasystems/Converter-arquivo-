import { useState } from "react";
import axios from "axios";
import { Loader2, Download, CheckCircle } from "lucide-react";

const conversionOptions = [
  { label: "JPG → PDF", value: "jpg-to-pdf" },
  { label: "JPEG → PNG", value: "jpeg-to-png" },
  { label: "PNG → JPG", value: "png-to-jpg" },
  { label: "PDF → DOCX", value: "pdf-to-docx" },
  { label: "DOCX → PDF", value: "docx-to-pdf" },
];

// Mapeia o tipo de conversão para a extensão do arquivo convertido
const extensionMap = {
  "jpg-to-pdf": "pdf",
  "jpeg-to-png": "png",
  "png-to-jpg": "jpg",
  "pdf-to-docx": "docx",
  "docx-to-pdf": "pdf",
};

const ConversionForm = () => {
  const [file, setFile] = useState(null);
  const [convertedFileUrl, setConvertedFileUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [conversionType, setConversionType] = useState("jpg-to-pdf");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Selecione um arquivo!");

    setLoading(true);
    setSuccess(false);
    setConvertedFileUrl(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`http://127.0.0.1:8000/convert/${conversionType}`, formData, {
        responseType: "blob",
      });

      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      setConvertedFileUrl(url);
      setSuccess(true);
    } catch (err) {
      if (err.response) {
        // Erro do backend, tenta extrair mensagem
        const reader = new FileReader();
        reader.onload = function() {
          alert("Erro do backend: " + reader.result);
        };
        reader.readAsText(err.response.data);
      } else {
        alert("Erro na requisição: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-2xl w-full max-w-md text-gray-800">
      <h2 className="text-3xl font-extrabold mb-6 text-center">Conversor de Arquivos 🚀</h2>

      <form onSubmit={handleUpload} className="space-y-5">
        <div>
          <label className="block font-medium mb-1">Tipo de Conversão:</label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={conversionType}
            onChange={(e) => setConversionType(e.target.value)}
          >
            {conversionOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Arquivo:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full text-sm text-gray-600
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-semibold
          bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
          transition-all duration-300 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Convertendo...
            </>
          ) : (
            <>Converter</>
          )}
        </button>

        {success && (
          <div className="flex items-center justify-center gap-2 text-green-600 font-medium mt-2">
            <CheckCircle size={20} /> Conversão realizada com sucesso!
          </div>
        )}

        {convertedFileUrl && (
          <a
            href={convertedFileUrl}
            download={`arquivo_convertido.${extensionMap[conversionType] || "bin"}`}
            className="flex items-center justify-center gap-2 mt-4 text-indigo-600 hover:underline font-medium"
          >
            <Download size={20} />
            Baixar Arquivo Convertido
          </a>
        )}
      </form>
    </div>
  );
};

export default ConversionForm;
