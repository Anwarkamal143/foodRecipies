/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from "@headlessui/react"
import clsxm from "@Lib/clsxm"
import React, { Fragment } from "react"

const translationLanguage = [
  { id: 1, title: "English", thumbnail: "/images/us.jpg" },
  { id: 2, title: "Spainish", thumbnail: "/images/italy.jpg" },
  { id: 3, title: "German", thumbnail: "/images/germany.jpg" },
  { id: 4, title: "Italian", thumbnail: "/images/italy.jpg" },
  { id: 5, title: "Russian", thumbnail: "/images/russia.jpg" },
]

function LanguageSelectDropDown() {
  return (
    <>
      <Menu type="button" as="button" className="relative">
        <div>
          <Menu.Button className="relative flex items-center w-8 text-white hover:text-gray-300 focus:outline-none">
            <img src="/svg/engFlag.svg" alt="eng" className="w-full" />
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
          <Menu.Items className="absolute py-4 mt-6 origin-top-right bg-white shadow-lg -right-7 w-36 rounded-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            {translationLanguage.length
              ? translationLanguage.map(item => (
                  <Menu.Item key={item.id}>
                    {({ active }) => (
                      <div
                        key={item.id}
                        // href={item.href}
                        className={clsxm(
                          active ? "bg-gray-100" : "",
                          "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                        )}
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-2/12"
                        />
                        {item.title}
                      </div>
                    )}
                  </Menu.Item>
                ))
              : null}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default LanguageSelectDropDown
