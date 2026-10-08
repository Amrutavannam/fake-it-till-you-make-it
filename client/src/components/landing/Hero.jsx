import PlayButton from './PlayButton'

export default function Hero() {
  return (
    <section className="relative flex min-h-[85svh] flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:min-h-[88svh] sm:px-6">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="size-[min(90vw,520px)] rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute size-[min(70vw,360px)] translate-x-24 translate-y-12 rounded-full bg-danger/15 blur-[80px]" />
      </div>

      <p className="animate-fade-in-up relative mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted backdrop-blur-sm sm:text-sm">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-cyan" />
        </span>
        Social deduction · Live rooms
      </p>

      <h1 className="animate-fade-in-up relative max-w-4xl font-display text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.95] tracking-[0.04em] text-white text-glow">
        FAKE IT TILL YOU MAKE IT
      </h1>

      <p className="animate-fade-in-up-delay relative mt-6 max-w-xl text-lg text-muted sm:text-xl">
        Think fast. Bluff better.{' '}
        <span className="font-medium text-danger">Find the impostor.</span>
      </p>

      <div className="animate-fade-in-up-delay-2 relative mt-10 sm:mt-12">
        <PlayButton />
      </div>

      <p className="relative mt-6 text-xs text-muted/80 sm:text-sm">
        Free to play · No account required yet
      </p>
    </section>
  )
}
