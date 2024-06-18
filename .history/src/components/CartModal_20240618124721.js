import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const CartModal = ({ isOpen, setIsOpen }) => {
  const [cartItems, setCartItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchCartItems = async () => {
    try {
      const response = await fetch(
        "http://localhost/react-activelifehub/php-app/fetch_cart.php",
        {
          method: "GET",
          credentials: "include", // Important to include credentials (cookies)
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error response:", errorResponse);
        throw new Error(
          `HTTP error! status: ${response.status}, response: ${JSON.stringify(
            errorResponse
          )}`
        );
      }

      const data = await response.json();
      console.log("Fetched cart items:", data);

      if (Array.isArray(data)) {
        setCartItems(data);
      } else {
        console.error("Unexpected response format:", data);
        setErrorMessage("Unexpected response format");
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setErrorMessage(`Error fetching cart items: ${error.message}`);
      setCartItems([]);
    }
  };

  const handleQuantityChange = async (productId, quantity) => {
    try {
      const response = await fetch(
        "http://localhost/react-activelifehub/php-app/update_cart.php",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId, quantity }),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error response:", errorResponse);
        throw new Error(
          `HTTP error! status: ${response.status}, response: ${JSON.stringify(
            errorResponse
          )}`
        );
      }

      // Update cart item quantity in local state
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.product_id === productId ? { ...item, quantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
      setErrorMessage(`Error updating cart item quantity: ${error.message}`);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchCartItems();
    }
  }, [isOpen]);

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "http://localhost/react-activelifehub/php-app/clear_cart.php",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error response:", errorResponse);
        throw new Error(
          `HTTP error! status: ${response.status}, response: ${JSON.stringify(
            errorResponse
          )}`
        );
      }

      setCartItems([]);
      alert("Checkout successful and cart cleared!");
    } catch (error) {
      console.error("Error during checkout:", error);
      setErrorMessage(`Error during checkout: ${error.message}`);
    }
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        {errorMessage && (
                          <div className="mb-4 text-red-500">
                            {errorMessage}
                          </div>
                        )}
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={`http://localhost/react-activelifehub/php-app/uploads/${product.image}`}
                                    alt={product.description}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">{product.title}</a>
                                      </h3>
                                      <p className="ml-4">
                                        R{product.price * product.quantity}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.description}
                                    </p>
                                  </div>
                                  <div className="mt-4">
                                    <label
                                      htmlFor={`quantity-${product.product_id}`}
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Quantity
                                    </label>
                                    <select
                                      id={`quantity-${product.product_id}`}
                                      name={`quantity-${product.product_id}`}
                                      value={product.quantity}
                                      onChange={(e) =>
                                        handleQuantityChange(
                                          product.product_id,
                                          parseInt(e.target.value)
                                        )
                                      }
                                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                      {[...Array(10).keys()].map((n) => (
                                        <option key={n + 1} value={n + 1}>
                                          {n + 1}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>
                          R
                          {cartItems
                            .reduce(
                              (acc, item) => acc + item.price * item.quantity,
                              0
                            )
                            .toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <button
                          onClick={handleCheckout}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartModal;
