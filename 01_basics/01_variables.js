const accountId = 144553
let accountEmail = "vikrant.google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//accountId = 2
/*
prefer not to use var
because of isssues of scope and function 
*/

accountEmail = "vk@vk.com"
accountPassword = "211211"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])