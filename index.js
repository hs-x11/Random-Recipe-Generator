!(async function () { 

    const button = document.querySelector('#randomize-btn');
    button.addEventListener('click', async () => {
        try {
            const fetchRecipe = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
            let recipe = fetchRecipe.data.meals;
            console.log(recipe);

            const unhideDivs = document.querySelectorAll('.hidden');
            unhideDivs.forEach(div => {
                if (div.classList.contains('hidden')) {
                    div.classList.remove('hidden');
                }
            });

            let recipeInfo = '';
            let updateList = document.querySelector('#ingredients-list');
            let updateInstructions = document.querySelector('#instructions-list');
            let updateImg = document.querySelector('#recipe-image');

            recipe.forEach(object => {
                for (let i = 1; i <= 20; i++) {
                    let measure = object[`strMeasure${i}`];
                    let ingredient = object[`strIngredient${i}`];
                    let noNullPic = object[`strMealThumb`];

                    if (measure && ingredient && noNullPic !== 'null') {
                        recipeInfo += `<li>${measure} ${ingredient}</li>`;
                    } 
                }

                updateInstructions.textContent = object.strInstructions;

                updateImg.src = object.strMealThumb;
            });
            updateList.innerHTML = `<ul>${recipeInfo}</ul>`;


        

        } catch (error) {
            //Write something here for errors
        }
    });
  
})();