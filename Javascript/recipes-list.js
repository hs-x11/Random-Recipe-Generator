!(function () {
    const searchBar = () => {
        let input = document.querySelector('#input').value.toLowerCase();
        let list = document.getElementsByClassName('recipes');
        let notFoundMessage = document.querySelector('.notFoundMsg');
        let itemFound = false;

        for (let i = 0; i < list.length; i++) {
            let listItemText = list[i].textContent.toLowerCase();

            if (!listItemText.includes(input)) {
                list[i].style.display = "none";
            } else {
                list[i].style.display = "list-item";
                itemFound = true;
            }
        }

        if (itemFound) {
            notFoundMessage.classList.add('hidden');
        } else {
            notFoundMessage.classList.remove('hidden');
        }
    };

    document.querySelector('#input').addEventListener('keyup', searchBar);


    const getRecipeList = async () => {
        try {
            let fetchRecipe = await axios.get('../recipes.json');
            let recipes = fetchRecipe.data;
    
            let listItems = document.querySelector('#list');
            let recipeInfo = '';

            recipes.forEach((recipe) => {
                recipeInfo += `
                    <li class='recipes'><img src="${recipe.image}" alt="${recipe.name}"><a href="../list/${recipe.id}.html">${recipe.name}</a></li>
                `;
                listItems.innerHTML = recipeInfo;

            });

        } catch (error) {
            recipeInfo.textContent = `${error}`;
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        getRecipeList();
    });

})();
