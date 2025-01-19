"use client";
import { metadata } from "./metadata";
import { Poppins } from "next/font/google";
import "./styles.css";
import Card from "../components/Card/Card";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const systems = [
  {
    title: "Dealernet",
    description: "Acesse o sistema Dealernet para gerenciar suas operações.",
    image: "/dealernet_ (1).svg",
    link: "https://toriba.dealernetworkflow.com.br/",
  },
  {
    title: "Vianuvem",
    description: "Acesse o sistema Vianuvem para controle de frotas.",
    image: "/logo-unico-color.svg",
    link: "https://app.vianuvem.com.br/",
  },
  {
    title: "Fandi",
    description: "Acesse o sistema Vianuvem para controle de frotas.",
    image: "/logo_fandi.png",
    link: "https://app.fandi.com.br/",
  },
  {
    title: "ControlStock",
    description: "Acesse o sistema Vianuvem para controle de frotas.",
    image: "/logo2-402w.png",
    link: "https://www.stok-e.com/ControleAcesso/",
  },
  {
    title: "D4Sign",
    description: "Acesse o sistema Vianuvem para controle de frotas.",
    image: "/d4sign.svg",
    link: "https://secure.d4sign.com.br/login.html",
  },
  {
    title: "NBS",
    description: "Acesse o sistema Vianuvem para controle de frotas.",
    image: "/nbs.png",
    link: "https://www.nbsi.com.br/",
  },
  {
    title: "Vianuvem",
    description: "Acesse o sistema Vianuvem para controle de frotas.",
    image: "/logo-unico-color.svg",
    link: "https://app.vianuvem.com.br/",
  },
  // Adicione outros sistemas aqui
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname(); // Obter o pathname corretamente

  useEffect(() => {
    // Garantir que o componente seja montado no cliente
    setIsClient(true);
  }, []);

  // Renderizar algo enquanto a página está sendo montada no cliente
  if (!isClient) {
    return <div>Carregando...</div>;
  }

  // Verificar se estamos na home page
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <head>
        <title>
          {metadata && metadata.title
            ? String(metadata.title)
            : "Título Padrão"}
        </title>
        <meta
          name="description"
          content={
            metadata && metadata.description
              ? String(metadata.description)
              : "Descrição padrão"
          }
        />
      </head>

      <body className={poppins.className}>
        {/* Exibir Navbar e Cards apenas na página inicial */}
        <Navbar />
        {isHomePage && (
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "16px",
              backgroundColor: "#f8f9fa",
            }}
          >
            {systems.map((system, index) => (
              <Card
                key={index}
                title={system.title}
                description={system.description}
                image={system.image}
                link={system.link}
              />
            ))}
          </div>
        )}
        {children} {/* Renderizar conteúdo de outras páginas */}
      </body>
    </html>
  );
}
