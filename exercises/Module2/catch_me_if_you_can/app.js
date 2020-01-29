// function sum(x,y){
//     if (x || y !== number){
//         throw "error"
//     }
//     return x+y
//     }

//     try{
//         sum(1,2)
//     }
//     catch(err){
//         console.log(err)
//     }

var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
}
function login(username, password){
    if(username !== "sam" || password !== "123abc"){
        throw "Error"
    } else console.log("login successful!")
}
 try{
    login("sam","123abc")
 }
 catch(err){
    console.log(err)
 }
 try{
    login("seeem","123eeabc")
 }
 catch(err){
    console.log(err)
 }