// //template strings 

// const recipent = "James"
// // refactor the email string to use template strings
// // create a new variable, sender and set its value to your name
// const sender = "Louis Joseph"

// const email = `
// Hey ${recipent} ! 
// How is it going? 
// Cheers ${sender}`
// alert(email)


let myLeads = `["www.awesomelead.com"]`

//turn the myleads string into an array
// push a new value to the array
// turn the array into a string again
// console.log the string using typeof to verify that it is a string

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.google.com")
// console.log(typeof(myLeads), myLeads)
// myLeads = JSON.stringify(myLeads)
// console.log(typeof(myLeads), myLeads)



// back to using parameter in function

function greetUser(greeting, name){
  console.log(`${greeting}, ${name}`)
}
greetUser('hi','josey')