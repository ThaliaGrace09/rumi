let form=document.querySelector(".form-autorisation");
let login=document.querySelector(".form-autorisation__login");
let password =document.querySelector(".form-autorisation__password");
let inputs=document.querySelectorAll("input");
let button=document.querySelector(".form-autorisation__btn");
let error=document.querySelector('.error');
//console.log(inputs);//
function handleData(e){
   e.preventDefault();
   let loginData=login.value;
   let passwordData=password.value;
  // console.log(loginData, passwordData);
   if (loginData=='Chuck' & passwordData=='Buss'){
    form.classList.add("dissapear");
   }
   else{
      login.value='';
      password.value='';
      error.innerHTML='incorrect login or password';
   }


}

inputs.forEach(function(input){
console.log(input.value)
})

button.addEventListener("click", handleData);