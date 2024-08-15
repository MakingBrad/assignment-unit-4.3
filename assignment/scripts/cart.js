console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
// - Create a global variable named `basket` and set it to an empty array.
let basket =[]
// - Create a function called `addItem`. It should:
function addItem (item){
basket.push(item);
return true;
}
 addItem("carrot");
 addItem("Celery");
 addItem("apple");
 console.log(basket);

//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added

// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItems(){
    for (let i=0; i< basket.length; i++) {
        console.log(basket [i])
        
    }
}  
listItems();
// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
//   - do not use `basket = []` to reset the array
function empty (){
   //basket=[] 
    for (let i = 0; i <= basket.length +1; i++) {
       basket.shift ()
       console.log(basket)
    }
}

empty(basket)
console.log(basket)
// __Using functions in other functions!__

// 1. Add a global `const` named `maxItems` and set it to 5.
const maxItems=5;
// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
function isFull(){
    if (basket.length<maxItems){
        return False
    } else {
        return True
    }
}
// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
