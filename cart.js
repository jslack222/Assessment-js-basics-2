///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return (cartTotal * tax) + (cartTotal - couponValue)
}

console.log(calcFinalPrice(10, 1, .10))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/
const example = [
    {
        name: 'Example', 
        paymentType: 'Money',
        dineInorTakeOut: 'food',
        phoneNumber: '1-800-Example'
    }
]


/*
    TEXT ANSWER HERE
// I chose to have there name so the restraunt could call there name if the customer is waiting in the foyer area. 
// for increased efficiency and convenience I added a phone numbrer so they can call the customer when there order is ready. 
// Payment type so that we could be ready to swipe or deal with cash, plus having card functionality allows them to pay over the phone so the customer can just grab there order if they get takeout. 
// I chose to ask dine in or take out so they could have the order/table ready for the customer when they arrive.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const model = [
  {
    name: "Johnny Swim",
    payementType: "Credit",
    dineInorTakeOut: "Dine in",
    phoneNumber: "512-337-4849",
  },
];