alert("javascripte hoş geldiniz!");

var a=10;
alert(a);
console.log(23213);
console.log(["Ahmet,Mehmet"]);
console.log(typeof a);
console.warn("bu bir uyarıdır");
console.error("bu bir hatadır");

var a=20;
var b=10;
var c=40;
console.log(a,b,c);

//primitive
var a=10;
var b=3.14;
console.log(typeof a);
console.log(typeof b);
var name="neslin";
console.log(name);
console.log(typeof name);
var numbers=["1,2,3,4,5"];
console.log(numbers);
console.log(typeof numbers);
console.log(numbers[0]);
var person = {
    name = "neslin",
    age  = 24
  
}
console.log(person);
console.log(typeof person);


var date=new Date();

console.log(date);
console.log(typeof date);

var merhaba = function(){
    console.log("merhaba");

}
console.log(merhaba);
console.log(typeof merhaba);


var a=10;
var b=a;
console.log(a,b);
a=20;
console.log(a,b);

var a=[1,2,3];
var b=a;
a.push(4);
console.log(b);


console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

var array1 = [1, 3, 2];

console.log(Math.max(...array1));
// expected output: 3




