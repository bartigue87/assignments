const readline = require("readline-sync")

const name = readline.question("You're Rick's grandson aren't you? What was your name again? ")
console.log("Well " + name + ", Rick really got himself into quite the mess. He managed to get captured by gromflomites while searching for crystalized xanthenite. He requested I teleport you here to Glapflap so you can rescue him. Proceed with caution, there will be many enemies along the way. Some things to remember; type 'w' to walk and type 'print' to display HP and inventory. ")

const walk = readline.question("Press 'w' to walk. ")
var enemy = Math.floor(Math.random()*9)
        if (enemy === 0){
            console.log("you have encountered a gazorpion")

        } else if (enemy === 4){
            console.log("you have encountered a cronenberg")
        } else if (enemy === 8){
            console.log("you have encountered a gromflomite")
    } else {
        console.log("you proceeded forward")
    }
    