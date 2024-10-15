import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { id: Date.now().toString(), name, ingredients, photo };
    addRecipe(newRecipe);
    setName('');
    setIngredients('');
    setPhoto('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <input
        type="text"
        placeholder="Photo filename"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
