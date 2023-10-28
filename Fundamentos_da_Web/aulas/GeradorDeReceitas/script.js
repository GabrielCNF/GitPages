const searchRecipesButton = document.getElementById('search-recipes');
const recipeList = document.getElementById('recipe-list');

const addIngredientButton = document.getElementById('add-ingredient');
const ingredientContainer = document.querySelector('.ingredient-container');

addIngredientButton.addEventListener('click', () => {
    const existingInputs = ingredientContainer.querySelectorAll('.ingredient-input');

    if (existingInputs.length === 0 || existingInputs[existingInputs.length - 1].value.trim() !== "") {
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.classList.add('ingredient-input');
        inputElement.placeholder = 'Diga outro ingrediente';
        ingredientContainer.appendChild(inputElement);
    } else {
        alert("Escreva um ingrediente no campo");
    }
});

searchRecipesButton.addEventListener('click', () => {
    
    const apiKey = 'YOUR_API_KEY'; 
    const cx = 'YOUR_CUSTOM_SEARCH_ENGINE_ID';
    const url = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&key=${apiKey}&cx=${cx}`;

    // Clear the recipe list
    recipeList.innerHTML = '';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                recipeList.innerHTML = `<h2>Search Results:</h2>`;
                data.items.forEach(item => {
                    const link = document.createElement('a');
                    link.href = item.link;
                    link.textContent = item.title;
                    link.target = '_blank'; 
                    recipeList.appendChild(link);
                    console.log(link.textContent)
                });
            } else {
                recipeList.innerHTML = `<p>No results found.</p>`;
            }
        })
        .catch(error => {
            console.error(error);
        });
});
