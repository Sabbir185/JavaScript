// search button capture and take input
document.querySelector('#search-button').addEventListener("click",function(){
    const foodName = document.getElementById('food-input').value;
    if(foodName!=''){
        fetchMealAPI(foodName);
    }else{
        alert("Wrong Input ! Please check our meal items")
    }
})


// api calling for searched name
const fetchMealAPI = (foodName) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res => res.json())
    .then(data => showMeal(data.meals))
    .catch(err => alert(err))
}


// calling function for displaying items
const showMeal = (data) => {
    const mealsSection = document.getElementById('show-meals');
    if(data === null){
        alert("OOPs, sorry ! Now this item is not available")
    }else{
        data.forEach(mealsInfo => {
            const div = document.createElement('div');
            div.className = 'img-title' ;
            const mealInfo = `
                <a href="#show-Ingredient"><img onclick="getDetails('${mealsInfo.strMeal}')" src=${mealsInfo.strMealThumb}> </a>
                <p class="title">${mealsInfo.strMeal}</p>
            `;
            div.innerHTML = mealInfo;
            mealsSection.appendChild(div);
            console.log(mealsInfo);
        });
    }
}


// calling api for fetching ingredients
const getDetails = (mealIngredient) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealIngredient}`)
    .then(res => res.json())
    .then(data => showIngredient(data.meals[0]))
    .catch(err => alert(err))

}


// display ingredients, title, image
const showIngredient = (ingredients) => {
    const ingredientSection = document.getElementById('show-Ingredient');
    const cookInfo = `
            <div id="sub-container">
                <img id="meal-image" src="${ingredients.strMealThumb}" >
                <div id="inner-container">
                    <h1 id="meal-name">${ingredients.strMeal}</h1>
                    <h5 style="font-size: 23px">Ingredients : </h5>
                    <ul id="list-ingredient">
                    
                    </ul>
                </div>
            </div>
        `;
    ingredientSection.innerHTML = cookInfo;

    let i = 1;
    while (i<=20){  
        let ingredient = ingredients['strIngredient'+i.toString()];  // show all ingredient 
        if(ingredient=='')                                  //  until empty string will find
        {
            break;
        }  
        const ul = document.getElementById('list-ingredient');
        const li = document.createElement('li');
        li.innerText = ingredient;
        ul.appendChild(li);
        i++ ;
    }
   
}

