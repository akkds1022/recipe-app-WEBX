import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch the favorite recipes from the backend
    fetch('/api/favorites')
      .then((response) => response.json())
      .then((data) => setFavorites(data));
  }, []);

  return (
    <div className="favorites-page">
      <h1>Your Favorite Recipes</h1>
      <div className="recipe-container">
        {favorites.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={`images/${recipe.photo}`} alt={recipe.name} className="recipe-photo" />
            <div className="recipe-info">
              <h2 className="recipe-title">{recipe.name}</h2>
              <p className="recipe-ingredients">{recipe.ingredients}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
