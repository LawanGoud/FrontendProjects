let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
  };

let recipeTitle = document.getElementById('recipeTitle');
recipeTitle.textContent = recipeObj.title;

let imagecontainer = document.getElementById('imgContainer');
let imgEl = document.getElementById('img');
imgEl.setAttribute('src',recipeObj.imgSrc);
imagecontainer.appendChild(imgEl);

let ingredientListContainer = document.getElementById('ingredientListContainer');
let ingredientList = recipeObj.ingredients;

for (let ingredient of ingredientList){
    let ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add('ingredient');
    ingredientListContainer.appendChild(ingredientEl)
}