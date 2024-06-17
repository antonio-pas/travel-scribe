import { MapIcon, BookOpenIcon, UsersIcon } from "@heroicons/react/24/solid"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<div className="flex h-screen items-center overflow-hidden">
    <ul className="menu menu-vertical min-h-screen bg-base-200 menu-lg">
      <li>
        <a>
          <MapIcon className="size-6" />
        </a>
      </li>
      <li>
        <a>
          <BookOpenIcon className="size-6" />
        </a>
      </li>
      <li>
        <a>
          <UsersIcon className="size-6" />
        </a>
      </li>
    </ul>
    <main className="flex flex-col px-12 pt-20 h-screen overflow-scroll">{children}</main>
  </div>)
}
