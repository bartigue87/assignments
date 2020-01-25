const form = document.form

form.addEventListener("submit", function(event){
    event.preventDefault()

    const goomba = form.goomba.value
    const bob = form.Bobombs.value
    const cheep = form.Cheepcheeps.value
    form.goomba.value = ""
    form.Bobombs.value = ""
    form.Cheepcheeps.value = ""

    function sum(num1, num2, num3){
        return ((num1*5))+((num2*7))+((num3*11))
    }
    const result = sum(goomba, bob, cheep)
    const h1 = document.createElement("h1")
    h1.textContent = "Total: " +result+ " Coins"
    document.body.appendChild(h1)
})