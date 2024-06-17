"use client"
import { PlusIcon } from "@heroicons/react/24/solid";

export default function NewButton() {
  return (
    <>
      <a href="/dashboard/create" className="bg-base-200 rounded-xl cursor-pointer flex flex-col justify-center items-center">
        <PlusIcon className="size-8" />
        <span>Create New Entry</span>
      </a>
    </>
  )
}
