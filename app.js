const submitForm = document.querySelector("#submit");
const mainCard = document.querySelector("#main-card");
const secondaryCard = document.querySelector("#secondary-card");
const ratingForm = document.querySelector("#rating");



ratingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    mainCard.classList.add('visually-hidden');
    secondaryCard.classList.remove('visually-hidden');
    let selectedRating = document.querySelector("input[name='btnradio']:checked").value;
    let finalRating = document.querySelector("#final-rating");
    finalRating.innerText = selectedRating;
    console.log(selectedRating);
})

