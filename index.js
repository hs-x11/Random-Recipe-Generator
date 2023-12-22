!(async function () { 

    let fetchRecipe = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    let recipe = fetchRecipe.data.meals;
    console.log(recipe);

    document.querySelector('.top-container').src = recipe.strMealThumb;
})();