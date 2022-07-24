let so=localStorage.getItem("SO"+localStorage.getItem("curTrans"))
let SO=JSON.parse(so)

if(SO.length!=0){
    

let tbody=document.getElementById("tbody")

ht=`<tr>
<td>${SO.drugName}</td>
<td>${SO.buyerCRN}</td>
<td>
<button type="button" class="btn btn-primary" id="remove">Remove</button>
</td>
</tr>`
tbody.innerHTML=ht
let bt=document.getElementById("remove")
bt.addEventListener("click",()=>{
    localStorage.removeItem("SO"+localStorage.getItem("curTrans"))
    tbody.innerHTML=" "
})
}
logout.addEventListener("click",()=>{
    
    localStorage.removeItem("curTrans")
    location.replace("logintrans.html")
    
  })
back.addEventListener("click",()=>{
    location.replace("menutrans.html")
  })
