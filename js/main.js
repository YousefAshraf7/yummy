import  * as api from "./modules/api.module.js";
import  * as assets from "./modules/assets.module.js";
import Display from "./modules/display.module.js";

api.mainMeals();
let display = new Display();

$("#search").click(()=>{
    $(".boxes .row").html("")
    assets.searchDisplay()
    assets.closeSideBar()
})
$(".letter-search").keyup((e)=>{
    if(e.target.value !=""){
        api.mealsByLetter(e.target.value)

    }
})
$(".name-search").keyup((e)=>{
    if(e.target.value !=""){
        api.mealsByName(e.target.value)
    }
})

$("#categories").click(()=>{
    assets.searchHide()
    assets.closeSideBar()
    api.allCateg()
})

$("#area").click(()=>{
    assets.searchHide()
    assets.closeSideBar()
    api.allCounteries()
})

$("#ingredients").click(()=>{
    assets.searchHide()
    assets.closeSideBar()
    api.allIngredient()
})

$("#contact").click(()=>{
    assets.searchHide()
    assets.closeSideBar()
    display.displayContactForm();
})


$(document).on('input', '#name', function(){
    let condition = /^[a-zA-z]*$/.test($(this).val());
    $(this).next().removeClass(condition ? 'd-block' : 'd-none').addClass(condition ? 'd-none' : 'd-block')
    formValidation();
})

$(document).on('input', '#email', function(){
    let condition = /^[a-zA-z]*@[a-zA-z]{3,}\.[a-zA-z]{3,}$/.test($(this).val());
    $(this).next().removeClass(condition ? 'd-block' : 'd-none').addClass(condition ? 'd-none' : 'd-block');
    formValidation();
})
$(document).on('input', '#phone', function(){
    let condition = /^[0-9]{11,12}$/.test($(this).val());
    $(this).next().removeClass(condition ? 'd-block' : 'd-none').addClass(condition ? 'd-none' : 'd-block');
    formValidation();
})
$(document).on('input', '#age', function(){
    let condition = ($(this).val() < 100);
    $(this).next().removeClass(condition ? 'd-block' : 'd-none').addClass(condition ? 'd-none' : 'd-block');
    formValidation();
})
$(document).on('input', '#password', function(){
    let condition1 = $(this).val().length >= 8;
    let condition2 = $(this).val().match(/[a-zA-Z]/);
    let condition3 = $(this).val().match(/\d/);
    $(this).next().removeClass((condition1 && condition2 && condition3) ? 'd-block' : 'd-none').addClass((condition1 && condition2 && condition3) ? 'd-none' : 'd-block');
    formValidation();
})
$(document).on('input', '#password_confirmation', function(){
    let condition = $(this).val() == $('#password').val();
    $(this).next().removeClass(condition ? 'd-block' : 'd-none').addClass(condition ? 'd-none' : 'd-block');
    formValidation();
})



$(document).on('click', '.meal-card',function(){
    api.mealById($(this).attr('id'));
})



function formValidation(){
    let nameInput = $('#name');
    let emailInput = $('#email');
    let phoneInput = $('#phone');
    let ageInput = $('#age');
    let passwordInput = $('#password');
    let passwordConfirmationInput = $('#password_confirmation');

    let nameCondition = /^[a-zA-z]*$/.test(nameInput.val());
    let emailCondition = /^[a-zA-z]*@[a-zA-z]{3,}\.[a-zA-z]{3,}$/.test(emailInput.val());
    let phoneCondition = /^[0-9]{11,12}$/.test(phoneInput.val());
    let ageCondition = (ageInput.val() < 100);
    let passwordCondition1 = passwordInput.val().length >= 8;
    let passwordCondition2 = passwordInput.val().match(/[a-zA-Z]/);
    let passwordCondition3 = passwordInput.val().match(/\d/);
    let passwordConfirmationCondition = passwordConfirmationInput.val() == $('#password').val()
    console.log(nameCondition , emailCondition , phoneCondition , ageCondition , passwordCondition1 , passwordCondition2 , passwordCondition3 , passwordConfirmationCondition);
    if(nameCondition && emailCondition && phoneCondition && ageCondition && passwordCondition1 && passwordCondition2 && passwordCondition3 && passwordConfirmationCondition){
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled','disabled');
    }
}



$(document).ready(function () {
    $(".loading-screen").addClass("d-none");
});

$(".toggle").click(() => {
    if ($(".nav-bar").css("left") == "0px") {
        assets.closeSideBar()
    } else {
        assets.openSideBar()
    }
})
assets.closeSideBar()

// $(document).on('click', '.box', function(){
//     console.log($(".box").attr("strCategory"))
// })