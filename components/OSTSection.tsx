"use client";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";
import { ostTracks } from "@/data/ost";
export function OSTSection() {
	const [selected, setSelected] = useState(ostTracks[0]);
	const selectedUrl = `https://www.youtube.com/watch?v=${selected.videoId}`;
	return <section id="ost" className="ost-section"><div className="page-width"><div className="section-heading light"><p className="eyebrow">04 / OST</p><h2>Музыка после титров.</h2><p>Выберите саундтрек, затем включите официальное видео на YouTube.</p></div><div className="ost-player"><img src={selected.image} alt=""/><div><p className="eyebrow">Сейчас выбрано</p><h3>{selected.title}</h3><p>{selected.artist} <i>/</i> {selected.drama}</p><a href={selectedUrl} target="_blank" rel="noreferrer"><Play size={15} fill="currentColor" /> Включить на YouTube</a></div></div><div className="track-list">{ostTracks.map((track,index)=><motion.article className={`track ${selected.title === track.title ? "selected" : ""}`} key={`${track.title}-${track.artist}`} initial={{opacity:0,x:-14}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:index*.1}}><span className="track-number">0{index+1}</span><img src={track.image} alt=""/><div><h3>{track.title}</h3><p>{track.artist} <i>/</i> {track.drama}</p></div><button onClick={() => setSelected(track)} aria-label={`Выбрать ${track.title}`}><Play size={17} fill="currentColor" /></button><a className="track-link" href={`https://www.youtube.com/watch?v=${track.videoId}`} target="_blank" rel="noreferrer" aria-label={`Открыть ${track.title} на YouTube`}><ExternalLink size={16} /></a></motion.article>)}</div></div></section>;
}