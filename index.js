// task 1
function add_three_num(n1, n2, n3){
    return n1 + n2 + n3;
}
console.log("the answer is:",add_three_num(1,2,3));

// task 2
let best_meal = 'jollof rice';
let favourite = `jethro loves ${best_meal}`
console.log(`the answer is: jethro loves ${best_meal}`);

// task 3
let nick_name = 'jaytee'
let Count = 20;

console.log(nick_name, Count );

// takk 4
let greet = function (name ='jethro', time ='morning') {
    console.log(`the answer is: good ${time} ${name}`);
}

greet();

// task 5
let isPublicHoliday = true;
let isWeekDay = false;

let isPublicHolidayAndisWeekday = isPublicHoliday && isWeekDay;
let isPublicHolidayORisWeekday = isPublicHoliday || isWeekday;

console.log(
   `it is both public holiday and weekday: ${isPublicHolidayAndisWeekday}`
);
console.log(
   `it is either public holiday and weekday: ${isPublicHolidayORisWeekday}`
);


// task 6
/* this function adds three variables n1, n2 and n3 respectively
giving them values of 1 , 2 and 3 which gives an output of 6*/
function add_three_num(n1, n2, n3){    //function declaring the variables
    return n1 + n2 + n3;              //   returning the value of the variables
   }
    console.log("the answer is:",add_three_num(1,2,3)); //calling the fuction and assigning values to the variables

// task 7
let Age;
console.log(Age);

Age = null;
console.log(Age);

// task 8
let x = 20;
let y = 10;

console.log(`addition: ${x+y}`);
console.log(`subtraction: ${x-y}`);
console.log(`multiplication: ${x*y}`);
console.log(`division: ${x/y}`);
console.log(`modulus: ${x%y}`);


// task 9
let count = 0;

count+=10;
count*=20;
console.log("the answer is:", count);

// task 10
const today_day = 20;
const check_day =today_day >= 30;
console.log(`the answer is: ${check_day}`)

 

