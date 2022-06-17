function start(){
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 

    let AMPM = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        AMPM = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + AMPM;
    document.getElementById("RelojDigital").innerText = time;
    document.getElementById("RelojDigital").textContent = time;
    
    setTimeout(start, 1000);
    
}

start();