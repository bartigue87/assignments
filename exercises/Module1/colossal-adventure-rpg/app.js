const readline = require("readline-sync")

const name = readline.question("You're Rick's grandson aren't you? What was your name again? ")
console.log("Well " + name + ", Rick really got himself into quite the mess. He managed to get captured by gromflomites while searching for crystalized xanthenite. He requested I teleport you here to Glapflap so you can rescue him. Proceed with caution, there will be many enemies along the way. Some things to remember; type 'w' to walk and type 'print' to display HP and inventory. ")

const walk = readline.question("Press 'w' to walk. ")
const HP = 100
const enemyHP = 100
const encounter = ["Fight", "Run"]
if (HP - damageTaken === 0){
    console.log("YOU DIED. GAME OVER")
}


var enemy = Math.floor(Math.random()*9)
        if (enemy === 0){
            console.log("You have encountered a gazorpion")
            const index = readline.keyInSelect(encounter, "Choose one")
            if (index === 0){
                var damageDealt = Math.floor(Math.random()*100)
                console.log("You dealt " + damageDealt + " damage")
                var damageTaken = Math.floor(Math.random()*100)
                console.log("The enemy attack caused " + damageTaken + " damage")
            } else {
                var run = Math.floor(Math.random()*1)
                if (run === 0){
                    console.log("You were able to flee the enemy")
                } else {
                    console.log("you were unable to escape")
                }
            }
        } else if (enemy === 4){
            console.log("You have encountered a cronenberg")
            const index = readline.keyInSelect(encounter, "Choose one")
            if (index === 0){
                var damageDealt = Math.floor(Math.random()*100)
                console.log("You dealt " + damageDealt + " damage")
                var damageTaken = Math.floor(Math.random()*100)
                console.log("The enemy attack caused " + damageTaken + " damage")
            } else {
                var run = Math.floor(Math.random()*1)
                if (run === 0){
                    console.log("You were able to flee the enemy")
                } else {
                    console.log("you were unable to escape")
                }
            }
        } else if (enemy === 8){
            console.log("You have encountered a gromflomite")
            const index = readline.keyInSelect(encounter, "Choose one")
            if (index === 0){
                var damageDealt = Math.floor(Math.random()*100)
                console.log("You dealt " + damageDealt + " damage")
                var damageTaken = Math.floor(Math.random()*100)
                console.log("The enemy attack caused " + damageTaken + " damage")
            } else {
                var run = Math.floor(Math.random()*1)
                if (run === 0){
                    console.log("You were able to flee the enemy")
                } else {
                    console.log("you were unable to escape")
                }
            }
         } else {
        console.log("You proceeded forward")
        const walk = readline.question("Press 'w' to walk. ")
    }
        