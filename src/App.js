import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => console.error(error));
  }, []);

  const addToFavorites = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(recipe => recipe.id !== id));
  };

  const addRecipe = (newRecipe) => {
    axios.post('http://localhost:5000/recipes', newRecipe)
      .then(response => setRecipes([...recipes, response.data]))
      .catch(error => console.error(error));
  };

  const deleteRecipe = (id) => {
    axios.delete(`http://localhost:5000/recipes/${id}`)
      .then(() => setRecipes(recipes.filter(recipe => recipe.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Recipe App</h1>
      <RecipeList
        recipes={recipes}
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        deleteRecipe={deleteRecipe}
      />
      <RecipeForm addRecipe={addRecipe} />
    </div>
  );
};

export default App;
