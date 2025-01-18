import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles.css";
import Card from "../components/Card/Card";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Card
          title="Ele parou o Brasil"
          description="Este é um card simples com título, descrição e botões de ação."
          image="https://i.ytimg.com/vi/KRCH_lhI0IU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZIg6erDll4kkAur7f9xpvqNMAyw"
          actions={
            <>
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  background: "#007BFF",
                  color: "#fff",
                  border: "none",
                }}
              >
                Ação 1
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  background: "#6c757d",
                  color: "#fff",
                  border: "none",
                }}
              >
                Ação 2
              </button>
            </>
          }
        />
        {children}
      </body>
    </html>
  );
}
