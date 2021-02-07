document.querySelector('#search-button').addEventListener("click",function(){
    const foodName = document.getElementById('food-input').value;
    // console.log(typeof(foodName));
    if(foodName!=''){
        fetchMealAPI(foodName);
    }else{
        console.log("Empty");
    }
})


function fetchMealAPI(foodName){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res => res.json())
    .then(data => showMeal(data.meals))
}


function showMeal(data){
    const mealsSection = document.getElementById('show-meals');
    data.forEach(mealsInfo => {
        const div = document.createElement('div');
        div.className = 'img-title' ;
        const mealInfo = `
            <img src=${mealsInfo.strMealThumb}>
            <p class="title">${mealsInfo.strMeal}</p>
        `;

        div.innerHTML = mealInfo;
        mealsSection.appendChild(div);
    });
}



// console.log(mealsInfo.strMeal);
// console.log(mealsInfo.strMealThumb);

// console.log(data);
// console.log(data.meals);
// console.log(data.meals[0].strMeal);
// console.log(data.meals[0].strMealThumb);