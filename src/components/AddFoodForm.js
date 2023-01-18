// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const { theFoods, setTheFoods } = props;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const _id = `${Math.random()}`;

    const newFood = {
      _id,
      name,
      image,
      calories,
      servings
    };

    const updateFoodCopy = [...theFoods, newFood];

    setTheFoods(updateFoodCopy);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={event => setName(event.target.value)}
        placeholder="Enter the food name"
      />

      <label>Image</label>
      <Input
        value={image}
        type="text"
        onChange={event => setImage(event.target.value)}
        placeholder="Enter the food image"
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        onChange={event => setCalories(event.target.value)}
        placeholder="Enter the food calories"
      />
      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        onChange={event => setServings(event.target.value)}
        placeholder="Enter the food servings"
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
