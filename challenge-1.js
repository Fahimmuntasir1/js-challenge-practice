//একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

function multipleOfNumber(num) {
  for (i = 1; i <= 10; i++) {
    var result = i * num;
    var namota = num + '*' + i + '=' + result;
    console.log(namota)
  }
}

multipleOfNumber(13);

// একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function letterCase(sentence) {
    console.log(sentence.toLowerCase());
}
letterCase('FAHIM');

// fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

function fullName(firstName, lastName) {
  var myName = firstName + " " + lastName;
  return myName;
}
var myFirstName = "Fahim";
var myLastName = "Muntasir";
var name = fullName(myFirstName, myLastName);
console.log(name);

// একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

function square(num) {
  var multipication = num * num;
  return multipication;
}
var multipleDubble = square(25);
console.log(multipleDubble);

// pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :

// const pizza = {
//   toppings: ["cheese", "sauce", "pepperoni"],

//   crust: "deep dish",

//   serves: 2,
// };
// console.log(pizza.toppings);
