document.querySelector('#search-button').addEventListener("click",function(){
    const foodName = document.getElementById('food-input').value;
    if(foodName!=''){
        fetchMealAPI(foodName);
    }else{
        alert("Wrong Input ! Please check our meal items")
    }
})


function fetchMealAPI(foodName){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res => res.json())
    .then(data => showMeal(data.meals))
    .catch(err => alert(err))
}


function showMeal(data){
    const mealsSection = document.getElementById('show-meals');
    data.forEach(mealsInfo => {
        const div = document.createElement('div');
        div.className = 'img-title' ;
        const mealInfo = `
            <a href="#show-Ingredient"><img onclick="getDetails('${mealsInfo.strMeal}')" src=${mealsInfo.strMealThumb}> </a>
            <p class="title">${mealsInfo.strMeal}</p>
        `;

        div.innerHTML = mealInfo;
        mealsSection.appendChild(div);
    });
}


function getDetails(mealIngredient){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealIngredient}`)
    .then(res => res.json())
    .then(data => showIngredient(data.meals[0]))
    // .catch(err => alert(err))

}


function showIngredient(ingredients){
    const ingredientSection = document.getElementById('show-Ingredient');
    const cookInfo = `
            <div>
                <img src="${ingredients.strMealThumb}" >
                <h1 id="meal-name">${ingredients.strMeal}</h1>
                <h5>Ingredients : </h5>
                <ul id="list-inge">
                
                </ul>
            </div>
        `;
    ingredientSection.innerHTML = cookInfo;

    for (let i = 1; i <= 20; i++) {  
        let ingredient = ingredients['strIngredient'+i.toString()];
        if(ingredient=='')
        {
            break;
        }  
        // console.log( ingredient );
        const ul = document.getElementById('list-inge');
        const li = document.createElement('li');
        li.innerText = ingredient;
        ul.appendChild(li);
    }
   
}

