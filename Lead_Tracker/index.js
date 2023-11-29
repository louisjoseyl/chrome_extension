 let inputBtn = document.getElementById("input-btn")
 const inputEl = document.getElementById("input-el")
 const myLeads = []
 const ulEl = document.getElementById("ul-el")

//  function saveInput() {
//   alert("you have clicked the input button")
//  }

 inputBtn.addEventListener('click', () => {
  myLeads.push(inputEl.value)
  renderLeads()
  inputEl.value = ""
})


function renderLeads() {
  //log out the items in the myleads array uusing a for loop
  
  /* create a variable, listItems, ot hold all the html for the list items
  assign it to an empty string to begin with
  */
  let listItems = ""
  for (lead  of myLeads){
    listItems +=`
    <li>
      <a target = '_blank' href =' ${lead} '>  
        ${lead}  
      </a>
    </li>
    `

  }

  // // render the listitems inside the unordered list using ulel.innerHTML
  ulEl.innerHTML = listItems


}
