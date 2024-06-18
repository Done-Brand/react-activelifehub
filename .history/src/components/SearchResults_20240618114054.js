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
          `http://localhost/react-activelifehub/php-app/search_product.php?query=${searchQuery}`
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
          <ul>
            {results.map((result) => (
              <li key={result.id} className="mb-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-2">
                    {result.title}
                  </h2>
                  <p className="text-gray-700">{result.description}</p>
                  <p className="text-gray-700">
                    <strong>Price:</strong> ${result.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found for "{searchQuery}"</p>
        )}
      </div>
    </>
  );
};

export default SearchResults;
