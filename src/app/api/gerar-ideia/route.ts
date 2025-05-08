import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const RATE_LIMIT_MS = 30_000;
const ipRequestMap = new Map<string, number>();

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const lastTime = ipRequestMap.get(ip) || 0;

  if (now - lastTime < RATE_LIMIT_MS) {
    return NextResponse.json(
      { error: "Aguarde 30 segundos antes de tentar novamente." },
      { status: 429 }
    );
  }

  ipRequestMap.set(ip, now);

  const temas = [
    "educação inclusiva",
    "sustentabilidade urbana",
    "segurança digital",
    "comunicação alternativa",
    "saúde mental",
    "conscientização ambiental",
    "cidadania digital",
    "comunidades rurais",
    "inovação no trabalho remoto",
    "tecnologia para idosos",
    "mobilidade acessível",
  ];
  const temaAleatorio = temas[Math.floor(Math.random() * temas.length)];

  const prompt = `
  Gere uma ideia inovadora e original de projeto para um sistema ou aplicativo com foco no tema: "${temaAleatorio}".  
  Evite ideias genéricas ou batidas como "app de lista de tarefas", "organizador de tempo", ou "sistema de gestão genérico". A ideia deve ser criativa, resolver um problema real e se destacar por sua originalidade.  
  Responda APENAS com um objeto JSON (sem formatação markdown, sem crases), contendo as seguintes propriedades:
  - "titulo": um título chamativo e diferente
  - "descricao": resumo objetivo da ideia
  - "funcionalidades": lista de 3 a 5 funcionalidades principais
  - "tecnologias": tecnologias possíveis para implementar o projeto
  - "publicoAlvo": grupos ou perfis que se beneficiariam com esse projeto  
  Apenas o objeto JSON como resposta.
  `;

  try {
    const model = genAI.getGenerativeModel({
      model: "models/gemini-2.0-flash",
      generationConfig: {
        temperature: 1.3,
        topK: 40,
        topP: 0.95,
        responseMimeType: "application/json",
      },
    });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const response = result.response;
    const text = response.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    const idea = JSON.parse(text);

    if (typeof idea.publicoAlvo === "string") {
      idea.publicoAlvo = idea.publicoAlvo
        .split(/[,;\n]/)
        .map((item: string) => item.trim())
        .filter(Boolean);
    }

    return NextResponse.json({ idea });
  } catch (error: unknown) {
    console.error("Erro ao gerar ideia", error);

    if (error && typeof error === "object" && "status" in error) {
      const err = error as { status?: number; code?: string };
      if (err.status === 429 || err.code === "RESOURCE_EXHAUSTED") {
        return NextResponse.json(
          {
            error:
              "Limite de uso da API atingido. Tente novamente em alguns minutos ou verifique o plano e cotas da API.",
          },
          { status: 429 }
        );
      }
    }

    // Outros erros
    return NextResponse.json(
      {
        error: "Erro interno ao gerar ideia. Tente novamente mais tarde.",
      },
      { status: 500 }
    );
  }
}
