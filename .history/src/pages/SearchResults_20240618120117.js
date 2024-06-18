import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery();
  const searchQuery = query.get("query");
  const [results, setResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(
          `http://localhost/react-activelifehub/php-app/search_products_user.php?query=${searchQuery}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }

        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchResults();
  }, [searchQuery]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Search Results</h1>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleCardClick={handleCardClick}
              />
            ))}
          </div>
        ) : (
          <p>No results found for "{searchQuery}"</p>
        )}

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
          />
        )}
      </div>
    </>
  );
};

export default SearchResults;
