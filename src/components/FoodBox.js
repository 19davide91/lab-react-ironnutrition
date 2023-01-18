// Remember to import Ant Design components before using them.
import foods from '../foods.json';
import { Card, Col, Button } from 'antd';
import 'antd/dist/reset.css';
import { useState } from 'react';

// Iteration 2
function FoodBox(props) {
  const [theFood, setTheFood] = useState(foods);

  const deleteFood = name => {
    const copyOfTheFood = [...theFood];
    const filteredFood = copyOfTheFood.filter(food => {
      return food.name !== name;
    });
    setTheFood(filteredFood);
  };
  console.log(props);
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b>{' '}
          kcal
        </p>
        <Button onClick={() => deleteFood(theFood.name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
