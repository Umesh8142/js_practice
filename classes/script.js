console.log("umesh") // to check script connection in console

// datatypes----------------------------------------------------------------------------
// String 
let a ="umesh";
console.log(a);
console.log(typeof a);

// number
let n=10;
console.log(n);
console.log(typeof n);

//Boolean

let isStudent =true;
console.log(isStudent);
console.log(typeof isStudent);


// Null
let address =null // absence of value is null
console.log(typeof address);

//undefined var is declared but not initialised
let phnumber;
console.log(typeof phnumber);

// object -> real life entities also a datatype

let person={name:"umesh",age:23,isEmployed:false,phnnumber:null,address,};

console.log(person)

// Array
let fruits =["apple","banana","orange",10,{hobby:"playing"}];
console.log(fruits[2]);
console.log(fruits[4]);
console.log(fruits[5]); // will be undefined

//date
let currDate=new Date();
console.log(currDate);
console.log(currDate.getDate());

// BigInt
let largenum=54546465465465465464654645465464n;
console.log(typeof largenum)

// ------------------------------------------------------
// Arithematic operations

// Addition subtraction division multiplication
let c=5;
let b=6;
console.log(b+c);
console.log(b-c);
console.log(b/c);
console.log(Math.ceil(10/3)); //->4
console.log(Math.floor(10/3)); //-->3

// multiplication
console.log(b*c);
// Math.random() gives num from 0-1;
console.log(Math.random());

// module /remainer
console.log(10/3) //--> 1
console.log(6/2) //-> 0

// increment by 1

let var1=10;
 // pre increment-> increment and print
console.log(++var1);
//post increment
console.log(var1++); // print and increment
console.log(var1);

//similarly decrement 
--var1;//pre decrement
var1--; //post decrement


// exponentiation
let num1=10;
let num2=10;
console.log(num1**num2);  //10tothe power of 10= 10^10

//unary plus
console.log(5+5);
console.log("5"+"5");
console.log("5"+5);
let num3= 5;
let str=+"5";

 //unary plus(+) : +sign added before a string is used to convert string to integer
 console.log(str+num3);
//  unary negation(-): it is used to change the sign of number
num3 = -num3;
console.log(num3);

// ------------------------------------------------------------
// conditionals eg: if  /if elseif /if else
let x=12;
if(x>10){
    console.log("entered if");
}
else{
    console.log("entered else")
}

let score=95;
if(score>95){
    console.log("you are excellent");
}
else if(score>80){
    console.log("you are good");
}
else{
    console.log("work hard");
}


// ternary operator
let p=2000;
let res =p<1500? "yes p is <1500":"No p is >1500";
console.log(res);

// switch statement
let day =6;
let dayName;
switch(day){
    case 1:
        dayName="mon";
    case 2:
        dayName="Tue";
    case 3:
        dayName="wed";
    case 4:
        dayName="Thur";
    default:
        dayName="incorrect day"
}
console.log(dayName)

// logical and operator &&
let myage=20;
let haslicense =true;

if(myage>=18 && haslicense){
    console.log('u can drive');
}
else{
    console.log("u can't drive")
}
// logical or operator ||
let color ='green';
if(color=='blue' || color=='red' || color=='yellow'){
    console.log("color is either blue or red or yellow")
}
else{
    console.log("color is neither blue nor red nor yellow")
}

// nullish coalescing operator ??

let username = "umes";
let displayName = username??"Anonymous user";
console.log(displayName)

// -----------------------------------------------------------

// functions in js 
function fname(para1,para2,para3,paraN) {
    // code to be executed;
}
function greet(name){
    console.log("hi "+name+", Welcome");
}
greet("umesh");
greet("naveen");

// addition
function sum(a,b){
    return a+b;
}
ans=sum("5",6);
console.log(ans);
console.log(sum(8,6));

// multiplication
function pro(a,b){
    return a*b;
}
console.log(pro("5","6"));

// function scope
function myfun1(){
    let newa="called fun1"; // local variable
    console.log(newa);
}
function myfun2(){
    let newa="called fun2 "; // local variable
    console.log(newa);
}
myfun1();
myfun2();
// console.log(newa); // error newa is local variable cant  access

// function expression
let wish = function(name){
    console.log('hi '+name+" welcome");
}
wish("umesh");
// Arrow function

let power =(a,b) => a**b;
console.log(power(2,3));``