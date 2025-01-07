import React, { useState } from 'react';
import { gridData } from './data';

const Grid = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the data based on the search term
  const filteredData = searchTerm.length >= 3
    ? gridData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : gridData;

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Our Featured Items
      </h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search items..."
          className="w-full max-w-md mx-auto p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 truncate">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {item.text}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* No Results Message */}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-600 mt-6">No items match your search.</p>
      )}
    </div>
  );
};

export default Grid;
