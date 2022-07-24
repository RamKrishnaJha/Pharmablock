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
  let cusData=document.getElementById("register")
  cusData.addEventListener("submit",(e)=>{
    e.preventDefault()
    let cusdata=$("#register").serializeObject()
  console.log(cusdata)
  let cd=[cusdata.name,cusdata.password]
  localStorage.setItem(cusdata.customerAadhar,JSON.stringify(cd))
  })
  let back=document.getElementById("login")
  back.addEventListener("click",()=>{
    location.replace("logincus.html")
  })
  