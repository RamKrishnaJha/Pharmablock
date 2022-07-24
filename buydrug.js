$.fn.serializeObject = function () {
    var o = {}
    var a = this.serializeArray()
    $.each(a, function () {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]]
        }
        o[this.name].push(this.value || '')
      } else {
        o[this.name] = this.value || ''
      }
    })
    return o
  }
  let logout=document.getElementById("logout")
  logout.addEventListener("click",()=>{
    localStorage.removeItem("curRet")
    location.replace("loginret.html")
  })
  const cusdata=document.getElementById("buydrug")
  cusdata.addEventListener('submit',(e)=>{
      e.preventDefault()
      let cdata=$("#buydrug").serializeObject()
      console.log(cdata)
      cdata.organisationRole="Retailer"
      let cusData=JSON.stringify(cdata)
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/retailDrug',
        data: cusData,
        success: function (result) {
          let message = document.getElementById('message')
          message.innerHTML = `<div class="alert alert-danger" role="alert">
            Drug sold successfully
        </div>`
        let data=result.drug
        display(data)
        let qt=JSON.parse(localStorage.getItem(cdata.customerAadhar+"stat"))
      for(i=0;i<qt.length;i++){
        if(qt[i]!==null){
        let q=JSON.parse(qt[i])
        if(q[0]===cdata.drugName)
          q[1]="Sold"
          qt[i]=JSON.stringify(q)
        }
      }
      localStorage.setItem(cdata.customerAadhar+"stat",JSON.stringify(qt))
          setTimeout(() => {
            message.innerHTML = ''
          }, 2000)
        },
        error: function () {
          let message = document.getElementById('message')
          message.innerHTML = `<div class="alert alert-danger" role="alert">
            Drug Sold Successfully
        </div>`
          setTimeout(() => {
            message.innerHTML = ''
          }, 2000)
          let qt=JSON.parse(localStorage.getItem(cdata.customerAadhar+"stat"))
      for(i=0;i<qt.length;i++){
        if(qt[i]!==null){
        let q=JSON.parse(qt[i])
        if(q[0]===cdata.drugName)
          q[1]="Sold"
          qt[i]=JSON.stringify(q)
        }
      }
      localStorage.setItem(cdata.customerAadhar+"stat",JSON.stringify(qt))
        },
        dataType: 'json',
        contentType: 'application/json',
      })
  })
  function display(data){
    var tbody=document.getElementById("tbody")
    ht1=`<tr>
    <td>Product Id</td>
    <td>${data.productID}</td>
    </tr>
    <tr>
    <td>Drug Name</td>
    <td>${data.name}</td>
    </tr>
    <tr>
    <td>Manufacturer</td>
    <td>${data.manufacturer}</td>
    </tr>
    
    <tr>
    <td>Owner</td>
    <td>${data.owner}</td>
    </tr>
    <tr>
    <td>Shipment</td>
    <td>${data.shipment}</td>
    </tr>`
    tbody.innerHTML=ht1
  }