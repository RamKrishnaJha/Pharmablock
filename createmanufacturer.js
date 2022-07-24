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
  let back=document.getElementById("login")
  back.addEventListener("click",()=>{
    location.replace("Loginman.html")
  })
  const drugdata = document.getElementById('createmanufacturer')
  drugdata.addEventListener('submit', (e) => {
    e.preventDefault()
    let drugData = JSON.stringify($('#createmanufacturer').serializeObject())
    console.log(drugData)
    ddata=JSON.parse(drugData)
    if(ddata.password===ddata.password2){
    ddata.organisationRole="Manufacturer"
    ddata.organisationRole1="Manufacturer"
    localStorage.setItem(ddata.companyCRN,ddata.password)
    delete ddata.password
    delete ddata.password2
    drugData=JSON.stringify(ddata)
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/registerCompany',
      data: drugData,
      success: function (result) {
        let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-danger" role="alert">
         Company Registered Successfully
      </div>`
      console.log(result)
      display(result.company)
        setTimeout(() => {
          message.innerHTML = ''
        }, 2000)
      },
      error: function () {
        let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-danger" role="alert">
        Company Registered Successfully
      </div>`
        setTimeout(() => {
          message.innerHTML = ''
        }, 2000)
      },
      dataType: 'json',
      contentType: 'application/json',
    })
  }
  else{
    let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-danger" role="alert">
        Passwords dont match
      </div>`
        setTimeout(() => {
          message.innerHTML = ''
        }, 2000)
  }
  })
  function display(data){
    var tbody=document.getElementById("tbody")
    ht1=`<tr>
    <td>Company Id</td>
    <td>${data.companyID}</td>
    </tr>
    <tr>
    <td>Name</td>
    <td>${data.name}</td>
    </tr>
    <tr>
    <td>Location</td>
    <td>${data.location}</td>
    </tr>
    
    <tr>
    <td>Role</td>
    <td>${data.organisationRole}</td>
    </tr>`
    tbody.innerHTML=ht1
  }