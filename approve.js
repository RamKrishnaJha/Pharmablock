/*d=JSON.parse(localStorage.getItem("drugs"))*/
ar=JSON.parse(localStorage.getItem("drugs"))
console.log(ar.length)
let logout=document.getElementById("logout")
  logout.addEventListener("click",()=>{
    location.replace("logingov.html")
  })
tbody=document.getElementById("tbody")
for(i=0;i< ar.length;i++)
{   if(ar[i]!==null){
    console.log(ar[i])
    d=JSON.parse(localStorage.getItem(ar[i]))
    console.log(d)
    ht=`<tr>
                
                <td>${d.drugName}</td>
                <td>${d.serialNo}</td>
                <td>${d.mfgDate}</td>
                <td>${d.expDate}</td>
                <td>${d.companyCRN}</td>
                <td>${d.chemicalname}</td>
                <td>${d.type}</td>
                <td>${d.sideeffect}</td>
                <td>
                <button type="button" class="btn btn-primary" id=${d.serialNo}a>Approve</button>
                </td>
                <td>
                <button type="button" class="btn btn-danger" id=${d.serialNo}r>Reject</button>
                </td>
              </tr>`
    tbody.innerHTML+=ht
}
  }
  for(i=0;i<ar.length;i++){
    if(ar[i]!==null){
    let bt=document.getElementById(ar[i]+"a")
    bt.addEventListener("click",()=>{
      console.log(bt.id)
      d=JSON.parse(localStorage.getItem(bt.id.slice(0,bt.id.length-1)))
      delete d.chemicalname
      delete d.type
      delete d.sideeffect
      d.organisationRole="Manufacturer"
      d1=JSON.stringify(d)
      console.log(d1)
      console.log(d)
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/addDrug',
        data: d1,
        success: function (result) {
          console.log(result)
          let d2=result.drug
          bt.innerText="Approved"
          let ara=["Approved",d.companyCRN]
          localStorage.setItem(d.serialNo,JSON.stringify(ara))
          display(d2)
          let msg=document.getElementById("message")
          msg.innerText=`Drug Added Successfully`
        },
        error: function (result) {
          console.log(result)
          bt.innerText="Approved"
          let ara=["Approved",d.companyCRN]
          localStorage.setItem(d.serialNo,JSON.stringify(ara))
        },
        dataType: 'json',
        contentType: 'application/json',
      })
    })
    let rt=document.getElementById(ar[i]+"r")
    rt.addEventListener("click",()=>{
      rt.innerText="Rejected"
      ara=["Rejected",d.companyCRN]
      localStorage.setItem(d.serialNo,JSON.stringify(ara))
    })
  }
  }
  function display(data){
    var tbody=document.getElementById("tbody1")
    ht1=`<tr>
    <td>Product Id</td>
    <td>${data.productID}</td>
    </tr>
    <tr>
    <td>Name</td>
    <td>${data.name}</td>
    </tr>
    <tr>
    <td>Manufacturer</td>
    <td>${data.manufacturer}</td>
    </tr>
    
    <tr>
    <td>Current Owner</td>
    <td>${data.owner}</td>
    </tr>`
    tbody.innerHTML=ht1
}





