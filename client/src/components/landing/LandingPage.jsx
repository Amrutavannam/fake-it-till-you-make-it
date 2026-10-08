import GameBackground from '../layout/GameBackground'
import FeatureGrid from './FeatureGrid'
import Hero from './Hero'
import SiteHeader from './SiteHeader'

export default function LandingPage() {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-void">
      <GameBackground />

      <SiteHeader />
      <main>
        <Hero />
        <FeatureGrid />
      </main>

      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted">
        <p>© {new Date().getFullYear()} Fake It Till You Make It</p>
      </footer>
    </div>
  )
}
