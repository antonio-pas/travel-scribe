import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="hero mx-auto max-w-lg">
        <div className="hero-content">
          <h1 className="text-3xl">Travel Scribe</h1>
          <Link className="btn btn-primary" href="/signup">Sign Up</Link>
          <Link className="btn btn-outline btn-primary" href="/dashboard">Dashboard</Link>
        </div>
      </header>
    </>
  );
}
