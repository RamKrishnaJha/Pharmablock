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

const logdata = document.getElementById('login')
logdata.addEventListener("submit",(e)=>{
    e.preventDefault()
    ldata=$("#login").serializeObject()
    console.log(ldata)
    
    if(ldata.password==="government@123"){
        
        location.replace("Government.html")
    }
    else{
      let mes=document.getElementById("message")
      mes.innerText="Wrong Password"
    }

})
