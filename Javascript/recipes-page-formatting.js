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

        } else if (window.location.pathname === '/list/4.html') {
            const recipe = await getRecipe(4);
            recipeFormatting(recipe);    

        } else if (window.location.pathname === '/list/5.html') {
            const recipe = await getRecipe(5); 
            recipeFormatting(recipe);
    
        } else if (window.location.pathname === '/list/6.html') {
            const recipe = await getRecipe(6);
            recipeFormatting(recipe);

        } else if (window.location.pathname === '/list/7.html') {
            const recipe = await getRecipe(7);
            recipeFormatting(recipe);    

        } else if (window.location.pathname === '/list/8.html') {
            const recipe = await getRecipe(8); 
            recipeFormatting(recipe);
    
        } else if (window.location.pathname === '/list/9.html') {
            const recipe = await getRecipe(9);
            recipeFormatting(recipe);

        } else if (window.location.pathname === '/list/10.html') {
            const recipe = await getRecipe(10);
            recipeFormatting(recipe);    

        } else if (window.location.pathname === '/list/11.html') {
            const recipe = await getRecipe(11); 
            recipeFormatting(recipe);
    
        } else if (window.location.pathname === '/list/12.html') {
            const recipe = await getRecipe(12);
            recipeFormatting(recipe);
            
        } else if (window.location.pathname === '/list/13.html') {
            const recipe = await getRecipe(13);
            recipeFormatting(recipe);

        } else if (window.location.pathname === '/list/14.html') {
            const recipe = await getRecipe(14);
            recipeFormatting(recipe);    

        } else if (window.location.pathname === '/list/15.html') {
            const recipe = await getRecipe(15); 
            recipeFormatting(recipe);
    
        } else if (window.location.pathname === '/list/16.html') {
            const recipe = await getRecipe(16);
            recipeFormatting(recipe);

        } else if (window.location.pathname === '/list/17.html') {
            const recipe = await getRecipe(17);
            recipeFormatting(recipe);    

        } else if (window.location.pathname === '/list/18.html') {
            const recipe = await getRecipe(18); 
            recipeFormatting(recipe);
        }
    }
    
    displayRecipe();


})();
