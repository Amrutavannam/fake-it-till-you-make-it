export default function PlayButton() {
  return (
    <button
      type="button"
      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-accent to-danger px-10 py-4 text-lg font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(168,85,247,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-bright active:scale-[0.98] sm:px-14 sm:py-5 sm:text-xl animate-pulse-glow"
      aria-label="Play now — coming soon"
    >
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        aria-hidden
      />
      <span className="relative font-display text-2xl tracking-[0.12em] sm:text-3xl">
        PLAY NOW
      </span>
    </button>
  )
}
