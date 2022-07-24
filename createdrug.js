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
    location.replace("menuformenuf.html")
  })
  let logout=document.getElementById("logout")
  logout.addEventListener("click",()=>{
    location.replace("Loginman.html")
  })
  const drugdata = document.getElementById('createdrug')
  function SaveDataToLocalStorage(data)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('drugs')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value
    // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('drugs', JSON.stringify(a));
}
  drugdata.addEventListener('submit', (e) => {
    e.preventDefault()
    let drugData = JSON.stringify($('#createdrug').serializeObject())
    sn=JSON.parse(JSON.stringify($('#serialNo').serializeObject()))
    se=sn.serialNo
    SaveDataToLocalStorage(se)  
  localStorage.setItem(se,drugData)
  let message=document.getElementById("message")
message.innerHTML=`<div class="alert alert-danger" role="alert">
Drug Sent for Approval
</div>`
})


  /*drugdata.addEventListener('submit', (e) => {
    e.preventDefault()
    let drugData = JSON.stringify($('#createdrug').serializeObject())
    console.log(drugData)
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/addDrug',
      data: drugData,
      success: function () {
        let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-danger" role="alert">
          Drug Added Successfully
      </div>`
        setTimeout(() => {
          message.innerHTML = ''
        }, 2000)
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
  })*/