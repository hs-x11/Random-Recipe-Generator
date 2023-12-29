!(async function () { 
    
    const recipeFormatting = (recipe) => {
        let ingredients = document.querySelector('#ingredients-list');
        let recipeInfo = '';

        recipe.ingredients.forEach(ingredient => {
            recipeInfo += `<li> • ${ingredient}</li>`;
        });
        ingredients.innerHTML = recipeInfo;

        let updateImg = document.querySelector('#recipe-img');
        updateImg.src = recipe.image;

        let updateSource = document.querySelector('#recipe-source');
        updateSource.href = recipe.source;

        let updateRecipeName = document.querySelector('#recipe-title');
        updateRecipeName.textContent = recipe.name;

        let updateInstructions = document.querySelector('#instructions-list');
        updateInstructions.innerHTML = recipe.instructions.replace(/\n/g, '<br>');
    };

    const getRecipe = async (recipeID) => {
        try {
            const fetchRecipe = await axios.get('/recipes.json');
            const recipes = fetchRecipe.data;
            
            const found = recipes.find(recipe => recipe.id === recipeID);
            return found;

        } catch (error) {
            console.error(error);
        }
    };

    const displayRecipe = async () => {
        if (window.location.pathname === '/list/1.html') {
            const recipe = await getRecipe(1);
            recipeFormatting(recipe);
    
        } else if (window.location.pathname === '/list/2.html') {
            const recipe = await getRecipe(2); 
            recipeFormatting(recipe);
    
        } else if (window.location.pathname === '/list/3.html') {
            const recipe = await getRecipe(3);
            recipeFormatting(recipe);
        }
    }
    
    displayRecipe();


})();
