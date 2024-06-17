import { signOut } from "@/auth"

export default function Page() {
  return (
    <div className="flex flex-col gap-10 px-12 py-20">
    <h1 className="text-3xl font-extrabold">Sign Out</h1>
      <form action={async (formData) => {
        "use server"
        await signOut({ redirect: true, redirectTo: '/' })
      }}>
        <button className="btn btn-primary" type="submit">Sign Out</button>
      </form>
    </div>
  )
}
