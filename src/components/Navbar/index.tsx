"use client";
import Link from "next/link";
import Image from "next/image";
import "./index.css";
import NavItem, { NavItemInterFace } from "../NavItem";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const items: NavItemInterFace[] = [
    {
      url: "/",
      label: "Início",
    },
    {
      url: "/request",
      label: "Suporte",
    },
    {
      url: "/about",
      label: "Sobre",
    },
  ];

  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header>
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image src="/logo.png" width={100} height={20} alt="Logotipo" />
        </Link>
        <ul className={`nav-items${openMenu ? "open" : ""}`}>
          {items.map((item, index) => (
            <NavItem
              key={index}
              url={item.url}
              label={item.label}
              isActive={pathname === item.url}
            />
          ))}
        </ul>
        <button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
}
