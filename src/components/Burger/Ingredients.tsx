import React from 'react';

const BurgerIngredients = ({ ingredients, ingredientImages }) => {
  const burgerContent = () => {
    let burger = [];

    for (let ingredient in ingredients) {
      for (let i = 0; i < ingredients[ingredient]; i++) {
        const ingredientImage = ingredientImages[ingredient];
        burger.push(
          <div key={`${ingredient}_${i}`} className={`${ingredient}Side`}>
            <img src={ingredientImage} alt={ingredient} />
          </div>
        );
      }
    }

    if (burger.length === 0)
      burger.push(<p key="0">Add ingredients</p>);

    return burger;
  };

  return (
    <div className="burgerIngredients">
      <div className="topSide"></div>
      {burgerContent()}
      <div className="bottomSide"></div>
    </div>
  );
};

export default BurgerIngredients;
