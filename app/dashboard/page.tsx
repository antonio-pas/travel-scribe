import { getEntries } from '../actions'
import NewButton from './new-button'
function Entry({entry}: { entry: any }) {
  return (
    <div className="p-12 rounded-xl bg-base-300 flex flex-col gap-4">
      <h3 className="text-xl tracking-tight font-bold">{entry.title}</h3>
      <span className="opacity-60 text-sm">{entry.createdAt.toDateString()}</span>
      <p className="opacity-70">{entry.contents}</p>
    </div>
  )
}
export default async function Dashboard() {
  const entries = await getEntries();
  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight mb-10">Entries</h1>
      <div className="grid gap-8 grid-rows-[repeat(auto-fill, 500px)] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <NewButton />
        {entries.map((e, i) => {
          return (
            <Entry key={i} entry={e}></Entry>
          )
        })}
      </div>
    </>
  )
}
