 let inputBtn = document.getElementById("input-btn")
 const inputEl = document.getElementById("input-el")
 const myLeads = ["www.awesomelead.com", "www.greatlead.com", "www.epiclead.com"]
 const ulEl = document.getElementById("ul-el")

//  function saveInput() {
//   alert("you have clicked the input button")
//  }

 inputBtn.addEventListener('click', () => {
  myLeads.push(inputEl.value)
})

//log out the items in the myleads array uusing a for loop



let listItems = ""
for (lead  of myLeads){
  listItems +="<li>" + lead + "</li>"
  
  ulEl.innerHTML = listItems

  // another way to do it
  // create element
  // set text element
  // qppend to null
  // const li = document.createElement("li")
  // li.textContent = lead
  // ulEl.append(li)
 }
