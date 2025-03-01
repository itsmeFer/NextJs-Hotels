"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return (
    <nav className="navbar">
    <h1 className="logo">ferdi.com</h1>

      {/* Tombol Hamburger */}
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
    </button>

      {/* Menu List */}
    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link href="/">Beranda</Link></li>
        <li><Link href="/Contacts">Kontak</Link></li>
        <li><Link href="/Suggest">Saran</Link></li>
    </ul>
    </nav>
);
}
