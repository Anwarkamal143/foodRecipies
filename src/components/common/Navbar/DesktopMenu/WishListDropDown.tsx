/* eslint-disable @next/next/no-img-element */
import { Menu } from "@headlessui/react"
import { useAppDispatch } from "@hooks"
import { toggleSidebar } from "@reducers"
import { DRAWER } from "@utils/enums"
import { BiBell } from "react-icons/bi"
// import UnstyledLink from '@/components/links/UnstyledLink';

function WishListDropDown() {
  const dispatch = useAppDispatch()
  return (
    <>
      <Menu type="button" as="button" className="relative">
        <div className="notificationsButton">
          <Menu.Button className="relative flex items-center text-white hover:text-gray-300 focus:outline-none">
            <span className="sr-only">View wish list</span>
            <BiBell
              onClick={() => {
                dispatch(
                  toggleSidebar({ isOpen: true, type: DRAWER.NOTIFICATION })
                )
              }}
              size="1.4rem"
              aria-hidden="true"
              className="animate-shake"
            />
            <span className="absolute flex items-center justify-center w-3 h-3 p-1 text-xs text-white rounded-full -top-1 -right-1 bg-primary-50 notificationsStatus">
              4
            </span>
            {/* </button> */}
          </Menu.Button>
        </div>
        {/* <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute py-4 mt-6 origin-top-right bg-white shadow-lg -right-7 w-60 rounded-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex items-center justify-between px-4 mb-4 cursor-default ">
              <p className="text-sm font-bold text-dark">Notifications</p>
              <IoSettingsOutline
                size="1rem"
                className="cursor-pointer text-dark"
              />
            </div>

            {notifications.length
              ? notifications.map(item => (
                  <div
                    key={item.id}
                    className={clsxm(
                      "block cursor-default px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <div className="flex justify-between gap-4 ">
                      <CircleImage src={item.thumbnail} className="mt-2 " />
                      <div className="flex flex-col justify-start gap-1 ">
                        <p className="text-xs font-normal text-left text-gray-600 ">
                          {parse(item.title)}
                        </p>
                        <small className="text-left ">{item.time} ago</small>
                      </div>
                    </div>
                  </div>
                ))
              : null}
            <div className="mt-2 ">
              <Menu.Item>
                {({ active }) => (
                  <UnderlineLink
                    href="/"
                    className={clsxm(
                      " text-red-500",
                      active ? "underline" : ""
                    )}
                  >
                    See all
                  </UnderlineLink>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition> */}
      </Menu>
    </>
  )
}

export default WishListDropDown
