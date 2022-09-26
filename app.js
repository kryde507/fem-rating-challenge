const submitForm = document.querySelector("#submit");
const mainCard = document.querySelector("#main-card");
const secondaryCard = document.querySelector("#secondary-card");



submitForm.addEventListener('click', function () {
    mainCard.classList.add('visually-hidden');
    secondaryCard.classList.remove('visually-hidden');
    let selectedRating = document.querySelector("input[name='rating']:checked").value;
    console.log(selectedRating);
})


// rating.innerText = selectedRating