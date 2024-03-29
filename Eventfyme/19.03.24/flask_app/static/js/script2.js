const popupButton  = document.querySelector(".button button")
const modal  = document.querySelector('.modal')
const closeModel = document.querySelector(".close-button")
console.log(popupButton);


popupButton.addEventListener('click',()=>
{
    console.log("click!!!");
    modal.classList.add('active')

}

)
closeModel.addEventListener('click',()=>
{
    console.log("click!!!");
    modal.classList.remove('active')
}


)
