const form = document.form

form.addEventListener("submit", function(){
    event.preventDefault()
    
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const city = form.city.value
    const dietInput = []
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            dietInput.push(form.diet[i].value)
        }
    }
    form.firstName.value = ""
    form.lastName.value = ""
    form.age.value = ""
    // form.gender.value = 
    // form.diet.value = 

    alert(firstName + " " + lastName + " " + age + " " + gender + " " + dietInput + " " + city)

    
})