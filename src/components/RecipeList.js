import React, { useState } from 'react';
import './RecipeList.css'; // Importing custom CSS for the cards

const RecipeList = ({ recipes, addToFavorites, removeFromFavorites, deleteRecipe }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter recipes based on the search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Recipe Cards */}
      <div className="recipe-container">
        {filteredRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={`images/${recipe.photo}`} alt={recipe.name} className="recipe-photo" />
            <div className="recipe-info">
              <h2 className="recipe-title">{recipe.name}</h2>
              <p className="recipe-ingredients">{recipe.ingredients}</p>
              <div className="recipe-actions">
                <button onClick={() => addToFavorites(recipe)} className="btn btn-add">
                  Add to Favorites
                </button>
                <button onClick={() => removeFromFavorites(recipe.id)} className="btn btn-remove">
                  Remove from Favorites
                </button>
                <button onClick={() => deleteRecipe(recipe.id)} className="btn btn-delete">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
