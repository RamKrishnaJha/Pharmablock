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
    location.replace("logindis.html")
  })
  back.addEventListener("click",()=>{
    location.replace("menuformenuf.html")
  })
  const cusdata=document.getElementById("viewDrug")
  cusdata.addEventListener('submit',(e)=>{
      e.preventDefault()
      let cdata=$("#viewDrug").serializeObject()
      let cusData=JSON.stringify(cdata)
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/viewDrugCurrentState',
        data: cusData,
        success: function (result) {
            console.log(result)
            let ar=result.drug
            display(ar)
          
          
        },
        error: function () {
          let message = document.getElementById('message')
          message.innerHTML = `<div class="alert alert-danger" role="alert">
            Some error occured
        </div>`
          setTimeout(() => {
            message.innerHTML = ''
          }, 2000)
        },
        dataType: 'json',
        contentType: 'application/json',
      })
  })
  function display(data){
      var tbody=document.getElementById("tbody")
      ht1=`<tr>
      <td>Name</td>
      <td>${data.name}</td>
      </tr>
      <tr>
      <td>Manufacturer</td>
      <td>${data.manufacturer}</td>
      </tr>
      <tr>
      <td>Manufacturing Date</td>
      <td>${data.manufacturingDate}</td>
      </tr>
      <tr>
      <td>Expiry Date</td>
      <td>${data.expiryDate}</td>
      </tr>
      <tr>
      <td>Current Owner</td>
      <td>${data.owner}</td>
      </tr>`
      tbody.innerHTML=ht1
  }