import  Display from "./display.module.js";

let baseURI = "https://www.themealdb.com/api/json/v1/1/";
let display = new Display();

export async function mainMeals(){
    showLoading()
    const apiReq= await fetch(`${baseURI}search.php?s=`);
    const result= await apiReq.json()
    display.displayMeals((result.meals ?? []).splice(0,20))
    hideLoading()
}

export async function mealById(id){
    showLoading();
    const apiReq= await fetch(`${baseURI}lookup.php?i=${id}`);
    const result= await apiReq.json()
    // if((result.meals ?? []).length<=0){hideLoading}
    display.displayMeal((result.meals ?? [])[0])
    hideLoading()
}

export async function mealsByName(name){

    showLoading()
    const apiReq= await fetch(`${baseURI}search.php?s=${name}`);
    const result= await apiReq.json()
    display.displayMeals((result.meals ?? []).splice(0,20))
    hideLoading()
}

export async function mealsByLetter(letter){
    showLoading()
    const apiReq= await fetch(`${baseURI}search.php?f=${letter}`);
    const result= await apiReq.json()
    display.displayMeals((result.meals ?? []).splice(0,20))
    hideLoading()
}

// Meals by Category
export async function allCateg(){
    showLoading()
    const apiReq= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const result= await apiReq.json()
    display.displayAllCateg(result.categories)
    hideLoading()
    getCategName()
}
export async function mealsByCategory(category){
    showLoading()
    const apiReq= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const result= await apiReq.json()
    display.displayMeals((result.meals ?? []).splice(0,20))
    hideLoading()
}

export function getCategName(){
    $(".box").click((e)=>{
        mealsByCategory($(e.currentTarget).attr("strCategory"))
})
}

// Meals by Area
export async function allCounteries(){
    showLoading()
    const apiReq= await fetch(`${baseURI}list.php?a=list`);
    const result= await apiReq.json()
    display.displayAllCounteries((result.meals ?? []))
    hideLoading()
    getAreaName()
}

export async function mealsByArea(Countery){
    showLoading()
    const apiReq= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Countery}`);
    const result= await apiReq.json()
    display.displayMeals((result.meals ?? []).splice(0,20))
    hideLoading()
}

export function getAreaName(){
    $(".box").click((e)=>{
        mealsByArea($(e.currentTarget).attr("strArea"))
})
}

// Meals by Ingredient
export async function allIngredient(){
    showLoading()
    const apiReq= await fetch(`${baseURI}list.php?i=list`);
    const result= await apiReq.json()
    display.displayAllIngredient((result.meals ?? []).splice(0,20))
    hideLoading()
    getIngredientName()
}

export async function mealsByIngredient(ingredient){
    showLoading()
    const apiReq= await fetch(`${baseURI}filter.php?i=${ingredient}`);
    const result= await apiReq.json()
    display.displayMeals((result.meals ?? []).splice(0,20))
    hideLoading()
}

export function getIngredientName(){
    $(".box").click((e)=>{
        mealsByIngredient($(e.currentTarget).attr("strIngredient"))
})
}


function showLoading(){
    $(".loading-screen").removeClass("d-none");
    $(".loading-screen").addClass("d-block");
}
function hideLoading(){
    $(".loading-screen").removeClass("d-block");
    $(".loading-screen").addClass("d-none");
}

