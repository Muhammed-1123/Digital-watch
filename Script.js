const hrs = document.querySelector(".hours");
const mins = document.querySelector(".minutes");
const secs = document.querySelector(".seconds");
const currDate = document.querySelector(".date");
const amPm = document.querySelector(".amPm");
setInterval(() => {
    let time = new Date();
    let hours = time.getHours() % 12 || 12;
    amPm.innerHTML = time.getHours() >= 12 ? 'PM' : 'AM';
    hrs.innerHTML = (hours <10? '0' : '') + hours;
    mins.innerHTML = (time.getMinutes()<10? '0' : '') + time.getMinutes();
    secs.innerHTML = (time.getSeconds()<10? '0' : '') + time.getSeconds();
} , 0);

let date = new Date();
currDate.innerHTML = date.toLocaleDateString( "en-US", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' } );


