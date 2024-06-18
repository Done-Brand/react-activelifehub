import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery();
  const searchQuery = query.get("query");
  const [results, setResults] = useState([]);

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

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Search Results</h1>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={`http://localhost/react-activelifehub/php-app/uploads/${product.image}`}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-gray-700">
                  <strong>Price:</strong> ${product.price}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found for "{searchQuery}"</p>
        )}
      </div>
    </>
  );
};

export default SearchResults;
