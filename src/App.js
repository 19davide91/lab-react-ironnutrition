import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [theFood, setTheFood] = useState(foods);
  const [search, setSearch] = useState(foods);

  const searchFood = str => {
    let searchedFood;
    if (str === '') {
      searchedFood = search;
    } else {
      searchedFood = search.filter(movie => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }
    setTheFood(searchedFood);
  };

  return (
    <div className="App">
      <Search searchFood={searchFood} />
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
