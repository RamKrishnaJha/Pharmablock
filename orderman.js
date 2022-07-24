let po=localStorage.getItem("PO"+localStorage.getItem("curMan"))
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
      localStorage.removeItem("PO"+localStorage.getItem("curMan"))
      tbody.innerHTML=" "
  })
}
let back=document.getElementById("back")
console.log(back)
back.addEventListener("click",()=>{
  location.replace("menuformenuf.html")
})
logout.addEventListener("click",()=>{
    
  localStorage.removeItem("curMan")
  location.replace("Loginman.html")
  
})