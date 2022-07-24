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
let reg=document.getElementById("register")
reg.addEventListener("click",()=>{
    location.replace("Create Transporter.html")
})
const logdata = document.getElementById('login')
logdata.addEventListener("submit",(e)=>{
    e.preventDefault()
    ldata=$("#login").serializeObject()
    console.log(ldata)
    let pa=localStorage.getItem(ldata.userName)
    console.log(pa)
    if(ldata.password===pa){
        localStorage.setItem("curTrans",ldata.userName)
        location.replace("menutrans.html")
    }

})
