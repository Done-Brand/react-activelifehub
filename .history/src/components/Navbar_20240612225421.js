import React, { useState, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo.png";
import { UserIcon } from "@heroicons/react/24/solid";
import ProfileModal from "./ProfileModal";
import SettingsModal from "./SettingsModal";
import CartModal from "./CartModal";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/home", current: true },
    { name: "About", href: "/about", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "http://localhost/react-activelifehub/php-app/logout.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to log out");
      }

      const data = await response.json();
      console.log(data.message);

      // Add debugging statement before redirection
      console.log("Navigating to login page...");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
                <div className="absolute inset-y-0 left-0 flex items-center custom:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center custom:items-stretch custom:justify-start">
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
                <div className="flex items-center justify-end custom:flex-col custom:items-start custom:space-y-2">
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="text-white p-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                  <div className="hidden sm:block ml-2">
                    {searchOpen && (
                      <input
                        type="text"
                        className="ml-2 p-2 rounded-md bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        placeholder="Search..."
                      />
                    )}
                  </div>
                  <button
                    type="button"
                    className="ml-2 rounded-full p-1 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={() => setIsCartOpen(true)}
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
                            <button
                              onClick={handleLogout}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="custom:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
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
              <div className="px-2 pb-3 pt-2">
                {searchOpen && (
                  <input
                    type="text"
                    className="w-full p-2 rounded-md bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    placeholder="Search..."
                  />
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <ProfileModal isOpen={isProfileOpen} setIsOpen={setIsProfileOpen} />
      <SettingsModal isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen} />
      <CartModal isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
};

export default Navbar;
