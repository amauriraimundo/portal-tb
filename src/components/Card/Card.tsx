"use client";
import React from "react";
import { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "300px", // Largura fixa
    height: "400px", // Altura fixa para uniformidade geral do card
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Adiciona transição suave
  } as React.CSSProperties,
  cardHover: {
    transform: "translateY(-10px)", // Eleva o card
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)", // Aumenta o sombreado
  } as React.CSSProperties,
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto",
    backgroundColor: "#f8f8f8",
  } as React.CSSProperties,
  content: {
    padding: "16px",
    flex: "1",
  } as React.CSSProperties,
  title: {
    color: "#000",
    fontSize: "1.25rem",
    margin: "0 0 8px",
  } as React.CSSProperties,
  description: {
    fontSize: "1rem",
    color: "#555",
    margin: "0 0 16px",
  } as React.CSSProperties,
  actions: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
  } as React.CSSProperties,
};

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && <img src={image} alt={title} style={styles.image} />}
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
      </div>
    </a>
  );
};

export default Card;
