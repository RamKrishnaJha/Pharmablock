let drugs=JSON.parse(localStorage.getItem("drugs"))
tbody=document.getElementById("tbody")
let logout=document.getElementById("logout")
  logout.addEventListener("click",()=>{
    localStorage.removeItem("curMan")
    location.replace("Loginman.html")
  })
  let back=document.getElementById("back")
  back.addEventListener("click",()=>{
    location.replace("menuformenuf.html")
  })
for(i=0;i<drugs.length;i++){
    if(drugs[i]!==null){
    stat=JSON.parse(localStorage.getItem(drugs[i]))
    if(stat[1]===localStorage.getItem("curMan")){
    ht=`<tr>         
    <td>${drugs[i]}</td>
    <td>${stat[0]}</td>
  </tr>`
  tbody.innerHTML+=ht
  localStorage.removeItem(drugs[i])
  delete drugs[i]
  localStorage.setItem("drugs",JSON.stringify(drugs))
    }
    }
}
