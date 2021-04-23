const resName = document.getElementById('resName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const phNo = document.getElementById('phNo');
const email = document.getElementById('email');
const GSTno = document.getElementById('GSTno');
const dateTime = document.getElementById('dateTime');
const menu_name = document.getElementById('menu_name');
const rate = document.getElementById('rate');
const qty = document.getElementById('qty');
const amnt = document.getElementById('amnt');
const subTotal =document.getElementById('subTotal');
const dis= document.getElementById('dis');
const discount = document.getElementById('discount');
const grandTotal = document.getElementById('grandTotal'); 

fetch('https://run.mocky.io/v3/16375822-6d22-4d61-b131-6672e9e13884').then((data)=>{
    return data.json();
}).then((actual)=>{
    console.log(actual);
    resName.innerText=actual.restaurantsDetails.companyName;
    address.innerHTML=actual.restaurantsDetails.address;
    city.innerHTML=actual.restaurantsDetails.city;
    state.innerHTML=actual.restaurantsDetails.state;
    phNo.innerHTML=actual.restaurantsDetails.phone;
    email.innerHTML=actual.restaurantsDetails.email;
    GSTno.innerHTML=actual.restaurantsDetails.gstNo;
    dateTime.innerHTML=actual.orderBookDetails.timestamp;
    menu_name.innerHTML=actual.orderBookDetails.orderItemsList[0].menu_name;
    rate.innerHTML=actual.orderBookDetails.orderItemsList[0].rate;
    qty.innerHTML=actual.orderBookDetails.orderItemsList[0].menu_quantity;
    amnt.innerHTML=actual.orderBookDetails.orderItemsList[0].menu_amount;
    subTotal.innerHTML=actual.orderBookDetails.sub_total;
    var d=actual.orderBookDetails.discount_amount;
    d=d.toFixed(2);
    dis.innerHTML=actual.orderBookDetails.discount;
    discount.innerHTML=d;
    grandTotal.innerHTML=actual.orderBookDetails.grand_total;   
}).catch((error)=>{
    console.log(error);
})
