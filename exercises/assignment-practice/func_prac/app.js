const readline = require("readline-sync")

let player = {
    name: "",
    health: 100
}

function Enemy(name, health) {
  this.name = name;
  this.health = health;
}

function createEnemy() {
  let randomNum = Math.floor(Math.random() * 3);
  if(randomNum === 0){
      return new Enemy("Gazorpian", 100)
  } else if (randomNum === 1){
      return new Enemy("Gromflomite", 100){}
  } else {
      return new Enemy("Cronenberg", 100)
  }
}

function walk(){
    const userChoice = readline.keyInSelect(
        ["walk", "inventory"], "What would you like to do?") 
        if (userchoice=== 0){
            const randomNum = Math.floor(Math.random() * 3)
            if (randomNum === 0){
            encounter()
            } else{
                console.log("No threats in sight")
            }
    } else if (userChoice === 1){
        inventory()
        console.log(`
        In your inventory, you have: ${inventoryItems}.
        Your health life is ${player.health}/100. 
        Press walk to continue your mission.`)
    } else {
        console.log("Your Grandpa Rick needs your help. You cannot give up now!")
    }
}    

    function run(){
        const escapeChance = Math.floor(Math.random() *3)
        if (escapeChance === 0){
            console.log("You managed to escape using the portal gun. Keep going!")
        } else {
            console.log("You were not fast enough, you did not escape.")
            enemyAttack(player)
        }
    }

    function encounter(){
        let currentEnemy = createEnemy()
        console.log(`You've encountered a ${currentEnemy.name}!`)
        const defenseChoice = readline.keyInSelect(
            ["fight", "run"], "What would you like to do?"
        ) 
        if (defenseChoice === 1){
            run()
        } else {
            fight(currentEnemy)
        }
    } 

    function fight(currentEnemy){
        while (currentEnemy.health > 0 && player.health > 0){
            enemyAttack(player)
            let continueFightChoice = readline.keyInSelect(
                ["Keep fighting", "run"], "What would you like to do now? "
            )
            if (continueFightChoice === 1 ){
                console.log("You decided to continue fighting")
                enemyAttack(currentEnemy){}
            } else {
                run()
            }
        }
    }

    
