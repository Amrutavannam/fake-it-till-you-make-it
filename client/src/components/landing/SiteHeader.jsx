import { Link } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-display text-xl tracking-[0.08em] text-white transition-colors hover:text-accent-bright sm:text-2xl"
        >
          FITYMI
        </Link>
        <span className="rounded-md border border-border bg-surface px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted sm:text-xs">
          Beta
        </span>
      </div>
    </header>
  )
}
