let order=document.getElementById("order")

let stat=document.getElementById("status")
order.addEventListener("click",()=>{
    location.replace("buydrug.html")
})
stat.addEventListener("click",()=>{
    location.replace("statuscus.html")
})


let logout=document.getElementById("logout")
  logout.addEventListener("click",()=>{
    localStorage.removeItem("curCus")
    location.replace("logincus.html")
  })

