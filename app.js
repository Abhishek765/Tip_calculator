function calculateTip() {

    var billAmount = document.getElementById("billAmount").value;
    var quality = document.getElementById("selector").value;
    var noOfPeople = document.getElementById("noOfPeople").value;

    if (billAmount === "" || quality == 0) {
        alert("Please enter the values");
        return;
    }
    if (noOfPeople === "" || noOfPeople <= 1) {
        noOfPeople = 1;
        document.getElementById("each").style.display = "none";

    } else {
        document.getElementById("each").style.display = "block";
    }

    //calculating the tip
    console.log("billAmount: " + billAmount);
    console.log("quality: " + quality);
    console.log("No of people: " + noOfPeople);

    var total = (billAmount * quality) / noOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    console.log("value of total: " + total);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}
//Hidding the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("buttonCalculate").onclick = function() {
    calculateTip();
};