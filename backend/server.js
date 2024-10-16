const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;
const path = require('path');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const recipesFile = './recipes.json';

// Helper function to read recipes from the file
const readRecipes = () => {
    return JSON.parse(fs.readFileSync(recipesFile));
};

// Helper function to write recipes to the file
const writeRecipes = (recipes) => {
    fs.writeFileSync(recipesFile, JSON.stringify(recipes, null, 2));
};

// Get all recipes
app.get('/recipes', (req, res) => {
    const recipes = readRecipes();
    res.json(recipes);
});

app.get('/favorites', (req, res) => {
    const filePath = path.join(__dirname, 'favorites.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the JSON file:', err);
        return res.status(500).json({ error: 'Failed to load favorites' });
      }
      try {
        res.json(JSON.parse(data));
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        return res.status(500).json({ error: 'Failed to parse favorites data' });
      }
    });
  });

  

// Add a new recipe
app.post('/recipes', (req, res) => {
    const newRecipe = req.body;
    const recipes = readRecipes();
    recipes.push(newRecipe);
    writeRecipes(recipes);
    res.status(201).json(newRecipe);
});

// Delete a recipe
app.delete('/recipes/:id', (req, res) => {
    const recipeId = req.params.id;
    let recipes = readRecipes();
    recipes = recipes.filter(recipe => recipe.id !== recipeId);
    writeRecipes(recipes);
    res.status(204).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
