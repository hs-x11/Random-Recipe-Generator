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
            const response = await fetch('../recipes.json');
            const recipes = await response.json();
    
            const listItems = document.querySelectorAll('.recipes');
    
            recipes.forEach((recipe, index) => {
                const listItem = listItems[index];
                const link = listItem.querySelector('a');
                const img = listItem.querySelector('img');
    
                link.textContent = recipe.name;
    
                link.href = `../list/${recipe.id}.html`; 
                
                img.src = recipe.image;
                img.alt = recipe.name; 
            });

        } catch (error) {
            console.error('Error fetching recipe data:', error);
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        getRecipeList();
    });

})();
