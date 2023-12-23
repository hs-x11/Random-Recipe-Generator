!(async function () { 

    const button = document.querySelector('#randomize-btn');
    button.addEventListener('click', async () => {
        try {
            const fetchRecipe = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
            let recipe = fetchRecipe.data.meals;
            console.log(recipe);

            const unhideDiv = document.querySelector('.bottom-container');
            if (unhideDiv.classList.contains('hidden')) {
                unhideDiv.classList.remove('hidden');
            }    

            let recipeInfo = '';
            let updateList = document.querySelector('#ing-list')

            recipe.forEach(object => {
                for (let i = 1; i <= 20; i++) {
                    let measure = object[`strMeasure${i}`];
                    let ingredient = object[`strIngredient${i}`];
  
                    recipeInfo += `<li>${measure} ${ingredient}</li>`;
                }
            });
            updateList.innerHTML = `<ul>${recipeInfo}</ul>`;

        } catch (error) {
            //Write something here for errors
        }
    });
  
})();