import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const SettingsModal = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white text-center"
                >
                  Settings
                </Dialog.Title>
                <div className="mt-4 flex flex-col items-center">
                  <ul className="text-sm text-white space-y-2">
                    {[
                      // { label: "My Account", path: "/account" },
                      { label: "Track Order", path: "/track-order" },
                      { label: "Returns", path: "/returns" },
                      // { label: "Credit & Refunds", path: "/credits-refunds" },
                      // { label: "Product Reviews", path: "/product-reviews" },
                      // { label: "Invoices", path: "/invoices" },
                      { label: "Personal Details", path: "/personal-details" },
                      { label: "Help Centre", path: "/help" },
                    ].map((item) => (
                      <li key={item.label}>
                        <button
                          className="text-left w-full px-4 py-2 bg-purple-700 hover:bg-purple-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
                          onClick={() => handleNavigation(item.path)}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SettingsModal;
