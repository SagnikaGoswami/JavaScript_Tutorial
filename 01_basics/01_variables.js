const accountId = 144553;
let accountEmail = "abc@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// accountId = 2 // Error => Assignment to Constant Variable
console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "2121212"
accountCity = "Bengaluru"
let accountState; // undefined

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var,
because of issues with block scope and functional scope
*/

