import { createEntry } from "@/app/actions"
export default function Create() {
  return (
    <>
      <div className="flex flex-col gap-4 min-w-96">
        <h1 className="text-2xl font-semibold tracking-tight">Create New Entry</h1>
        <form action={createEntry} className="flex flex-col gap-4">
          <label htmlFor="input">
            Title of entry
          </label>
          <input id="title" name="title" className="input input-bordered" type="text" placeholder="Insert title here" />
          <label htmlFor="textarea">
            Contents of entry
          </label>
          <textarea id="contents" name="contents" className="textarea textarea-bordered" placeholder="Write entry here" />
          <input name="file" id="file" type="file"/>
          <button type="submit" className="btn btn-primary">Create New Entry</button>
        </form>
      </div>
    </>
  )
}
