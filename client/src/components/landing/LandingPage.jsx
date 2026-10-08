import FeatureGrid from './FeatureGrid'
import Hero from './Hero'
import SiteHeader from './SiteHeader'

export default function LandingPage() {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-void">
      <div
        className="pointer-events-none fixed inset-0 bg-grid opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-linear-to-b from-accent/5 via-transparent to-void"
        aria-hidden
      />

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
