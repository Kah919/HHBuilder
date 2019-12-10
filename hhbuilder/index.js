const form = document.querySelector('form')
const ageInput = document.querySelector('input[name="age"]');


ageInput.addEventListener('change', event => {
    event.preventDefault()
    console.log(ageInput.value)
})
console.log(ageInput.value)