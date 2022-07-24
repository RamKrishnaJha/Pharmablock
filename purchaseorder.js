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
    let drugData = JSON.stringify($('#shipment').serializeObject())
    ddata=JSON.parse(drugData)
    if(ddata.organisationRole==="Distributor"){
      localStorage.removeItem("curDis")
      location.replace("logindis.html")
    }
    
    else{
    localStorage.removeItem("curRet")
    location.replace("loginret.html")
    }
  })
  let back=document.getElementById("back")
  back.addEventListener("click",()=>{
    if(ddata.organisationRole==="Distributor"){
      location.replace("menufordis.html")
    }
    
    else{
      location.replace("menuforret.html")
    }
    
  })
  const drugdata = document.getElementById('purchaseorder')
  drugdata.addEventListener('submit', (e) => {
    e.preventDefault()
    let drugData = JSON.stringify($('#purchaseorder').serializeObject())
    ddata=JSON.parse(drugData)
    if(ddata.buyerCRN[0]==="D")
      ddata.organisationRole="Distributor"
    else if(ddata.buyerCRN[0]==="R")
      ddata.organisationRole="Retailer"
    drugData=JSON.stringify(ddata)
    localStorage.setItem("PO"+ddata.sellerCRN,drugData)
    console.log(drugData)
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/createPO',
      data: drugData,
      success: function (result) {
        let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-danger" role="alert">
          Purchase Order Created
      </div>`
      display(result.purchaseOrder)
        setTimeout(() => {
          message.innerHTML = ''
        }, 2000)
        let ar=[]
        if(localStorage.getItem(ddata.buyerCRN+"stat")!==null){
          ar=JSON.parse(localStorage.getItem(ddata.buyerCRN+"stat"))
        }
        ar.push(JSON.stringify([ddata.drugName,ddata.quantity,"Pending"]))
        localStorage.setItem(ddata.buyerCRN+"stat",JSON.stringify(ar))
      
      },
      error: function () {
        let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-danger" role="alert">
        Order Created Successfully
      </div>`
        setTimeout(() => {
          message.innerHTML = ''
        }, 2000)
        let ar=[]
        if(localStorage.getItem(ddata.buyerCRN+"stat")!==null){
          ar=JSON.parse(localStorage.getItem(ddata.buyerCRN+"stat"))
        }
        ar.push(JSON.stringify([ddata.drugName,ddata.quantity,"Pending"]))
        localStorage.setItem(ddata.buyerCRN+"stat",JSON.stringify(ar))
       
      },
      dataType: 'json',
      contentType: 'application/json',
    })
  })
  function display(data){
    var tbody=document.getElementById("tbody")
    ht1=`<tr>
    <td>Order Id</td>
    <td>${data.poID}</td>
    </tr>
    <tr>
    <td>Drug Name</td>
    <td>${data.drugName}</td>
    </tr>
    <tr>
    <td>Quantity</td>
    <td>${data.quantity}</td>
    </tr>
    
    <tr>
    <td>Buyer</td>
    <td>${data.buyer}</td>
    </tr>
    <tr>
    <td>Seller</td>
    <td>${data.seller}</td>
    </tr>`
    tbody.innerHTML=ht1
  }