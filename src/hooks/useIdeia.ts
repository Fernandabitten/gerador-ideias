import { useState } from "react";

export interface Ideia {
  titulo: string;
  descricao: string;
  funcionalidades: string[];
  tecnologias: string[];
  publicoAlvo: string[];
}

export function useIdeia() {
  const [currentIdea, setCurrentIdea] = useState<Ideia | null>(null);
  const [loading, setLoading] = useState(false);

  async function generateIdea() {
    setLoading(true);
    try {
      const res = await fetch("/api/gerar-ideia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setCurrentIdea(data.idea);
    } catch (error) {
      console.error("Erro ao gerar ideia", error);
    } finally {
      setLoading(false);
    }
  }

  return { currentIdea, generateIdea, loading };
}
