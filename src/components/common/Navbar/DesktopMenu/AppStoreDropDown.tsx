/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { BiCustomize } from "react-icons/bi";

function AppStoreDropDown() {
  return (
    <>
      <Menu as="button" className="relative">
        <div>
          <Menu.Button className="relative flex items-center text-white hover:text-gray-300 focus:outline-none">
            <BiCustomize size="1.4rem" aria-hidden="true" />
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
          <Menu.Items className="absolute top-6 p-4 -right-7 mt-6 w-96 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className=" grid grid-cols-3">
              <div className=" border border-transparent text-sm text-gray-500 hover:border-gray-200 p-4 flex flex-col gap-3 justify-center items-center">
                <img src="/images/github.png" alt="github" />
                <p>Github</p>
              </div>

              <div className=" border border-transparent text-sm text-gray-500 hover:border-gray-200 p-4 flex flex-col gap-3 justify-center items-center">
                <img
                  src="/images/bitbucket.png"
                  alt="bitbucket"
                  className=" w-3/12"
                />
                <p>Bitbucket</p>
              </div>

              <div className=" border border-transparent text-sm text-gray-500 hover:border-gray-200 p-4 flex flex-col gap-3 justify-center items-center">
                <img
                  src="/images/dribbble.png"
                  alt="dribbble"
                  className=" w-2/6"
                />
                <p>Dribbble</p>
              </div>

              <div className=" border border-transparent text-sm text-gray-500 hover:border-gray-200 p-4 flex flex-col gap-3 justify-center items-center">
                <img
                  src="/images/dropbox.png"
                  alt="dropbox"
                  className=" w-2/6"
                />
                <p>Dropbox</p>
              </div>

              <div className=" border border-transparent text-sm text-gray-500 hover:border-gray-200 p-4 flex flex-col gap-3 justify-center items-center">
                <img
                  src="/images/mail_chimp.png"
                  alt="mail_chimp"
                  className=" w-2/6"
                />
                <p>Mail Chimp</p>
              </div>

              <div className=" border border-transparent text-sm text-gray-500 hover:border-gray-200 p-4 flex flex-col gap-3 justify-center items-center">
                <img src="/images/slack.png" alt="slack" />
                <p>Slack</p>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default AppStoreDropDown;
