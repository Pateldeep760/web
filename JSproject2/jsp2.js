const show = () =>{
    document.getElementById('model').style.display="block"
}

const stop = () =>{
    document.getElementById('model').style.display="none"
}

const calculate = () =>{
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    const distance = document.getElementById('distance').value;
    const costPerKm = 10;
    const gstrate = 18;

    const priceQuant = price * quantity;
    const distanceCost = distance * costPerKm;
    let gstAmount = (priceQuant * gstrate) / 100;
    const withGST = priceQuant + gstAmount 
    allvalue = withGST + distanceCost

    document.getElementById('o1').innerHTML ="Price:" + price
    document.getElementById('o2').innerHTML ="Quantity:" + quantity
    document.getElementById('o4').innerHTML = "With GST:" + withGST
    document.getElementById('o3').innerHTML = "shipping cost:" + distanceCost
    
    const totalPrice = allvalue;
    document.getElementById('totalprice').innerText = totalPrice + '₹';

}