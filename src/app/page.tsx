import Hero from "@/components/Hero"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Tagline from "@/components/Tagline"
import Rooms from "@/components/Rooms"
import Events from "@/components/Events"
import Features from "@/components/Features"

export default function Home() {
  return (
    <main>
  <Hero />
  <Tagline />
  <Rooms />
  <Events />
  <Features />
    </main>
  );
}
