let shipment=document.getElementById("shipment")
shipment.addEventListener("click",()=>{
    location.replace("updateshipment.html")
})
let logout=document.getElementById("logout")
  logout.addEventListener("click",()=>{
    localStorage.removeItem("curTrans")
    location.replace("logintrans.html")
  })
  let see=document.getElementById("seeship")
  see.addEventListener("click",()=>{
    location.replace("ordertrans.html")
  })
