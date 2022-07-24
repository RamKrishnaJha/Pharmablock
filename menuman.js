let create=document.getElementById("create")
let shipment=document.getElementById("shipment")
let approve=document.getElementById("seeapproved")
let view=document.getElementById("view")
let orders=document.getElementById("orders")
create.addEventListener("click",()=>{
    location.replace("Create Drug.html")
})
shipment.addEventListener("click",()=>{
    location.replace("Shipment.html")
})
approve.addEventListener("click",()=>{
    location.replace("seeapproved.html")
})
view.addEventListener("click",()=>{
    location.replace("viewdrug.html")
})
orders.addEventListener("click",()=>{
  location.replace("Ordersman.html")
})
let logout=document.getElementById("logout")
  logout.addEventListener("click",()=>{
    localStorage.removeItem("curMan")
    location.replace("Loginman.html")
  })
