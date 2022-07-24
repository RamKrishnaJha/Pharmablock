let qt=JSON.parse(localStorage.getItem(localStorage.getItem("curDis")+"stat"))
console.log(qt)
let tbody=document.getElementById("tbody")
      for(i=0;i<qt.length;i++){
        if(qt[i]!==null){
        let q=JSON.parse(qt[i])
        ht=`<tr>
        <td>${q[0]}</td>
        <td>${q[1]}</td>
        <td>${q[2]}</td>`
        tbody.innerHTML+=ht
        if(q[2]==="Delivered"){
          delete qt[i]
        }
      }
      }
      localStorage.setItem(localStorage.getItem("curDis")+"stat",JSON.stringify(qt))
      logout.addEventListener("click",()=>{
    
        localStorage.removeItem("curDis")
        location.replace("logindis.html")
        
      })
      back.addEventListener("click",()=>{
        location.replace("menufordis.html")
      })