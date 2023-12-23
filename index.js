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
            recipeInfo += `
                <ul>
                    <li>${object.strIngredient1}</li>
                    <li>${object.strIngredient2}</li>
                    <li>${object.strIngredient3}</li>
                </ul> 
                `;
                updateList.innerHTML = recipeInfo;
            });

        } catch (error) {
            //Write something here for errors
        }
    });
  
})();