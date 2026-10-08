import FeatureCard from './FeatureCard'

const features = [
  {
    variant: 'multiplayer',
    title: 'Real-Time Multiplayer',
    description:
      'Jump into live rooms with friends or strangers. Every round moves fast—no turns to wait on.',
  },
  {
    variant: 'bluff',
    title: 'Bluff & Deceive',
    description:
      'Sell your story under pressure. Convince the table you belong—even when you’re faking it.',
  },
  {
    variant: 'impostor',
    title: 'Find the Impostor',
    description:
      'Watch for slips, vote with your gut, and expose who never knew the secret in the first place.',
  },
]

export default function FeatureGrid() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 pb-20 pt-4 sm:px-6 lg:px-8"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="sr-only">
        Game features
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="animate-fade-in-up"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  )
}
