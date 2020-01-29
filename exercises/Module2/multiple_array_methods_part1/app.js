var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const result = peopleArray.filter(function(person){
    if(person.age > 18){
        return true
    }
})
// console.log(result)
//*****IMPORTANT HOW TO SORT LAST NAME ALPHABETICALLY */
result.sort(function(a,b){
    var aLastName = a.lastName.split(" ")
    var bLastName = b.lastName.split(" ")
    if(aLastName < bLastName){
        return -1;
     } else if(aLastName > bLastName){
         return 1;
     } else return 0
})
console.log(result)
const newArr = [] 
result.forEach(function(tag){
    newArr.push("<li>" + tag.firstName + " " + tag.lastName + " is " + tag.age + "<li>")
})

console.log(newArr)

