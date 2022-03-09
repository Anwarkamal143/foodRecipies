import React from "react"
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoTiktok } from "react-icons/io5"

const Foter = () => {
  return (
    <div
      /*  style={{
        background:
          "linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)) , url('https://post.healthline.com/wp-content/uploads/2019/10/10666-21_Homemade_Baby_Food_Recipes_1200x628-facebook.jpg') no-repeat",
        backgroundBlendMode: 'darken, luminosity',
      }} */
      className="bg-footerBg py-3"
    >
      <div className=" container mx-auto p-6">
        <div className=" grid grid-cols-1 gap-0 space-y-6 lg:grid-cols-4 lg:space-y-0 xl:grid-cols-4 xl:space-y-0">
          <div className="w-4/5 text-left">
            <img
              className=" block h-10 w-auto md:h-[3.5rem]"
              src="./svg/logo-white.svg"
              alt="brand"
            />
            <p className="mt-5 font-sans text-sm font-semibold leading-6 text-zinc-500 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>
          </div>

          <div>
            <h5 className="mb-2 font-bold text-white"> Recipes </h5>
            <ul className="inline-block space-y-2  font-medium text-zinc-500 ">
              <li className="hover:text-slate-300">By Type</li>
              <li className="hover:text-slate-300">By Dietary Preference</li>
              <li className="hover:text-slate-300">By Cuisine</li>
              <li className="hover:text-slate-300">By Difficulty</li>
              <li className="hover:text-slate-300">By Event</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white"> Online Cook </h5>
            <ul className="inline-block space-y-2 font-medium text-zinc-500">
              <li className="hover:text-slate-300">Food Feed</li>
              <li className="hover:text-slate-300">All Cooks</li>
              <li className="hover:text-slate-300">My Groups</li>
              <li className="hover:text-slate-300">LeaderBoard</li>
              <li className="hover:text-slate-300">Store</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white"> Follow Us </h5>
            <ul className="space-y-2 font-medium text-zinc-500">
              <ul className="inline-block space-x-3 py-1 ">
                <li className="text-md inline-block rounded-full bg-sky-600 p-2 text-white duration-300  ease-in  hover:bg-sky-700">
                  <FaFacebookF />
                </li>
                <li className="text-md inline-block rounded-full   bg-yellow-400 p-2 text-white duration-300 ease-in hover:bg-yellow-600">
                  <AiFillInstagram />
                </li>
                <li className="text-md inline-block rounded-full  bg-red-400 p-2   text-white duration-300 ease-in hover:bg-red-600">
                  <IoLogoTiktok />
                </li>
              </ul>
              <h5 className="mb-2 font-bold text-white"> Contact Us </h5>
              <li className="hover:text-slate-300">+00801 756 91XX XXX</li>
              <li className="hover:text-slate-300">+00801 756 91XX XXX</li>
              <li className="hover:text-slate-300">example32@fiverr.com</li>
            </ul>
          </div>
        </div>
        <div className="pt-10">
          <hr className="border-y-1  border-solid border-gray-700" />
        </div>
        <div className="flex justify-between">
          <div>
            <ul className="inline-block space-y-2  font-medium text-zinc-500">
              <li className="inline-block hover:text-slate-300">
                Cook Application
              </li>
              <li className="ml-5 inline-block hover:text-slate-300">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <ul className="inline-block space-y-2  font-medium text-zinc-500">
              <li className="inline-block hover:text-slate-300">
                Privacy Policy
              </li>
              <li className=" ml-5 inline-block hover:text-slate-300">
                Terms and Condition
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Footer = Foter
