const readline = require("readline-sync");
const name = readline.question("What is your name? ");
    console.log(name + ", you are trapped in this room you must find a way out.")

choice1 = ["put hand in hole", "find the key", "open door"];
index = readline.keyInSelect(choice1, 'Choose one?');
// console.log(choice1)
    if (index === 0){
        console.log("you died")
    }   else if (index === 1){
            keyPathChoice = ["put hand in hole", "look under mattress", "look in toilet"]
            var keyPath = readline.keyInSelect(keyPathChoice, "Choose one");
                if (keyPath === 0){
                    console.log("you died")
                }   else if (keyPath === 1){
                        console.log("You found a key and tried it on the door and it worked. You escaped!")
                    }   else if (keyPath === 2){
                            console.log("After digging around for awhile you found a key and tried it on the door and it didn't work")
                            var next = readline.keyInSelect(keyPathChoice, "Now what?");
                                if (next === 0){
                                    console.log("you died")
                                }   else if (next === 1){
                                    console.log("You found a key and tried it on the door and it worked. You escaped!")
                                    }   else if (next === 2){
                                            console.log("You drowned somehow. Why would you check the toilet again?")
                                        }        
                        }
        }   else if (index === 2){
                        console.log("You tried opening the door but it was locked")
                        keyPathChoice = ["put hand in hole", "look under mattress", "look in toilet"]
                        var keyPath = readline.keyInSelect(keyPathChoice, "Choose one");
                            if (keyPath === 0){
                                console.log("you died")
                            }   else if (keyPath === 1){
                                    console.log("You found a key and tried it on the door and it worked. You escaped!")
                                }   else if (keyPath === 2){
                                        console.log("After digging around for awhile you found a key and tried it on the door and it didn't work. Now What")
                                        var next = readline.keyInSelect(keyPathChoice, "Now what?");
                                            if (next === 0){
                                                console.log("you died")
                                            }   else if (next === 1){
                                                    console.log("You found a key and tried it on the door and it worked. You escaped!")
                                                }   else if (next === 2){
                                                        console.log("You drowned somehow. Why would you check the toilet again?")    
                                                    } 
                                    }
}
