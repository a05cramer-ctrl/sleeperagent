import { Hero } from '@/components/Hero'
import { MissionBrief } from '@/components/MissionBrief'
import { Tokenomics } from '@/components/Tokenomics'
import { Roadmap } from '@/components/Roadmap'
import { Community } from '@/components/Community'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MissionBrief />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </main>
  )
}
