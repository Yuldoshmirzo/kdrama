import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { DramaShelf } from "@/components/DramaShelf";
import { CharacterGallery } from "@/components/CharacterGallery";
import { OSTSection } from "@/components/OSTSection";
import { CafeSection } from "@/components/CafeSection";
import { VideoReels } from "@/components/VideoReels";

export default function Home() { return <main><Navbar /><Hero /><DramaShelf /><CharacterGallery /><VideoReels /><OSTSection /><CafeSection /></main>; }
