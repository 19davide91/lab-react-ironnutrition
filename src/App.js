import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [theFood, setTheFood] = useState(foods);
  return (
    <div className="App">
      <Search />
      <AddFoodForm theFood={theFood} setTheFood={setTheFood} />
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1
        }}
      />
      {theFood.map(food => {
        return (
          <div>
            <FoodBox food={food} />
          </div>
        );
      })}
    </div>
  );
}
export default App;
