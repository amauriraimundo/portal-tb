import React from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string; // Opcional: URL da imagem
  actions?: React.ReactNode; // Opcional: Botões ou links de ação
}

const Card: React.FC<CardProps> = ({ title, description, image, actions }) => {
  return (
    <div style={styles.card}>
      {image && <img src={image} alt={title} style={styles.image} />}
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        {actions && <div style={styles.actions}>{actions}</div>}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "300px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,
  image: {
    width: "100%",
    height: "auto",
  } as React.CSSProperties,
  content: {
    padding: "16px",
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

export default Card;
