import { UnstyledLink } from "@Components"
import { Menu, Transition } from "@headlessui/react"
import { classNames } from "@Utils"
import React, { Fragment, ReactNode } from "react"

const myMenus = [
  { id: 1, title: "Account 1", href: "/" },
  { id: 2, title: "Account 2", href: "/" },
]
type IprofileDropDownTypes = {
  children?: ReactNode
}

function ProfileDropDown(props: IprofileDropDownTypes) {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="relative flex items-center gap-2 text-sm font-medium text-white rounded-full focus:outline-none">
          <span className="sr-only">Open user menu</span>
          {/* <CircleImage
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="w-6 h-6"
          />
          <p className="hidden md:block">Admin</p>
          <FiChevronDown size="0.8rem" className="hidden md:block" /> */}
          {props.children}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 py-4 mt-6 origin-top-right bg-white shadow-lg -right-3 w-52 rounded-xl ring-1 ring-black ring-opacity-5 focus:outline-none md:right-0">
          {myMenus.length
            ? myMenus.map(item => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <UnstyledLink
                      href={item.href}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm font-medium text-dark hover:bg-gray-100"
                      )}
                    >
                      {item.title}
                    </UnstyledLink>
                  )}
                </Menu.Item>
              ))
            : null}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default ProfileDropDown
