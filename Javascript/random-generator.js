!(async function () { 

    const getErrorMsg= document.querySelector('#greeting-container');

    const toggleView = () => {
        const mainBodyDiv = document.querySelector('.main-body');
        mainBodyDiv.classList.remove('hidden');

        const showcaseDiv = document.querySelector('.recipe-showcase');
        showcaseDiv.classList.add('hidden');
    };
    
    const randomRecipeFormatting = (recipe) => {
        let ingredients = document.querySelector('#ingredients-list');
        let recipeInfo = '';

        recipe.ingredients.forEach(ingredient => {
            recipeInfo += `<li> • ${ingredient}</li>`;
        });
        ingredients.innerHTML = recipeInfo;

        let updateImg = document.querySelector('#recipe-img');
        updateImg.src = recipe.image;

        let updateSource =document.querySelector('#recipe-source');
        updateSource.href = recipe.source;

        let updateRecipeName = document.querySelector('#welcome-title');
        updateRecipeName.textContent = recipe.name;

        let updateInstructions = document.querySelector('#instructions-list');
        updateInstructions.innerHTML = recipe.instructions.replace(/\n/g, '<br>');

    };


    const recipeFormatting = (recipe) => {
        let recipeInfo = '';
        let updateList = document.querySelector('#ingredients-list');
    
        recipe.forEach((api) => {
            for (let i = 1; i <= 20; i++) {
                let measure = api[`strMeasure${i}`];
                let ingredient = api[`strIngredient${i}`];
    
                if (measure && ingredient) {
                    recipeInfo += `<li>• ${measure} ${ingredient}</li>`;
                } 
            }
    
            let updateImg = document.querySelector('#recipe-img');
            updateImg.src = api.strMealThumb;

            let updateSource =document.querySelector('#recipe-source');
            updateSource.href = api.strSource;
    
            let updateRecipeName = document.querySelector('#welcome-title');
            updateRecipeName.textContent = api.strMeal;
    
            let updateInstructions = document.querySelector('#instructions-list');
            updateInstructions.textContent = api.strInstructions;
    
        });
        updateList.innerHTML = recipeInfo;
    };

    const generateRandomRecipe = async () => {
        try {
            const fetchRecipe = await axios.get('../recipes.json');
            const recipes = fetchRecipe.data;
    
            const randomRecipe = Math.floor(Math.random() * recipes.length);
            let recipe = recipes[randomRecipe]; 
    
            console.log(recipe);
    
            toggleView();
            randomRecipeFormatting(recipe);

        } catch (error) {
            getErrorMsg.textContent = `${error}`;
        }
    };
    

    const button = document.querySelector('#randomize-btn');
    button.addEventListener('click', () => {
        generateRandomRecipe();
    });

    const pizza = document.querySelector('#pizza');
    pizza.addEventListener('click', async () => {
        try {
            const fetchRecipe = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=53014');
            let recipe = fetchRecipe.data.meals;

            toggleView();
            recipeFormatting(recipe);

        } catch (error) {
            getErrorMsg.textContent = `${error}`;
        }
    });

    const biryani = document.querySelector('#biryani');
    biryani.addEventListener('click', async () => {
        try {
            const fetchRecipe = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52805');
            let recipe = fetchRecipe.data.meals;

            toggleView();
            recipeFormatting(recipe);

        } catch (error) {
            getErrorMsg.textContent = `${error}`;
        }
    });

    const kfChicken = document.querySelector('#kfchicken');
    kfChicken.addEventListener('click', async () => {
        try {
            const fetchRecipe = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52813');
            let recipe = fetchRecipe.data.meals;

            toggleView();
            recipeFormatting(recipe);

        } catch (error) {
            getErrorMsg.textContent = `${error}`;
        }
    });
  
})();