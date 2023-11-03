import React from 'react';

const IngredientStack = ({ ingredients, ingredientImages, ingredientPrices, addRemoveIngredient }) => {
  return (
    <div className="ingredientsBlock">
      {Object.keys(ingredients).map(ingredient => (
        <div key={ingredient}>
          <p>{ingredient.toUpperCase()}</p>
          <div className="ingrBtns">
            <button className="addBtn" onClick={() => addRemoveIngredient('add', ingredient)}><img src={ingredientImages[ingredient]} alt={ingredient} /></button>
            <button className="removeBtn" onClick={() => addRemoveIngredient('remove', ingredient)}>–</button>
          </div>
          <p>Price: {ingredientPrices[ingredient]} som x{ingredients[ingredient]}</p>
        </div>
      ))}
    </div>
  );
};

export default IngredientStack;
