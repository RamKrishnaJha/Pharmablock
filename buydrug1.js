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
  let back=document.getElementById("back")
  back.addEventListener("click",()=>{
    location.replace("menucus.html")
  })
  let data=document.getElementById("buydrug")
  data.addEventListener("submit",(e)=>{
    e.preventDefault()
    let Data = $('#buydrug').serializeObject()
    console.log(Data)
    localStorage.setItem("PO"+Data.retailerCRN,JSON.stringify(Data))
    let ar=[]
    if(localStorage.getItem(Data.customerAadhar+"stat")!==null){
      ar=JSON.parse(localStorage.getItem(Data.customerAadhar+"stat"))
    }
    ar.push(JSON.stringify([Data.drugName,"Pending"]))
    localStorage.setItem(Data.customerAadhar+"stat",JSON.stringify(ar))
  })
  