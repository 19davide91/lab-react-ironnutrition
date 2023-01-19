// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { useState } from 'react';

// Iteration 5
function SearchFood(props) {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value);
    props.searchFood(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" value={search} onChange={handleChange} />
    </div>
  );
}

export default SearchFood;
