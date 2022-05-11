/* eslint-disable @next/next/no-img-element */
import { ButtonLink, Icon, UnstyledLink } from "@components"
import { FacebookIcon, TiktokIcon, TwitterIcon, YoutubeIcon } from "@icons"
import clsxm from "@lib/clsxm"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
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
            className="mt-1 transition-all transform  group-hover:rotate-180"
          />
        </button>
      </MegaMenuButton>
      <MegaMenuPanel className=" -left-60 w-full overflow-hidden lg:w-[50vw] xl:w-[43vw] 2xl:max-w-screen-sm headerMegaMenu communityMegaMenu">
        {/* <span className='block customArrow drop-shadow-md after:left-10 after:-top-3 '></span> */}

        <div className="megaMenuWrapper communityMenu">
          <div className="megaMenuColumn">
            <div className="logo">
              <img src="/images/cook-logo.png" alt="" />
            </div>
            <div className="textbox">
              <p>Online Cook was built from the ground-up to help you save, view, and discover recipes from your favorite cooks. Our platform was built for you - no annoying ads, no distractions, just food and your favorite creators.  Happy cooking!</p>
              <span className="founder">Ryan Ebner<br/> <span>CEO / Founder</span></span>
            </div>
            <ul className="socialIcons">
              <li>
                <Icon className="socialIconsItem facebook">
                <FacebookIcon />
              </Icon>
              </li>
              <li>
                <Icon className="socialIconsItem youtube">
                  <YoutubeIcon />
                </Icon>
              </li>
              <li>
                <Icon className="socialIconsItem twitter">
                  <TwitterIcon />
                </Icon>
              </li>
              <li>
                <Icon className="socialIconsItem tiktok">
                  <TiktokIcon />
                </Icon>
              </li>
            </ul>
          </div>
          <div className="megaMenuColumn">
            <div className="menuBox">
              <strong className="title">Our Community</strong>
              <ul className="menuBoxItems">
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon23.png" alt="" width={16} /></div>
                    <div className="text">
                      <strong className="subtite">Exclusive Tutorials</strong>
                      <span className="subtext">Recipe and Tutorial Videos</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon24.png" alt="" width={14} /></div>
                    <div className="text">
                      <strong className="subtite">Exclusive Recipes</strong>
                      <span className="subtext">View Exclusive Recipes</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon25.png" alt="" width={12} /></div>
                    <div className="text">
                      <strong className="subtite">Weekly Newsletter</strong>
                      <span className="subtext">Personalized Reccomendations</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon26.png" alt="" width={12} /></div>
                    <div className="text">
                      <strong className="subtite">Cooking Preferences</strong>
                      <span className="subtext">Customize Your Experience</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="megaMenuColumn">
            <div className="menuBox">
              <strong className="title">About Our Cooks</strong>
              <ul className="menuBoxItems">
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon05.png" alt="" width={16} /></div>
                    <div className="text">
                      <strong className="subtite">All Our Cooks</strong>
                      <span className="subtext">View All Online Cooks</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon22.png" alt="" width={14} /></div>
                    <div className="text">
                      <strong className="subtite">Cook Collections</strong>
                      <span className="subtext">Specially Curated Recipes</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon02.png" alt="" width={14} /></div>
                    <div className="text">
                      <strong className="subtite">Cook Products</strong>
                      <span className="subtext">What’re Your Cooks Using?</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon03.png" alt="" width={15} /></div>
                    <div className="text">
                      <strong className="subtite">Cook Brands</strong>
                      <span className="subtext">Show Some Love</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full p-4 display-none">
          <p className="pl-4 mb-4 text-sm font-medium text-gray-900 ">
            Online Community
          </p>
          {/*  Quick Access Recipies */}
          {/* <div className='flex flex-col w-7/12 gap-6 p-6 pr-4 text-left border-r '> */}
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {communites.length
              ? communites.map(item => (
                  <div key={item.id}>
                    <UnstyledLink
                      href={item.href}
                      className="flex items-center justify-between p-4 text-sm font-medium text-gray-900 rounded-md  hover:bg-blue-50"
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
                    </UnstyledLink>
                  </div>
                ))
              : null}
          </div>
          {/* </div> */}
        </div>
        <div className="flex items-center justify-between p-4 pl-8 bg-gray-100  p-4 display-none">
          <div>
            <p className="text-sm font-medium text-gray-900">
              Food Feed (Beta Mode)🔥
            </p>
            <small className="text-gray-500 ">
              A recipe is a set of instructions that how to prepare or make.
            </small>
          </div>
          <ButtonLink href="/" variant="light">
            <p className="text-sm text-blue-400 ">Learn More</p>
          </ButtonLink>
        </div>
      </MegaMenuPanel>
    </>
  )
}

export default CommunityMenuDropDown
