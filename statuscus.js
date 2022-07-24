console.log(localStorage.getItem("curCus"))
let qt=JSON.parse(localStorage.getItem(localStorage.getItem("curCus")+"stat"))
console.log(qt)
let tbody=document.getElementById("tbody")
      for(i=0;i<qt.length;i++){
        if(qt[i]!==null){
        let q=JSON.parse(qt[i])
        ht=`<tr>
        <td>${q[0]}</td>
        <td>${q[1]}</td>`
        tbody.innerHTML+=ht
        if(q[1]==="Sold"){
          delete qt[i]
        }
    }
      }
      localStorage.setItem(localStorage.getItem("curCus")+"stat",JSON.stringify(qt))
      logout.addEventListener("click",()=>{
    
        localStorage.removeItem("curCus")
        location.replace("logincus.html")
        
      })
      back.addEventListener("click",()=>{
        location.replace("menucus.html")
      })