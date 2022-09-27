const submitForm = document.querySelector("#submit");
const mainCard = document.querySelector("#main-card");
const secondaryCard = document.querySelector("#secondary-card");
const ratingForm = document.querySelector("#rating");
let selectedRating = document.querySelector("input[name='rating']:checked").value;


ratingForm.addEventListener('submit', function (e) {
    e.preventDefault;
    mainCard.classList.add('visually-hidden');
    secondaryCard.classList.remove('visually-hidden');
    let finalRating = document.querySelector("#final-rating");
    finalRating.innerText = selectedRating;
    console.log(selectedRating);
})

