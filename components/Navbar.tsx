"use client";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [["Дорамы", "dramas"], ["Герои", "герои"], ["Видео", "видео"], ["OST", "ost"], ["Кафе", "кафе"]] as const;
export function Navbar() {
  const [open, setOpen] = useState(false);
  const move = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return <nav className="nav"><button className="wordmark" onClick={() => move("top")}>Дорамы <i>&quot;Мохинур&quot;</i><Heart className="wordmark-heart" size={14} fill="currentColor" aria-hidden="true" /></button><div className={open ? "nav-links open" : "nav-links"}>{links.map(([label, id]) => <button key={id} onClick={() => move(id)}>{label}</button>)}</div><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Открыть навигацию">{open ? <X /> : <Menu />}</button></nav>;
}