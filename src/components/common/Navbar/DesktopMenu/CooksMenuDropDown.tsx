/* eslint-disable @next/next/no-img-element */
import { CircleImage, UnstyledLink } from "@components"
import { ArrowRight } from "@icons"
import clsxm from "@lib/clsxm"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { FiChevronDown, FiChevronRight } from "react-icons/fi"
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
            className="mt-1 transition-all transform  group-hover:rotate-180"
          />
        </button>
      </MegaMenuButton>
      <MegaMenuPanel className="-left-80 w-full lg:w-[70vw] xl:-left-96 xl:w-[60vw] 2xl:max-w-screen-md headerMegaMenu cooksMegaMenu">
        {/* <span className='block customArrow drop-shadow-md after:left-10 after:-top-3 '></span> */}

        <div className="megaMenuWrapper cooksMenu">
          <div className="menuLeftColumn">
            <div className="menuBox">
              <a href="#" className="buttonView">See All <FiChevronRight /></a>
              <strong className="title">Cook Quick Access</strong>
              <ul className="menuBoxItems">
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon05.png" alt="" width={13} /></div>
                    <div className="text">
                      <strong className="subtite">All Our Cooks</strong>
                      <span className="subtext">View All Online Cooks</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon02.png" alt="" width={12} /></div>
                    <div className="text">
                      <strong className="subtite">Leaderboards</strong>
                      <span className="subtext">What’s trending? Find out now</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon22.png" alt="" width={14} /></div>
                    <div className="text">
                      <strong className="subtite">Collections</strong>
                      <span className="subtext">Prefer to watch? Check these out</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon03.png" alt="" width={12} /></div>
                    <div className="text">
                      <strong className="subtite">Video Tutorials</strong>
                      <span className="subtext">Prefer to watch? Check these out</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="menuRightColumn">
            <div className="menuRightColumnHead">
              <strong className="title">Top cooks this week <img src="/images/flame.png" alt="" width={11} /></strong>
              <a href="#" className="buttonView">View All <FiChevronRight /></a>
            </div>
            <div className="userlist">
              <div className="top-profiles">
                <div className="rate-info">
                  <span className="rate-heigh"></span>
                  <span className="rate">1</span>
                </div>
                <div className="image">
                  <img src="/images/cook.png" alt="" width={26} />
                </div>
                <span className="cookname">Nick Digiovanni</span>
                <span className="iconArrow"><ArrowRight /></span>
              </div>
              <div className="top-profiles">
                <div className="rate-info">
                  <span className="rate-low"></span>
                  <span className="rate">2</span>
                </div>
                <div className="image">
                  <img src="/images/cook.png" alt="" width={26} />
                </div>
                <span className="cookname">Sam The Cooking Guy</span>
                <span className="iconArrow"><ArrowRight /></span>
              </div>
              <div className="top-profiles">
                <div className="rate-info">
                  <span className="rate-heigh"></span>
                  <span className="rate">3</span>
                </div>
                <div className="image">
                  <img src="/images/cook.png" alt="" width={26} />
                </div>
                <span className="cookname">Gordon Ramsey</span>
                <span className="iconArrow"><ArrowRight /></span>
              </div>
              <div className="top-profiles">
                <div className="rate-info">
                  <span className="rate-low"></span>
                  <span className="rate">4</span>
                </div>
                <div className="image">
                  <img src="/images/cook.png" alt="" width={26} />
                </div>
                <span className="cookname">Joshua Weissman</span>
                <span className="iconArrow"><ArrowRight /></span>
              </div>
              <div className="top-profiles">
                <div className="rate-info">
                  <span className="rate-heigh"></span>
                  <span className="rate">5</span>
                </div>
                <div className="image">
                  <img src="/images/cook.png" alt="" width={26} />
                </div>
                <span className="cookname">Gordon Ramsey</span>
                <span className="iconArrow"><ArrowRight /></span>
              </div>
              <div className="top-profiles">
                <div className="rate-info">
                  <span className="rate-heigh"></span>
                  <span className="rate">6</span>
                </div>
                <div className="image">
                  <img src="/images/cook.png" alt="" width={26} />
                </div>
                <span className="cookname">Gordon Ramsey</span>
                <span className="iconArrow"><ArrowRight /></span>
              </div>
              <div className="top-profiles">
                <div className="rate-info">
                  <span className="rate-heigh"></span>
                  <span className="rate">7</span>
                </div>
                <div className="image">
                  <img src="/images/cook.png" alt="" width={26} />
                </div>
                <span className="cookname">Gordon Ramsey</span>
                <span className="iconArrow"><ArrowRight /></span>
              </div>
              <div className="top-profiles">
                <div className="rate-info">
                  <span className="rate-low"></span>
                  <span className="rate">8</span>
                </div>
                <div className="image">
                  <img src="/images/cook.png" alt="" width={26} />
                </div>
                <span className="cookname">Gordon Ramsey</span>
                <span className="iconArrow"><ArrowRight /></span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex display-none">
          {/*  Quick Access Recipies */}
          <div className="flex flex-col w-6/12 gap-6 p-6 pr-4 text-left border-r ">
            <div className="flex flex-col">
              {CoocksMenu.length
                ? CoocksMenu.map(item => (
                    <div key={item.id}>
                      <UnstyledLink
                        href={item.href}
                        className="flex items-center justify-between p-4 text-sm font-medium text-gray-900 rounded-md  group hover:bg-blue-50"
                      >
                        <div className="flex items-center gap-4 ">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-8"
                          />
                          <div>
                            <p>{item.title}</p>
                            <small className="text-xs text-gray-400 ">
                              {item.subtitle}
                            </small>
                          </div>
                        </div>
                        <BsArrowRight className="hidden mr-2  group-hover:block" />
                      </UnstyledLink>
                    </div>
                  ))
                : null}
            </div>
          </div>
          {/* By Meal Type */}
          <div className="w-6/12">
            <div className="flex flex-col gap-4 p-6 px-4 text-left ">
              <p className="ml-4 text-sm font-bold text-center text-gray-900 ">
                Top cooks this week
              </p>
              <div className="flex justify-between ">
                <ul className="flex flex-col gap-2 text-xs text-gray-500 ">
                  {TopCooksOfWeek.length
                    ? TopCooksOfWeek.slice(0, TopCooksOfWeek.length / 2).map(
                        item => (
                          <li key={item.id}>
                            <UnstyledLink
                              href={item.href}
                              className="flex items-center justify-between p-2 ml-2 text-xs font-medium text-gray-500 rounded-md  hover:bg-blue-50"
                            >
                              <div className="flex items-center gap-2 ">
                                {/* <div className='flex items-center gap-2 '> */}
                                <p>{item.id}.</p>
                                <CircleImage
                                  src={item.thumbnail}
                                  alt={item.title}
                                  className="w-5 h-5 border-none"
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
                <ul className="flex flex-col gap-2 text-xs text-gray-500 ">
                  {TopCooksOfWeek.length
                    ? TopCooksOfWeek.slice(
                        TopCooksOfWeek.length / 2,
                        TopCooksOfWeek.length
                      ).map(item => (
                        <li key={item.id}>
                          <UnstyledLink
                            href={item.href}
                            className="flex items-center justify-between p-2 ml-2 text-xs font-medium text-gray-500 rounded-md  hover:bg-blue-50"
                          >
                            <div className="flex items-center gap-2 ">
                              {/* <div className='flex items-center gap-2 '> */}
                              <p>{item.id}.</p>
                              <CircleImage
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-5 h-5 border-none"
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
