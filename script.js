  let getTime = document.createElement('div')
getTime.className='clock'
  document.body.append(getTime)
setInterval(() => {
  let hours = new Date().getHours()
  let min = new Date().getMinutes()
  let sec = new Date().getSeconds()
  let time = `${hours}:${min}:${sec}`
  getTime.innerHTML = `<b>${time}</b>`
  
}, 1000)
