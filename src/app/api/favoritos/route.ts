import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST - Adicionar favorito
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validação básica
    const { titulo, descricao, funcionalidades, tecnologias, publicoAlvo } =
      body;

    if (
      !titulo ||
      !descricao ||
      !Array.isArray(funcionalidades) ||
      !Array.isArray(tecnologias) ||
      !Array.isArray(publicoAlvo)
    ) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    const novoFavorito = await prisma.favoriteIdea.create({
      data: {
        titulo,
        descricao,
        funcionalidades,
        tecnologias,
        publicoAlvo,
      },
    });

    return NextResponse.json(novoFavorito);
  } catch (error) {
    console.error("Erro ao salvar favorito:", error);
    return NextResponse.json(
      { error: "Erro ao salvar favorito" },
      { status: 500 }
    );
  }
}

// GET - Listar favoritos
export async function GET() {
  try {
    const favoritos = await prisma.favoriteIdea.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(favoritos);
  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar favoritos" },
      { status: 500 }
    );
  }
}

// DELETE - Desfavoritar (remover favorito)
export async function DELETE(request: Request) {
  try {
    const body = await request.json();

    // Encontrar o favorito pelo título e descrição
    const favoritoRemovido = await prisma.favoriteIdea.deleteMany({
      where: {
        titulo: body.titulo,
        descricao: body.descricao,
      },
    });

    if (favoritoRemovido.count === 0) {
      return NextResponse.json(
        { error: "Favorito não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Favorito removido com sucesso" });
  } catch (error) {
    console.error("Erro ao remover favorito:", error);
    return NextResponse.json(
      { error: "Erro ao remover favorito" },
      { status: 500 }
    );
  }
}
