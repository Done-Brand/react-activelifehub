import React from "react";

const ProductCard = ({ product, handleCardClick }) => {
  return (
    <div
      key={product.id}
      className="group relative cursor-pointer border-2 rounded-lg p-4"
      onClick={() => handleCardClick(product)}
      style={{
        borderImageSlice: 1,
        borderImageSource: "linear-gradient(to right, blue, purple)",
      }}
    >
      <div className="w-full h-64 overflow-hidden rounded-md bg-white">
        <img
          src={`http://localhost/react-activelifehub/php-app/uploads/${product.image}`}
          alt={product.description}
          className="w-full h-full object-contain object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.title}
          </h3>
          <p className="text-sm font-medium text-gray-900 mt-2">
            R{product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
