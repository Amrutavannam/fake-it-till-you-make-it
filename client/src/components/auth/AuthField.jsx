export default function AuthField({
  id,
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  autoComplete,
  placeholder,
}) {
  return (
    <div className="text-left">
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-white/90">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-void-light px-4 py-3 text-sm text-white placeholder:text-muted/60 transition-colors duration-200 outline-none focus:ring-2 focus:ring-accent/40 ${
          error
            ? 'border-danger/70 focus:border-danger'
            : 'border-border focus:border-accent/50'
        }`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
