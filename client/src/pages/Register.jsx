import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthField from '../components/auth/AuthField'
import AuthLayout from '../components/auth/AuthLayout'
import { validateRegister } from '../utils/authValidation'

const initialForm = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export default function Register() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setNotice('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateRegister(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setNotice(
      'Registration isn’t connected to a server yet — no data was sent. Backend coming soon.',
    )
  }

  return (
    <AuthLayout title="JOIN THE GAME" subtitle="Create your player profile and get in the lobby.">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        {notice ? (
          <p
            className="animate-fade-in-up rounded-xl border border-cyan/30 bg-cyan/10 px-4 py-3 text-center text-sm text-cyan"
            role="status"
          >
            {notice}
          </p>
        ) : null}

        <AuthField
          id="register-username"
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          error={errors.username}
          autoComplete="username"
          placeholder="Your handle"
        />

        <AuthField
          id="register-email"
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
          placeholder="you@example.com"
        />

        <AuthField
          id="register-password"
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="new-password"
          placeholder="At least 8 characters"
        />

        <AuthField
          id="register-confirm-password"
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          autoComplete="new-password"
          placeholder="Repeat password"
        />

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-linear-to-r from-accent to-danger py-3.5 font-display text-xl tracking-[0.1em] text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_28px_rgba(168,85,247,0.45)] active:scale-[0.99]"
        >
          REGISTER
        </button>

        <p className="text-center text-sm text-muted">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-accent-bright transition-colors hover:text-cyan"
          >
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
