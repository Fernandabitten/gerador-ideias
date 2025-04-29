"use client";

import { useEffect, useState } from "react";
import { useFavoritos } from "@/hooks/useFavoritos";
import IdeaCard from "@/components/IdeaCard";

type Favorito = {
  id: number;
  titulo: string;
  descricao: string;
  funcionalidades: string[];
  tecnologias: string[];
  publicoAlvo: string[];
};

export default function FavoritosPage() {
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);
  const { desfavoritar } = useFavoritos();

  useEffect(() => {
    async function fetchFavoritos() {
      const res = await fetch("/api/favoritos");
      const data = await res.json();
      setFavoritos(
        data.map((favorito: Favorito) => ({
          ...favorito,
        }))
      );
    }

    fetchFavoritos();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Favoritos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritos.map((favorito) => (
          <IdeaCard
            key={favorito.id}
            ideia={favorito}
            onDesfavoritar={async () => {
              await desfavoritar(favorito);
              setFavoritos((prev) => prev.filter((f) => f.id !== favorito.id));
            }}
          />
        ))}
      </div>
    </div>
  );
}
