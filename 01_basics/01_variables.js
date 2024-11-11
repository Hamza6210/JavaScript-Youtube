const accountNo= "56442"
let accountEmail= "hamza@gmail.com"
var accountPassword= "12345"
accountCity = "Lahore"

accountEmail= "abc@123.gmail"
accountPassword= "1122334"
accountCity= "Karachi"

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountNo, accountEmail, accountPassword, accountCity])

console.log([accountNo, accountEmail, accountPassword, accountCity]) 
