export default function GameBackground() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 bg-grid opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-linear-to-b from-accent/5 via-transparent to-void"
        aria-hidden
      />
    </>
  )
}
