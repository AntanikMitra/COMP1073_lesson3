"use strict";

var username = "Tom";
var age = 30;
var isHungry = true;

var usernames = ["Mike", "Rich", "Anju", "Margot"];

console.log("before the push " + usernames);

//adding an element at the bottom of the array
usernames.push("Tom");
console.log("after the push " + usernames);

// removing an element from the bottom of the array
usernames.pop();
console.log("After the pop " + usernames);
// var usernames = new array();

/*
usernames[0] = "Mike";
console.log(username[0]);

usernames[1] = "Rich";
usernames[2] = "Anju";
usernames[3] = 400;

usernames[0] = "Tom";

console.log(usernames[0]);

console.log(usernames); */