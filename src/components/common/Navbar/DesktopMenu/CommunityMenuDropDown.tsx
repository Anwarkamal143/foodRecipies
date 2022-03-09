/* eslint-disable @next/next/no-img-element */
import { ButtonLink, UnstyledLink } from "@Components"
import clsxm from "@Lib/clsxm"
import React from "react"
import { FiChevronDown } from "react-icons/fi"
import MegaMenu, { MegaMenuButton, MegaMenuPanel } from "./MegaMenu"
import { communites } from "./MenuData/MenuData"

function CommunityMenuDropDown() {
  return (
    <>
      <MegaMenu>
        <CommunityMegaMenu />
      </MegaMenu>
    </>
  )
}

function CommunityMegaMenu() {
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
          Community
          <FiChevronDown
            size="0.8rem"
            className=" mt-1 transform transition-all group-hover:rotate-180"
          />
        </button>
      </MegaMenuButton>
      <MegaMenuPanel className=" -left-60 w-full overflow-hidden lg:w-[50vw] xl:w-[43vw] 2xl:max-w-screen-sm">
        {/* <span className='customArrow block drop-shadow-md after:left-10 after:-top-3  '></span> */}

        <div className=" w-full p-4">
          <p className=" mb-4 pl-4 text-sm font-medium text-gray-900">
            Online Community
          </p>
          {/*  Quick Access Recipies */}
          {/* <div className=' flex w-7/12 flex-col gap-6 border-r p-6 pr-4 text-left'> */}
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {communites.length
              ? communites.map(item => (
                  <div key={item.id}>
                    <UnstyledLink
                      href={item.href}
                      className=" flex items-center justify-between rounded-md p-4  text-sm font-medium text-gray-900 hover:bg-blue-50"
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
                    </UnstyledLink>
                  </div>
                ))
              : null}
          </div>
          {/* </div> */}
        </div>
        <div className=" flex items-center justify-between bg-gray-100 p-4 pl-8">
          <div>
            <p className="text-sm font-medium text-gray-900">
              Food Feed (Beta Mode)🔥
            </p>
            <small className=" text-gray-500">
              A recipe is a set of instructions that how to prepare or make.
            </small>
          </div>
          <ButtonLink href="/" variant="light">
            <p className=" text-sm text-blue-400">Learn More</p>
          </ButtonLink>
        </div>
      </MegaMenuPanel>
    </>
  )
}

export default CommunityMenuDropDown
