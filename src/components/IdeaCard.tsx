interface IdeaCardProps {
  ideia: {
    titulo: string;
    descricao: string;
    funcionalidades: string[];
    tecnologias: string[];
    publicoAlvo: string[];
  };
  onFavoritar?: () => void;
  onDesfavoritar?: () => void;
}

export default function IdeaCard({
  ideia,
  onFavoritar,
  onDesfavoritar,
}: IdeaCardProps) {
  return (
    // <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 transition">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 transition flex flex-col min-h-[500px]">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{ideia.titulo}</h2>

      <p className="text-gray-600 mb-6">{ideia.descricao}</p>

      <div className="grid gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Funcionalidades
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            {ideia.funcionalidades.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Tecnologias Sugeridas
          </h3>
          <ul className="flex flex-wrap gap-2">
            {ideia.tecnologias.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Público-Alvo
          </h3>
          <p className="text-gray-600">{ideia.publicoAlvo}</p>
        </div>
      </div>
      <div className="mt-auto flex">
        {onFavoritar && (
          <button
            onClick={onFavoritar}
            className="w-full mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            Favoritar
          </button>
        )}
        {onDesfavoritar && (
          <button
            onClick={onDesfavoritar}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Desfavoritar
          </button>
        )}
      </div>
    </div>
  );
}
