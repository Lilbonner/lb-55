import React, { useState } from 'react';
import './Style.css';
import meatImg from '../assets/meat.png';
import saladImg from '../assets/salad.png';
import cheeseImg from '../assets/cheese.png';
import baconImg from '../assets/bacon.png';
import BurgerIngredients from './Ingredients';
import IngredientList from './IngridientStack';

const Burger = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  const ingredientImages = {
    salad: saladImg,
    bacon: baconImg,
    cheese: cheeseImg,
    meat: meatImg
  };

  const ingredientPrices = {
    salad: 10,
    bacon: 60,
    cheese: 50,
    meat: 80,
  };

  const addRemoveIngredient = (action, ingredient) => {
    setIngredients(prevIngredients => {
      const updatedIngredients = { ...prevIngredients };
      updatedIngredients[ingredient] = Math.max(0, updatedIngredients[ingredient] + (action === 'add' ? 1 : -1));
      return updatedIngredients;
    });
  };

  const getTotalPrice = () => {
    let total = 30;
    for (let ingredient in ingredients) {
      total += ingredients[ingredient] * ingredientPrices[ingredient];
    }
    return total;
  };

  return (
    <>
      <BurgerIngredients ingredients={ingredients} ingredientImages={ingredientImages}/>
      <IngredientList
        ingredients={ingredients}
        ingredientImages={ingredientImages}
        ingredientPrices={ingredientPrices}
        addRemoveIngredient={addRemoveIngredient}
      />
        <div className="totalPrice">
            <p>Total Price: {getTotalPrice()} som</p>
        </div>
    </>
  );
};

export default Burger;
