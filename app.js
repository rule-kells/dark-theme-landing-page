// const btn = document.querySelector('.btn--access')
const error = document.querySelector('.error')
const btn = document.querySelector('.btn--access')



 btn.addEventListener('click', function(){
     const checkValidation = document.querySelector("input").validity.valid

     if(!checkValidation) {
         error.classList.add('check')
     } else {
         error.classList.remove('check')
     }
 })

