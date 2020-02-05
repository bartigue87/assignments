class Player {
    constructor(name, totalCoins, status, hasStar, gameActive){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }
    setName(namePicked){
        if (namePicked === "mario"){
            return name === "Mario"
        } else if (namePicked === "luigi"){
            return name === "Luigi"
        }
    }
    gotHit(status){
        if (status === "Powered Up"){
            return status === "Big"
        } else if (status === "Big"){
            return status === "Small"
        } else if (status === "Small"){
            return status === "Dead"
        }
    }
    gotPowerup(status){
        if (status === "Small"){
            return status === "Big"
        } else if (status === "Big"){
            return status === "Powered Up"
        } else if (status === "Powered Up"){
            return hasStar === true
        }
    }
    addCoin(totalCoins){
        return totalCoins++
    }
    print(){
        console.log(`
        Name: ${name}
        Status: ${status}`)
    }
}

const newPlayer = new Player(setName("mario"), 0, "Big", false, true)
const randomNum = Math.floor(Math.random()*3)