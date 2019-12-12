
const body = document.querySelector('body');
body.innerHTML += `
    <div class="household_list">
        <h1> List of House Hold Members </h1>
    </div>
`;

const form = document.querySelector('form');
const add = document.querySelector('.add');
const submit = document.querySelector('button[type="submit"]');
const ageInput = document.querySelector('input[name="age"]');
const smokerInput = document.querySelector('input[name="smoker"]');
const relationshipInput = document.querySelector('select').options;
const household = document.querySelector('.household_list');
let householdArr = [];

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
        const newPerson = {id: newID(householdArr), age: ageInput.value, relationship: findRelationship(relationshipInput), smoker: isSmoker(smokerInput.checked)}

        householdArr.push(newPerson)

        addHousehold(newPerson.relationship, newPerson.age, newPerson.smoker, newPerson.id)
        resetVal();
    }
});

household.addEventListener('click', event => {
    if(event.target.className === 'delete') {
        const deleteID = event.target.parentNode.id;
        householdArr = householdArr.filter(person => person.id != deleteID);
        event.target.parentNode.remove();
    }
})

submit.addEventListener('click', event => {
    event.preventDefault();
    submitForm();
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

const newID = household => {
    return household.length < 1 ? 1 : household[household.length - 1].id + 1;
}

const addHousehold = (relationship, age, smoker, id) => {
    household.innerHTML += `
            <div class="info__card" id=${id}>
                <h1> Relationship: ${relationship}</h1>
                <h2> Age: ${age} </h2>
                <h2> Smoker: ${smoker}  </h2>
                <button class="delete"> Delete </button>
            </div>
        `
}

const resetVal = () => {
    ageInput.value = "";
    relationshipInput[0].selected = true;
    smokerInput.checked = false;
}

const submitForm = data => {
    const stringify = JSON.stringify(householdArr);
    return stringify;
}







