// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  const { filterFoodList } = props;
  const [foodName, setFoodName] = useState('');

  const handleSelect = e => {
    setFoodName(e.target.value);
    filterFoodList(e.target.value);
  };

  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={foodName} type="text" onChange={handleSelect} />
    </div>
  );
}

export default Search;
