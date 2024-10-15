import React, { useState } from 'react';

const RecipeList = ({ recipes, favorites, addToFavorites, removeFromFavorites, deleteRecipe }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredRecipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>{recipe.ingredients}</p>
            <img src={`images/${recipe.photo}`} alt={recipe.name} width="200" />
            <button onClick={() => addToFavorites(recipe)}>Add to Favorites</button>
            <button onClick={() => removeFromFavorites(recipe.id)}>Remove from Favorites</button>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</button>
          </li>
        ))}
      </ul>
      <h2>Favorites</h2>
      <ul>
        {favorites.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
