import React, { useState, useEffect } from 'react';

const Grid2 = () => {
  const [searchTerm, setSearchTerm] = useState(''); // stores search term entered by the user
  const [data, setData] = useState([]); // stores pokémon data fetched from the API
  const [loading, setLoading] = useState(true); // tracks if the data is being loaded
  const [error, setError] = useState(null); // stores error messages from API

  // Fetch data the api
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // loading state is true while fetching
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20'); // fetch the first 20 pokemon
        const result = await response.json(); // parse the API response as JSON
        const transformedData = result.results.map((pokemon, index) => ({
          id: index + 1,
          title: pokemon.name, // use the pokemon name as the title
          text: `Learn more about ${pokemon.name}.`, // Placeholder text for each pokemon
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`, // URL to pokemon sprite
          url: pokemon.url, // URL to detailed data
        }));
        setData(transformedData); // update the state with the transformed data
        setLoading(false); // set loading state to false
      } catch (err) {
        setError('Failed to fetch data'); // error state if fetch fails
        setLoading(false); // set loading state to false
      }
    };

    fetchData();
  }, []);

  // Filter for the search
  const filteredData = searchTerm.length >= 3
    ? data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filter Pokémon by title
      )
    : data;

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Pokémon Grid
      </h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Pokémon..."
          className="w-full max-w-md mx-auto p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          value={searchTerm} // Bind searchTerm state to input
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state on input change
        />
      </div>

      {/* Grid */}
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
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
      )}

      {/* No Results Message */}
      {!loading && filteredData.length === 0 && (
        <p className="text-center text-gray-600 mt-6">No Pokémon match your search.</p>
      )}
    </div>
  );
};

export default Grid2;
