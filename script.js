const countdown = () =>{
    const endDate = new Date('August 27, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = endDate - now;

    //time is a construct of your mind
    const sec = 1000;
    const min = sec *60;
    const hr = min *60;
    const day = hr *24;
    
    //calculations
    const daysTo = Math.floor(gap / day)
    const hrsTo = Math.floor((gap % day)/hr)
    const minTo = Math.floor((gap % hr)/min)
    const secTo = Math.floor((gap % min)/sec)
    console.log(daysTo)
    document.querySelector(".day").innerText = daysTo;
    document.querySelector(".hrs").innerText = hrsTo;
    document.querySelector(".min").innerText = minTo;
    document.querySelector(".sec").innerText = secTo;


}


setInterval(countdown,1000)


