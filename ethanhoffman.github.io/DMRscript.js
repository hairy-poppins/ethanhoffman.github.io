function calc() {
    let twelve = document.getElementById("1200").value;
    let four = document.getElementById("400").value;
    let eight = document.getElementById("800").value;
    let sixteen = document.getElementById("1600").value;

    document.getElementById("time").value = (parseInt(twelve) + parseInt(four) + parseInt(eight) + parseInt(sixteen));
}
