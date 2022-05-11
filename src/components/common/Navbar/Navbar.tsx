/* eslint-disable @next/next/no-img-element */
import { AppSearch, UnstyledLink } from "@components"
import { Disclosure } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import React from "react"
import { RiMenu4Fill } from "react-icons/ri"
import styled from "styled-components"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

function NavBar() {
  return (
    <>
      <Disclosure as="nav" className="fixed z-50 w-full">
        {({ open }) => (
          <>
            <div className="z-10 bg-navBg">
              <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 mainHeader">
                  <div className="flex -mr-2 lg:hidden display-none">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-primary-100 hover:bg-primary-50 hover:text-white focus:outline-none ">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon
                          className="block w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <RiMenu4Fill
                          size="1rem"
                          className="block w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 mx-auto lg:mx-0 siteLogo">
                    <UnstyledLink href="/">
                      <img
                        className="mx-auto block h-10 w-auto md:h-[3.5rem]"
                        src="/svg/logo-white.svg"
                        alt="brand"
                      />
                    </UnstyledLink>
                    {/* <img
                      className='hidden w-auto h-8 lg:block'
                      src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                      alt='Workflow'
                    /> */}
                  </div>
                  {/* Desktop Menu */}
                  <DesktopMenu />
                </div>
              </div>
            </div>
            {/* Mobile menu */}
            <MobileMenu isOpen={open} />
          </>
        )}
      </Disclosure>
      <AppSearch />
    </>
  )
}

export const Navbar = styled(NavBar)``
