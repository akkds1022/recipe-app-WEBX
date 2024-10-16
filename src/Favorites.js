import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('/favorites')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Check the structure of the fetched data
        setFavorites(data);
      })
      .catch((error) => {
        console.error('Error fetching the favorites:', error);
      });
  }, []);

  return (
    <div className="favorites-page">
      <h1>Your Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p>No favorite recipes found.</p>
      ) : (
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
      )}
    </div>
  );
};

export default Favorites;
