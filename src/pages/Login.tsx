export default function Login() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg lg:flex-row">
        <section className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Sign in to your wellbeing space
          </h1>
          <p className="mt-3 text-base text-slate-500">
            Track your mood, build routines, and see your progress in one
            calm, focused dashboard.
          </p>

          <form className="mt-8 space-y-5">
            <label className="block text-sm font-medium text-slate-700">
              Email address
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Password
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-100"
                />
                Remember me
              </label>
              <button
                type="button"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-500">
            New here?{" "}
            <button type="button" className="font-semibold text-blue-600">
              Create an account
            </button>
          </p>
        </section>

        <aside className="relative hidden flex-1 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-10 text-white lg:block">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white"></div>
            <div className="absolute right-10 top-20 h-24 w-24 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-16 h-32 w-32 rounded-full bg-white"></div>
          </div>
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
                Mindful moments
              </p>
              <h2 className="mt-4 text-2xl font-semibold">
                Your daily reset starts here.
              </h2>
              <p className="mt-4 text-base text-blue-100">
                Log in to continue building healthy habits with guided
                check-ins, gentle reminders, and personal insights.
              </p>
            </div>
            <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="text-sm text-blue-100">
                "I love how quick it is to capture how I feel. The weekly
                view helps me notice patterns."
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