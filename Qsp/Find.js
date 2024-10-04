/* 03/10/2024 
  Find() : used find the elements in array 
           It can return only values not array .
           It can return only one value which is greater than condition & loop terminated . */

           // In realtime use it can be used when we can add items in cart 

let arr = [10,20,30,40,50]
let findEle = arr.find((val) => {
    return val > 20
})
console.log(findEle); // 30

console.log("------------------------------------------");

let data = 

[{"id":1,"first_name":"Ethelred","last_name":"Happert","email":"ehappert0@senate.gov","gender":"Male"},
    {"id":2,"first_name":"Sherill","last_name":"Forryan","email":"sforryan1@house.gov","gender":"Female"},
    {"id":3,"first_name":"Taryn","last_name":"Jiggins","email":"tjiggins2@ezinearticles.com","gender":"Female"},
    {"id":4,"first_name":"Major","last_name":"Blaydes","email":"mblaydes3@washingtonpost.com","gender":"Male"},
    {"id":5,"first_name":"Hermy","last_name":"Marchiso","email":"hmarchiso4@unesco.org","gender":"Male"},
    {"id":6,"first_name":"Giffer","last_name":"Vakhonin","email":"gvakhonin5@reuters.com","gender":"Female"},
    {"id":7,"first_name":"Fred","last_name":"Samber","email":"fsamber6@skyrock.com","gender":"Female"},
    {"id":8,"first_name":"Sandy","last_name":"Udie","email":"sudie7@cafepress.com","gender":"Male"},
    {"id":9,"first_name":"Daphne","last_name":"Torr","email":"dtorr8@techcrunch.com","gender":"Female"},
    {"id":10,"first_name":"Alexis","last_name":"Endicott","email":"aendicott9@addthis.com","gender":"Female"}]

let cartItems = []    // empty array declared  
let addToCart = data.find((val) => {
    return val.id == '5'
})

console.log(addToCart); //cart item selected
 cartItems.push(addToCart)
  
let addToCart1 = data.find((val) => {
    return val.id == '6'
})

 console.log(addToCart1); //cart item selected
 cartItems.push(addToCart1)

console.log(cartItems); // object added in cart

 


