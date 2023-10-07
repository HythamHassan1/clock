function timeclock(){
    var x = new Date();
    var clock = x.toLocaleTimeString() ;

    var time = document.getElementById("time");
    time.innerHTML = clock;

}

setInterval(timeclock, 1000)

