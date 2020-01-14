function hasDouble(str){
    for(let i = 0; i < str.length - 1; i++){
        if(str[i] === str[i+1]){
            return true
        } 

    } 
    return false
}

 
 console.log(hasDouble("racecar"))