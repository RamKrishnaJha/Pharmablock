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
    
    localStorage.removeItem("curTrans")
    location.replace("logintrans.html")
    
  })
  let back=document.getElementById("back")
  back.addEventListener("click",()=>{
    location.replace("menutrans.html")
  })
  const drugdata = document.getElementById('shipment')
  drugdata.addEventListener('submit', (e) => {
    e.preventDefault()
    let drugData = JSON.stringify($('#shipment').serializeObject())
    ddata=JSON.parse(drugData)
    ddata.organisationRole="Transporter"
    drugData=JSON.stringify(ddata)
    localStorage.removeItem("SO"+ddata.transporterCRN)

    console.log(drugData)
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/updateShipment',
      data: drugData,
      success: function (result) {
        
        
        let ar=result.shipment
        let thead=document.getElementById("thead")
        thead.innerHTML=`<tr>
        <td>Name</td>
        
        <td>Manufacturer</td>
        
        <td>Owner</td>
        </tr>`
        btable(ar)
        let qt=JSON.parse(localStorage.getItem(ddata.buyerCRN+"stat"))
      for(i=0;i<qt.length;i++){
        if(JSON.parse(qt[i])!==null){
        let q=JSON.parse(qt[i])
        if(q[0]===ddata.drugName)
          q[2]="Delivered"
          qt[i]=JSON.stringify(q)
        }
      }
      localStorage.setItem(ddata.buyerCRN+"stat",JSON.stringify(qt))

        
        
        
        
      },
      error: function (result) {
        console.log(result)
        console.log(result.responseJSON.shipment)
        let ar=result.responseJSON.shipment
        let thead=document.getElementById("thead")
        thead.innerHTML=`<tr>
        <td>Name</td>
        
        <td>Manufacturer</td>
        
        <td>Owner</td>
        </tr>`
        btable(ar)
        let qt=JSON.parse(localStorage.getItem(ddata.buyerCRN+"stat"))
      for(i=0;i<qt.length;i++){
        let q=JSON.parse(qt[i])
        if(q[0]===ddata.drugName)
          q[2]="Delivered"
          qt[i]=JSON.stringify(q)
      }
      localStorage.setItem(ddata.buyerCRN+"stat",JSON.stringify(qt))
      },
      dataType: 'json',
      contentType: 'application/json',
    })
  })
  function btable(d){
    console.log(d)
    var tbody=document.getElementById("tbody")
    for(i=0;i<d.length;i++){
      let data=d[i]
      ht1=`<tr>
      <td>${data.name}</td>
      
      <td>${data.manufacturer}</td>
      
      <td>${data.owner}</td>
      </tr>`
      tbody.innerHTML+=ht1

    }
     
  }