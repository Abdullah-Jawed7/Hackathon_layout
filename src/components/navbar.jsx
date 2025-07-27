"use client"

import { useEffect, useState } from "react"
import { Bell, Menu, Search, ChevronDown, Sun, Moon } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { darkTheme, lightTheme } from "../redux/slices/themeSlice.js"
import { toggleTheme } from "../utils/toggleTheme.js"

export default function Navbar({ onMenuClick, onNotificationClick }) {
    
const {theme} = useSelector(state => state?.theme)
    const dispatch = useDispatch()
  const [showProfileMenu, setShowProfileMenu] = useState(false)

   // theme handler
    useEffect(()=>{
     toggleTheme(theme)
    },[theme])

  const themeHandler = ()=>{
    console.log(theme)
    theme === "light" ? dispatch(darkTheme()) : dispatch(lightTheme())
}


  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed w-full z-30 top-0">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              onClick={onMenuClick}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>
            <a href="#" className="text-xl font-semibold flex ms-2 md:me-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gray-900 dark:text-white">
                SaaS App
              </span>
            </a>
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={themeHandler}
              className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {theme === "light" ?  <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" /> }
            </button>

            {/* Notifications */}
            {/* <button
              onClick={onNotificationClick}
              className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                3
              </span>
            </button> */}

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center text-sm dark:bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <img className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dgmo64b3z/image/upload/v1753356232/gvtmxq6rmfmzgh6bzrmf.jpg" alt="user photo" />
                <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-900 dark:text-white">John Doe</p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">john@example.com</p>
                  </div>
                  <ul className="py-1">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
