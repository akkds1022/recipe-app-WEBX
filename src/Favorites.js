import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/favorites')
      .then(response => setFavorites(response.data))
      .catch(error => console.error('Failed to fetch favorites', error));
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
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
