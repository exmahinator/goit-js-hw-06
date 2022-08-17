const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const recipeRef = document.querySelector('#ingredients');

const elements = [];

// Option 1:
ingredients.forEach(ingredient => {
  const recipeItem = document.createElement('li');
  recipeItem.textContent = ingredient;
  elements.push(recipeItem);
});

// Option 2:
// for (let i = 0; i < ingredients.length; i += 1) {
//   const recipeItem = document.createElement('li');
//   recipeItem.textContent = ingredients[i];
//   elements.push(recipeItem);
// }

console.log(elements);

recipeRef.append(...elements);
console.log(recipeRef);
