export default function Login() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 py-10 text-slate-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl lg:flex-row">
        <section className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-xl text-white">
              🌿
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                Wellbeing
              </p>
              <p className="text-sm text-slate-500">Calm. Consistent. You.</p>
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Sign in to your wellbeing space
          </h1>
          <p className="mt-3 text-base text-slate-500">
            Track your mood, build routines, and see your progress in one calm,
            focused dashboard.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              <span aria-hidden="true">🟢</span>
              Continue with Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              <span aria-hidden="true"></span>
              Continue with Apple
            </button>
          </div>

          <div className="my-8 flex items-center gap-3 text-xs text-slate-400">
            <span className="h-px flex-1 bg-slate-200"></span>
            OR
            <span className="h-px flex-1 bg-slate-200"></span>
          </div>

          <form className="space-y-5" aria-label="Login form">
            <label className="block text-sm font-medium text-slate-700" htmlFor="email">
              Email address
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700" htmlFor="password">
              Password
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
              />
              <span className="mt-2 block text-xs text-slate-500">
                Must be at least 8 characters.
              </span>
            </label>

            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
              <label className="flex items-center gap-2" htmlFor="remember">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-emerald-700 focus:ring-emerald-200"
                />
                Remember me
              </label>
              <button
                type="button"
                className="font-semibold text-emerald-700 hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500">
            <p>
              New here?{" "}
              <button
                type="button"
                className="font-semibold text-emerald-700 hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                Create an account
              </button>
            </p>
            <p className="text-xs text-slate-400">Secured with SSL encryption</p>
          </div>
        </section>

        <aside className="relative hidden flex-1 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 p-10 text-white lg:block">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-16 -top-14 h-44 w-44 rounded-full bg-white"></div>
            <div className="absolute right-6 top-24 h-28 w-28 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-16 h-32 w-32 rounded-full bg-white"></div>
          </div>
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
                Mindful moments
              </p>
              <h2 className="mt-4 text-2xl font-semibold">
                Your daily reset starts here.
              </h2>
              <p className="mt-4 text-base text-emerald-50">
                Log in to continue building healthy habits with guided check-ins,
                gentle reminders, and personal insights.
              </p>
              <div className="mt-6 grid gap-4 text-sm text-emerald-50">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-semibold">7 min</p>
                  <p className="text-emerald-100">Average daily check-in</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-semibold">92%</p>
                  <p className="text-emerald-100">Members feel more balanced</p>
                </div>
              </div>
            </div>
            <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="text-sm text-emerald-50">
                "I love how quick it is to capture how I feel. The weekly view
                helps me notice patterns."
              </p>
              <p className="mt-4 text-sm font-semibold text-white">
                — Aisha, wellbeing member
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}