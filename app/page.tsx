import { auth, signIn } from '@/auth'
import Link from 'next/link'
function SignIn() {
  return (
    <form action={async () => {
      "use server"
      await signIn('github')
    }}>
      <button type="submit" className="btn btn-primary">Sign in with GitHub</button>
    </form>
  )
}
export default async function Home() {
  const a = await auth();
  return (
    <>
      <header className="hero mx-auto max-w-lg">
        <div className="hero-content">
          <h1 className="text-3xl">Travel Scribe</h1>
          {a?.user ? <>{a.user.name}<Link className="btn btn-link" href="/signout">Sign Out</Link></> : <SignIn />}
          <Link className="btn btn-outline btn-primary" href="/dashboard">
            Dashboard
          </Link>
        </div>
      </header>
    </>
  )
}
