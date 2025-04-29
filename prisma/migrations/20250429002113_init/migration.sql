-- CreateTable
CREATE TABLE "FavoriteIdea" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "funcionalidades" TEXT[],
    "tecnologias" TEXT[],
    "publicoAlvo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavoriteIdea_pkey" PRIMARY KEY ("id")
);
