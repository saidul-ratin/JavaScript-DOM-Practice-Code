/*  JavaScript দিয়ে ওয়েবসাইটকে ইন্টারেক্টিভ ও ডাইনামিক করার সংক্ষিপ্ত নোট

DOM ম্যানিপুলেশন:

HTML এলিমেন্ট অ্যাক্সেস ও পরিবর্তন + ইউজার দেখবে নতুন কন্টেন্ট রিয়েল-টাইমে।

উদাহরণ: document.getElementById("demo").innerHTML = "Hello";


ইভেন্ট হ্যান্ডলিং:

ইউজারের ক্লিক, টাইপ, মুভ ইত্যাদিতে রেসপন্স + বাটনে ক্লিক করলে পপআপ দেখাবে।

উদাহরণ: button.addEventListener("click", function() {...});


স্টাইল পরিবর্তন:

CSS ডাইনামিকভাবে চেঞ্জ

উদাহরণ: element.style.backgroundColor = "red";


ফর্ম ভ্যালিডেশন:

সাবমিশনের আগে ইউজারের ইনপুট চেক + ভুল ইনপুট দিলে সাবমিশন ব্লক হবে।

উদাহরণ: if(input == "") alert("Fill it!");



ডাইনামিক ডেটা লোড:

AJAX / Fetch API দিয়ে সার্ভার থেকে ডেটা আনা + লাইভ নিউজ ফিড বা চ্যাট অ্যাপের মতো ডাইনামিক কন্টেন্ট।
 
উদাহরণ: fetch(url).then(...);


ডাইনামিক এলিমেন্ট:

নতুন এলিমেন্ট তৈরি বা ডিলিট + ইউজারের অ্যাকশন অনুযায়ী নতুন কন্টেন্ট দেখানো যাবে।

উদাহরণ: document.createElement("p");


স্টোরেজ / স্টেট:

localStorage বা sessionStorage এ ডেটা সংরক্ষণ + ওয়েবসাইট ইউজারের পূর্বের কাজ মনে রাখে।

উদাহরণ: localStorage.setItem("name","Alice");  */

/*  JS = DOM + Events + Style + Validation + AJAX + Dynamic Elements + Storage
→ ওয়েবসাইট ইন্টারেক্টিভ ও ডাইনামিক হয়  */



/*  মনে রাখার ট্রিক: “DEVS ADS”
D = DOM
E = Events
V = Validation
S = Style
A = AJAX
D = Dynamic Elements
S = Storage  */




/*  1. ইন্টারেক্টিভ ওয়েবসাইট (Web Interactivity)

ড্রপডাউন মেনু

পপআপ / মডাল

কার্ট সিস্টেম


2. ফর্ম ভ্যালিডেশন (Form Validation)

ইউজারের ইনপুট চেক করা

ভুল ইনপুট এলে সাবমিশন ব্লক


3. রিয়েল টাইম সার্চ (Real-time Search Results)

টাইপ অনুযায়ী ফলাফল দেখানো

পেজ রিলোড ছাড়া ডাইনামিক আপডেট


4. মোবাইল অ্যাপ ডেভেলপমেন্ট (React Native)

iOS / Android অ্যাপ তৈরি করা

ক্রস-প্ল্যাটফর্ম ডেভেলপমেন্ট


5. ডেস্কটপ অ্যাপ ডেভেলপমেন্ট (Electron.js)

Windows / Mac / Linux অ্যাপ তৈরি করা

ওয়েব টেকনোলজি ব্যবহার করে ডেস্কটপ অ্যাপ ডেভেলপমেন্ট


6. গেম ডেভেলপমেন্ট (Game Development)

2D / 3D গেম তৈরি করা

টুলস / লাইব্রেরি: Phaser.js, Three.js


7. সার্ভার-সাইড প্রোগ্রামিং (Node.js)

সার্ভার তৈরি করা

API ডেটা হ্যান্ডলিং

ডাটাবেসের সাথে কাজ করা (CRUD operations)


8. ডাটাবেস ইন্টিগ্রেশন (Database Integration)

ডেটা সংরক্ষণ, পড়া, আপডেট, মুছে ফেলা

ব্যবহার: MySQL, MongoDB ইত্যাদি


9. API ডেটা লোড & প্রদর্শন (API Data Fetching & Display)

সার্ভার বা থার্ড-পার্টি API থেকে ডেটা আনা

ওয়েবসাইটে ডাইনামিকভাবে দেখানো

উদাহরণ: লাইভ নিউজ, প্রোডাক্ট লিস্ট, চ্যাট আপডেট


10. রিয়েল-টাইম অ্যাপ (Real-time Apps)

চ্যাট অ্যাপ তৈরি করা

ভিডিও কলিং অ্যাপ তৈরি করা

রিয়েল-টাইম ডেটা এক্সচেঞ্জ এবং ইউজার ইন্টারঅ্যাকশন  */



/*  [Web Interactivity] 
      ├── ড্রপডাউন মেনু
      ├── পপআপ / মডাল
      └── কার্ট সিস্টেম/Cart System → প্রোডাক্ট যোগ/রিমুভ, DOM update


[Form Validation]
      ├── ইউজারের ইনপুট চেক
      └── ভুল ইনপুট হলে সাবমিশন ব্লক


[Real-time Search]
      ├── টাইপ অনুযায়ী ফলাফল দেখানো/টাইপ ইভেন্টে ডেটা filter
      └── পেজ রিলোড ছাড়া ডাইনামিক আপডেট/DOM update, পেজ reload দরকার নেই


[Mobile Apps (React Native)]
      ├── iOS / Android অ্যাপ
      └── ক্রস-প্ল্যাটফর্ম ডেভেলপমেন্ট/Single codebase → Cross-platform


[Desktop Apps (Electron.js)]
      ├── Windows / Mac / Linux অ্যাপ
      └── ওয়েব টেকনোলজি ব্যবহার/JS+HTML+CSS → Desktop App, Node.js system access


[Game Development]
      ├── 2D / 3D গেম
      └── লাইব্রেরি: Phaser.js, Three.js, physics & animation


[Server-side (Node.js)]
      ├─ সার্ভার তৈরি
      ├─ HTTP request handle
      ├─ API ডেটা পাঠানো
      └─ Database CRUD operations


[Database Integration]
      ├── ডেটা সংরক্ষণ, পড়া, আপডেট, ডিলিট
      └── ব্যবহার: MySQL, MongoDB


[API Data Fetch & Display]
      ├── সার্ভার / থার্ড-পার্টি API থেকে ডেটা
      └── ওয়েবসাইটে ডাইনামিকভাবে দেখানো/DOM update করে ওয়েবসাইটে দেখানো


[Real-time Apps]
      ├── চ্যাট অ্যাপ/Chat App → মেসেজ রিয়েল টাইম আপডেট
      └── ভিডিও কলিং অ্যাপ/Video Calling App → লাইভ ভিডিও স্ট্রিম

      */





/*  JavaScript Output Methods (Basic Note)

    document.write()

ওয়েবপেজে সরাসরি আউটপুট দেখায়

HTML ডকুমেন্টের মধ্যে লেখা যোগ করে

সাধারণত পেজ লোড হওয়ার সময় ব্যবহার করা হয়

উদাহরণ:

document.write("Hello Bangladesh");


 লেখাটি ব্রাউজার স্ক্রিনে দেখা যাবে

 পেজ লোড হওয়ার পরে ব্যবহার করলে আগের কন্টেন্ট মুছে যেতে পারে */


  /*   console.log()

ব্রাউজারের Console এ আউটপুট দেখায়

ডিবাগিং ও কোড টেস্ট করার জন্য ব্যবহার হয়

ইউজার সরাসরি এটি দেখতে পায় না

উদাহরণ:

console.log("Hello Bangladesh");


দেখতে হলে: Right Click → Inspect → Console */



/*পার্থক্য সংক্ষেপে

    বিষয়	                       document.write()	                  console.log()
কাজ করে কোথায়	                 Web Page (DOM)	                     Developer Console
কে দেখে	                         ইউজার	                            ডেভেলপার
কাজের উদ্দেশ্য	                  পেজে কন্টেন্ট দেখানো	                কোড টেস্ট / ডিবাগ
পেজ লোডের পরে ব্যবহার করলে	   পুরা পেজ মুছে দিতে পারে	             কোনো সমস্যা নেই
আধুনিক প্রজেক্টে ব্যবহার	           না	                                  খুব বেশি                  */




/* document.write("")

ভেতরের প্রসেস:
Browser loads HTML
        ↓
JS sees document.write()
        ↓
Text is inserted into the page (DOM)
        ↓
User sees it on screen */



/* console.log("")

ভেতরের প্রসেস:
JS runs the code
       ↓
Message sent to browser console
       ↓
Shown inside Developer Tools
       ↓
User sees nothing on page */


/* document.write = “পেজে লিখে”
console.log = “কোড টেস্ট করার লগ” */








// var

// 1. স্কোপ: ফাংশন-স্কোপড। var ভেরিয়েবল ফাংশনের ভিতরে বা গ্লোবাল স্কোপে থাকতে পারে।

// 2. হোস্টিং: var ভেরিয়েবলগুলি ফাংশনের শুরুতে হোস্ট হয়, অর্থাৎ ডিক্লেয়ার করার আগেও সেগুলো অ্যাক্সেস করা যেতে পারে।

// 3. পুনঃডিক্লেয়ারেশন: একই স্কোপে একাধিকবার var দিয়ে ভেরিয়েবল ডিক্লেয়ার করা যায়।

// 4. পরিবর্তনযোগ্য: var ভেরিয়েবলের মান পরিবর্তন করা যায়।


// উদাহরণ:
/*  function exampleVar() {
    var x = 10;
    if (true) {
        var x = 20; // একই স্কোপে পুনঃডিক্লেয়ারেশন
    }
    console.log(x); // আউটপুট: 20
}  
     */




// let

// 1. স্কোপ: ব্লক-স্কোপড। let দিয়ে ডিক্লেয়ার করা ভেরিয়েবলটি তার ব্লকের মধ্যে সীমাবদ্ধ থাকে।

// 2. হোস্টিং: let ভেরিয়েবলগুলো হোস্ট হয় না, অর্থাৎ ব্লকের বাইরে অ্যাক্সেস করা যায় না।

// 3. পুনঃডিক্লেয়ারেশন: একই স্কোপে let দিয়ে একাধিকবার ডিক্লেয়ার করা যায় না।

// 4. পরিবর্তনযোগ্য: let ভেরিয়েবলের মান পরিবর্তন করা যায়।


// উদাহরণ:
/*  function exampleLet() {
    let y = 10;
    if (true) {
        let y = 20; // আলাদা স্কোপ, আগের y প্রভাবিত হয় না
    }
    console.log(y); // আউটপুট: 10
} 
    */




// const

// 1. স্কোপ: ব্লক-স্কোপড। const দিয়ে ডিক্লেয়ার করা ভেরিয়েবলটি ব্লকের মধ্যে সীমাবদ্ধ।

// 2. পরিবর্তন অযোগ্য: একবার মান নির্ধারণ করলে, তা পরিবর্তন করা যায় না।

// 3. অবজেক্ট ও অ্যারে: const দিয়ে ডিক্লেয়ার করলে, ভেরিয়েবলের রেফারেন্স অপরিবর্তনীয় হলেও, অবজেক্ট বা অ্যারের ভেতরকার মান পরিবর্তন করা যেতে পারে।


// উদাহরণ:
/*  const z = 30;
// z = 40; // এরর: const ভেরিয়েবলের মান পরিবর্তন করা যায় না

const arr = [1, 2, 3];
arr.push(4); // বৈধ, কারণ অ্যারের মান পরিবর্তন করা যায়
console.log(arr); // আউটপুট: [1, 2, 3, 4]    */








// Variable Naming Rules: কী কাজ করে এবং কী কাজ করে না


// কী কাজ করে:

/*  শুরুতে অক্ষর, আন্ডারস্কোর, অথবা ডলার চিহ্ন:

ভেরিয়েবলের নাম শুরু হতে পারে একটি অক্ষর (a-z, A-Z), আন্ডারস্কোর (_), অথবা ডলার চিহ্ন ($) দিয়ে।

উদাহরণ: myVariable, _myVariable, $myVariable সবই সঠিক।


সংখ্যার ব্যবহার:

ভেরিয়েবলের নামের প্রথম অক্ষর হিসেবে সংখ্যা ব্যবহার করা যায় না, তবে নামের শেষে সংখ্যা রাখা যায়।

উদাহরণ: myVariable1 ঠিক আছে, কিন্তু 1Variable হবে ভুল।


কেস সেনসিটিভিটি:

ভেরিয়েবলের নাম বড় হাতের এবং ছোট হাতের অক্ষর আলাদাভাবে বিবেচিত হয়।

উদাহরণ: myVariable এবং myvariable আলাদা।   */



// কী কাজ করে না:

/*  স্পেস ব্যবহার:

ভেরিয়েবলের নামের মধ্যে স্পেস দেওয়া যায় না।

উদাহরণ: my variable ভুল, কিন্তু my_variable সঠিক।


রিজার্ভড ওয়ার্ড:

জাভাস্ক্রিপ্টের রিজার্ভড ওয়ার্ডগুলো (যেমন new,for, if, let, const ইত্যাদি) ভেরিয়েবলের নাম হিসেবে ব্যবহার করা যায় না।


অন্য বিশেষ চিহ্ন:

ভেরিয়েবলের নাম শুরু হতে পারে অক্ষর, আন্ডারস্কোর, বা ডলার চিহ্ন দিয়ে, কিন্তু অন্য কোনো স্পেশাল চিহ্ন (যেমন স্পেস, @, #) ব্যবহার করা যায় না।    */













/* Primitive Data Type কী?
Primitive data type হলো এমন ডাটা টাইপ যা
1. সরাসরি একটি single value ধরে
2. reference না, নিজের মান নিজেই রাখে
3. immutable (মান বদলাতে গেলে নতুন মান তৈরি হয়) */


// JavaScript এ মোট ৭টি Primitive Data Type আছে:

/*No	Type Name	   কী সংরক্ষণ করে
1	Number	         সব ধরনের সংখ্যা
2	String	         লেখা বা টেক্সট
3	Boolean	         সত্য / মিথ্যা
4	Undefined	       মান দেওয়া হয়নি
5	Null	           ইচ্ছা করে খালি
6	Symbol	         ইউনিক ভ্যালু
7	BigInt	         খুব বড় সংখ্যা   */


  

/* 1.Number

বর্ণনা
সব ধরনের numeric value সংরক্ষণ করে
JavaScript এ আলাদা করে int/float নেই — সবই Number


উদাহরণ:
let a = 100;
let b = 10.5;
let c = -25;


বিশেষ Number মান:

মান	            অর্থ
Infinity	      অসীম
-Infinity	      ঋণাত্মক অসীম
NaN	            Not a Number

console.log(5 / 0);      // Infinity
console.log("abc" * 2);  // NaN




2.String

বর্ণনা:
লেখা, শব্দ, বাক্য সংরক্ষণ করে

লেখার নিয়ম:৩ভাবে লেখা যায়
"Double Quote"
'Single Quote'
`Backtick`


উদাহরণ:
let name = "Rahim";
let msg = 'Hello';
let line = `Welcome`;


গুরুত্বপূর্ণ বিষয়:
সংখ্যা কোটেশনের ভিতরে থাকলে সেটা String
let x = "50"; // String, Number না




3.Boolean

বর্ণনা
শুধু দুইটা মান থাকে
true  → সত্য
false → মিথ্যা



উদাহরণ:
let isAdmin = true;
let isRainy = false;


কোথায় ব্যবহার হয়?
Condition / Logic এ

if (isAdmin) {
  console.log("Access Granted");
}





4.Undefined

বর্ণনা:
ভেরিয়েবল declare করা হয়েছে, কিন্তু value দেওয়া হয়নি

let x;
console.log(x); // undefined

JavaScript নিজে থেকে undefined দেয়





5.Null

বর্ণনা:
ইচ্ছা করে “কোনো মান নেই” বোঝাতে ব্যবহার হয়

let data = null;


undefined ≠ null
undefined = মান দেওয়া হয়নি
null = ইচ্ছা করে খালি


Bug বিষয়
typeof null // "object" (JavaScript এর পুরনো bug)





 6.Symbol

 বর্ণনা:
 একদম ইউনিক value তৈরি করে

 let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false


Object এর unique property বানাতে ব্যবহার হয়





7.BigInt

বর্ণনা:
Number এর সীমার বাইরে বড় সংখ্যা রাখে

শেষে n ব্যবহার করতে হয়

let big = 123456789012345678901234567890n;


বড় বৈজ্ঞানিক হিসাব বা বড় ডাটা প্রসেসিং এ লাগে






Primitive Data Types এর বৈশিষ্ট্য:

বৈশিষ্ট্য	                 ব্যাখ্যা
Single Value	       একটিমাত্র মান ধরে
Immutable	             মান বদলালে নতুন value হয়
Fast	                   দ্রুত কাজ করে
Simple	             সহজ ডাটা


Immutable Example:

let a = 10;
let b = a;

b = 20;

console.log(a); // 10 (পরিবর্তন হয়নি)

কারণ Primitive value কপি হয়, reference না  */












// Non-Primitive Data Type কী?
// Non-Primitive ডাটা টাইপ হলো এমন ডাটা টাইপ—

// 1.একাধিক তথ্য একসাথে রাখতে পারে
// 2. সরাসরি মান (value) না রেখে মেমোরির ঠিকানা (reference) ধরে
// 3. ভেতরের মান পরে পরিবর্তন করা যায় (Mutable)

// এই টাইপের ডাটাকে Reference Type ও বলা হয়।


// JavaScript এ Non-Primitive Data Types- 3 types 
// 1️. Object
// 2️. Array
// 3️. Function




// 1. Object

// Object কী?
// বাস্তব জীবনের কোনো কিছুর তথ্য একসাথে রাখতে Object ব্যবহার করা হয়।

// উদাহরণ:
/*  let person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka"
};  */


// Key	        Value
// name	        Rahim
// age	        25
// city	        Dhaka


// Object থেকে ডাটা বের করা
// console.log(person.name);      // Dot notation
// console.log(person["age"]);    // Bracket notation


// Object পরিবর্তন করা যায়
// person.age = 26;         // মান পরিবর্তন
// person.country = "BD";   // নতুন ডাটা যোগ
// delete person.city;      // ডাটা মুছে ফেলা


// Object এর ভিতরে কী রাখা যায়?
//   String
//   Number
//   Boolean
//   Array
//   Function
//   আরেকটি Object


/*  let student = {
  name: "Karim",
  marks: [80, 75, 90],
  address: { city: "Dhaka" },
  greet: function() { console.log("Hi"); }
};    */





// 2️. Array

// Array কী?
// Array হলো একাধিক ডাটা তালিকা (list) আকারে রাখার উপায়।

// উদাহরণ:
// let fruits = ["Apple", "Banana", "Mango"];


// Index	   Value
// 0	         Apple
// 1	         Banana
// 2	         Mango


// Index সবসময় 0 থেকে শুরু হয়


// Array থেকে ডাটা বের করা
// console.log(fruits[0]); // Apple


// Array পরিবর্তন করা যায়
// fruits.push("Orange");  // নতুন যোগ
// fruits.pop();           // শেষেরটা বাদ
// fruits[1] = "Guava";    // মান পরিবর্তন


// Array এর ভিতরে মিশ্র ডাটা রাখা যায়
// let data = ["Rahim", 25, true, {city: "Dhaka"}];






// 3️. Function

// Function কী?
// Function হলো কোড সংরক্ষণ করার ব্লক, যাকে ডাকলে কাজ করে।

// উদাহরণ:
/*  function greet() {
  console.log("Hello!");
}

greet();  */


// Function ভেরিয়েবলে রাখা যায়
/* let add = function(a, b) {
  return a + b;
};  */


// Arrow Function
// let multiply = (a, b) => a * b;



// Function এর বিশেষ ক্ষমতা
// JavaScript এ Function হলো First-Class Value
// 1.ভেরিয়েবলে রাখা যায়
// 2.অন্য ফাংশনে পাঠানো যায়
// 3.ফাংশন থেকে রিটার্ন করা যায়



// সবচেয়ে গুরুত্বপূর্ণ — Reference Behaviour
// Non-Primitive ডাটা কপি করলে আসল ডাটা কপি হয় না, reference কপি হয়

// উদাহরণ:
/*  let obj1 = {name: "Rahim"};
let obj2 = obj1;

obj2.name = "Karim";

console.log(obj1.name); // Karim  */


// কারণ obj1 এবং obj2 একই মেমোরির Object ব্যবহার করছে।


// Non-Primitive Data Type এর মূল বৈশিষ্ট্য

// বৈশিষ্ট্য	                     ব্যাখ্যা
// Reference Type	             মেমোরির ঠিকানা ধরে
// Mutable	                   ভেতরের মান পরিবর্তন করা যায়
// Complex Data	               একাধিক মান রাখতে পারে
// Copy করলে	                একই ডাটার reference যায়












  
// JavaScript Operators

// JavaScript-এ অপারেটর হলো বিশেষ চিহ্ন বা কীওয়ার্ড যা মান বা ভেরিয়েবলের উপর অপারেশন করার জন্য ব্যবহার হয়।


// প্রধান ধরণগুলো:
// 1. Arithmetic Operators

// 2. Assignment Operators

// 3. Comparison Operators

// 4. Logical Operators

// 5. Unary Operators

// 6. Ternary Operator

// 7. Type Operators

// 8. String Operators



// 1️. Arithmetic Operators (গণিত)

/* Operator	                অর্থ	                              উদাহরণ	            ফলাফল
   +	                      যোগ	                              5 + 3                   8
   -	                     বিয়োগ	                              5 - 3	                 2
   *	                      গুণ	                               5 * 3	                15
   /	                      ভাগ	                               15 / 3	                5
   %	                     ভাগশেষ	                             10 % 3	                1
   **	                ঘাত (Power, ES6+)	                       2 ** 3	                8
   ++	          1 বৃদ্ধি (pre/post increment)	                    ++x, x++	            x + 1
   --	          1 হ্রাস (pre/post decrement)	                   --x, x--	             x - 1          */


// Note: JS-এ integer division operator // নেই।




// Assignment Operators (মান অ্যাসাইন করা)

/* Operator          অর্থ                      উদাহরণ

 =	          সরাসরি মান দেয়	                 x = 5

 +=	          যোগ করে আপডেট	               x += 3 → x = x + 3

 -=	          বিয়োগ করে আপডেট	            x -= 2 → x = x - 2

 *=	          গুণ করে আপডেট	                x *= 4 → x = x * 4

 /=	          ভাগ করে আপডেট	               x /= 2 → x = x / 2

 %=	          ভাগশেষ করে আপডেট	           x %= 3 → x = x % 3

 **=	          ঘাত করে আপডেট	             x **= 3 → x = x ** 3              */





// 3️. Comparison Operators (তুলনা)

/* Operator	                 অর্থ	                     উদাহরণ	          ফলাফল

 ==	            সমান (type coercion সহ)	             5 == '5'	         true

 ===	              strict সমান (type সহ)        	   5 === '5'	       false

 !=	                      সমান না	                    5 != 3	          true

 !==	                  strict সমান না	              5 !== '5'	        true

 >	                       বড়	                       5 > 3	           true

 <	                       ছোট	                      5 < 3	            false

 >=	                   বড় বা সমান	                   5 >= 5	           true

 <=	                   ছোট বা সমান	                  3 <= 5	          true            */





//  Logical Operators (লজিক)

/*  Operator        অর্থ	        উদাহরণ	              ফলাফল

  &&	              AND	       true && false	          false

  `		               `	          OR

  !	                NOT	         !true	                false                         */





// Unary Operators (একক মানের অপারেশন)

/*  Operator	              অর্থ	                         উদাহরণ	                    ফলাফল

  +	                        ধন চিহ্ন	                        +5	                       5

  -	                        ঋণ চিহ্ন	                        -5	                      -5

  ++	                         1 বৃদ্ধি	                      ++x / x++  	               x + 1

  --	                         1 হ্রাস	                      --x / x--	                x - 1

  !	                      লজিক্যাল না	                       !true	                   false

  typeof	                ডেটার টাইপ	                      typeof 5	               "number"
 
  void	       expression result undefined করে	            void(0)	                 undefined
 
  delete	           অবজেক্ট প্রপার্টি মুছে দেয়                delete obj.prop	           true / false                */





// 6️. Ternary Operator (শর্তসাপেক্ষ)

// condition ? value_if_true : value_if_false

/*  let x = 10;
let result = (x % 2 === 0) ? "Even" : "Odd";
console.log(result);  // Even       */




// 7️. Type Operators (টাইপ চেক/instance)

/* Operator	                                                                অর্থ	                                             উদাহরণ	                            ফলাফল

   typeof	                                                            ডেটার টাইপ	                                            typeof 5	                           "number"

   instanceof	                                      অবজেক্ট নির্দিষ্ট class/constructor এর instance কি না	                  obj instanceof Array	              true/false                */





// 8️. String Operators (স্ট্রিং)

/* Operator	                           অর্থ	                                উদাহরণ	                 ফলাফল

   +	                          যোগ (Concatenation)	                  "Hello" + " World"	       "Hello World"

   +=	                          যোগ করে আপডেট	                         str += " JS"	          str = "Hello JS"                    */



// Note: JS-এ string multiplication * নেই। string membership এর জন্য .includes() method ব্যবহার করতে হয়।
















// JavaScript – if & else Statement Complete Notes

// Purpose:
// if এবং else হলো conditional statements, অর্থাৎ শর্ত অনুযায়ী কোড execute করার জন্য ব্যবহার করা হয়।



// 1️. if Statement

// Definition:
// if statement একটি শর্ত পরীক্ষা করে, যদি শর্তটি true হয় → কোড execute হবে।

// যদি false হয় → কোড block skip হবে।

// Syntax:

/*  if (condition) {
       // কোড যা condition true হলে চালাবে
   }                */
  

       
// Example 1:

/* let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}      */



// Output:
// You are an adult


// Key Points:
// 1. condition → boolean expression (true বা false)।

// 2. {} (curly braces) optional যদি কোড block এক লাইনের হয়।

// 3. Only executes when condition is true.


// Example 2 (One-line if):

/*  let x = 10;
if (x > 5) console.log("x is greater than 5");     */



// Output:
// x is greater than 5




// 2️. else Statement

// Definition:
// 1, else statement ব্যবহার করা হয় যখন if condition false হয়।

// 2. অর্থাৎ if condition true হলে if block, false হলে else block execute হবে।



// Syntax:

/*    if (condition) {
          // condition true হলে
        } else {
     // condition false হলে
}                */



// Example 1:

/*   let age = 16;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}              */



// Output:
// You are not an adult


// Key Points:
// 1. else optional → যদি না থাকে, condition false হলে কিছু হবে না।

// 2. else block condition check করে না, এটা শুধু if false হলে execute হয়।

// 3. {} optional না, multiple statements লিখলে অবশ্যই {} ব্যবহার করতে হবে।



// Example 2 (Multiple statements inside else):

/*  let x = 3;

if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is 5 or less");
    console.log("This is else block");
}                    */



// Output:
// x is 5 or less
// This is else block





// 3️. Important Notes (Summary of if & else)

// Concept	                               Explanation
// if	                                     Condition true হলে execute হয়
// else	                               Condition false হলে execute হয়
// {}	                                     Code block, optional for single statement, required for multiple statements
// Boolean                                 condition	if এর condition অবশ্যই true/false দেওয়া হবে
// Execution order                         সবসময় উপরের if check → true হলে execute → false হলে else execute  




// 4️. Simple Flow (Logic)

// Start
//   |
//   v
// [Check condition in if]
//   |
//   |-- true --> Execute if block --> End
//   |
//   |-- false --> Execute else block --> End  


// এটি বোঝায় যে if condition true হলে only if block চলে, false হলে only else block চলে।

















// JavaScript Switch Statement (সহজ ফুল নোট)

// Switch কী?
// switch হলো এমন একটি statement যেটা একটা variable এর মান অনুযায়ী আলাদা আলাদা কাজ করে।

// মানে — “এই ভ্যালু হলে এটা করো, ওই ভ্যালু হলে ওটা করো”


// কেন Switch ব্যবহার করি?

// যখন একই variable এর অনেকগুলো নির্দিষ্ট মান (exact value) এর জন্য আলাদা আলাদা output দিতে চাই।




// Basic Syntax

/*  switch (expression) {
  case value1:
    // expression যদি value1 এর সমান হয়
    break;

  case value2:
    // expression যদি value2 এর সমান হয়
    break;

  default:
    // কোনোটাই না মিললে
}                   */





// Switch কিভাবে কাজ করে?

// 1. expression এর মান নেয়

// 2. প্রতিটা case এর সাথে মিলায়

// 3. যেটা মিলে যায় → সেই case এর কোড চালায়

// 4. break পেলে switch বন্ধ হয়

// 5. কোনো case না মিললে → default চলে



 

// Example 1

/*  let day = 1;

switch (day) {
  case 1:
    console.log("Saturday");
    break;

  case 2:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day");
}       */


// এখানে day = 1 তাই output হবে Saturday    





// break কেন দরকার? 

// 1. break switch থেকে বের করে আনে।
// 2. না দিলে নিচের case গুলাও চলতে থাকে।




//  break ছাড়া

/*  let x = 1;

switch (x) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
}        */




// Output:  
// One
// Two




// break সহ

/*  switch (x) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
}      */





// default কী?

// 1. default হলো if–else এর else এর মতো।
// 2. কিছুই না মিললে এটা চলবে।

/* let color = "blue";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Unknown color");
}      */





// একাধিক case একসাথে
// একই কাজ হলে একাধিক case একসাথে লেখা যায়।

/*   let fruit = "apple";

switch (fruit) {
  case "apple":
  case "mango":
  case "banana":
    console.log("This is a fruit");
    break;

  default:
    console.log("Not a fruit");
}      */






// Switch Strict Comparison ব্যবহার করে

// Switch case মিলায় === দিয়ে।
// মানে type ও value দুইটাই এক হতে হবে।


/*   let x = "5";

switch (x) {
  case 5:
    console.log("Number five");
    break;
  default:
    console.log("Not matched");
}           */





// Case Order গুরুত্বপূর্ণ
// 1. Switch উপরে থেকে নিচে check করে।
// 2. যেটা আগে match করবে, সেখান থেকে execute শুরু হবে।    




// Switch এ কী কী type ব্যবহার করা যায়?
// Number
// String
// Boolean
// Expression result



/*  let a = 2;
let b = 3;

switch (a + b) {
  case 5:
    console.log("Sum is 5");
    break;
}           */





// কখন Switch ব্যবহার করব?

// পরিস্থিতি	                           switch ভালো?

// Exact value check	                   হ্যাঁ

// Mark > 80 এর মতো range	           না (if-else ব্যবহার করো)


// ছোট সারাংশ
// switch → মান মিলাও → কাজ করো → break দাও → শেষ






// Switch vs If-Else

// বিষয়	                    Switch	                       If-Else
// Exact value check	        ভালো	                       সম্ভব
// Range check (>, <)	         না	                          ভালো
// অনেক condition	          পরিষ্কার	                      বড় হয়ে যায়




// Flow (Logic)

// Start
//   |
// Expression check
//   |
// Match case?
//   |-- Yes → Run code → break → End
//   |
//   |-- No → Next case
//   |
// No case matched → default → End





// গুরুত্বপূর্ণ নিয়ম সংক্ষেপে
// 1. switch একটাই expression check করে
// 2. case value constant হতে হয়
// 3. break না দিলে fall-through হয়
// 4. default optional কিন্তু ব্যবহার করা ভালো
// 5. switch === ব্যবহার করে



















// JavaScript Basic For Loop – Simple Full Notes


// For Loop কী?
// for loop ব্যবহার করা হয় একই কাজ কয়েকবার করার জন্য, যখন আগে থেকেই জানা থাকে কয়বার চলবে।


// Syntax
/*    for (start; condition; change) {
       // বারবার চলবে এমন কোড
         }       */


// অংশ	                          কাজ
// start	                         লুপ কোথা থেকে শুরু হবে
// condition	                     যতক্ষণ true থাকবে, লুপ চলবে
// change	                         প্রতি ধাপে ভ্যারিয়েবল বাড়বে বা কমবে    



// Example
/*   for (let i = 1; i <= 5; i++) {
      console.log(i);
    }          */



// কী হচ্ছে এখানে?
// 1. let i = 1 → ১ থেকে শুরু

// 2. i <= 5 → ৫ পর্যন্ত চলবে

// 3. i++ → প্রতি ধাপে ১ করে বাড়বে     



// Output:
// 1
// 2
// 3
// 4
// 5



// Loop চলার ধাপ (Step by Step)

// Step	                        কী হচ্ছে
// ১	                          Initialization – i = 1
// ২	                          Condition check – i <= 5 ?
// ৩	                          Condition true হলে কোড ব্লক execute
// ৪	                          Update – i++ (i এক করে বাড়ানো)
// ৫	                          আবার Condition check
// ৬	                          Condition false হলে লুপ বন্ধ

// Condition false হলেই loop বন্ধ।




// Increment ও Decrement

// ধরন	                         কোড	                   কাজ
// Increment (বাড়ানো)	            i++	             প্রতি ধাপে ১ করে বাড়ে
// Decrement (কমানো)	           i--	            প্রতি ধাপে ১ করে কমে



// Example:
/*   for (let i = 5; i > 0; i--) {
     console.log(i);
    }      */


 
// Output:
// 5
// 4
// 3
// 2
// 1




// গুরুত্বপূর্ণ নিয়ম

// নিয়ম	                                 ব্যাখ্যা
// Condition false হলে লুপ থামে	          লুপ আর চলে না
// Update না দিলে	                        লুপ কখনো বন্ধ হবে না → Infinite Loop
// Variable scope	                       let i শুধু loop এর ভিতরে কাজ করে



// ছোট সারাংশ (Flow)

// Start → Initialization → Condition check → Execute code → Update → Condition check → End

   













//  JavaScript Break & Continue – Full Notes (Easy)

// Break Statement
// Purpose:

// 1. break ব্যবহার করা হয় loop বা switch থেকে অবিলম্বে বের হওয়ার জন্য।

// 2. মানে লুপ চলাকালীন কোনো শর্ত মিলে গেলে লুপ সম্পূর্ণ থেমে যাবে।



// Syntax:

// Example with for loop
/*  for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // লুপ এখানেই শেষ
  }
  console.log(i);
}       */




// Output:
// 1
// 2

// Explanation:
// i=1 → print

// i=2 → print

// i=3 → break → লুপ বন্ধ





// Continue Statement

// Purpose:
// continue ব্যবহার করা হয় current iteration skip করতে, কিন্তু লুপ চলতে থাকবে।

// Syntax:
/*  for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // i=3 skip
  }
  console.log(i);
}       */



// Output:
// 1
// 2
// 4
// 5



// Explanation:

// i=3 → skip

// পরবর্তী iteration চলবে




// Break vs Continue – Quick Comparison

// Feature	                      Break	                                  Continue
// কাজ	                      লুপ সম্পূর্ণ বন্ধ                     শুধু current iteration skip, লুপ চলবে
// ব্যবহার	                শর্ত মিলে লুপ শেষ করতে	              শর্ত মিলে step বাদ দিতে
// Effect on Loop	            লুপ থেমে যাবে	                     লুপ চলবে, পরবর্তী iteration চালু




// Combined Example

/*  for (let i = 1; i <= 5; i++) {
  if (i === 2) continue; // 2 skip
  if (i === 4) break;    // 4 এ লুপ বন্ধ
  console.log(i);
}             */





// Output:
// 1
// 3




// Explanation:

// i=1 → print

// i=2 → continue → skip

// i=3 → print

// i=4 → break → লুপ বন্ধ




// Important Rules

// 1. break & continue শুধু loop বা switch এর ভিতরে ব্যবহার হয়।

// 2. break → loop শেষ, continue → current step skip, লুপ চলবে।

// 3. ছোট বা বড় লুপ—উভয়েই কাজ করে।


















// JavaScript While Loop – Full Notes (Easy)

// While Loop কী?

// while loop ব্যবহার করা হয় যখন
// 1. কোনো কাজ বারবার করতে হবে
// 2. কিন্তু কয়বার চলবে তা আগে থেকে জানা নেই
// 3. যতক্ষণ condition true থাকবে, লুপ চলবে




// Syntax

/*  while (condition) {
  // কোড যা বারবার চলবে
}       */



// অংশ	                      কাজ
// condition	                 যতক্ষণ true থাকবে, লুপ চলবে  




// Example

/*  let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}        */





// Output:
// 1
// 2
// 3
// 4
// 5




// কীভাবে কাজ করে (Step by Step)

// Step	                           কী হয়
// ১	                             condition চেক হয়
// ২	                             true হলে কোড block execute হয়
// ৩	                             loop এর ভিতরের update চলে (যেমন i++)
// ৪	                             আবার condition চেক হয়
// ৫	                             false হলে loop বন্ধ







// Update খুব গুরুত্বপূর্ণ

// While loop এ update নিজে লিখতে হয়, না দিলে লুপ বন্ধ হবে না।

/*  let i = 1;

while (i <= 5) {
  console.log(i);
  // i++ না দিলে infinite loop হবে
}          */




// Infinite Loop (সাবধান)

// Condition কখনো false না হলে loop বন্ধ হবে না।

/*  let i = 1;

while (i > 0) {
  console.log(i);
  i++;
}             */


// এখানে condition সবসময় true → infinite loop




// While Loop Flow

// Start
//   |
// Check condition
//   |-- true → Run code → Update → Back to condition
//   |-- false → End loop




// গুরুত্বপূর্ণ নিয়ম

// নিয়ম	                               ব্যাখ্যা
// condition আগে চেক হয়	             false হলে loop একবারও চলবে না
// update নিজে দিতে হয়	               না দিলে infinite loop
// condition true থাকলে	               loop চলতেই থাকবে





// ছোট সারাংশ

// Condition check → Code run → Update → Condition check → End



















// JavaScript Do...While Loop – Full Notes (Easy)


// Do...While Loop কী?
// do...while loop এমন একটি loop যেখানে

// 1. কোড কমপক্ষে একবার চলবেই
// 2. তারপর condition চেক করা হয়
// 3. condition true থাকলে আবার চলবে



// Syntax

/*   do {
  // কোড যা চলবে
} while (condition);      */

// লক্ষ্য করো: শেষে semicolon (;) থাকে?





// Example

/*  let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);   */





// Output:
// 1
// 2
// 3
// 4
// 5




// কীভাবে কাজ করে (Step by Step)

// Step	                   কী হয়
// ১	                     কোড block প্রথমে execute হয়
// ২	                     তারপর condition চেক হয়
// ৩	                     condition true হলে আবার block চলে
// ৪	                     false হলে loop বন্ধ




// While vs Do...While পার্থক্য

// বিষয়	                  while loop	                  do...while loop
// condition চেক	          আগে	                          পরে
// minimum run        ০ বারও হতে পারে	              কমপক্ষে ১ বার চলবে





// Example (Condition শুরুতেই False)

/*  let i = 10;

do {
  console.log(i);
  i++;
} while (i < 5);      */




// Output:
// 10

// এখানে condition false, তবুও একবার চলেছে




// Update খুব গুরুত্বপূর্ণ
// Update না দিলে infinite loop হতে পারে।

/*  let i = 1;

do {
  console.log(i);
} while (i <= 5);      */


// i বাড়ানো হয়নি → condition সবসময় true → infinite loop





// Do...While Loop Flow

// Start
//   |
// Run code
//   |
// Check condition
//   |-- true → Run again
//   |-- false → End loop 





// গুরুত্বপূর্ণ নিয়ম

// নিয়ম	                         ব্যাখ্যা
// কোড আগে চলে	              condition পরে চেক হয়
// অন্তত ১ বার চলবে	             condition false হলেও
// update নিজে দিতে হয়	         না দিলে loop থামবে না




// ছোট সারাংশ
// Run → Check → Run → Check → End















// JavaScript Function – Full Notes (Easy)


// Function কী?
// Function হলো কোডের একটি ব্লক যা

// 1. নির্দিষ্ট কাজ করার জন্য লেখা হয়
// 2. যখন দরকার তখন ডাকা (call) করা হয়
// 3. বারবার ব্যবহার করা যায়



// Function কেন ব্যবহার করি?

// 1. একই কোড বারবার না লিখে ব্যবহার করতে
// 2. কোড ছোট ও গুছানো রাখতে
// 3. কাজ আলাদা আলাদা ভাগ করতে




// Function Syntax (Declaration)

/*  function functionName() {
  // কোড
}            */



// Example:  

/*  function greet() {
  console.log("Hello!");
}       */




// Function চালাতে (call করতে):

// greet();




// Output:
// Hello!





// Parameter ও Argument

// নাম	                               মানে
// Parameter	                         Function বানানোর সময় যে ভ্যারিয়েবল দেই
// Argument	                           Function call করার সময় যে মান পাঠাই


 
// Example:

/*   function greet(name) {   // name = parameter
  console.log("Hello " + name);
}

greet("Rahim"); // "Rahim" = argument     */





// Output:
// Hello Rahim





// Return Keyword

// Function কোনো মান ফেরত দিতে return ব্যবহার করে।

/*  function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);       */



// Output:
// 8


// return হলে function শেষ হয়ে যায়





// Function ছাড়া return কাজ করে না

// return 5;  Error

// Return শুধু function এর ভিতরে ব্যবহার করা যায়।




// Function Expression
// Function কে ভ্যারিয়েবলে রাখা যায়।

/*   const greet = function() {
  console.log("Hi!");
};

greet();     */




// Arrow Function (Basic)
// ছোটভাবে function লেখার উপায়।

/*  const add = (a, b) => {
  return a + b;
};       */




// এক লাইনে:
// const add = (a, b) => a + b;




// Function কিভাবে কাজ করে (Flow)

//1. Function তৈরি করা হয়

//2. Function call করা হয়

//3. কোড run হয়

//4. দরকার হলে value return করে

//5. Function শেষ






// গুরুত্বপূর্ণ নিয়ম

// নিয়ম	                                         ব্যাখ্যা
// Function call না করলে চলবে না	              শুধু বানালে কাজ করবে না
// Parameter না দিলেও function চলবে	             কিন্তু value undefined হবে
// Return দিলে value পাওয়া যায়	                 না দিলে undefined return হয়





// ছোট সারাংশ

// Function = Reusable code block
// Call করলে চলে, parameter নেয়, return দিতে পারে

















// JavaScript Function Parameter – Simple Notes


// Parameter কী?

/*   Parameter হলো function বানানোর সময় ব্র্যাকেটের ভিতরে লেখা ভ্যারিয়েবল,
যার মাধ্যমে function ডাটা গ্রহণ করে।     */



/*   function greet(name) {
  console.log("Hello " + name);
}     */


// এখানে name হলো parameter



// Argument কী?

// Function call করার সময় parameter এ যে আসল মান পাঠানো হয় তাকে argument বলে।

// greet("Rahim");

// এখানে "Rahim" হলো argument




// একাধিক Parameter

// একাধিক ডাটা নেওয়া যায়।

/*  function add(a, b) {
  console.log(a + b);
}

add(5, 3);      */




// a ও b → parameter
// 5 ও 3 → argument




// Parameter না দিলে কী হয়?

/*   function greet(name) {
  console.log(name);
}

greet();    */




// Output হবে: undefined
// কারণ কোনো argument দেওয়া হয়নি।




// Default Parameter

// Parameter এর জন্য আগেই default মান সেট করা যায়।

/*    function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();        // Hello Guest
greet("Rahim"); // Hello Rahim       */




// Parameter এর কাজ

// Function এর ভিতরে ডাটা নেওয়া
// বাইরের মান function এ ব্যবহার করা
// একই function দিয়ে ভিন্ন ভিন্ন কাজ করা




// ছোট সারাংশ
// Parameter = Function এর input নেওয়ার ভ্যারিয়েবল
// Argument = Call করার সময় দেওয়া আসল মান















// JavaScript Function Return – Simple Notes

// Return কী?
// return ব্যবহার করা হয়
// function থেকে কোনো মান (value) বাইরে পাঠানোর জন্য
// function যেখানে call করা হয়েছে সেখানে result পাঠায়




// Basic Syntax

/*  function functionName() {
  return value;
}          */




// Example  

/*  function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);      */



// Output:
// 8


// return a + b → মান ফেরত দিচ্ছে

// সেই মান result ভ্যারিয়েবলে রাখা হয়েছে





// Return দিলে কী হয়?

// Function সাথে সাথে শেষ হয়ে যায়
// Return এর পরের কোড আর চলে না

/*  function test() {
  return 5;
  console.log("Hello"); // এটা চলবে না
}      */





// Return না দিলে কী হয়?

/* function test() {
  console.log("Hi");
}

let x = test();
console.log(x);     */



// Output:
// Hi
// undefined


// Return না থাকলে function undefined দেয়




// Return কোথায় ব্যবহার হয়?

// হিসাব করে ফলাফল ফেরত দিতে
// কোনো মান অন্য জায়গায় ব্যবহার করতে
// function এর output পাওয়ার জন্য



// ছোট সারাংশ
// Return = Function এর result বাইরে পাঠানোর ব্যবস্থা
// Return হলেই function শেষ হয়

















// JavaScript Object – Simple Notes


// Object কী?

// 1. Object হলো key-value pair এর collection।

// 2. Key = নাম (name)

// 3. Value = data (string, number, boolean, array, অন্য object ইত্যাদি)





// Object তৈরি (Syntax)

/*   let objectName = {
  key1: value1,
  key2: value2
};                */




// Example – Simple Object

/*  let person = {
  name: "Rahim",
  age: 25,
  isStudent: true
};

console.log(person.name);           Rahim
console.log(person.age);             25
console.log(person.isStudent);      true      */



// Explanation:

// name, age, isStudent = keys

// "Rahim", 25, true = values




// Object থেকে Value Access করার দুইটা উপায়

// 1. Dot notation → objectName.key

// console.log(person.name);  // Rahim


// 2. Bracket notation → objectName["key"]

// console.log(person["age"]);  // 25





// Object এ নতুন Key-Value যোগ করা

// person.country = "Bangladesh";
// console.log(person.country);  // Bangladesh




// Object থেকে Key-Value মুছে ফেলা

// delete person.isStudent;
// console.log(person.isStudent); // undefined




// Nested Object (Object এর ভিতরে Object)

/*  let student = {
  name: "Rahim",
  marks: {
    math: 90,
    english: 85
  }
};

console.log(student.marks.math); // 90   */




// ছোট সারাংশ
// Object = Key-Value collection

// Key → নাম

// Value → Data

// Access → Dot বা Bracket

// Update, Add, Delete সহজ















// JavaScript Array – Basic Notes


// Array কী?
// Array হলো এক ভ্যারিয়েবলে একাধিক মান রাখার উপায়।

// let fruits = ["Apple", "Banana", "Mango"];





// Index

// Array এর অবস্থানকে index বলে।
// Index ০ থেকে শুরু হয়।

// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Banana





// মান পরিবর্তন

// fruits[1] = "Orange";





// নতুন মান যোগ

// fruits.push("Pineapple");   // শেষে যোগ
// fruits.unshift("Grapes");   // শুরুতে যোগ




// মান মুছে ফেলা

// fruits.pop();    // শেষ থেকে বাদ
// fruits.shift();  // শুরু থেকে বাদ




// Length (কয়টা item আছে)

// console.log(fruits.length);




// সারাংশ

// Array = একসাথে অনেক মান

// Index শুরু ০

// push() যোগ করে

// pop() বাদ দেয়

// length দিয়ে মোট সংখ্যা জানা যায়















// JavaScript for...in Loop – Notes

// for...in কী?
// for...in loop ব্যবহার করা হয় object এর property (key) গুলো এক এক করে পাওয়ার জন্য।



// Syntax

/*  for (let key in objectName) {
  // কোড
}      */


// key → object এর property name ধরে

// প্রতি ধাপে এক একটি key পাওয়া যায়




// Example

/*   let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

for (let key in car) {
  console.log(key);
}                  */




// Output:
// brand
// model
// year




// Value পাওয়ার উপায়

/*  for (let key in car) {
  console.log(car[key]);
}     */




// Output:
// Toyota
// Corolla
// 2020



// Key + Value একসাথে

/*   for (let key in car) {
  console.log(key + " : " + car[key]);
}        */




// গুরুত্বপূর্ণ নিয়ম

// for...in object এর জন্য ব্যবহার হয়
// প্রতিবার loop এ key পাওয়া যায়
// value নিতে হলে object[key] ব্যবহার করতে হয়
// Dot notation (object.key) এখানে কাজ করে না, কারণ key ভ্যারিয়েবল




// সারাংশ

// for...in loop = object এর key গুলো পাওয়ার উপায়
// Key → loop variable
// Value → object[key]
















// JavaScript for...of Loop – Notes

// for...of কী?
// for...of loop ব্যবহার করা হয় array বা iterable data থেকে এক এক করে value পাওয়ার জন্য।



// Syntax

/*  for (let value of arrayName) {
  // কোড
}     */


// value → প্রতিবার array এর এক একটি মান ধরে





// Example (Array)

/*  let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
 }         */





// Output:
// Apple
// Banana
// Mango





// String এর উপরও কাজ করে

/*   let name = "Rahim";

for (let ch of name) {
  console.log(ch);
}     */




// Output:
// R
// a
// h
// i
// m





// Index পাওয়া যায় না সরাসরি

// for...of এ index সরাসরি পাওয়া যায় না, শুধু value পাওয়া যায়।





// গুরুত্বপূর্ণ নিয়ম

// for...of array ও string এর জন্য ব্যবহার হয়
// প্রতিবার loop এ value পাওয়া যায়
// object এর জন্য for...of ব্যবহার হয় না





// সারাংশ
// for...of = array/string এর value পাওয়ার loop
// Value → loop variable




















// JavaScript Array Methods – Simple Notes


// at()

// Array থেকে নির্দিষ্ট index এর মান দেয়।
// Negative index দিলে শেষ দিক থেকে ধরে।


/*  let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.at(1));   // Banana
console.log(fruits.at(-1));  // Mango       */





// concat()

// দুই বা তার বেশি array একসাথে জোড়া দেয়।
// Original array পরিবর্তন করে না।


/*   let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);
console.log(result); // [1, 2, 3, 4]     */





// every()

// সব item শর্ত পূরণ করলে true, না হলে false দেয়।

/*  let numbers = [10, 20, 30];

let check = numbers.every(n => n > 5);
console.log(check); // true    */





// filter()

// শর্ত মিলে এমন item নিয়ে নতুন array বানায়।

/*  let numbers = [10, 15, 20, 25];

let result = numbers.filter(n => n > 15);
console.log(result); // [20, 25]      */





// find()

// শর্ত মিলে প্রথম যে item পায়, সেটি return করে।

/*  let numbers = [10, 15, 20, 25];

let result = numbers.find(n => n > 15);
console.log(result); // 20      */






// findIndex()

// শর্ত মিলে প্রথম item এর index দেয়।

/*   let numbers = [10, 15, 20, 25];

let index = numbers.findIndex(n => n > 15);
console.log(index); // 2        */





// সারাংশ

// Method	                  কাজ
// at()	                    নির্দিষ্ট index এর মান দেয়
// concat()	                array জোড়া দেয়
// every()	                সব item শর্ত মানে কিনা চেক
// filter()	                শর্ত মানা item নিয়ে নতুন array
// find()	                  প্রথম মেলা item
// findIndex()	            প্রথম মেলা item এর index

 


















// JavaScript Array Methods – Notes

// Array.from()

// Array-like বা iterable থেকে নতুন array তৈরি করে।

 
/*   let str = "Hello";
let arr = Array.from(str);

console.log(arr); // ["H", "e", "l", "l", "o"]       */






// includes()

// কোনো মান array তে আছে কিনা চেক করে।
// থাকলে true, না থাকলে false।

/*   let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Orange")); // false      */




// join()

// Array এর সব item একসাথে string বানায়।

/*   let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(", ")); // "Apple, Banana, Mango"     */





// lastIndexOf()

// শেষবার কোন index এ মানটা আছে সেটা দেয়।

/*   let numbers = [10, 20, 30, 20];

console.log(numbers.lastIndexOf(20)); // 3     */




// length

// Array তে কয়টা item আছে তা দেখায়।

/*   let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length); // 3     */

 



// pop()

// Array এর শেষ item মুছে ফেলে এবং সেই item return করে।

/*   let fruits = ["Apple", "Banana", "Mango"];

let last = fruits.pop();

console.log(last);   // Mango
console.log(fruits); // ["Apple", "Banana"]      */





// সারাংশ

// Method	                     কাজ
// Array.from()	               অন্য কিছুকে array বানায়
// includes()	                 মান আছে কিনা চেক
// join()	                     array → string
// lastIndexOf()	             শেষবার কোথায় আছে
// length	                     কয়টা item
// pop()	                     শেষ item বাদ





















// JavaScript Array Methods – Notes

// push()
// Array এর শেষে নতুন item যোগ করে।

/*   let fruits = ["Apple", "Banana"];
fruits.push("Mango");

console.log(fruits); // ["Apple", "Banana", "Mango"]    */






// reverse()

// Array এর item উল্টে দেয় (reverse order)।

/*   let numbers = [1, 2, 3];
numbers.reverse();

console.log(numbers); // [3, 2, 1]     






// shift()

// Array এর প্রথম item মুছে ফেলে।

/*   let fruits = ["Apple", "Banana", "Mango"];
fruits.shift();

console.log(fruits); // ["Banana", "Mango"]     */







// slice()

// Array থেকে অংশ কেটে নতুন array বানায়।
// Original array পরিবর্তন হয় না।


/*  let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.slice(1, 3);
console.log(result); // ["Banana", "Mango"]        */






// some()

// কোনো একটা item শর্ত পূরণ করলেই true দেয়।

/*   let numbers = [5, 10, 15];

let check = numbers.some(n => n > 10);
console.log(check); // true          */






// sort()

// Array এর item গুলো সাজায় (default string হিসেবে)।

/*   let fruits = ["Banana", "Apple", "Mango"];
fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango"]       */







// splice()

// Array থেকে item মুছে বা যোগ করতে ব্যবহার হয়।

/*   let fruits = ["Apple", "Banana", "Mango"];
fruits.splice(1, 1); // index 1 থেকে ১টা মুছে

console.log(fruits); // ["Apple", "Mango"]        */






// toString()

// Array কে string এ পরিবর্তন করে।


/*   let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.toString()); // "Apple,Banana,Mango"       */






// unshift()

// Array এর শুরুতে নতুন item যোগ করে।

/*  let fruits = ["Banana", "Mango"];
fruits.unshift("Apple");
 
console.log(fruits); // ["Apple", "Banana", "Mango"]         */



  



// সারাংশ

// Method	              কাজ
// push()	              শেষে যোগ
// reverse()	          উল্টে দেয়
// shift()	            শুরু থেকে বাদ
// slice()	            অংশ কেটে নতুন array
// some()	              কোনো item শর্ত মানে কিনা
// sort()	              সাজায়
// splice()	            মুছে/যোগ করে
// toString()	          string বানায়
// unshift()	          শুরুতে যোগ
























// JavaScript String Methods – Notes

// CharAt(index)

// String থেকে নির্দিষ্ট index এর character দেয়।
// Negative index দিলে empty string আসে।

// let str = "Hello";

// console.log(str.charAt(1));  // e
// console.log(str.charAt(4));  // o
// console.log(str.charAt(-1)); // ""





// concat(str1, str2, ...)


// একাধিক string জোড়া দেয়।

// let text = "Hello".concat(" ", "World");

// console.log(text); // Hello World






// includes(substring)

// String এর ভিতরে substring আছে কিনা চেক করে।
// থাকলে true, না থাকলে false।


// let text = "Hello World";

// console.log(text.includes("World")); // true
// console.log(text.includes("Hi"));    // false





// indexOf(substring)

// Substring প্রথম কোথায় আছে তার index দেয়। না থাকলে -1 দেয়।

// let text = "Hello World";

// console.log(text.indexOf("World")); // 6



// lastIndexOf(substring)

// Substring শেষবার কোথায় আছে তার index দেয়।

// let text = "Hello Hello";

// console.log(text.lastIndexOf("Hello")); // 6




// startsWith(searchString)

// String নির্দিষ্ট লেখা দিয়ে শুরু হয়েছে কিনা চেক করে।

// let text = "JavaScript";

// console.log(text.startsWith("Java")); // true





// endsWith(searchString)

// String নির্দিষ্ট লেখা দিয়ে শেষ হয়েছে কিনা চেক করে।

// let text = "JavaScript";

// console.log(text.endsWith("Script")); // true





// match(RegExp)

// RegExp pattern এর সাথে মিল খুঁজে matching অংশ দেয়।

// let text = "I have 2 apples";
// console.log(text.match(/\d+/)); // ["2"]





// replace(searchValue, newValue)

// String এর অংশ বদলে দেয়।

// let text = "Hello World";

// let result = text.replace("World", "JS");
// console.log(result); // Hello JS






// সারাংশ

// Method	             কাজ
// at()	               নির্দিষ্ট index এর character
// concat()	           string জোড়া দেয়
// includes()	         লেখা আছে কিনা
// indexOf()	         প্রথম অবস্থান
// lastIndexOf()       শেষ অবস্থান
// startsWith()	       শুরু মিলছে কিনা
// endsWith()	         শেষ মিলছে কিনা
// match(RegExp)	     RegExp দিয়ে match খুঁজে
// replace()	         লেখা বদলায়



























// JavaScript String Methods – Notes

// replaceAll(searchValue, newValue)

// String এর সব মিল থাকা অংশ বদলে দেয়।


// let text = "I like cats. Cats are cute.";
// console.log(text.replaceAll("cats", "dogs"));
// // I like dogs. Cats are cute.





// slice(beginIndex, endIndex)

// String এর একটি অংশ কেটে নেয়।
// endIndex ধরা হয় না (শেষেরটা বাদ)।


// let text = "JavaScript";
// console.log(text.slice(0, 4)); // Java




// split(separator)

// String কে ভেঙে array বানায়।


// let text = "Apple,Banana,Mango";
// console.log(text.split(",")); 
// // ["Apple", "Banana", "Mango"]





// substring(start, end)

// slice() এর মতোই, তবে negative index নেয় না।

// let text = "JavaScript";
// console.log(text.substring(0, 4)); // Java



// toLowerCase()

// সব অক্ষর ছোট হাতের বানায়।

// let text = "HELLO";
// console.log(text.toLowerCase()); // hello





// toUpperCase()

// সব অক্ষর বড় হাতের বানায়।

// let text = "hello";
// console.log(text.toUpperCase()); // HELLO





// trim()

// String এর শুরু ও শেষের ফাঁকা স্পেস বাদ দেয়।

// let text = "  Hello  ";
// console.log(text.trim()); // "Hello"



// trimStart() / trimLeft()

// শুধু শুরু দিকের স্পেস বাদ দেয়।

// let text = "  Hello";
// console.log(text.trimStart()); // "Hello"





// trimEnd() / trimRight()

// শুধু শেষ দিকের স্পেস বাদ দেয়।


// let text = "Hello  ";
// console.log(text.trimEnd()); // "Hello"





// valueOf()

// String object থেকে আসল string value দেয়।


// let text = new String("Hello");
// console.log(text.valueOf()); // Hello





// toString()

// String কে string type এ রূপান্তর করে (সাধারণত আগেই string থাকে)।


// let text = "Hello";
// console.log(text.toString()); // Hello




// length

// String এ কয়টা character আছে তা দেখায়।


// let text = "Hello";
// console.log(text.length); // 5






// সারাংশ

// Method	                   কাজ
// replaceAll()	             সব মিল থাকা লেখা বদলায়
// slice()	                 অংশ কেটে নেয়
// split()	                 string → array
// substring()	             অংশ নেয় (negative ছাড়া)
// toLowerCase()	           ছোট হাতের
// toUpperCase()	           বড় হাতের
// trim()	                   দুই পাশের স্পেস বাদ
// trimStart()	             শুরুর স্পেস বাদ
// trimEnd()	               শেষের স্পেস বাদ
// valueOf()	               আসল string মান
// toString()	               string বানায়
// length	                   কয়টা character





















// JavaScript Date Object – Important Notes

// Date Object তৈরি করা

// // বর্তমান সময়ের জন্য
// const now = new Date();

// // নির্দিষ্ট তারিখের জন্য
// const d1 = new Date("2026-01-31"); // YYYY-MM-DD
// const d2 = new Date("2026-01-31T14:30:00"); // ISO 8601 format
// const d3 = new Date(2026, 0, 31); // মাস 0 থেকে শুরু (0 = Jan, 11 = Dec)

// // Timestamp (milliseconds since Jan 1, 1970)
// const d4 = new Date(1675123200000);







// গুরুত্বপূর্ণ Date Methods

// Date থেকে মান বের করা

// Method	                                 Description	                                Example
// getFullYear()                            বছর	                                       now.getFullYear() → 2026
// getMonth()	                              মাস (0-11)	                               now.getMonth() → 0 (Jan)
// getDate()	                              মাসের দিন (1-31)	                          now.getDate() → 31
// getDay()	                                সপ্তাহের দিন (0-6, Sun-Sat)	                 now.getDay() → 6 (Sat)
// getHours()	                              ঘণ্টা (0-23)	                               now.getHours() → 14
// getMinutes()	                            মিনিট (0-59)	                              now.getMinutes() → 30
// getSeconds()	                            সেকেন্ড (0-59)	                             now.getSeconds() → 15
// getMilliseconds()	                      মিলিসেকেন্ড (0-999)	                         now.getMilliseconds() → 500
// getTime()	                              timestamp (ms)	                            now.getTime() → 1675177800000







// Date সেট করা


// Method	                       Example	                                   Note
// setFullYear(2027)             d.setFullYear(2027)	                       বছর পরিবর্তন করে
// setMonth(5)	                 d.setMonth(5)	                             মাস পরিবর্তন (0 = Jan)
// setDate(15)                   d.setDate(15)	                             মাসের দিন পরিবর্তন
// setHours(20)	                 d.setHours(20)                              ঘণ্টা পরিবর্তন
// setMinutes(45)	               d.setMinutes(45)	                           মিনিট পরিবর্তন
// setSeconds(30)	               d.setSeconds(30)	                           সেকেন্ড পরিবর্তন









// Conversion / Format

// now.toString();       // পূর্ণ string: "Sat Jan 31 2026 14:30:00 GMT+0600 (Bangladesh Standard Time)"
// now.toDateString();   // তারিখ string: "Sat Jan 31 2026"
// now.toTimeString();   // সময় string: "14:30:00 GMT+0600 (BST)"
// now.toISOString();    // ISO 8601: "2026-01-31T08:30:00.000Z"
// now.toLocaleString(); // লোকাল ফরম্যাট অনুযায়ী




// Timestamp & Difference

// const d1 = new Date("2026-01-31");
// const d2 = new Date("2026-02-05");

// const diffMs = d2 - d1; // মিলিসেকেন্ডে পার্থক্য
// const diffDays = diffMs / (1000 * 60 * 60 * 24); // দিনে পার্থক্য
// console.log(diffDays); // 5





// UTC Version (Global Time)

// now.getUTCFullYear();
// now.getUTCMonth();
// now.getUTCDate();
// now.getUTCHours();



 


// Quick tips / tricks:

// মাস 0 থেকে শুরু হয়! Jan = 0, Dec = 11।

// getDay() = সপ্তাহের দিন, 0 = Sunday।

// Timestamp ব্যবহার করলে Date arithmetic সহজ হয়।

// ISO 8601 ফরম্যাট "YYYY-MM-DDTHH:mm:ss" সব ব্রাউজারে কাজ করে।

// Date mutable — set*() দিয়ে পুরনো Date পরিবর্তন করা যায়।






















// JavaScript Math Object – Important Notes



// Overview

// Built-in object, no need to create instance: Math.method()

// Provides: constants, rounding, powers, roots, trig, logs, random



// console.log(Math.PI); // 3.141592653589793





// Constants


// | Constant       | Value    |
// | -------------- | -------- |
// | `Math.PI`      | 3.14159… |
// | `Math.E`       | 2.71828… |
// | `Math.LN2`     | 0.69314… |
// | `Math.LN10`    | 2.30258… |
// | `Math.SQRT2`   | 1.41421… |
// | `Math.SQRT1_2` | 0.70710… |






// Rounding

// | Function        | Purpose         | Example → Output      |
// | --------------- | --------------- | --------------------- |
// | `Math.round(x)` | nearest integer | `Math.round(4.6)` → 5 |
// | `Math.floor(x)` | down (≤ x)      | `Math.floor(4.6)` → 4 |
// | `Math.ceil(x)`  | up (≥ x)        | `Math.ceil(4.2)` → 5  |
// | `Math.trunc(x)` | remove decimal  | `Math.trunc(4.9)` → 4 |
// | `Math.abs(x)`   | absolute value  | `Math.abs(-5)` → 5    |
// | `Math.sign(x)`  | sign (-1,0,1)   | `Math.sign(-7)` → -1  |





// Min, Max, Random

// Math.min(1,5,2);      // 1
// Math.max(1,5,2);      // 5
// Math.random();        // 0 <= x < 1
// Math.floor(Math.random()*10); // 0-9 random integer





// Power & Root

// | Function        | Example → Output |
// | --------------- | ---------------- |
// | `Math.pow(2,3)` | 8                |
// | `Math.sqrt(9)`  | 3                |
// | `Math.cbrt(27)` | 3                |
// | `Math.exp(1)`   | 2.718…           |
// | `Math.log(10)`  | 2.302…           |





// Trigonometry (Radian!)


// Math.sin(Math.PI/2); // 1
// Math.cos(0);         // 1
// Math.tan(Math.PI/4); // 1
// Math.asin(1);        // π/2
// Math.acos(0);        // π/2
// Math.atan(1);        // π/4

// // Degree → Radian
// let deg = 90;
// let rad = deg * (Math.PI/180);





// Misc


// | Function          | Example |
// | ----------------- | ------- |
// | `Math.log10(100)` | 2       |
// | `Math.log2(8)`    | 3       |






// Quick Memory Tricks


// round → normal rounding

// floor → down (toward -∞)

// ceil → up (toward +∞)

// trunc → just remove decimals

// Math.random() → 0 ≤ x < 1



















// JavaScript Number – Important Notes


// toExponential(fractionDigits) → সংখ্যাকে scientific (exponential) notation এ string বানায়
// let n = 123456;
// n.toExponential();    // "1.23456e+5"
// n.toExponential(2);   // "1.23e+5"



// toFixed(digits) → দশমিকের পর নির্দিষ্ট সংখ্যক ঘর রাখে (round করে) এবং string রিটার্ন করে
// let n = 5.6789;
// n.toFixed(2);   // "5.68"
// n.toFixed(0);   // "6"



// toPrecision(length) → মোট কতটি significant digit থাকবে সেটি ঠিক করে
// let n = 5.6789;
// n.toPrecision(2);  // "5.7"
// n.toPrecision(4);  // "5.679"



// toString(base) → Number কে string এ convert করে, চাইলে base দেওয়া যায়
// let n = 255;
// n.toString();    // "255"
// n.toString(16);  // "ff"
// n.toString(2);   // "11111111"



// toLocaleString() → লোকাল ফরম্যাটে নাম্বার দেখায় (comma, currency ইত্যাদি)
// let n = 1000000;
// n.toLocaleString();        // "1,000,000"
// n.toLocaleString("en-US"); // "1,000,000"



// valueOf() → Number object থেকে primitive number বের করে
// let n = new Number(500);
// n.valueOf();  // 500



// String(value) → যেকোনো value কে string বানায় (সবচেয়ে safe conversion)
// String(123);        // "123"
// String(10.5);       // "10.5"
// String(true);       // "true"
// String(null);       // "null"
// String(undefined);  // "undefined"




// parseInt(string, radix) → string থেকে integer বের করে
// parseInt("100");       // 100
// parseInt("100px");     // 100
// parseInt("10.9");      // 10
// parseInt("010", 10);   // 10



// parseFloat(string) → string থেকে decimal number বের করে
// parseFloat("10.5");   // 10.5
// parseFloat("10px");   // 10



// Number(value) → যেকোনো value কে number এ convert করে
// Number("123");     // 123
// Number("10.5");    // 10.5
// Number(true);      // 1
// Number(false);     // 0
// Number(null);      // 0
// Number("abc");     // NaN



// Number.MAX_VALUE → সবচেয়ে বড় possible number
// Number.MAX_VALUE; // 1.7976931348623157e+308



// Number.MIN_VALUE → সবচেয়ে ছোট positive number (0 না)
// Number.MIN_VALUE; // 5e-324





// NaN (Not a Number) → invalid number result
// 0 / 0;             // NaN
// Number("abc");     // NaN
// Number.isNaN(NaN); // true





// Infinity → অসীম মান বোঝায়
// 1 / 0;   // Infinity
// -1 / 0;  // -Infinity





// Quick Memory:
// toFixed = decimal ঘর ঠিক করে
// toPrecision = মোট digit ঠিক করে
// toExponential = scientific format
// parseInt = integer নেয়
// parseFloat = decimal নেয়
// Number() = number conversion
// String() = string conversion
// NaN = invalid number result


























/*   ==================================================
     DOM (Document Object Model)  Full সুন্দর নোট
     ==================================================


DOM কী?
DOM (Document Object Model) হলো ব্রাউজার যে সিস্টেম ব্যবহার করে একটি HTML ওয়েবপেজকে object আকারে গাছের (tree structure) মতো সাজায়, যাতে JavaScript সেই পেজের অংশগুলো নিয়ন্ত্রণ ও পরিবর্তন করতে পারে।


সহজ ভাষায়:
DOM = JavaScript দিয়ে ওয়েবপেজ নিয়ন্ত্রণ করার মাধ্যম



--------------------------------------------------
ব্রাউজার কীভাবে DOM তৈরি করে?
--------------------------------------------------
ব্রাউজার HTML ফাইল পড়ে
প্রতিটি HTML ট্যাগকে আলাদা object (node) বানায়
সব node একসাথে মিলেই তৈরি হয় DOM Tree



উদাহরণ HTML:
<html>
  <body>
    <h1>Hello</h1>
    <p id="msg">Hi</p>
  </body>
</html>

DOM Tree Structure:
Document
 └── html
      └── body
           ├── h1
           └── p (id="msg")



--------------------------------------------------
DOM এর গুরুত্বপূর্ণ টার্ম
--------------------------------------------------
Document        = পুরো ওয়েবপেজ
Node            = DOM এর প্রতিটি অংশ (tag, text, attribute)
Element Node    = HTML ট্যাগ (div, p, h1 ইত্যাদি)
Text Node       = ট্যাগের ভিতরের লেখা
Attribute Node  = id, class, src ইত্যাদি
DOM Tree        = সব node মিলে গাছের মতো গঠন



--------------------------------------------------
JavaScript কীভাবে DOM ব্যবহার করে?
--------------------------------------------------
JavaScript DOM ব্যবহার করে লাইভ ওয়েবপেজ পরিবর্তন করতে পারে:
লেখা পরিবর্তন
স্টাইল পরিবর্তন
নতুন element যোগ
element মুছে ফেলা
user event handle করা (click, input ইত্যাদি)




==================================================
DOM থেকে Element Select করা
==================================================

ID দিয়ে
document.getElementById("msg");

Class দিয়ে
document.getElementsByClassName("box");   // HTMLCollection

Tag দিয়ে
document.getElementsByTagName("p");       // HTMLCollection

CSS Selector দিয়ে (সবচেয়ে বেশি ব্যবহৃত)
document.querySelector(".box");           // প্রথম match
document.querySelectorAll(".box");        // সব match (NodeList)




--------------------------------------------------
NOTE:
getElementsByClassName & getElementsByTagName → HTMLCollection (array না)
querySelectorAll → NodeList (loop করা সহজ)




==================================================
Content পরিবর্তন
==================================================
element.textContent = "New Text";       // শুধু লেখা
element.innerHTML = "<b>Bold</b>";      // HTML সহ (সতর্ক থাকতে হবে)




--------------------------------------------------
innerHTML ব্যবহার করলে XSS risk থাকতে পারে যদি user input সরাসরি বসানো হয়





==================================================
Style পরিবর্তন
==================================================
element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.fontSize = "20px";




==================================================
নতুন Element তৈরি ও যোগ করা
==================================================
const newDiv = document.createElement("div");
newDiv.textContent = "I am new!";
document.body.appendChild(newDiv);




==================================================
Element মুছে ফেলা
==================================================
element.remove();

অথবা
parent.removeChild(child);




==================================================
Attribute পরিবর্তন
==================================================
element.setAttribute("class", "newClass");
element.getAttribute("id");
element.removeAttribute("title");




==================================================
Event Handling (User Interaction)
==================================================
HTML:
<button id="btn">Click</button>

JavaScript:
document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});




Common Events:
click      = মাউস ক্লিক
mouseover  = মাউস উপরে আনা
mouseout   = মাউস সরানো
keydown    = কিবোর্ড চাপ
submit     = ফর্ম সাবমিট
change     = ইনপুট পরিবর্তন




--------------------------------------------------
NOTE:
addEventListener ব্যবহার করা best practice, inline onclick না ব্যবহার করাই ভালো




==================================================
DOM Traversing (Node ঘোরা)
==================================================
element.parentNode
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling





==================================================
innerHTML vs textContent
==================================================
innerHTML     = HTML ট্যাগ বুঝে, দ্রুত UI বানাতে ভালো, কিন্তু নিরাপদ না
textContent   = শুধু লেখা নেয়, বেশি নিরাপদ




==================================================
DOM Manipulation Basic Flow
==================================================
Element select করো
Text / Style / Attribute পরিবর্তন করো
Event listener যোগ করো
প্রয়োজন হলে নতুন element তৈরি করো





==================================================
Complete ছোট Example
==================================================
<h1 id="title">Hello</h1>
<button id="btn">Change</button>

<script>
  const title = document.getElementById("title");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function() {
    title.textContent = "DOM Changed!";
    title.style.color = "blue";
  });
</script>




==================================================
Exam এর জন্য এক লাইনের সংজ্ঞা
==================================================
DOM হলো ব্রাউজার দ্বারা তৈরি HTML ডকুমেন্টের object ভিত্তিক গঠন, যা JavaScript দিয়ে ওয়েবপেজের কন্টেন্ট, স্ট্রাকচার ও স্টাইল পরিবর্তন করতে সাহায্য করে।
==================================================

                                                       */




















/*   ==================================================
     JavaScript DOM – Accessing Elements
     ==================================================


Accessing elements in DOM:
DOM এ element access করার জন্য JavaScript অনেকগুলো method ব্যবহার করে। এখানে সব গুরুত্বপূর্ণ method দেখানো হলো:





--------------------------------------------------
1️. getElementById
--------------------------------------------------
- একটি unique element কে তার id দিয়ে access করে।  
- রিটার্ন করে **single element** (Element object)।


Syntax:
const element = document.getElementById("idName");


Example:
<p id="msg">Hello</p>
<script>
  const msg = document.getElementById("msg");
  msg.textContent = "Hi there!";
</script>







--------------------------------------------------
2️. getElementsByClassName
--------------------------------------------------
- একই class থাকা সব element access করে।  
- রিটার্ন করে **HTMLCollection** (array নয়, index দিয়ে access করতে হবে)।


Syntax:
const elements = document.getElementsByClassName("className");


Example:
<div class="box">Box1</div>
<div class="box">Box2</div>
<script>
  const boxes = document.getElementsByClassName("box");
  boxes[0].style.color = "red";   // প্রথম box
</script>







--------------------------------------------------
3️. getElementsByTagName
--------------------------------------------------
- একটি নির্দিষ্ট tag (p, div, h1 ইত্যাদি) সব element access করে।  
- রিটার্ন করে **HTMLCollection**।

Syntax:
const elements = document.getElementsByTagName("p");

Example:
<p>Para1</p>
<p>Para2</p>
<script>
  const paras = document.getElementsByTagName("p");
  paras[1].textContent = "Second Paragraph Changed";
</script>






--------------------------------------------------
4️. querySelector
--------------------------------------------------
- CSS selector ব্যবহার করে **প্রথম match element** access করে।  
- খুব flexible ও বেশি ব্যবহৃত।


Syntax:
const element = document.querySelector("selector");


Example:
<p class="text">Hello</p>
<script>
  const el = document.querySelector(".text"); // প্রথম .text element
  el.style.color = "blue";
</script>






--------------------------------------------------
5️. querySelectorAll
--------------------------------------------------
- CSS selector ব্যবহার করে **সব match element** access করে।  
- রিটার্ন করে **NodeList** (loop করা সহজ)।


Syntax:
const elements = document.querySelectorAll("selector");


Example:
<p class="text">Para1</p>
<p class="text">Para2</p>
<script>
  const allText = document.querySelectorAll(".text");
  allText.forEach(function(el) {
    el.style.fontWeight = "bold";
  });
</script>








--------------------------------------------------
6️. Other useful properties
--------------------------------------------------
- document.forms → সব ফর্ম access
- document.images → সব image access
- document.links → সব link access
- document.body → body element access
- document.head → head element access






--------------------------------------------------
7️. Notes / Tips:
- getElementsByClassName ও getElementsByTagName → HTMLCollection, live collection, index দিয়ে access করতে হয়
- querySelectorAll → NodeList, loop করা যায়, static collection
- সবসময় preferred: querySelector / querySelectorAll কারণ flexible & clean
- ID should be unique, class ও tag একাধিক element দিতে পারে






--------------------------------------------------
8️. Summary Table:

| Method                  | Returns          | Single / Multiple | Notes                          |
|--------------------------|----------------|-----------------|-------------------------------|
| getElementById(id)       | Element         | Single          | ID must be unique             |
| getElementsByClassName() | HTMLCollection  | Multiple        | Live collection               |
| getElementsByTagName()   | HTMLCollection  | Multiple        | Live collection               |
| querySelector()          | Element         | Single          | First match                   |
| querySelectorAll()       | NodeList        | Multiple        | All matches, loopable         |






==================================================
Example  All methods in action
==================================================
<div id="myDiv" class="box">Div1</div>
<div class="box">Div2</div>
<p>Para1</p>
<p class="text">Para2</p>

<script>
  // By ID
  const div1 = document.getElementById("myDiv");
  div1.style.color = "red";

  // By Class
  const boxes = document.getElementsByClassName("box");
  boxes[1].textContent = "Box2 Changed";

  // By Tag
  const paras = document.getElementsByTagName("p");
  paras[0].style.fontWeight = "bold";

  // By querySelector
  const textPara = document.querySelector(".text");
  textPara.style.fontSize = "20px";

  // By querySelectorAll
  const allBoxes = document.querySelectorAll(".box");
  allBoxes.forEach(el => el.style.border = "1px solid black");
</script>





==================================================
Exam ready one-line definition:
==================================================
**Accessing elements in DOM means using JavaScript methods (getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll) to select HTML elements for manipulation.**
==================================================

                                                           */





















/*  ==================================================
    DOM  Modifying Elements Text
    ==================================================


Modifying text in DOM:
DOM element-এর text পরিবর্তনের জন্য JavaScript-এ দুইটা প্রধান property আছে:
1. textContent
2. innerText



--------------------------------------------------
1️. textContent
--------------------------------------------------
- Element এর **সকল text node** access করে, hidden text সহ।  
- HTML tags ignore করে, শুধু text পরিবর্তন করে।  
- খুব fast এবং preferred method যখন HTML tags matter না।

Syntax:
element.textContent = "New Text";


Example:
<p id="para1">Hello <b>World</b></p>
<script>
  const p = document.getElementById("para1");
  p.textContent = "Changed Text"; // Output: "Changed Text" (Bold gone)
</script>




--------------------------------------------------
2️. innerText
--------------------------------------------------
- Element এর **visible text** access করে।  
- CSS দিয়ে hide করা text ignore হয়।  
- Slower than textContent।  
- Useful when visible text matter করে।

Syntax:
element.innerText = "New Text";


Example:
<p id="para2" style="display:none;">Hidden Text</p>
<script>
  const p2 = document.getElementById("para2");
  console.log(p2.innerText);   // Output: "" (hidden text ignored)
  console.log(p2.textContent); // Output: "Hidden Text"
</script>




--------------------------------------------------
3️. Key Differences: textContent vs innerText
--------------------------------------------------
| Property       | Includes Hidden Text | Includes HTML Tags | Performance | Notes |
|----------------|-------------------|------------------|-------------|-------|
| textContent    | Yes               | No               | Fast        | Use when all text matter, ignores style |
| innerText      | No                | No               | Slower      | Use when only visible text matter, style aware |





--------------------------------------------------
4️. Notes / Tips:
- textContent সবসময় preferred unless you specifically need visible text.
- innerText respects CSS like display:none, visibility:hidden.
- Both can **read** & **write** text:
  - Reading: `let txt = element.textContent;`
  - Writing: `element.textContent = "New Text";`



--------------------------------------------------
5️. Example  textContent & innerText
--------------------------------------------------
<div id="div1">Hello <b>Bold</b> World</div>
<div id="div2" style="display:none;">Hidden Text</div>


<script>
  // textContent
  const d1 = document.getElementById("div1");
  console.log(d1.textContent); // Output: "Hello Bold World"
  d1.textContent = "Changed using textContent"; 

  // innerText
  const d2 = document.getElementById("div2");
  console.log(d2.innerText);   // Output: "" (hidden ignored)
  console.log(d2.textContent); // Output: "Hidden Text"
</script>




--------------------------------------------------
6️. Exam ready one-line definition:
--------------------------------------------------
**textContent এবং innerText হলো DOM properties যেগুলো ব্যবহার করে JavaScript element-এর text content পড়া ও পরিবর্তন করতে পারে; textContent সব text node ধরে, innerText শুধু visible text দেখায়।**
==================================================

                                                          */

























/*     ==================================================
       DOM  Working with Element Attributes
       ==================================================
 

 What are Element Attributes?
- Attributes হলো element-এর extra information বা properties, যেমন:
  - id, class, src, href, title, alt ইত্যাদি
- JavaScript দিয়ে আমরা attributes পড়তে এবং পরিবর্তন করতে পারি।



--------------------------------------------------
1️. getAttribute()
--------------------------------------------------

- Element-এর attribute value পড়ার জন্য ব্যবহার হয়।

- Syntax:
element.getAttribute("attributeName");


Example:
<img id="img1" src="image.png" alt="My Image">
<script>
  const img = document.getElementById("img1");
  console.log(img.getAttribute("src"));   // Output: "image.png"
  console.log(img.getAttribute("alt"));   // Output: "My Image"
</script>





--------------------------------------------------
2️. setAttribute()
--------------------------------------------------

- Element-এর attribute value পরিবর্তন বা নতুন attribute যোগ করার জন্য ব্যবহার হয়।  

- Syntax:
element.setAttribute("attributeName", "value");


Example:
<a id="link1" href="https://example.com">Example</a>
<script>
  const link = document.getElementById("link1");
  link.setAttribute("href", "https://google.com"); // href পরিবর্তন
  link.setAttribute("target", "_blank");          // নতুন attribute যোগ
</script>






--------------------------------------------------
3️. removeAttribute()
--------------------------------------------------
- Element থেকে attribute remove করতে ব্যবহার হয়।  

- Syntax:
element.removeAttribute("attributeName");


Example:
<p id="para1" title="Tooltip">Text</p>
<script>
  const p = document.getElementById("para1");
  p.removeAttribute("title"); // title attribute gone
</script>






--------------------------------------------------
4️. Notes / Tips:
- getAttribute() → যেকোনো attribute value return করে (HTML or DOM)
- setAttribute() → নতুন attribute যোগ বা modify করা যায়
- removeAttribute() → attribute মুছে দেয়
- Commonly used attributes: id, class, src, href, alt, title, value, name
- HTML5 custom attribute: data-* (e.g., data-id, data-user)





--------------------------------------------------
5️. Example  All together
--------------------------------------------------
<div id="myDiv" class="box" data-info="123">Hello</div>
<script>
  const div = document.getElementById("myDiv");

  // Read attributes
  console.log(div.getAttribute("id"));        // "myDiv"
  console.log(div.getAttribute("class"));     // "box"
  console.log(div.getAttribute("data-info")); // "123"

  // Modify attribute
  div.setAttribute("class", "container");    // class changed
  div.setAttribute("title", "Tooltip text"); // new attribute added

  // Remove attribute
  div.removeAttribute("data-info");
</script>





--------------------------------------------------
6️. Exam ready one-line definition:
--------------------------------------------------
**getAttribute() DOM method দিয়ে element-এর attribute value পড়া হয়, setAttribute() দিয়ে attribute value পরিবর্তন বা নতুন attribute যোগ করা হয়।**
==================================================

                                                          */






















/*     ==================================================
       DOM  Adding and Removing Classes with classList
       ==================================================


 classList কী?

classList হলো DOM element-এর একটি property, যা দিয়ে সহজে CSS class add, remove, toggle এবং check করা যায়।

আগে class পরিবর্তন করতে setAttribute("class", "...") ব্যবহার করা হতো, কিন্তু এখন classList বেশি সহজ ও safe।


Syntax:
element.classList




--------------------------------------------------
1️. classList.add()
--------------------------------------------------
- নতুন class যোগ করতে ব্যবহার হয়।
- একাধিক class একসাথে যোগ করা যায়।

Syntax:
element.classList.add("className");


Example:
<div id="box"></div>
<script>
  const box = document.getElementById("box");
  box.classList.add("active");
  box.classList.add("highlight", "big");
</script>





--------------------------------------------------
2️. classList.remove()
--------------------------------------------------
- নির্দিষ্ট class remove করতে ব্যবহার হয়।

Syntax:
element.classList.remove("className");


Example:
box.classList.remove("active");





--------------------------------------------------
3️. classList.toggle()
--------------------------------------------------
- Class থাকলে remove করবে, না থাকলে add করবে।
- খুব useful button click বা theme change এ।

Syntax:
element.classList.toggle("className");


Example:
<button id="btn">Toggle Dark Mode</button>
<div id="content">Hello</div>

<script>
  const btn = document.getElementById("btn");
  const content = document.getElementById("content");

  btn.addEventListener("click", function() {
    content.classList.toggle("dark-mode");
  });
</script>






--------------------------------------------------
4️. classList.contains()
--------------------------------------------------
- কোনো class আছে কি না check করতে ব্যবহার হয়।
- Return করে true বা false।

Syntax:
element.classList.contains("className");


Example:
if (box.classList.contains("active")) {
  console.log("Box is active");
}






--------------------------------------------------
5️. classList.replace()
--------------------------------------------------
- একটি class কে অন্য class দিয়ে replace করে।

Syntax:
element.classList.replace("oldClass", "newClass");


Example:
box.classList.replace("light", "dark");






--------------------------------------------------
6️. Notes / Tips
--------------------------------------------------
- classList ব্যবহার করা best practice
- Multiple classes safely manage করা যায়
- CSS styling change করার সবচেয়ে clean method
- Dynamic UI (dark mode, active menu, show/hide) এ বেশি ব্যবহৃত





--------------------------------------------------
7️. Summary Table
--------------------------------------------------
| Method              | কাজ |
|---------------------|---------------------------|
| add()               | নতুন class যোগ করে |
| remove()            | class মুছে ফেলে |
| toggle()            | থাকলে remove, না থাকলে add |
| contains()          | class আছে কি না check করে |
| replace()           | পুরোনো class বদলে নতুন দেয় |





--------------------------------------------------
8️. Complete Example
--------------------------------------------------
<style>
  .dark { background:black; color:white; }
  .highlight { border:2px solid red; }
</style>

<div id="box">Hello World</div>
<button id="btn">Toggle Dark</button>

<script>
  const box = document.getElementById("box");
  const btn = document.getElementById("btn");

  box.classList.add("highlight");

  btn.addEventListener("click", function() {
    box.classList.toggle("dark");
  });
</script>



--------------------------------------------------
 Exam Ready One-Line Definition:
--------------------------------------------------
classList হলো DOM element-এর একটি property যা দিয়ে JavaScript ব্যবহার করে সহজে CSS class add, remove, toggle এবং check করা যায়।
==================================================

                                                          */




























/*      ==================================================
        DOM  Changing Styles with the style Property
        ==================================================


style Property কী?
JavaScript দিয়ে কোনো HTML element-এর CSS style সরাসরি পরিবর্তন করার জন্য `style` property ব্যবহার করা হয়।


Syntax:
element.style.propertyName = "value";


CSS property name camelCase এ লিখতে হয় (background-color → backgroundColor)





--------------------------------------------------
1️. Text Color পরিবর্তন
--------------------------------------------------
element.style.color = "red";


Example:
<p id="para">Hello</p>
<script>
  const p = document.getElementById("para");
  p.style.color = "blue";
</script>





--------------------------------------------------
2️. Background Color পরিবর্তন
--------------------------------------------------
element.style.backgroundColor = "yellow";





--------------------------------------------------
3️. Font Size পরিবর্তন
--------------------------------------------------
element.style.fontSize = "20px";





--------------------------------------------------
4️. Width & Height পরিবর্তন
--------------------------------------------------
element.style.width = "200px";
element.style.height = "100px";




--------------------------------------------------
5️. Border যোগ করা
--------------------------------------------------
element.style.border = "2px solid black";




--------------------------------------------------
6️. Display Property পরিবর্তন (Show/Hide)
--------------------------------------------------
element.style.display = "none";   // Hide
element.style.display = "block";  // Show





--------------------------------------------------
7️. Multiple Styles একসাথে
--------------------------------------------------
const box = document.getElementById("box");

box.style.color = "white";
box.style.backgroundColor = "black";
box.style.padding = "10px";
box.style.borderRadius = "8px";





--------------------------------------------------
8️. CSS Property Name Rules
--------------------------------------------------
CSS লিখা হয় → JavaScript এ লিখতে হয়

background-color → backgroundColor  
font-size → fontSize  
margin-top → marginTop  
border-radius → borderRadius  






--------------------------------------------------
9️. style vs classList (Important)
--------------------------------------------------
| style property              | classList |
|-----------------------------|-----------|
| Inline CSS যোগ করে         | CSS class যোগ করে |
| ছোট style change এ ভালো    | বড় design change এ ভালো |
| Harder to maintain          | Cleaner & reusable |





--------------------------------------------------
10. Complete Example
--------------------------------------------------

<style>
  .box { width:150px; height:150px; }
</style>

<div id="box" class="box">Hello</div>
<button id="btn">Change Style</button>

<script>
  const box = document.getElementById("box");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function() {
    box.style.backgroundColor = "purple";
    box.style.color = "white";
    box.style.transform = "rotate(10deg)";
  });
</script>





--------------------------------------------------
Exam Ready One-Line Definition:
--------------------------------------------------
JavaScript এর style property ব্যবহার করে DOM element-এর inline CSS style সরাসরি পরিবর্তন করা যায়।
==================================================

                                                          */
    






















/*         ==================================================
           DOM  Creating New Elements using createElement()
           ==================================================


createElement() কী?
JavaScript দিয়ে নতুন HTML element বানানোর জন্য `document.createElement()` method ব্যবহার করা হয়।  
এটি DOM-এ নতুন element object তৈরি করে, কিন্তু সাথে সাথে পেজে দেখায় না—পরে append করতে হয়।


Syntax:
const element = document.createElement("tagName");


Example:
const div = document.createElement("div");




--------------------------------------------------
1️. নতুন Element তৈরি
--------------------------------------------------
const newPara = document.createElement("p");

এখনো এটি পেজে দেখা যাবে না, কারণ DOM-এ যোগ করা হয়নি।




--------------------------------------------------
2️. Element-এ Text যোগ করা
--------------------------------------------------
newPara.textContent = "This is a new paragraph";

অথবা
newPara.innerText = "This is a new paragraph";





--------------------------------------------------
3️. Element-এ Attribute যোগ করা
--------------------------------------------------
newPara.setAttribute("class", "highlight");
newPara.setAttribute("id", "newP");




--------------------------------------------------
4️. Style যোগ করা
--------------------------------------------------
newPara.style.color = "blue";
newPara.style.fontSize = "18px";





--------------------------------------------------
5️. DOM-এ Element যোগ করা (append)
--------------------------------------------------
Element তৈরি করার পর সেটিকে পেজে দেখাতে হলে parent element-এর ভিতরে যোগ করতে হয়।

document.body.appendChild(newPara);

অথবা
const container = document.getElementById("box");
container.appendChild(newPara);





--------------------------------------------------
6️. Multiple Elements তৈরি
--------------------------------------------------
for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  document.getElementById("list").appendChild(li);
}




--------------------------------------------------
7️. createElement + classList ব্যবহার
--------------------------------------------------
const div = document.createElement("div");
div.classList.add("card", "shadow");





--------------------------------------------------
8️. Complete Example
--------------------------------------------------
<div id="container"></div>
<button id="btn">Add Item</button>

<script>
  const btn = document.getElementById("btn");
  const container = document.getElementById("container");

  btn.addEventListener("click", function() {
    const newDiv = document.createElement("div");
    newDiv.textContent = "New Element Added!";
    newDiv.classList.add("box");
    newDiv.style.marginTop = "10px";

    container.appendChild(newDiv);
  });
</script>





--------------------------------------------------
9️. Notes / Tips
--------------------------------------------------
 createElement শুধু element বানায়, পেজে দেখাতে appendChild দরকার  
 textContent ব্যবহার করা safe  
 classList দিয়ে class add করা best practice  
 Dynamic UI (todo list, chat message, comments) এ খুব ব্যবহৃত




--------------------------------------------------
Exam Ready One-Line Definition:
--------------------------------------------------
createElement() হলো DOM method যা দিয়ে JavaScript নতুন HTML element তৈরি করে, যা পরে DOM-এ append করে ওয়েবপেজে দেখানো হয়।
==================================================

                                                        */
   






















// ==================================================
//  DOM – Appending Elements using append()
// ==================================================


//  append() কী?
// append() হলো একটি modern DOM method যা দিয়ে parent element-এর ভিতরে নতুন element বা text যোগ করা যায়।


// এটি appendChild() এর মতো, কিন্তু আরও flexible।


// Syntax:
// parentElement.append(nodeOrText);



// --------------------------------------------------
// 1️. append() দিয়ে Element যোগ করা
// --------------------------------------------------
// const newDiv = document.createElement("div");
// newDiv.textContent = "Hello World";

// document.body.append(newDiv);

//  Element টি body এর শেষ child হিসেবে যোগ হবে



// --------------------------------------------------
// 2️. append() দিয়ে Text যোগ করা
// --------------------------------------------------
// document.body.append("This is plain text");

//  append() text string-ও নিতে পারে (appendChild পারে না)




// --------------------------------------------------
// 3️. একাধিক Element একসাথে যোগ করা
// --------------------------------------------------
// const p1 = document.createElement("p");
// p1.textContent = "Paragraph 1";

// const p2 = document.createElement("p");
// p2.textContent = "Paragraph 2";

// document.body.append(p1, p2);

//  appendChild() একবারে শুধু একটি element নেয়, কিন্তু append() একাধিক নিতে পারে




// --------------------------------------------------
// 4️. append() vs appendChild()
// --------------------------------------------------
// | Feature              | append()       | appendChild() |
// |----------------------|----------------|---------------|
// | একাধিক element যোগ  | Yes            | No            |
// | Text node যোগ       | Yes            | No            |
// | Return value         | Nothing        | Appended node |
// | Modern method        | Yes            | Older method  |



// --------------------------------------------------
// 5️. Example – Button click এ append()
// --------------------------------------------------
// <div id="container"></div>
// <button id="btn">Add Item</button>

// <script>
//   const btn = document.getElementById("btn");
//   const container = document.getElementById("container");

//   btn.addEventListener("click", function() {
//     const item = document.createElement("p");
//     item.textContent = "New Item Added!";
//     item.style.color = "green";

//     container.append(item);
//   });
// </script>




// --------------------------------------------------
// 6️. Notes / Tips
// --------------------------------------------------
// ✔ append() modern এবং flexible  
// ✔ Multiple nodes একসাথে যোগ করা যায়  
// ✔ Text string সরাসরি যোগ করা যায়  
// ✔ appendChild() এর মতো return করে না  
// ✔ Old browser support খুব পুরোনো browser এ নাও থাকতে পারে




// --------------------------------------------------
//  Exam Ready One-Line Definition:
// --------------------------------------------------
// append() হলো একটি DOM method যা দিয়ে parent element-এর ভিতরে নতুন element বা text এক বা একাধিক একসাথে যোগ করা যায়।
// ==================================================




























 /*      ==================================================
         DOM  Removing Elements using removeChild() and remove()
         ==================================================

             Removing Elements in DOM

JavaScript ব্যবহার করে DOM থেকে element মুছে ফেলা যায়। এর জন্য দুইটি গুরুত্বপূর্ণ method হলো:
removeChild()
remove()




--------------------------------------------------
1️. removeChild()
--------------------------------------------------
- Parent element তার child element কে remove করে
- পুরোনো (traditional) method


Syntax:
parentElement.removeChild(childElement);


Example:
<ul id="list">
  <li id="item1">Item 1</li>
  <li id="item2">Item 2</li>
</ul>

<script>
  const list = document.getElementById("list");
  const item = document.getElementById("item1");

  list.removeChild(item);  // Item 1 removed
</script>

 এখানে child remove করতে হলে parent reference দরকার







--------------------------------------------------
2️. remove()
--------------------------------------------------
- Modern method
- Element নিজে নিজেই DOM থেকে remove হতে পারে
- Parent reference দরকার হয় না


Syntax:
element.remove();


Example:
const item = document.getElementById("item2");
item.remove();  // Item 2 removed





--------------------------------------------------
3️. removeChild() vs remove()
--------------------------------------------------
| Feature                 | removeChild()         | remove()           |
|-------------------------|-----------------------|--------------------|
| কে call করে             | Parent element        | Target element    |
| Parent reference দরকার  | Yes                   | No                |
| Modern / Old            | Older method          | Modern method      |
| Easy to use             | একটু বেশি code লাগে    | সহজ ও clean      |






--------------------------------------------------
4️. Example – Button click এ remove()
--------------------------------------------------
<div id="box">Delete Me</div>
<button id="btn">Remove Box</button>

<script>
  const btn = document.getElementById("btn");
  const box = document.getElementById("box");

  btn.addEventListener("click", function() {
    box.remove();
  });
</script>





--------------------------------------------------
5️. Example – removeChild() ব্যবহার
--------------------------------------------------
<div id="parent">
  <p id="child">Hello</p>
</div>

<script>
  const parent = document.getElementById("parent");
  const child = document.getElementById("child");

  parent.removeChild(child);
</script>





--------------------------------------------------
6️. Notes / Tips
--------------------------------------------------
✔ remove() ব্যবহার করা সহজ ও modern  
✔ removeChild() দরকার হয় যখন parent already জানা আছে  
✔ Event, dynamic UI, todo list, chat message delete ইত্যাদিতে বেশি ব্যবহৃত  
✔ remove() খুব পুরোনো browser এ নাও থাকতে পারে (rare case)





--------------------------------------------------
 Exam Ready One-Line Definition:
--------------------------------------------------
removeChild() method দিয়ে parent element তার child কে DOM থেকে সরায়, আর remove() method দিয়ে element নিজেই DOM থেকে সরানো যায়।
==================================================

                                                           */
         























/*       ==================================================
         JavaScript Event Types  Complete Notes
         ==================================================

Event কী?
Event হলো কোনো action বা ঘটনা, যা user বা browser এর মাধ্যমে ঘটে।
যেমন: mouse click, key press, form submit, page load ইত্যাদি।

JavaScript এই event গুলো detect করে এবং তার উপর কাজ করে।





==================================================
Mouse Events
==================================================

Mouse দিয়ে যেসব event ঘটে সেগুলো Mouse Events।

Common Mouse Events:
--------------------------------------------------
click      → মাউস ক্লিক করলে  
dblclick   → ডাবল ক্লিক করলে  
mouseover  → মাউস element এর উপর আনলে  
mouseout   → মাউস element থেকে সরালে  
mousedown  → মাউস বাটন চাপলে  
mouseup    → মাউস বাটন ছাড়লে  
mousemove  → মাউস নড়াচড়া করলে  


Example:
--------------------------------------------------
<button id="btn">Click Me</button>

<script>
  document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
  });
</script>






==================================================
Keyboard Events
==================================================

Keyboard দিয়ে key press করলে যে event ঘটে সেগুলো Keyboard Events।

Common Keyboard Events:
--------------------------------------------------
keydown   → key চাপা শুরু করলে  
keyup     → key ছেড়ে দিলে  
keypress  → key press (পুরোনো, এখন কম ব্যবহার হয়)


Example:
--------------------------------------------------
<input type="text" id="inputBox">

<script>
  document.getElementById("inputBox").addEventListener("keydown", function() {
    console.log("Key pressed");
  });
</script>






==================================================
Form Events
==================================================

Form related কাজের সময় যে event ঘটে সেগুলো Form Events।

Common Form Events:
--------------------------------------------------
submit  → form submit করলে  
change  → input value পরিবর্তন হলে  
focus   → input এ cursor গেলে  
blur    → input থেকে cursor সরালে  
reset   → form reset করলে  


Example:
--------------------------------------------------
<form id="myForm">
  <input type="text">
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // page reload বন্ধ
    alert("Form submitted");
  });
</script>






==================================================
Window Events
==================================================

Browser window বা page related event গুলো Window Events।

Common Window Events:
--------------------------------------------------
load    → page পুরো load হলে  
resize  → window resize করলে  
scroll  → page scroll করলে  
unload  → page বন্ধ হলে  


Example:
--------------------------------------------------
<script>
  window.addEventListener("load", function() {
    console.log("Page fully loaded");
  });

  window.addEventListener("resize", function() {
    console.log("Window resized");
  });
</script>






==================================================
addEventListener() Syntax
==================================================

element.addEventListener("eventName", function() {
  // event related code
});


Example:
--------------------------------------------------
button.addEventListener("click", myFunction);




==================================================
Event Types Summary Table
==================================================

Mouse Events     → click, mouseover, mouseout  
Keyboard Events  → keydown, keyup  
Form Events      → submit, change, focus, blur  
Window Events    → load, resize, scroll  


==================================================
Exam Ready One-Line Definition
==================================================
Event হলো user বা browser এর মাধ্যমে ঘটে যাওয়া কোনো action, এবং JavaScript event listener ব্যবহার করে সেই action এর উপর কাজ করতে পারে।
==================================================

                                                                    */



















 



// ==========================================
// JavaScript: Event Object & Target Property
// ==========================================


// ==========================
// 1. Event Object (গুরুত্বপূর্ণ ডিটেইলস)
// ==========================


// Event Object হলো ব্রাউজার স্বয়ংক্রিয়ভাবে তৈরি করা object যা ইভেন্ট সম্পর্কিত তথ্য ধারণ করে


// গুরুত্বপূর্ণ Properties:
    // type → ইভেন্টের ধরন, যেমন 'click', 'keydown', 'submit'
    // target → মূল element যেখানে action ঘটেছে
    // currentTarget → listener attach করা element
    // timeStamp → ইভেন্ট ঘটার সময়
    // bubbles → ইভেন্ট bubbling হচ্ছে কিনা (true/false)
    // cancelable → ইভেন্ট cancel করা যায় কিনা (true/false)


// গুরুত্বপূর্ণ Methods:
    // preventDefault() → ডিফল্ট browser behavior আটকায়
    // stopPropagation() → ইভেন্ট bubbling বা capturing থামায়


// Example: Event Object:

/*  const button = document.querySelector('#myButton');
button.addEventListener('click', function(event) {
    console.log('Event Object:', event);           // পুরো event object
    console.log('Event Type:', event.type);       // ইভেন্টের ধরন
    console.log('Listener Element:', event.currentTarget); // listener attach element
    console.log('TimeStamp:', event.timeStamp);   // ইভেন্টের সময়
});   */


// ==========================
// 2. Target Property (গুরুত্বপূর্ণ ডিটেইলস)
// ==========================


// event.target হলো সেই element যেখানে ইউজারের action ঘটেছে
// - read-only property
// - bubbling/nested element থাকলেও মূল action element নির্দেশ করে
// - event.currentTarget এর সাথে পার্থক্য:
//     event.target → মূল action element
//     event.currentTarget → listener attach element


// Example: Target Property:

/*  const listItems = document.querySelectorAll('li');
listItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        console.log('Target Element:', event.target);   // মূল element যেখানে click হয়েছে
        console.log('Tag Name:', event.target.tagName); // clicked element-এর tag
        console.log('ID:', event.target.id);            // clicked element-এর id
        console.log('Classes:', event.target.className);// clicked element-এর class
    });
});         */

























