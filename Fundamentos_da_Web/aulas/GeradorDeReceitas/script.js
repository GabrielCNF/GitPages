const ingredientContainer = document.querySelector('.ingredient-container');
const addIngredientButton = document.getElementById('add-ingredient');
// const searchRecipesButton = document.getElementById('search-recipes');
// const recipeList = document.getElementById('recipe-list');
const searchRecipesButton = document.getElementById('search-recipes');
const recipeList = document.getElementById('recipe-list');

addIngredientButton.addEventListener('click', () => {
    if(ingredientContainer != null || ingredientContainer != undefined){
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.classList.add('ingredient-input');
        inputElement.placeholder = 'Diga outro ingrediente';
        ingredientContainer.appendChild(inputElement);
    }
    else{
        alert("Escreva um ingrediente no campo")
    }
});

searchRecipesButton.addEventListener('click', () => {
    // const searchQuery = document.getElementById('search-query').value;
    
    // Use the Google Custom Search API to fetch search results
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const cx = 'YOUR_CUSTOM_SEARCH_ENGINE_ID'; // Replace with your custom search engine ID
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
                    link.target = '_blank'; // Open link in a new tab
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
