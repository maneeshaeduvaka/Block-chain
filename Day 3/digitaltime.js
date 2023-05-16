function Clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours > 12) {
      hours = hours-12;
      n = "pm";
    }
    if (hours==0) {
      hours=12;
    }
    let time = hours + ":" +minutes + ":" + seconds + " " + n;
    console.log(time);
    let t=setTimeout(function(){Clock()}, 3000);
}
Clock();
