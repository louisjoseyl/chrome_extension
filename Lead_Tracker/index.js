 let inputBtn = document.getElementById("input-btn")
 const inputEl = document.getElementById("input-el")
 let myLeads = []
 const ulEl = document.getElementById("ul-el")
 const deleteBtn = document.getElementById("delete-btn")
 const saveBtn = document.getElementById("save-btn")
 const tabs = [
  {url: " https://www.linkedin.com/in/per-harald-borgen/"}
 ]

// get the leads from localStorage
// store it in an variable, leadsFromLocalStorage
//Log out the variable

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}


saveBtn.addEventListener('click', () => {
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)

})



function render(leads) {
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




deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})
 
 inputBtn.addEventListener('click', () => {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)

})


