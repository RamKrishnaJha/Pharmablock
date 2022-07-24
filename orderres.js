let po=localStorage.getItem("PO"+localStorage.getItem("curRet"))
let PO=JSON.parse(po)
if(PO.length!=0){
    
    
  let tbody=document.getElementById("tbody")
ht=`<tr>
<td>${PO.name}</td>
<td>${PO.drugName}</td>
<td>${PO.customerAadhar}</td>
<td>
<button type="button" class="btn btn-primary" id="remove">Remove</button>
</td>
</tr>`
tbody.innerHTML=ht
let bt=document.getElementById("remove")
bt.addEventListener("click",()=>{
    localStorage.removeItem("PO"+localStorage.getItem("curRet"))
    tbody.innerHTML=" "
})
}
back.addEventListener("click",()=>{
  location.replace("menuforret.html")
})
logout.addEventListener("click",()=>{
    
  localStorage.removeItem("curRet")
  location.replace("loginret.html")
  
})