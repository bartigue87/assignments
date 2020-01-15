var employees = []

function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    // this.printEmployeeForm = function(){
    //     console.log(this)
    // }
}
Employee.prototype.printEmployeeForm =function(){
    console.log(this)
}
var steve = new Employee("steve", "usher", 20000, "Part Time")
var john = new Employee("john", "box office", 25000, "Full Time")
var sarah = new Employee("sarah", "concession", 30000, "full Time")
// steve.printEmployeeForm()
// john.printEmployeeForm()
// sarah.printEmployeeForm()

employees.push(steve)
employees.push(john)
employees.push(sarah)
console.log(employees)