function calc() {
    let minutes = (parseInt(document.getElementById("400m").value) + parseInt(document.getElementById("800m").value) + parseInt(document.getElementById("1600m").value) + parseInt(document.getElementById("1200m").value)) * 60;
    let seconds = parseInt(document.getElementById("400s").value) + parseInt(document.getElementById("800s").value) + parseInt(document.getElementById("1600s").value) + parseInt(document.getElementById("1200s").value);

    let totalSec = minutes + seconds;
    document.getElementById("time").value = parseInt(totalSec/60) + ":" + (totalSec % 60);
}
