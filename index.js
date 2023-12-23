!(async function () { 

    const button = document.querySelector('#randomize-btn');
    button.addEventListener('click', async () => {
        try {
            const fetchRecipe = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=53084');
            let recipe = fetchRecipe.data.meals;
            console.log(recipe);

            const unhideDiv = document.querySelector('.bottom-container');
            if (unhideDiv.classList.contains('hidden')) {
                unhideDiv.classList.remove('hidden');
            }    

            let recipeInfo = '';
            let updateList = document.querySelector('#ingredients-list');
            let updateInstructions = document.querySelector('#instructions-list');

            recipe.forEach(object => {
                for (let i = 1; i <= 20; i++) {
                    let measure = object[`strMeasure${i}`];
                    let ingredient = object[`strIngredient${i}`];
                    let noNullPic = object[`strMealThumb`];

                    if (measure && ingredient && noNullPic !== 'null') {
                        recipeInfo += `<li>${measure} ${ingredient}</li>`;
                    } else {
                        catchError = document.querySelector('.bottom-container');
                        catchError.textContent = 'This recipe has an error, please click the randomize button to find another!';
                    }
                }

                updateInstructions.textContent = object.strInstructions;
            });
            updateList.innerHTML = `<ul>${recipeInfo}</ul>`;


        

        } catch (error) {
            //Write something here for errors
        }
    });
  
})();