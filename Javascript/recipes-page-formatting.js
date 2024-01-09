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
            const fetchRecipe = await axios.get('../recipes.json');
            const recipes = fetchRecipe.data;
            
            const found = recipes.find(recipe => recipe.id === recipeID);
            return found;

        } catch (error) {
            let updateRecipeName = document.querySelector('#recipe-title');
            updateRecipeName.textContent = error.message;
        }
    };

    const displayRecipe = async () => {
        let recipe = '';
        const path = window.location.pathname;
    
        switch (true) {
            case path.endsWith('/list/1.html'):
                recipe = await getRecipe(1);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/2.html'):
                recipe = await getRecipe(2);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/3.html'):
                recipe = await getRecipe(3);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/4.html'):
                recipe = await getRecipe(4);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/5.html'):
                recipe = await getRecipe(5);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/6.html'):
                recipe = await getRecipe(6);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/7.html'):
                recipe = await getRecipe(7);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/8.html'):
                recipe = await getRecipe(8);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/9.html'):
                recipe = await getRecipe(9);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/10.html'):
                recipe = await getRecipe(10);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/11.html'):
                recipe = await getRecipe(11);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/12.html'):
                recipe = await getRecipe(12);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/13.html'):
                recipe = await getRecipe(13);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/14.html'):
                recipe = await getRecipe(14);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/15.html'):
                recipe = await getRecipe(15);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/16.html'):
                recipe = await getRecipe(16);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/17.html'):
                recipe = await getRecipe(17);
                recipeFormatting(recipe);
                break;
            case path.endsWith('/list/18.html'):
                recipe = await getRecipe(18);
                recipeFormatting(recipe);
                break;
            
        }
    };
    
    displayRecipe();


})();
