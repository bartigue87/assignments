class Player {
  constructor(name, totalCoins, status, hasStar, gameActive) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
    this.gameActive = gameActive;
  }

  gotHit() {
    if (this.status === "Powered Up") {
      return (this.status = "Big");
    } else if (this.status === "Big") {
      return (this.status = "Small");
    } else if (this.status === "Small") {
      return (this.status = "Dead");
    }
  }
  gotPowerup() {
    if (this.status === "Small") {
      return (this.status = "Big");
    } else if (this.status === "Big") {
      return (this.status = "Powered Up");
    } else if (this.status === "Powered Up") {
      return (this.hasStar = true);
    }
  }
  addCoin() {
    return this.totalCoins++;
  }

  print() {
    console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Total Coins: ${this.totalCoins}
        `);
  }
}

const newPlayer = new Player("mario", 0, "Big", false, true);
// newPlayer.addCoin();
// newPlayer.addCoin();
// newPlayer.addCoin();
// newPlayer.addCoin();
// newPlayer.addCoin();
// console.log(newPlayer.totalCoins);

function randomRange() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    newPlayer.gotHit();
  } else if (randomNum === 1) {
    newPlayer.gotPowerup();
  } else {
    newPlayer.addCoin();
  }
  console.log(newPlayer);
}

intervalId = setInterval(randomRange, 1000);
if (newPlayer.gameActive === false) {
  clearInterval(intervalId);
}
newPlayer.print();
