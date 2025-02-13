
var show_time=document.getElementById('time')
show_time.style.fontSize = "35px"
setInterval(() => {
    var curr_date = new Date()
    date = curr_date.toDateString()
    time = curr_date.toLocaleTimeString()
    show_time.innerText=time + ',\n' + date
    document.getElementById('new_york').innerText= new Date().toLocaleTimeString("en-US",{timeZone: "America/New_York"})+", "+ new Date().toDateString("en-US",{timeZone: "America/New_York"})
    document.getElementById('london').innerText= new Date().toLocaleTimeString("en-GB",{timeZone: "Europe/London"})+", "+ new Date().toDateString("en-US",{timeZone: "America/New_York"})
    document.getElementById('tokyo').innerText= new Date().toLocaleTimeString("jp-JP",{timeZone: "Asia/Tokyo"})+", "+ new Date().toDateString("en-US",{timeZone: "America/New_York"})
    document.getElementById('sydney').innerText= new Date().toLocaleTimeString("en-AU",{timeZone: "Australia/Sydney"})+", "+ new Date().toDateString("en-US",{timeZone: "America/New_York"})
}, 1000);
