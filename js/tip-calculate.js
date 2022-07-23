function calcTip(){
    const subtotal = document.getElementById("subtotal");
    const tip = document.getElementById("tip");
    const tipVal =  subtotal.value * (tip.value/100);
    console.log(tipVal);
    document.getElementById("total").innerHTML = tipVal;
}