let order=document.getElementById("order")
let shipment=document.getElementById("shipment")
let view=document.getElementById("view")
let see=document.getElementById("seeorder")
let stat=document.getElementById("status")
order.addEventListener("click",()=>{
    location.replace("Purchase Order.html")
})
shipment.addEventListener("click",()=>{
    location.replace("selldrug.html")
})
view.addEventListener("click",()=>{
    location.replace("viewdrug.html")
})
see.addEventListener("click",()=>{
  location.replace("orderres.html")
})
stat.addEventListener("click",()=>{
  location.replace("statusr.html")
})

let logout=document.getElementById("logout")
  logout.addEventListener("click",()=>{
    localStorage.removeItem("curRet")
    location.replace("loginret.html")
  })
