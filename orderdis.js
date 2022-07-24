let po=localStorage.getItem("PO"+localStorage.getItem("curDis"))
let PO=JSON.parse(po)
if(PO.length!=0){
    
  let tbody=document.getElementById("tbody")
  ht=`<tr>
  <td>${PO.drugName}</td>
  <td>${PO.buyerCRN}</td>
  <td>${PO.quantity}</td>
  <td>
  <button type="button" class="btn btn-primary" id="remove">Remove</button>
  </td>
  </tr>`
  tbody.innerHTML=ht
  let bt=document.getElementById("remove")
  bt.addEventListener("click",()=>{
      localStorage.removeItem("PO"+localStorage.getItem("curDis"))
      tbody.innerHTML=" "
  })
}
let back=document.getElementById("back")
back.addEventListener("click",()=>{
  location.replace("menufordis.html")
})
logout.addEventListener("click",()=>{
    
  localStorage.removeItem("curDis")
  location.replace("logindis.html")
  
})
