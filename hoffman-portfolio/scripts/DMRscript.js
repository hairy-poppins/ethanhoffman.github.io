function calc() {
    let minutes = (parseFloat(document.getElementById("400m").value) + parseFloat(document.getElementById("800m").value) + parseFloat(document.getElementById("1600m").value) + parseFloat(document.getElementById("1200m").value)) * 60;
    let seconds = parseFloat(document.getElementById("400s").value) + parseFloat(document.getElementById("800s").value) + parseFloat(document.getElementById("1600s").value) + parseFloat(document.getElementById("1200s").value);

    let totalSec = minutes + seconds;
    document.getElementById("time").value = Math.floor(totalSec/60) + ":" + (totalSec % 60.0).toFixed(2).padStart(5, "0");
}
