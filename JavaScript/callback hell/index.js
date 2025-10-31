//FOOD ORDERING SITE:
const OrderDetails={
    custromer_name:"bulbul",
    customer_order:["Dosa","Gulab Jamun","Samosa"],
    cost:657,
    customer:"Nalanda",
    resturant:"Pawapuri"
}

function placeOreder(OrderDetails,callback){
    console.log(`Payment of ${OrderDetails.cost} is in progress...`);
    setTimeout(() => {
        console.log("Payment is received and order is get placed!");
        OrderDetails.status=true;
        callback(OrderDetails);
    }, 3000);
}

function PreparingOrder(OrderDetails,callback){
    console.log(`Preparation for your order of ${OrderDetails.customer_order} has started!`);
    setTimeout(() => {
        console.log("Your order is now Prepared!");
        OrderDetails.token=123;
        callback(OrderDetails);
    }, 3000);
}

function PickupOrder(OrderDetails){
    console.log(`Delivery boy is on his way to pickup form ${OrderDetails.resturant}`);
    setTimeout(() => {
        console.log("He has picked up the order");
    }, 3000);
}

placeOreder(OrderDetails,(OrderDetails)=>{
    PreparingOrder(OrderDetails,(OrderDetails)=>{
        PickupOrder(OrderDetails)
    });
});