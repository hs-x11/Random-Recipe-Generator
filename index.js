!(async function () { 

    const submitBtn = document.querySelector('submit-btn');
    submitBtn.addEventListener('click', async () => {
        const nameInput = document.querySelector('name-input');

        const greetingContainer = document.querySelector('greeting-container');
        greetingContainer.classList.add('hidden');
    });


    const button = document.querySelector('#randomize-btn');
    button.addEventListener('click', async () => {
        try {
            const fetchRecipe = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
            let recipe = fetchRecipe.data.meals;
            console.log(recipe);

            const mainBodyDiv = document.querySelector('.main-body');
            mainBodyDiv.classList.remove('hidden');

            const showcaseDiv = document.querySelector('.recipe-showcase');
            showcaseDiv.classList.add('hidden');
            


            let recipeInfo = '';
            let updateList = document.querySelector('#ingredients-list');

            recipe.forEach((api) => {
                for (let i = 1; i <= 20; i++) {
                    let measure = api[`strMeasure${i}`];
                    let ingredient = api[`strIngredient${i}`];
                    let noNullPic = api[`strMealThumb`];

                    if (measure && ingredient && noNullPic !== 'null') {
                        recipeInfo += `<li>▸ ${measure} ‐ ${ingredient}</li>`;
                    } 
                }

                let updateImg = document.querySelector('#recipe-img');
                updateImg.src = api.strMealThumb;

                let updateRecipeName = document.querySelector('#welcome-title');
                updateRecipeName.textContent = api.strMeal;

                let updateInstructions = document.querySelector('#instructions-list');
                updateInstructions.textContent = api.strInstructions;

            });
            updateList.innerHTML = recipeInfo;


        

        } catch (error) {
            //Write something here for errors
        }
    });
  
})();