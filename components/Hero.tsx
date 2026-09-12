"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const goToShelf = () => {
    document.getElementById("dramas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="top">
      <div className="hero-posters" aria-hidden="true">
        <img src="/images/kdrama-happiness-poster.jpg" alt="" />
        <img src="/images/kdrama-proposal-poster.jpg" alt="" />
        <img src="/images/kdrama-queen-of-tears-poster.jpg" alt="" />
        <img src="/images/kdrama-crash-landing-poster.jpg" alt="" />
      </div>
      <div className="hero-vignette" />
      <motion.div
        className="hero-content page-width"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <p className="eyebrow">Личная дорама-коллекция</p>
        <h1>Мир дорам Мохинур</h1>
        <p className="hero-copy">
          Истории, в которых хочется остаться.
          <br />
          От первой сцены до финальных титров.
        </p>
        <button className="primary-button" onClick={goToShelf} type="button">
          <Play size={16} fill="currentColor" />
          Смотреть коллекцию
        </button>
        <div className="hero-titles" aria-label="Избранные дорамы">
          <span>В подборке</span>
          <b>Счастье</b><i>•</i><b>Деловое предложение</b><i>•</i><b>Королева слёз</b>
        </div>
      </motion.div>
      <button className="scroll-cue" onClick={goToShelf} type="button" aria-label="Открыть коллекцию дорам">
        <span>Начать просмотр</span>
        <ArrowDownRight size={18} />
      </button>
    </section>
  );
}