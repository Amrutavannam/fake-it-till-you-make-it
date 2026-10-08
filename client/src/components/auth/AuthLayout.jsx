import { Link } from 'react-router-dom'
import GameBackground from '../layout/GameBackground'

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-void">
      <GameBackground />

      <header className="relative z-10 border-b border-border/60 bg-void/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4 sm:h-16 sm:px-6">
          <Link
            to="/"
            className="font-display text-xl tracking-[0.08em] text-white transition-colors hover:text-accent-bright sm:text-2xl"
          >
            FITYMI
          </Link>
          <Link
            to="/"
            className="text-xs font-medium text-muted transition-colors hover:text-cyan sm:text-sm"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center px-4 py-10 sm:py-14">
        <div className="animate-fade-in-up w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="font-display text-4xl tracking-[0.06em] text-white text-glow sm:text-5xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-3 text-sm text-muted sm:text-base">{subtitle}</p>
            ) : null}
          </div>

          <div className="rounded-2xl border border-border bg-surface/80 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
