import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const userId = localStorage.getItem('userId'); // Get user ID from local storage

  useEffect(() => {
    // Fetch the user's favorites from the backend
    if (userId) {
      axios.get(`http://localhost:5000/favorites?userId=${userId}`)
        .then(response => setFavorites(response.data))
        .catch(error => console.error('Failed to fetch favorites', error));
    }
  }, [userId]);

  // Function to delete a favorite recipe
  const deleteFavorite = (id) => {
    axios.delete(`http://localhost:5000/favorites/${id}`)
      .then(() => {
        // Update the state to remove the deleted recipe from the UI
        setFavorites(favorites.filter((recipe) => recipe.id !== id));
      })
      .catch(error => console.error('Failed to delete favorite', error));
  };

  return (
    <div>
      <h1>Your Favorites</h1>
      <div className="recipe-container">
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              <img src={`images/${recipe.photo}`} alt={recipe.name} className="recipe-photo" />
              <div className="recipe-info">
                <h2 className="recipe-title">{recipe.name}</h2>
                <p className="recipe-ingredients">{recipe.ingredients}</p>
                <button 
                  className="delete-button" 
                  onClick={() => deleteFavorite(recipe.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No favorite recipes yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
