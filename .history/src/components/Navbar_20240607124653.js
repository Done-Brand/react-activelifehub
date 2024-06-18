// src/components/Navbar.js
import React, { useState, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Logo from "../Logo.png";
import { UserIcon } from "@heroicons/react/24/solid";
import ProfileModal from "./ProfileModal";
import SettingsModal from "./SettingsModal";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/home", current: true },
    { name: "About", href: "/about", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Disclosure
        as="nav"
        className="bg-gradient-to-r from-purple-500 to-blue-500"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-start">
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="text-white p-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                  {searchOpen && (
                    <input
                      type="text"
                      className="ml-2 p-2 rounded-md bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      placeholder="Search..."
                    />
                  )}
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                  <Link
                    to="/home"
                    className="flex-shrink-0 flex items-center text-white"
                  >
                    <img
                      className="h-12 w-auto filter contrast-150"
                      src={Logo}
                      alt="Logo"
                    />
                    <h1 className="ml-3 text-xl font-bold">ACTIVE LIFE HUB</h1>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-purple-700 text-white"
                            : "text-white hover:bg-purple-600",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full p-1 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 hover:bg-purple-600 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <UserIcon className="h-8 w-8 text-white" />
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => setIsProfileOpen(true)}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                              )}
                            >
                              Your Profile
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => setIsSettingsOpen(true)}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                              )}
                            >
                              Settings
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-purple-700 text-white"
                        : "text-white hover:bg-purple-600",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <ProfileModal isOpen={isProfileOpen} setIsOpen={setIsProfileOpen} />
      <SettingsModal isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen} />
    </>
  );
};

export default Navbar;