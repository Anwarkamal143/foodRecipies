import { CircleImage, UnderlineLink, UnstyledLink } from "@components"
import { Menu, Transition } from "@headlessui/react"
import { useOpenClose } from "@hooks"
import { classNames } from "@utils"
import React, { Fragment } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import LoginModel from "./model/login"
const myMenus = [
  { id: 1, title: "My Favorite Recipes", href: "/" },
  { id: 2, title: "My Followed Cooks", href: "/" },
  { id: 3, title: "My Food Feed", href: "/" },
]

const otherMenus = [
  { id: 1, title: "Reccomendations", href: "/" },
  { id: 2, title: "Settings", href: "/" },
  { id: 3, title: "Help Center", href: "/" },
  { id: 4, title: "Sign Out", href: "/" },
]

function ProfileDropDown() {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()

  return (
    <Menu as="div" className="relative">
      <div className="flex">
        <div className="loggedOutState display-none" onClick={onOpenModel}>
          <img src="/images/logoutIcon.png" alt="" />
        </div>
        <div className="loggedInState">
          <Menu.Button
            className="relative flex items-center gap-2 text-sm font-medium text-white rounded-full focus:outline-none btnLoggedIn"
          
          >
            <span className="sr-only">Open user menu</span>
            {/* <CircleImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="w-6 h-6"
            /> */}
            <span className="userName">R</span>
            <p className="hidden md:block" onClick={onOpenModel} >Admin</p>
            <FiChevronDown size="0.8rem" className="hidden md:block" />
          </Menu.Button>
        </div>
      </div>
      <LoginModel isOpen={isOpenModel} onCancel={onCloseModel} />
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
          {/* <span className='customArrow block after:left-[83%] md:after:left-3/4'></span> */}
          <Menu.Item>
            {({ active }) => (
              <UnstyledLink
                href="/profile"
                className={classNames(
                  active
                    ? " ring-2 ring-gray-500 ring-opacity-50 ring-offset-2"
                    : "",
                  "mx-4 mb-2 block rounded-md border bg-gray-50 p-3"
                )}
              >
                <div className="flex items-center justify-between ">
                  <CircleImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  <div className="flex flex-col ">
                    <p className="m-0 text-sm font-medium text-dark">Admin</p>
                    <small className="m-0 text-xs text-gray-500 ">
                      Premium user
                    </small>
                  </div>
                  <div className="flex flex-col text-gray-500 ">
                    <FiChevronUp size="0.8rem" />
                    <FiChevronDown size="0.8rem" />
                  </div>
                </div>
              </UnstyledLink>
            )}
          </Menu.Item>
          {/* <hr className='mb-2 ' /> */}
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

          <hr className="my-2 " />
          {otherMenus.length
            ? otherMenus.map(item => (
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

          <hr className="my-2 " />
          <Menu.Item>
            {({ active }) => (
              <UnstyledLink
                href="/"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm font-medium text-green-500 hover:bg-gray-100"
                )}
              >
                Become a member
              </UnstyledLink>
            )}
          </Menu.Item>
          <hr className="my-2 " />
          <div className="flex items-center gap-2 px-4 ">
            <Menu.Item>
              {({ active }) => (
                <UnderlineLink
                  href="/"
                  className={classNames(
                    active ? "underline decoration-dark" : ""
                  )}
                >
                  Privacy
                </UnderlineLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <UnderlineLink
                  href="/"
                  className={classNames(
                    active ? "underline decoration-dark" : ""
                  )}
                >
                  Terms
                </UnderlineLink>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default ProfileDropDown
