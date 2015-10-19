///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum (a, b){
  console.log(a+b)
};

sum(2,4);

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbsers.

function avg(c, d , e, f){
  console.log((c+d+e+f)/avg.length)
};

avg(1, 2, 3, 4, 90);


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(x){
  console.log(x.length)
};
x="I like ice cream."
y="I want to live on a mountain."

getLength(x)
getLength(y)


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.


function greaterThan(h, g){
  if (h > g) {
    console.log (true)
    }
  else if (!(h>g)){
    console.log (false)
    }
  }
h=11
g=10

greaterThan(h,g)



// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.


function greet(){
  console.log("I really like licking " + name +"'s face")
};
 name = "George";

 greet(name);


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"


function madlib(name, adv, adj, celeberity){
  console.log( name + ' is '+ adv +' more '+ adj + ' than ' + celeberity +'.' )
}

madlib('John', 'gently', 'rugged', 'George Clooney')


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
