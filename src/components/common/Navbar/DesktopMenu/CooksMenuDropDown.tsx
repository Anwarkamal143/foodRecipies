/* eslint-disable @next/next/no-img-element */
import { CircleImage, UnstyledLink } from "@Components"
import clsxm from "@Lib/clsxm"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { FiChevronDown } from "react-icons/fi"
import MegaMenu, { MegaMenuButton, MegaMenuPanel } from "./MegaMenu"
import { CoocksMenu, TopCooksOfWeek } from "./MenuData/MenuData"

function CooksMenuDropDown() {
  return (
    <>
      <MegaMenu>
        <CoocksMegaMenu />
      </MegaMenu>
    </>
  )
}

function CoocksMegaMenu() {
  // const { handleClick, open } = useMegaMenuContext();

  return (
    <>
      <MegaMenuButton>
        <button
          // onClick={() => handleClick(open)}
          className={clsxm(
            "flex items-center gap-2 border-primary-100 px-3 py-2 pb-5 text-sm font-medium text-gray-300 hover:border-b-2 hover:text-primary-100 "
            // open ? 'border-b-2 text-primary-50' : ''
          )}
        >
          Cooks
          <FiChevronDown
            size="0.8rem"
            className=" mt-1 transform transition-all group-hover:rotate-180"
          />
        </button>
      </MegaMenuButton>
      <MegaMenuPanel className="-left-80 w-full lg:w-[70vw] xl:-left-96 xl:w-[60vw] 2xl:max-w-screen-md">
        {/* <span className='customArrow block drop-shadow-md after:left-10 after:-top-3  '></span> */}

        <div className=" flex">
          {/*  Quick Access Recipies */}
          <div className=" flex w-6/12 flex-col gap-6 border-r p-6 pr-4 text-left">
            <div className="flex flex-col">
              {CoocksMenu.length
                ? CoocksMenu.map(item => (
                    <div key={item.id}>
                      <UnstyledLink
                        href={item.href}
                        className=" group flex items-center justify-between rounded-md p-4  text-sm font-medium text-gray-900 hover:bg-blue-50"
                      >
                        <div className=" flex items-center gap-4">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-8"
                          />
                          <div>
                            <p>{item.title}</p>
                            <small className=" text-xs text-gray-400">
                              {item.subtitle}
                            </small>
                          </div>
                        </div>
                        <BsArrowRight className=" mr-2 hidden group-hover:block" />
                      </UnstyledLink>
                    </div>
                  ))
                : null}
            </div>
          </div>
          {/* By Meal Type */}
          <div className="w-6/12">
            <div className=" flex flex-col gap-4 p-6 px-4 text-left">
              <p className=" ml-4 text-center text-sm font-bold text-gray-900">
                Top cooks this week
              </p>
              <div className=" flex justify-between">
                <ul className=" flex flex-col gap-2 text-xs text-gray-500">
                  {TopCooksOfWeek.length
                    ? TopCooksOfWeek.slice(0, TopCooksOfWeek.length / 2).map(
                        item => (
                          <li key={item.id}>
                            <UnstyledLink
                              href={item.href}
                              className=" ml-2 flex items-center justify-between rounded-md p-2 text-xs  font-medium text-gray-500 hover:bg-blue-50"
                            >
                              <div className=" flex items-center gap-2">
                                {/* <div className=' flex items-center gap-2'> */}
                                <p>{item.id}.</p>
                                <CircleImage
                                  src={item.thumbnail}
                                  alt={item.title}
                                  className="h-5 w-5 border-none"
                                />
                                <p>{item.title}</p>
                                {/* </div> */}
                              </div>
                            </UnstyledLink>
                          </li>
                        )
                      )
                    : null}
                </ul>
                <ul className=" flex flex-col gap-2  text-xs text-gray-500">
                  {TopCooksOfWeek.length
                    ? TopCooksOfWeek.slice(
                        TopCooksOfWeek.length / 2,
                        TopCooksOfWeek.length
                      ).map(item => (
                        <li key={item.id}>
                          <UnstyledLink
                            href={item.href}
                            className=" ml-2 flex items-center  justify-between rounded-md p-2 text-xs  font-medium text-gray-500 hover:bg-blue-50"
                          >
                            <div className=" flex items-center gap-2">
                              {/* <div className=' flex items-center gap-2'> */}
                              <p>{item.id}.</p>
                              <CircleImage
                                src={item.thumbnail}
                                alt={item.title}
                                className="h-5 w-5 border-none"
                              />
                              <p>{item.title}</p>
                              {/* </div> */}
                            </div>
                          </UnstyledLink>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MegaMenuPanel>
    </>
  )
}

export default CooksMenuDropDown
