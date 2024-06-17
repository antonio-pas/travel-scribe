import { providerMap, signIn } from '@/auth'
import { AuthError } from 'next-auth'

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {providerMap.map((prov) => {
        return (
          <form action={async () => {
            "use server"
            try {
              signIn(prov.id)
            } catch (e) {
              if (e instanceof AuthError) {
                alert("error: " + e.type)
              }
            }
          }}>
            <button type="submit">Sign in with {prov.name}</button>
          </form>
        )
      })}
    </div>
  )
}

