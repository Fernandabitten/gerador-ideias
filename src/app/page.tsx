"use client";
import { useIdeia } from "@/hooks/useIdeia";
import { useFavoritos } from "@/hooks/useFavoritos";
import IdeaCard from "@/components/IdeaCard";
import Toast from "@/components/Toast";

export default function HomePage() {
  const { currentIdea, generateIdea, loading } = useIdeia();
  const { favoritos, favoritar, toast, clearToast, desfavoritar } =
    useFavoritos();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Gerador de Ideias Aleatórias
      </h1>
      <button
        onClick={generateIdea}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-6"
        disabled={loading}
      >
        {loading ? "Gerando..." : "Gerar Nova Ideia"}
      </button>

      {currentIdea && (
        <IdeaCard
          ideia={currentIdea}
          onFavoritar={() => favoritar(currentIdea)}
        />
      )}

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={clearToast} />
      )}

      {favoritos.length > 0 && (
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-4">Ideias Favoritas</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {favoritos.map((fav) => (
              <IdeaCard
                key={fav.titulo + fav.descricao}
                ideia={fav}
                onDesfavoritar={() => desfavoritar(fav)}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
