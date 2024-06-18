import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ProductModal = ({ product, isOpen, setIsOpen }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        console.log("Fetching user ID...");
        const response = await fetch(
          "http://localhost/react-activelifehub/php-app/get_user_id.php"
        );

        console.log("Response status:", response.status);

        if (response.ok) {
          const userId = await response.text();
          console.log("Fetched user ID:", userId);
          setUserId(userId);
        } else {
          console.error("Failed to fetch user ID, status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    console.log("Current user ID state:", userId);
  }, [userId]);

  const handleAddToCart = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("User not logged in");
      return;
    }

    const cartData = {
      user_id: userId,
      product_id: product.id,
      quantity: 1,
    };

    try {
      console.log("Sending cart data:", cartData);
      const response = await fetch(
        "http://localhost/react-activelifehub/php-app/add_to_cart.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartData),
        }
      );

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 border border-transparent rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
                  <div className="flex w-full items-center bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-lg">
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 bg-white rounded-lg">
                      <div className="sm:col-span-4 lg:col-span-5">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white">
                          <img
                            src={`http://localhost/react-activelifehub/php-app/uploads/${product.image}`}
                            alt={product.title}
                            className="object-contain object-center w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                          {product.title}
                        </h2>

                        <section
                          aria-labelledby="information-heading"
                          className="mt-2"
                        >
                          <h3 id="information-heading" className="sr-only">
                            Product information
                          </h3>

                          <p className="text-2xl text-gray-900">
                            R{product.price}
                          </p>

                          <p className="mt-4 text-sm text-gray-500">
                            {product.description}
                          </p>
                        </section>

                        <section
                          aria-labelledby="options-heading"
                          className="mt-10"
                        >
                          <h3 id="options-heading" className="sr-only">
                            Product options
                          </h3>

                          <form onSubmit={handleAddToCart}>
                            <button
                              type="submit"
                              className="mt-6 flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              Add to Cart
                            </button>
                          </form>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProductModal;
