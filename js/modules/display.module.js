export default class Display {

  displayMeals(meals){
      let temp=``
      for(let meal of meals){
          
          temp+=`
          <div class="box col-lg-3 offset-lg-0 col-md-4 offset-md-0 col-sm-6 offset-sm-0 col-8 offset-3 meal-card" id=${meal.idMeal}>
          <div class=" position-relative">
            <div class="box-img">
              <img src="${meal.strMealThumb}" class="w-100" alt="" />
            </div>
            <div class="position-absolute layer">
              <h3>${meal.strMeal}</h3>
            </div>
          </div>
        </div>
          `
      }
      $(".boxes .row").html(temp)
  
  }
  
  displayMeal(meal){
    let tagsList = "";
    let ingredientsList = "";
    for(let i = 0; i <= 20; i++){
      if(meal['strIngredient' + i]){
        ingredientsList += `<li class="text-black bg-info mb-2 rounded-3 p-2">${meal['strMeasure' + i]} ${meal['strIngredient' + 1]}</li>`;
      };
  };
    if(meal.strTags){
        tagsList += `<h3>Tags :</h3>
                        <ul class="list-unstyled d-flex flex-wrap g-3">`;
        meal.strTags.split(',').map(el=>el.trim()).forEach(el=>{
            tagsList += `<li class="alert alert-danger m-2 p-1">${el}</li>`
        })
        tagsList += "</ul>"
    }
    let temp=`<div class="Recipes p-5">
                <div class="min-vh-100 w-100">
                  <div class="container">
                    <div class="row gy-3">
                      <div class="col-md-4 text-center offset-md-0 col-8 offset-3">
                        <div class="recipes-img">
                          <img src="${meal.strMealThumb}" class="w-100 rounded-2" alt="" />
                        </div>
                        <h2 class="text-white text-center">${meal.strMeal}</h2>
                      </div>
                      <div class="col-md-7  offset-md-0 col-8 offset-3">
                        <h2 class="text-white fs-1">Instructions</h2>
                        <p class="text-white "> 
                          ${meal.strInstructions}
                        </p>
                        <div class="text-white fs-4 my-2 fs-1">
                          <h2 class="d-inline-block">Area :</h2>
                          <span>${meal.strArea}</span>
                        </div>
                        <div class="text-white fs-4 mb-2 fs-1">
                          <h2 class="d-inline-block">Category  :</h2>
                          <span>${meal.strCategory}</span>
                        </div>
                        <div class="text-white fs-4 mb-2">
                          <h5 class="fs-2">Recipes :</h5>
                          <ul class="list-unstyled d-flex flex-wrap gap-3">
                            ${ingredientsList}
                          </ul>
                          <div class="text-white fs-4 mb-2">
                            ${tagsList}
                        </div>
                        <ul class="list-unstyled">
                              <li class="text-black bg-success rounded-3  d-inline-block"><a class="text-white p-2 text-decoration-none" href="${meal.strSource}">Source</a></li>
                              <li class="text-black bg-danger  rounded-3 d-inline-block"><a class="text-white p-2 text-decoration-none" href="${meal.strYoutube}">Youtube</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
    $(".boxes .row").html(temp)
  
  }
  
  
  displayAllCateg(categories){
      let temp=``
      for(let category of categories){
          
          temp+=`
          <div class="box col-lg-3 offset-lg-0 col-md-4 offset-md-0 col-sm-6 offset-sm-0 col-8 offset-3" strCategory=${category.strCategory}>
          <div class=" position-relative">
            <div class="box-img">
              <img src="${category.strCategoryThumb}" class="w-100" alt="" />
            </div>
            <div class="position-absolute layer">
              <h3>${category.strCategory}</h3>
              <p class="text-center">
              ${category.strCategoryDescription.split(" ").slice(0,15).join(" ")}
              </p>
            </div>
          </div>
        </div>
          `
      }
      $(".boxes .row").html(temp)
  
  }
  
  
  displayAllCounteries(Counteries){
      let temp=``
      for(let Countery of Counteries){
          
          temp+=`
          <div class="box col-lg-3 offset-lg-0 col-md-4 offset-md-0 col-sm-6 offset-sm-0 col-8 offset-3 " strArea=${Countery.strArea}>
          <div class=" text-center">
            <div class="box-img mb-2">
              <i class="fa-solid fa-house-laptop text-white fa-8x"></i>
            </div>
            <h4 class="fs-2 text-white">${Countery.strArea}</h4>
          </div>
        </div>
          `
      }
      $(".boxes .row").html(temp)
  
  }
  
  
  
  displayAllIngredient(Ingredients){
      let temp=``
      for(let Ingredient of Ingredients){
          // console.log(Ingredient.strDescription.split(" ").slice(0,15).join(" "))
          temp+=`
          <div class="box ing col-lg-3 offset-lg-0 col-md-4 offset-md-0 col-sm-6 offset-sm-0 col-8 offset-3" strIngredient=${Ingredient.strIngredient}>
          <div class=" text-center">
            <div class="box-img mb-2">
              <i class="fa-solid fa-drumstick-bite text-white fa-8x"></i>
            </div>
            <h4 class="fs-2 text-white  overflow-hidden px-2">${Ingredient.strIngredient}</h4>
            <p class="text-white">
            ${Ingredient.strDescription.split(" ").slice(0,15).join(" ")}
            </p>
          </div>
          
        </div>
        `
      }
      $(".boxes .row").html(temp)
  
  }
  
  
  
  displayContactForm(){
      let temp = `<div class="w-100 vh-100 d-flex justify-content-center align-items-center">
                    <div class="row col-md-9">
                        <div class="col-md-6 mb-4">
                            <input type="text" id="name" class="form-control mb-2" placeholder="Enter Your Name">
                            <div class="alert alert-danger d-none">Special characters and numbers not allowed</div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <input type="text" id="email" class="form-control mb-2" placeholder="Enter Your Email">
                            <div class="alert alert-danger d-none">Email not valid *exemple@yyy.zzz</div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <input type="text" id="phone" class="form-control mb-2" placeholder="Enter Your phone">
                            <div class="alert alert-danger d-none">Enter valid Phone Number</div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <input type="text" id="age" class="form-control mb-2" placeholder="Enter Your Age">
                            <div class="alert alert-danger d-none">Enter valid age</div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <input type="password" id="password" class="form-control mb-2" placeholder="Enter Your Password">
                            <div class="alert alert-danger d-none">Enter valid password *Minimum eight characters, at least one letter and one number:*</div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <input type="password" id="password_confirmation" class="form-control mb-2" placeholder="Enter Your Password Confirmation">
                            <div class="alert alert-danger d-none">Enter valid repassword</div>
                        </div>
                        <div class="col text-center">
                            <button disabled id="submit" class="btn btn-outline-danger">Submit</button>
                        </div>
                    </div>
                </div>`
      $(".boxes .row").html(temp)
  }
  
}
