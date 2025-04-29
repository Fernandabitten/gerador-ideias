import { useState } from "react";
import { Ideia } from "./useIdeia";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState<Ideia[]>([]);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  async function favoritar(ideia: Ideia) {
    const jaFavoritada = favoritos.some(
      (fav) => fav.titulo === ideia.titulo && fav.descricao === ideia.descricao
    );

    if (jaFavoritada) {
      setToast({ message: "Esta ideia já foi favoritada!", type: "error" });
      return;
    }

    try {
      const response = await fetch("/api/favoritos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ideia),
      });

      if (!response.ok) throw new Error("Erro ao favoritar");

      setFavoritos((prev) => [...prev, ideia]);
      setToast({ message: "Ideia favoritada com sucesso!", type: "success" });
    } catch (error) {
      console.error(error);
      setToast({ message: "Erro ao favoritar ideia!", type: "error" });
    }
  }

  // async function desfavoritar(ideia: Ideia) {
  //   console.log("Desfavoritando ideia:", ideia);
  //   try {
  //     const response = await fetch("/api/favoritos", {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(ideia),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Erro ao desfavoritar ideia.");
  //     }

  //     setFavoritos((prev) =>
  //       prev.filter(
  //         (fav) =>
  //           fav.titulo !== ideia.titulo || fav.descricao !== ideia.descricao
  //       )
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function desfavoritar(ideia: Ideia) {
    console.log("Desfavoritando ideia:", ideia);
    try {
      const response = await fetch("/api/favoritos", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ideia),
      });

      if (!response.ok) {
        throw new Error("Erro ao desfavoritar ideia.");
      }

      setFavoritos((prev) =>
        prev.filter(
          (fav) =>
            fav.titulo !== ideia.titulo || fav.descricao !== ideia.descricao
        )
      );
      setToast({
        message: "Ideia desfavoritada com sucesso!",
        type: "success",
      });
    } catch (error) {
      console.error(error);
      setToast({ message: "Erro ao desfavoritar ideia!", type: "error" });
    }
  }

  function clearToast() {
    setToast(null);
  }

  return { favoritos, favoritar, toast, clearToast, desfavoritar };
}
