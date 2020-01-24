const form = document.form

form.addEventListener("submit", function(){
    event.preventDefault()
    
    const firstName = document.form.firstName
    const lastName = document.form.lastName
    const age = document.form.age
    const gender = document.form.gender.value
    const diet = document.form.diet.value
    form.firstName.value = ""
    form.lastName.value = ""
    form.age.value = ""
    // form.gender.value = 
    // form.diet.value = 

    alert(firstName, lastName, age, gender, diet)

    
})