let order=document.getElementById("order")
let shipment=document.getElementById("shipment")
let view=document.getElementById("view")
let see=document.getElementById("seeorder")
let stat=document.getElementById("status")
order.addEventListener("click",()=>{
    location.replace("Purchase Order.html")
})
shipment.addEventListener("click",()=>{
    location.replace("Shipment.html")
})
view.addEventListener("click",()=>{
    location.replace("viewdrug.html")
})
see.addEventListener("click",()=>{
  location.replace("ordersdis.html")
})
stat.addEventListener("click",()=>{
  location.replace("status.html")
})

let logout=document.getElementById("logout")
  logout.addEventListener("click",()=>{
    localStorage.removeItem("curDis")
    location.replace("logindis.html")
  })

