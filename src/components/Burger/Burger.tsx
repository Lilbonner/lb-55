import React, { useState } from 'react';
import './Style.css';
import meatImg from '../assets/meat.png';
import saladImg from '../assets/salad.png';
import cheeseImg from '../assets/cheese.png';
import baconImg from '../assets/bacon.png';

export default function Burger() {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

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
    let total = 0;
    for (let ingredient in ingredients) {
      total += ingredients[ingredient] * ingredientPrices[ingredient];
    }
    return total;
  };

  const burgerContent = () => {
    let burger = [];

    for (let ingredient in ingredients) {
      for (let i = 0; i < ingredients[ingredient]; i++) {
        let ingredientImage;
        switch (ingredient) {
          case 'salad':
            ingredientImage = saladImg;
            break;
          case 'bacon':
            ingredientImage = baconImg;
            break;
          case 'cheese':
            ingredientImage = cheeseImg;
            break;
          case 'meat':
            ingredientImage = meatImg;
            break;
          default:
            ingredientImage = null;
        }


        if (ingredientImage) {
          burger.push(
            <div key={`${ingredient}_${i}`} className={`${ingredient}Side`}>
              <img src={ingredientImage} alt={ingredient} />
            </div>
          );
        }
      }
    }

    if (burger.length === 0)
      burger.push(<p key="0">Please start adding ingredients!</p>);

    return burger;
  };

  return (
    <>
      <div className="burgerIngredients">
        <div className="topSide"></div>
        {burgerContent()}
        <div className="bottomSide"></div>
      </div>
      <div className="ingredientsBlock">
        {Object.keys(ingredients).map(ingredient => (
          <div key={ingredient}>
            <img src={meatImg} alt={ingredient} />
            <p>Price: {ingredientPrices[ingredient]} som x{ingredients[ingredient]}</p>
            <div className="ingrBtns">
              <button className="ingrBtn" onClick={() => addRemoveIngredient('add', ingredient)}>Add</button>
              <button className="ingrBtn" onClick={() => addRemoveIngredient('remove', ingredient)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="totalPrice">
          <p>Total Price: {getTotalPrice()} som</p>
        </div>
      </div>
    </>
  );
}
