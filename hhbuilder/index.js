
const body = document.querySelector('body');
body.innerHTML += `
    <div class="household_list">
        <h1> List of House Hold Members </h1>
    </div>
`;

const form = document.querySelector('form');
const add = document.querySelector('.add');
const ageInput = document.querySelector('input[name="age"]');
const smokerInput = document.querySelector('input[name="smoker"]');
const relationshipInput = document.querySelector('select').options;
const household = document.querySelector('.household_list');
const householdArr = [];

add.addEventListener('click', event => {
    event.preventDefault();
    let messages = [];

    if(!validateAge(ageInput.value)) messages.push("Enter a valid age");
  
    if(relationshipInput[0].selected === true) {
        messages.push("Please select a value");
    }

    if(messages.length > 0) {
        alert(messages.join(" and "));
    } else {
        const newPerson = {age: ageInput.value, relationship: findRelationship(relationshipInput), smoker: isSmoker(smokerInput.checked)}

        householdArr.push(newPerson);

        household.innerHTML += `
            <div class="info__card">
                <h1> Relationship: ${newPerson.relationship}</h1>
                <h2> Age: ${newPerson.age} </h2>
                <h2> Smoker: ${newPerson.smoker}  </h2>
            </div>
        `
        ageInput.value = "";
        relationshipInput[0].selected = true;
        smokerInput.checked = false;
        
    }
 
})



const validateAge = input => {
    return (input === '' || input === null || input < 1 || isNaN(input)) ? false : true;
}

const findRelationship = input => {
    for(let i = 0; i < input.length; i++) {
        if(input[i].selected) return input[i].value;
    }
}

const isSmoker = input => input ? "Yes" : "No";








