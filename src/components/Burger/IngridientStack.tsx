import React from 'react';

const IngredientStack = ({ingredients, ingredientImages, ingredientPrices, addRemoveIngredient}) => {
    return (
        <div className="ingredientsBlock">
            {Object.keys(ingredients).map(ingredient => (
                <div key={ingredient}>


                        <button className="addBtn" onClick={() => addRemoveIngredient('add', ingredient)}><img
                        src={ingredientImages[ingredient]} alt={ingredient}/>
                        </button> <p>{ingredient.toUpperCase()}
                    </p>
                    <p>Price: {ingredientPrices[ingredient]} som x{ingredients[ingredient]}
                        <button className="removeBtn" onClick={() => addRemoveIngredient('remove', ingredient)}>
                  <span className="material-symbols-outlined">
                    delete
                  </span></button>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default IngredientStack;
