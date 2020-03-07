const readline = require("readline-sync");

let player = {
  name: "",
  health: 100
};

let inventoryItems = ["switchblade", "laser gun"];

function Enemy(name, health) {
  this.name = name;
  this.health = health;
}
function createEnemy() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return new Enemy("Gazorpion", 100);
  } else if (randomNum === 1) {
    return new Enemy("Gromflomite", 100);
  } else {
    return new Enemy("Cronenberg", 100);
  }
}

function walk() {
  const userChoice = readline.keyInSelect(
    ["walk", "inventory"],
    "What would you like to do?"
  );
  if (userChoice === 0) {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
      encounter();
    } else {
      console.log("No threats in sight, you proceeded forward");
    }
  } else if (userChoice === 1) {
    inventory();
    console.log(`
        In your inventory, you have: ${inventoryItems}. 
        Your health life is: ${player.health}/100.
        Press walk to continue your mission`);
  } else {
    console.log("Your Grandpa Rick needs your help. You can't give up on him");
  }
}

function run() {
  const escapeChance = Math.floor(Math.random() * 3);
  if (escapeChance === 0) {
    console.log("You managed to escape using the portal gun. Keep going!");
  } else {
    console.log("You were not fast enough");
    enemyAttack(player);
  }
}

function encounter() {
  let currentEnemy = createEnemy();
  console.log(`You've encountered a ${currentEnemy.name}!`);
  const defenseChoice = readline.keyInSelect(
    ["fight", "run"],
    "What would you like to do?"
  );
  if (defenseChoice === 1) {
    run();
  } else {
    fight(currentEnemy);
  }
}

function fight(currentEnemy) {
  while (currentEnemy.health > 0 && player.health > 0) {
    enemyAttack(player);
    let continueFightChoice = readline.keyInSelect(
      ["keep fighting", "run"],
      "What would you like to do?"
    );
    if (continueFightChoice === 0) {
      console.log("You decided to continue fighting");
      attackEnemy(currentEnemy);
    } else {
      run();
    }
  }
}

function enemyAttack(player) {
  function randomDamage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  }
  player.health = player.health - randomDamage();
  console.log("The enemy dealt " + randomDamage() + " damage.");
  if (player.health <= 0) {
    die();
  }
}

function attackEnemy(currentEnemy) {
  function randomDamage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (100 - 98 + 1)) + 92;
  }
  currentEnemy.health = currentEnemy.health - randomDamage();
  console.log("You dealt " + randomDamage() + " damage.");
  if (currentEnemy.health <= 0) {
    enemyDie();
  }
}

function die() {
  console.log("YOU DIED. GAME OVER");
  player.health = 0;
}

function enemyDie() {
  let newInventorylist = inventoryItems.push("laser gun ammo");
  player.health = player.health + 10;
  console.log(
    "You've defeated the enemy. You've picked up some ammo off the dead body and you've gained some health points back."
  );
  if (inventoryItems.length === 7) {
    return victory();
  }
}

function inventory() {
  return `${inventoryItems}`;
}

function victory() {
  console.log("You made it to Rick and freed him! YOU WIN!");
}

const name = readline.question(
  "You're Rick's grandson aren't you? What was your name again? "
);
console.log(
  "Well " +
    name +
    ", Rick really got himself into quite the mess. He managed to get captured by gromflomites while searching for crystalized xanthenite. He requested I teleport you here to Glapflap so you can rescue him. Proceed with caution, there will be many enemies along the way. "
);
while (player.health > 0) {
  walk();
}
