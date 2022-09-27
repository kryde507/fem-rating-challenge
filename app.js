const submitForm = document.querySelector("#submit");
const mainCard = document.querySelector("#main-card");
const secondaryCard = document.querySelector("#secondary-card");

let selectedRating = document.querySelector("input[name='rating']:checked").value;

submitForm.addEventListener('click', function () {
    mainCard.classList.add('visually-hidden');
    secondaryCard.classList.remove('visually-hidden');

    console.log(selectedRating);
})

let finalRating = document.querySelector("#final-rating");
finalRating.innerText = selectedRating;