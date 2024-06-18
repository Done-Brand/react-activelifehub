import React, { useState, useEffect } from "react";
import ProductModal from "./ProductModal";
import ProductCardReUse from "./ProductCardReUse";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("http://localhost/react-activelifehub/php-app/fetch_products.php")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products
          </h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md bg-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {showAll ? "Show Less" : "See All"}
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {displayedProducts.map((product) => (
            // <div
            //   key={product.id}
            //   className="group relative cursor-pointer border-2 rounded-lg p-4"
            //   onClick={() => handleCardClick(product)}
            //   style={{
            //     borderImageSlice: 1,
            //     borderImageSource: "linear-gradient(to right, blue, purple)",
            //   }}
            // >
            //   <div className="w-full h-64 overflow-hidden rounded-md bg-white">
            //     <img
            //       src={`http://localhost/react-activelifehub/php-app/uploads/${product.image}`}
            //       alt={product.description}
            //       className="w-full h-full object-contain object-center group-hover:opacity-75"
            //     />
            //   </div>
            //   <div className="mt-4 flex flex-col justify-between">
            //     <div>
            //       <h3 className="text-sm text-gray-700">
            //         <span aria-hidden="true" className="absolute inset-0" />
            //         {product.title}
            //       </h3>
            //       <p className="text-sm font-medium text-gray-900 mt-2">
            //         R{product.price}
            //       </p>
            //     </div>
            //   </div>
            // </div>
            <ProductCardReUse
              key={product.id}
              product={product}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default ProductCards;
