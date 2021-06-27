function clock(){
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    let ampm = document.querySelector('.ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = hours >= 12 ? 'AM' : 'PM';

    if(h>12){
        h = h-12;
        let am = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

}

let interval = setInterval(clock,1000);