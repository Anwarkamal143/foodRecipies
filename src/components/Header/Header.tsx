import { UnstyledLink } from "@components"
import * as React from "react"

const links = [
  { href: "/", label: "Route 1" },
  { href: "/", label: "Route 2" },
]

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between layout h-14">
        <UnstyledLink href="/" className="font-bold hover:text-gray-600">
          Home
        </UnstyledLink>
        <nav>
          <ul className="flex items-center justify-between space-x-4">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className="hover:text-gray-600">
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
