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
    localStorage.removeItem("curMan")
    location.replace("Loginman.html")
    }
  })
  let back=document.getElementById("back")
  back.addEventListener("click",()=>{
    if(ddata.organisationRole==="Distributor"){
      location.replace("menufordis.html")
    }
    
    else{
      location.replace("menuformenuf.html")
    }
  })
  const drugdata = document.getElementById('shipment')
  drugdata.addEventListener('submit', (e) => {
    e.preventDefault()
    let drugData = JSON.stringify($('#shipment').serializeObject())
    ddata=JSON.parse(drugData)
    if(ddata.buyerCRN[0]==="D")
      ddata.organisationRole="Manufacturer"
    else if(ddata.buyerCRN[0]==="R")
      ddata.organisationRole="Distributor"
    drugData=JSON.stringify(ddata)
    localStorage.setItem("SO"+ddata.transporterCRN,drugData)
    console.log(drugData)
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/createShipment',
      data: drugData,
      success: function () {
        let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-danger" role="alert">
          Shipment Created Successfully
      </div>`
      let qt=JSON.parse(localStorage.getItem(ddata.buyerCRN+"stat"))
      for(i=0;i<qt.length;i++){
        let q=JSON.parse(qt[i])
        if(q[0]===ddata.drugName)
          q[2]="In-transit"
          qt[i]=JSON.stringify(q)
      }
      localStorage.setItem(ddata.buyerCRN+"stat",JSON.stringify(qt))
        setTimeout(() => {
          message.innerHTML = ''
        }, 2000)
       
      },
      error: function (result) {
        let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-danger" role="alert">
        Shipment Created Successfully
      </div>`
      console.log(result)
        console.log(result.responseJSON.shipment)
        let ar=result.responseJSON.shipment
        let thead=document.getElementById("thead")
        thead.innerHTML=`<tr>
        <td>Shipment ID</td>
        
        <td>Creator</td>
        
        <td>Assets</td>
        <td>Transporter</td>
        <td>Status</td>
        </tr>`
        btable(ar)
      let qt=JSON.parse(localStorage.getItem(ddata.buyerCRN+"stat"))
      for(i=0;i<qt.length;i++){
        if(qt[i]!==null){
        let q=JSON.parse(qt[i])
        if(q[0]===ddata.drugName)
          q[2]="In-transit"
          qt[i]=JSON.stringify(q)
        }
      }
      localStorage.setItem(ddata.buyerCRN+"stat",JSON.stringify(qt))
        setTimeout(() => {
          message.innerHTML = ''
        }, 2000)
       
      },
      dataType: 'json',
      contentType: 'application/json',
    })
  })
  function btable(data){
    console.log(data)
    var tbody=document.getElementById("tbody")
    
     
      ht1=`<tr>
      <td>${data.shipmentID}</td>
      
      <td>${data.creator}</td>
      
      <td>${data.assets}</td>
      <td>${data.transporter}</td>
      <td>${data.status}</td>
      </tr>`
      tbody.innerHTML=ht1

    
     
  }