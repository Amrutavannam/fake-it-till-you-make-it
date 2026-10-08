const icons = {
  multiplayer: (
    <svg
      className="size-8 text-cyan"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198a.75.75 0 01-1.06 0l-2.829-2.828a.75.75 0 011.06-1.06l2.828 2.829a.75.75 0 010 1.06zm-12.06 0a9.094 9.094 0 01-3.741-.479 3 3 0 014.682-2.72m-.94 3.198a.75.75 0 001.06 0l2.829-2.828a.75.75 0 00-1.06-1.06l-2.828 2.829a.75.75 0 000 1.06zM12 12.75a3 3 0 100-6 3 3 0 000 6z"
      />
    </svg>
  ),
  bluff: (
    <svg
      className="size-8 text-accent-bright"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    </svg>
  ),
  impostor: (
    <svg
      className="size-8 text-danger"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
      />
    </svg>
  ),
}

export default function FeatureCard({ variant, title, description }) {
  return (
    <article
      className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-hover hover:shadow-[0_8px_32px_rgba(168,85,247,0.12)] sm:p-8"
    >
      <div
        className="flex size-14 items-center justify-center rounded-xl border border-border bg-void-light transition-colors duration-300 group-hover:border-accent/30"
        aria-hidden
      >
        {icons[variant]}
      </div>
      <div className="text-left">
        <h3 className="font-display text-2xl tracking-wide text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      </div>
    </article>
  )
}
