/*let message = " in global";
console.log("global: message =" + message);

let a = function (){
    let message = "inside a";
    console.log("a: message = " + message);
   b();
   //The line code below will display same message 
   //in a because its in the function a, while the one 
   //outside this function will display the message in
   // global which is the parent
}
function b (){
    console.log("b: message =" + message);
}
a();*/
// let x;
// console.log(x);
/*if (x== undefined){
    console.log("x is undefined")
}
x = 5;
if (x == undefined){
    console.log("x is undefined");
}
else{
    console.log("x has been set");
}*/

//string concatination
// let string = "Hello";
// string += " World"; this is a short expression of the string below,this will save a new entity into the string 
//  string = string + " World";
// console.log(string + "!"); this will concatinate new data with the string
 
/* math operators
console.log((5 + 4) / 3);
console.log(undefined / 5);
function test1 (a){
    console.log (a / 5);
}
test1()
//Equality 
let x = 4, y = 4;
if (x == y){
    console.log("x=4 is equal to y=4");
}
 x = "4";
 if (x==y){
 console.log("x='4' is equal to y=4");
 }
//  strict equality
if (x === y){
    console.log("Strict: x='4' is equal to y=4")
}else{
    console.log("Strict: x='4' is Not equal to y=4");
};
// if statement (all false)
if (false || null || undefined || "" || 0 || NaN){
console.log("This line won't ever execute")
}else{
    console.log ("All false");
}
// if statement (all true)
if (true && "hello" && 1 && -1 && "false"){
    console.log("All true");
}
//For loop
let sum = 0;
for (let i = 0; i < 10; i++){
    console.log(i);
    sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);
// Default Values
function orderChickenWith(sideDish){
    console.log("chicken with " + sideDish)
}
orderChickenWith("noodles");
orderChickenWith();
// in a case when we want to handle the default case where there isnt 
// a value in the sideDish, we introduce if statement as follows
function orderChickenWith(sideDish){
    if (sideDish === undefined ){
        sideDish = "whatever";
    }
    console.log("Chicken with " + sideDish)
}
orderChickenWith("noodles")
orderChickenWith();
// or we can get the value coerced by
function orderChickenWith(sideDish){
    sideDish = sideDish || "whatever";
    console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();
// Object creation in js
let company = new Object();
company.name = "Facebook";
company.lastName = "sanya";
company.ceo = new Object();
company.ceo.firstName = "Mark"
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName + company.lastName)
console.log(company["name"]);//this can be use to also display the object

let stockPropName = "stock of company";
company[stockPropName] = 110;
console.log("Stock price is: " + company[stockPropName]);

// creating objects better way: object literal

let Facebook = {
    name: "Facebook", 
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    "stock of company": 110
};
console.log(Facebook);

// Functions in JavaScript
// Functions are first class data type
// functions are objects
function multiply(x, y){
    return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function factory
// The next line of code produce the function of what should be excuted(multiplier)
function makeMultiplier(multiplier) {
    let myFunc = function (x){
        return multiplier * x;
    };
    // after making a function, it return it as value(myFunc)
    return myFunc;
}
// involking/creating the function and giving it value(multiplyby3 and the 3)
let multiplyBy3 =  makeMultiplier(3);
console.log(multiplyBy3(10));
let doubleAll = makeMultiplier(2);
console.log(doubleAll(100))

// Passing functions as arguments
function doOperationOn(x, operation) {
    return operation(x);
}
let result = doOperationOn(5, doubleAll);
console.log(result);
result = doOperationOn(4, multiplyBy3);
console.log(result);

// Copying data into object by value
let a = 7;
let b = a;
console.log("a: " + a);
console.log("b: " + b);
// copying a data into object b
a = 9;
console.log("a: " + a);
console.log("b: " + b);

// Copying data into object by reference
let a = {x: 7}
let b = a;
console.log( a);
console.log(b);
b.x = 5;
console.log("after b.x update");
console.log(a);
console.log(b);
// Pass by reference vs by value
function changePrimitive(primValue) {
    console.log ("in changePrimtive...");
    console.log("before");
    console.log(primValue);

    primValue =5;
    console.log("after:")
    console.log(primValue);
  
}
let value = 7;
changePrimitive(value);//primValue = value
console.log("after changePrimitive, orig value");
console.log(value);

// Passing object by reference
function changeObject(objValue) {
    console.log("in changeObject..");
    console.log("before:");
    console.log(objValue);

    objValue.x = 5;
    console.log("after");
    console.log(objValue);
}
value = {x: 7};
changeObject(value);//objValue = value
console.log("after changeObject, orig value:");
console.log(value);


// Function Constructors
function Circle (radius) {
    // body
    this.radius = radius;
  
}
Circle.prototype.getArea = 
    function () {
        // body..
        return Math.PI *+ Math.pow(this.radius, 2);
    }

let myCircle = new Circle(10);// new object
console.log(myCircle.getArea());

let myOtherCircle = new Circle(20);
console.log(myOtherCircle);

// Object literal and "this"
let literalCircle = { // this open curly brace define new object
    radius: 10,
    // using "this" is use to replace literalCircle 
    getArea: function () {
        let self = this; //doing this so the 'this in our code will refer to my object not the global object
        console.log(this);
        // declairing another function inside our function
        let increaseRadius = function () {
            self.radius = 20;
        };
    increaseRadius();
    console.log(this.radius);
        return Math.PI * Math.pow(this.radius, 2);
        
    }
};
console.log(literalCircle.getArea());

// ARRAYS
let array = new Array();
array[0] = "Moses";
array[1] = 2;
array [2] = function (name) {
    console.log("Hello " + name);
};
array[3] = {course: "HTML, CSS & JS " };
console.log(array);
array[2]();
array[2]("Sanya");
array[2](array[0]);
console.log(array[3].course);

// Short hand array creation
let names = ["Moses","Sanya","Ade" ];
// console.log(names);
for (let i = 0; i < names.length; i++){
    console.log("Hello " + names[i]);
}
let names2 = ["Moses","Sanya","Ade" ];
let myObj = {
    name: "Sanya",
    course: "Frontend",
    platform: "Coursera"
};
for (let prop in myObj) {
    console.log(prop + ": " + myObj[prop]);
}
for (let name in names2) {
    console.log("Hello " + names2[name]);
}
(function (window) { 
let mosesGreeter = {};
mosesGreeter.name = "Moses";
let greeting = "Hello ";
mosesGreeter.sayHello = function () {
    console.log(greeting+  mosesGreeter.name);

}
window.mosesGreeter = mosesGreeter;
})(window);

console.log(document.getElementById("title"));
function sayHello (event) {
    this.textContent = "Said it!";
    // console.log( this is use to fetch the input
        // document.getElementById("name").value
    // );
    let name =
    document.getElementById("name").value;
    let message = "<h2>Hello " + name + "!</h2>";

    // the next line of code is use to insert the message into html
    document
    .getElementById("content")
    .textContent = message;

    // in other to tell the browser to read the text as html document, we use the line of code below
    document
    .getElementById("content")
    .innerHTML = message;

    // Another way of fetching a data value instead of getElementById
    if (name === "student"){
        let title =
        document
        .querySelector("#title")
        .textContent;
        // what to dispaly below
        title+= " & Lovin' it!";
        // copying what to display into the title storage
        document
        // .querySelector("#title") next line of code will run samething as this 
        .querySelector("h1")
        .textContent = title;
    }
}

// EVENT HANDLING
document.querySelector("button")
    .addEventListener("click", sayHello);

    // Another way of executing the above code
    // document.querySelector("button")
    // .onclick = sayHello;

    // adding a live circle event which loads before anything on the page loads
document.addEventListener("DOMContentLoaded",
    function (event) {
        
function sayHello (event) {
    console.log(event);
    this.textContent = "Said it!";
    let name =
    document.getElementById("name").value;
    let message = "<h2>Welcome " + name + " we missed you!</h2>";
    document
    .getElementById("content")
    .textContent = message;
    document
    .getElementById("content")
    .innerHTML = message;
    if (name === "student"){
        let title =
        document
        .querySelector("#title")
        .textContent;
        title+= " & Lovin' it!";
        document
        .querySelector("h1")
        .textContent = title;
    }
}
    document.querySelector("button")
    .addEventListener("click", sayHello);
// Mouse move event handler
    document.querySelector("body")
    .addEventListener("mousemove",
    function (event) {
        if (event.shiftKey === true){
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
        }
     
    }
    );
}
);*/
document.addEventListener("DOMContentLoaded",
function(event){

    // Unobstrusive event binding
    document.querySelector("button")
    .addEventListener("click", function(){

        // call server to get name
        $ajaxUtils
        .sendGetRequest("/data/name.json",
        function (res){
            let message =
            res.firstName + " " + res.lastName
            if (res.likesChineseFood) {
                message += " likes chinese food";
            }
            else {
                message += " doesn't like Chinese food";
            }
            message += " and uses ";
            message += res.numberOfDisplays + 1;
            message += " displays for coding.";
            document.querySelector("#content")
            .innerHTML = "<h2>" + message + "</h2>";
        });
      
    });
});












