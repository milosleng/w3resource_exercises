//1 Write a JavaScript program to display the current day and time in the following format

// const den = Date();
// console.log(den);
// let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");
// console.log(month, date, year);
// let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
// console.log(hour, minute, second);

// var d = new Date().toString();
// console.log(d);
// var dayName = d.toString().split(' ')[0];
// console.log(dayName);
// console.log(`Today is: ${dayName}day. \n Current time is: ${hour} PM : ${minute}: ${second}`);

//

// const date = new Date ();
// const day = date.getDay();
// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// console.log(`Today is ${days[day]}`);

// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

// const real = (hours >= 12) ? "PM" : "AM";

// //2 Write a JavaScript program to print the contents of the current window.
// function printPage () {
//   window.print();
// }

// 3 Write a JavaScript program to get the current date
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// let date = new Date();
// let getMonth1 = date.getMonth() +1;
// let days = date.getUTCDate();
// let years = date.getFullYear();
// console.log(days);
// console.log(date.toString());
// // const month =["January", "February", "March", "April", "May", "June", "July", "August", "Sebtember", "October", "November", "December"];
// console.log(getMonth1);

// if(getMonth1 < 10) {
// getMonth1 = "0" + getMonth1;
// }
// if(days < 10) {
//   days = "0" + days;
// }

// let today = days + "/" + getMonth1 +"/" + years;
// console.log(today);

//4 Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
// const side1 = 5;
// const side2 = 6;
// const side3 = 7;

// const s = (side1 + side2 + side3) /2;

// const areaValue = Math.sqrt(
//   s * (s - side1) * (s - side2) * (s - side3)
// );

// console.log(areaValue);

//5 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front

// var str = document.getElementById("solution").textContent;
// str = str.trim() + ' ';

// // Left direction:
// function rotateStrL() {
//   str = str.substring(1, str.length ) + str.charAt(0);

//   document.getElementById("solution").innerHTML = str;
// }

// // Right direction:
// function rotateStrR() {
//   str = str.charAt(str.length - 1) + str.substring(0, str.length - 1);

//   document.getElementById("solution").innerHTML = str;
// }

// setInterval(rotateStrR, 500);

//6 Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
//1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
//2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
//3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
//4. The year is a leap year (it has 366 days).
//5. The year is not a leap year (it has 365 days).

// function leapyear (year) {
//   !(year % 4 && year % 100 && year % 400) ? year = "leapyear" : year = "not a leap year"; //if THIS IS !FALSE (NOT FALSE!)
//   return year;
// };

// console.log(leapyear(100));

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

//7
// console.log("----------");
// for(let year = 2014; year <= 2050; year++) {
//   let d = new Date (year, 0, 1);
//   if(d.getDay() === 0)
//     console.log("1st January is being a Sunday" + year);
// }

//8 Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"

// const random = Math.floor(Math.random() * 10);

// const guess = Number(prompt());
// if(guess === random) {
//   console.log(`You guessed the correct number! The number was ${random}`);
// } else console.log(`Your guess was wrong!, The number was ${random}`);

//9 - Write a JavaScript program to calculate days left until next Christmas
// const today= new Date();
// const christmas = new Date(today.getFullYear(), 11, 25);
// if(today.getMonth() == 11 && today.getDay() > 25) {
//   christmas.setFullYear(christmas.getFullYear()+1);
// }

// const one_day = 1000*60*60*24;
// console.log(Math.ceil((christmas.getTime()-today.getTime())/(one_day))+
// " days left until Christmas!");

//10 - write a program that multiplies and divides 2 numbers
// const num1 = document.getElementById("number1");
// const num2 = document.getElementById("number2");

///
//   const multiply = function () {
//     let num1 = Number(document.getElementById("number1").value);
//     let num2 = Number(document.getElementById("number2").value);
//       const result1 = num1 * num2;
//     document.getElementById("result").innerHTML = `The result is  ${result1}`;
//     console.log(result1);
//   }

//    const divide = function () {
//     let num1 = Number(document.getElementById("number1").value);
//     let num2 = Number(document.getElementById("number2").value);
//       const result2 = num1 / num2;
//     document.getElementById("result").innerHTML = `The result is  ${result2}`;
//      console.log(result2)
//   }

//11 Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
// Multiply Celsius value by 9/5.
// Add 32 to Celsius value.

// const tempConversion = (celsius, fahrenheit) => {
//     let tempCel = (fahrenheit - 32) / 1.8
//      let tempFahrenheit = celsius * 1.8 + 32
//   console.log(tempCel, tempFahrenheit);
//   }

// tempConversion(60, 45);

// const toCelsius = (fah) => {
//   const fTemp = fah;
//   const fToCel = (fTemp - 32) * 5/ 9;
//   const message = `${fTemp} Fahrenheit is ${fToCel} Celsius`;
//   console.log(message);
// }

// const toFahrenheit = (cel) => {
//   const cTemp = cel;
//   const fToFah = cTemp * 9/5 + 32;
//   const message = `${cTemp} Celsius is ${fToFah} Fahrenheit`;
//   console.log(message);
// }

// toCelsius(45);
// toFahrenheit(60);

//12. Write a JavaScript program to get the website URL (loading page).

// const getUrl = () => {
//  const url = document.URL;
//   console.log(url);
// }

// getUrl();

//13. Write a JavaScript exercise to create a variable using a user-defined name...

// var var_name = 'abcd';
// var n = 120;
// this[var_name] = n;
// console.log(this[var_name])

//14 Write a JavaScript exercise to get the extension of a filename.

// const file1 = "html.index";
// const file2 = "index.js";

// function getFileExtension(file) {
//     return file.substring(file.lastIndexOf('.')+1, file.length) || file;
// };

// console.log(getFileExtension(file1));
// console.log(getFileExtension(file2));

//or

//15 Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
//   function getDifference(num) {
//   const baseNumber = 13;
//      let result = Math.abs(baseNumber - num);
//     if(num > baseNumber) {
//       console.log(result *2)
//     } else {
//       console.log(result);
//     }
//   }

//     getDifference(32);
//     getDifference(11);

//16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// function computeSum (a, b) {
//   if(a === b)
//    console.log((a + b) * 3);
//   if (a !== b)
//     console.log(a + b);
// }

// computeSum(10, 10);

//17.  Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19

// function computeSum (n) {
//   const baseNum = 19;
//   if(n > baseNum) {
//     return (n - baseNum) * 3
// } if (n <= baseNum)
//   return (Math.abs(n - baseNum));
// }

// console.log(computeSum(12));
// console.log(computeSum(19));
// console.log(computeSum(22));

//18 Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
// function checkNums (a, b) {
//   if(a === 50 || b === 50 || a + b === 50)
//     return true;
// }

// console.log(checkNums(49, 1));

// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
// function testhundred(x) {
//   return ((Math.abs(100 - x) <= 20) ||
// 	 (Math.abs(400 - x) <= 20));
// }

// console.log(testhundred(10));
// console.log(testhundred(90));
// console.log(testhundred(99));

//20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

// function check (n1, n2) {
//   if((n1 < 0 || n2 < 0) && (n1 > 0 || n2 > 0))
//     return true;
//   else return false;
// }

// console.log(check(2, 2));
// console.log(check(-2, 2));
// console.log(check(2, -2));
// console.log(check(-2, -2));

//21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
// function createStr (str) {
//   if(str.startsWith("Py")) {
//     return str;
// } else {
//   return (("Py").concat(str));
//   // return "Py" + str;
// }
// }

// console.log(createStr("kok"));
// console.log(createStr("lala"));
// console.log(createStr("Python"));
// console.log(createStr("thon"));

//22 Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
// let str = "Hello";
// console.log(str.substring(1, str.length - 1));

// function remove_character(str, char_pos)
//  {
//   part1 = str.substring(0, char_pos); //0
//   part2 = str.substring(char_pos + 1, str.length); //1, 6
//   return (part1 + part2);
//  }

// console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));

// const str = "Javascript";
// function removeChar (str, pos) {
//    part1 = str.substring(0, pos); // ""
//   part2 = str.substring(pos + 1, str.length);
//   console.log(part2);
//   return (part1 + part2);
// }

// console.log(removeChar(str, 0));

//23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

// function first_last(str1)
//   {
//   if (str1.length <= 1)
//   {
//     return str1;
//   }
//   mid_char = str1.substring(1, str1.length - 1); //ilo; wee
//     console.log(mid_char);
//   return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0); // s + ilo + m;
// }
// console.log(first_last('a'));
// console.log(first_last('ab'));
// console.log(first_last('Milos'));
// console.log(first_last('sweet'));

// function replaceStr(str) {
//     if(str.length <= 1) {
//       return str;
//     } else {
//       let rozdelStr = str.substring(1, str.length -1); //
//       console.log(rozdelStr);
//       return str.charAt(str.length - 1) + rozdelStr + str.charAt(0);
//     }
// }

//   console.log(replaceStr("Matusko"));
// console.log(replaceStr("Kokot"));

//24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
// function strNew (str) {
//  let nova = str.charAt(0);
//   return nova + str + nova;
// }

// console.log(strNew("Peter"));

//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
// function checkNum (num) {
//   if(num % 3 === 0)
//     return `${num} is multiply by 3`;
//   if(num % 7 === 0)
//     return `${num} is multuply by 7`;
//   else return false;
// }

// console.log(checkNum(5));

//26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

// function createStr (str) {
//   if (str.length < 3)
//    return `no string found`
//   let takeLast3 = str.charAt(str.length-3);
//   let takeLast32 = str.charAt(str.length-2);
//   let takeLast33 = str.charAt(str.length-1);
//   return takeLast3 + takeLast32 + takeLast33 + str + takeLast3 + takeLast32 + takeLast33;
// }

// console.log(createStr("Moo"));

// function front_back3(str)
//  {
//   if (str.length>=3)
//    {
//    str_len = 3;

//   back = str.substring(str.length-3);
//      console.log(back);
//    return back + str + back;
//  }
//    else
//      return false;
//  }
// console.log(front_back3("abc"));
// console.log(front_back3("Matusko"));
// console.log(front_back3("abcd"));

// function strNew (str) {
//  let last3 = str.substring(str.length-3);
//   const result = last3 + str + last3;
//   return result;
// };

// console.log(strNew("Matusko"));

//27 Write a JavaScript program to check whether a string starts with 'Java' and false otherwise
// function findJava (str) {
//   if(str.length < 4)
//     return false;
//   if(str.startsWith("Java"))
//     return true;
//   else return false;
// }

// console.log(findJava("JavaScript"));
// console.log(findJava("Python"));
// console.log(findJava("Jav"));

//28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
// function inRange (n1, n2) {
//     if(n1 >= 50 && n1 <= 99 || n2 >= 50 && n2 <= 99)
//        return true;
//        else return false;
// }

// console.log(inRange(12, 101));
// console.log(inRange(21, 80));
// console.log(inRange(15, 99));

//29 Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.
// function inRange (n1, n2, n3) {
//     if(n1 >= 50 && n1 <= 99 || n2 >= 50 && n2 <= 99 || n3 >= 50 && n3 <= 99)
//        return true;
//        else return false;
// }

// console.log(inRange(50, 90, 99));
// console.log(inRange(5, 9, 199));
// console.log(inRange(65, 89, 199));
// console.log(inRange(65, 9, 199));

//30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one

// function check (script, str) {
//   const arr = str.split(" "); //conversion to array
//   console.log(arr);
//   if(arr[4] === "Script")
//   //   part1 = arr.slice(0, 4);
//   // part2 = arr.slice(arr.length -1);
//   // return part1 + part2;
//     const newArr = arr.indexOf("Script");
// }

// console.log(check("Script", "Hello, this is my Script ok?"));

// function check (script, str) {
//   const arr = str.split(" "); //conversion to array// splice MUTATES the original ARRAY!
//   console.log(arr);
//   const index = arr.indexOf("Script");
//   console.log(index);
//   if(index === 4)
//     arr.splice(index, 1);
//   console.log(arr);
// }

// console.log(check("Script", "Hello, this is my Script ok?"));

// function check_script(str)
// {
//   if (str.length < 6) {
//     return str;
//   }
//   let result_str = str;

//   if (str.substring(10, 4) == 'Script')
//     {

//    result_str = str.substring(0, 4) + str.substring(10,str.length);

//   }
//   return result_str;
// }

// console.log(check_script("JavaScript"));
// console.log(check_script("CoffeeScript"));

//31. Write a JavaScript program to find the largest of three given integers.
// function findLargest2 (...nums) {
//     return Math.max(nums);
// }

// function findLargest (a, b, c) {
//     return Math.max(a, b, c);
// }

// console.log(findLargest(12, 33, 2));

// function findLargest (...nums) {
//    return nums.sort((a,b)=>a-b).reverse()[0];
// }

// console.log(findLargest(12, 33, 2, 66));

//32 Write a JavaScript program to find a value which is nearest to 100 from two different given integer values
// function findNearest(n1, n2) {
//   const hundred = 100;
//   if(100 - n1 < 100 - n2) {
//     return n1
//   } if (n1 === n2) {
//     return false;
//   }
//   else return n2;
// }

// console.log(findNearest(90, 89));
// console.log(findNearest(-90, -89));
// console.log(findNearest(90, 90));

// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive
// function checkNums (n1, n2) {
//   if(((n1, n2) < 60 && (n1, n2) > 40) || ((n1, n2) < 100 && (n1, n2) > 70))
//     return true;
//   else return false;
// }

// console.log(checkNums(44, 56));
// console.log(checkNums(70, 95));
// console.log(checkNums(50, 89));

// function checkNums(n1, n2) {
//  if ((n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60 ) || (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100))
//    return true;
//   else return false;
// }

// console.log(checkNums(44, 56));
// console.log(checkNums(70, 95));
// console.log(checkNums(50, 89));

//34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
// function findLarger(a, b) {
//   if((a > 40) && (a < 60) && (b > 40 && b < 60)){
//     if(a === b) {
//       return `Numbers are the same`;
//     } else if (a > b) {
// return a;
//     } else {
//       return b;
//     }
//   } else {
//     return "Numbers do not fit in the range"
//   }
// }

// console.log(findLarger(30, 51));

//35. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

// function check_char (str, letter) {
//   if(str.substring(2, 5).includes(letter))
//     return true;
//   else return false;
// }

// console.log(check_char("Python", "y"));
// console.log(check_char("JavaScript", "a"));
// console.log(check_char("Console", "o"));
// console.log(check_char("Console", "C"));
// console.log(check_char("Console", "e"));
// console.log(check_char("JavaScript", "S"));

//36. Write a JavaScript program to check whether the last digit of the three given positive integers is same.

// function checkInt (a, b) {
//   const toNum1 = a.toString();
//         const toNum2 = b.toString();
//   console.log(toNum1, toNum2);
//   if(toNum1.charAt(toNum1.length -1) === toNum2.charAt(toNum2.length -1))
//     return true;
//   else return false;
// }

// console.log(checkInt(1267667467442, 222));

// function last_digit(x, y, z)
// {
//   if ((x > 0) && y > 0 && z > 0)
//     {
//     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z% 10);
//    }
//   else
//     return false;
// }

// console.log(last_digit(25, 35, 405));
// console.log(last_digit(20, 30, 400));
// console.log(last_digit(20, -30, 400));
// console.log(last_digit(20, 30, -400));

//37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

// function upper_lower (str) {
//   if(str.length < 3)
//     return str.toUpperCase();
//   if(str.length >= 3)
//     return str.substring(0, 3).toLowerCase() + str.substring(3);
// }

// console.log(upper_lower("Python"));
// console.log(upper_lower("Py"));
// console.log(upper_lower("JAVAScript"));

//38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise

// function exam_status (marks, isExam) {
//   if (marks >= 89 && marks <= 100)
//     return `You got A+`;
//   if(isExam)
//     return marks >= 90;
// }

// console.log(exam_status("78", " "));
// console.log(exam_status("89", "true "));
// console.log(exam_status("99", "true "));

// //39 Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80;
// function computeSum (a, b) {
//   let sum = a + b;
//   if(sum >= 50 && sum <= 80)
//     return 65;
//   else return 80;
// }

// console.log(computeSum(30,20));
// console.log(computeSum(90,80));

//40  Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
// function check8 (a, b) {
//  if ((a === 8) || (b ===8) || ((a+b) === 8) || ((a-b) === 8) || ((b-a) ===8)) {
//    return true;
//  } else {
//    return false
// }
// }

// console.log(check8(7, 8));
// console.log(check8(16, 8));
// console.log(check8(24, 32));
// console.log(check8(17, 18));

//41 Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
// function check (a, b, c) {
//   if ( a === b && b === c) {
//     return 30;
//   }
//    if (a === b || b === c || c === a) {
//     return 40;
//   }
//   else return 20;
//   }

// console.log(check(53, 51, 5))

//42. Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
// function check (a, b, c) {
//   if(a < b && b < c)
//     return "strictmode";
//   else if ( c > b)
//     return "soft mode";
//   else
//     return "undefined";
// }

// console.log(check(2, 4, 5));

//43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

// function check (a, b, c) {
//   let toStr1 = a.toString();
//    let toStr2 = b.toString();
//    let toStr3 =  c.toString();
//   if(toStr1.charAt(toStr1.length-1) === toStr2.charAt(toStr2.length -1) || toStr2.charAt(toStr2.length -1) === toStr3.charAt(toStr3.length -1)) {
//   return true;
// } else {
//   return false;
// }
// }

// console.log(check(21, 44, 3877676873));

// function same_last_digit(p, q, r) {
//     return (p % 10 === q % 10) ||
//            (p % 10 === r % 10) ||
//            (q % 10 === r % 10);

// }

// console.log(same_last_digit(22,32,42));
// console.log(same_last_digit(102,302,2));
// console.log(same_last_digit(20,22,45));

// 44. Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

// function lessby20_others (a, b, c) {
//  if (a >= 20 && ((a < b) || (a < c))) {
//      return true
//  } else {
//    return false;
//  }
// }

// console.log(lessby20_others(23, 45, 10));
// console.log(lessby20_others(23, 23, 10));
// console.log(lessby20_others(21, 66, 75));

//45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
// function test_number (a, b) {
//  if (a === 15 || b === 15 || Math.abs(a-b) === 15 || a+b === 15)
//    return true;
//   else return false;
// }

// console.log(test_number(15, 9));
// console.log(test_number(25, 15));
// console.log(test_number(7, 8));
// console.log(test_number(25, 10));
// console.log(test_number(5, 9));
// console.log(test_number(7, 9));
// console.log(test_number(9, 25));

// 48. Write a JavaScript program to reverse a given string
// function string_reverse (str) {
//   // return str.split("");
//   // return (str)
//   // return Object.assign([], str);
//   let rev = Array.from(str);
//   let reversed = rev.reverse().join("").toString();
//   return reversed;
// }

// console.log(string_reverse("w3resource"));
// console.log(string_reverse("www"));
// console.log(string_reverse("JavaScript"));

// let str = "Milosko";
//  let newStr = " ";
// for(let i = str.length -1; i >= 0; i--) {
// newStr += str[i];
// }

// console.log(newStr);

// 50 Write a JavaScript program to capitalize the first letter of each word of a given string.

//   const mySentence = "makovicka je krasna piculka";
//   let arr = mySentence.split(" ");

//   for(let i = 0; i < arr.length; i++){
//     // arr[i] += arr[i].charAt(0).toUpperCase(); - capitalize last letter
//     arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
//   }

// console.log(arr.join(" "));

// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }

// console.log(words.join(" "));

// const mySentence = "ja som milos leng a som z bystreho";
// const words = mySentence.split(" ");

// words.map((word) => {
//   return word[0].toUpperCase() + word.substring(1);
// }).join(" ");

// console.log(words);

// 51. Write a JavaScript program to convert a given number to hours and minutes

// function getHoursMins (num) {
//   let hours = Math.floor(num / 60);
//   let minutes = num % 60;
//   if(minutes + "".length < 2) {
//     minutes = "0" + minutes;
//   }
//   return hours + ":" + minutes;
// }

// console.log(getHoursMins(100))

//52. Write a JavaScript program to convert the letters of a given string in alphabetical order

// function convert (str) {
//   let myArr = str.split("").sort().join("");
//   console.log(myArr);
// }

// console.log(convert("Python"));

//53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

// Input = "after badly" Output = "false"
// Input = "Laura sobs" Output = "true"

// function check (str) {
//   let toArr = str.split("");
//    for(let i = 0; i < toArr.length; i++) {
//      if(toArr[i] === "a" && toArr[i + 3] === "b") {
//        return true;
//    }
// }
// }

// console.log(check("after badly"));
// console.log(check("Laura sobs"));

//54. Write a JavaScript program to count the number of vowels in a given string.

// function getCount(str) {
// let vowelList = 'AEIOUaeiou'
// let vowelsCount = 0;
//  for(var i = 0; i < str.length ; i++)
//   {
//     if (vowelList.indexOf(str[i]) !== -1)
//     {
//       vowelsCount += 1;
//     }
//   }
//   return vowelsCount;
// }

// console.log(getCount("hello Milos"))

// function getVowels (str) {
//   const vowels = "AEIOUYaeyoui";
//   const count = 0;
//   for(let i = 0; i < str.length; i++) {
//     if(vowels.indexOf(str[i]) !== -1)
//       count += 1;
//   }
//   return count;
// }

// console.log(getCount("kokotko"))

//55. Write a JavaScript program to check whether a given string contains equal number of p's and t's

// function checkPTs (str) {
//     let countP = 0;
//   let countT = 0;

//   for(let i = 0; i < str.length; i++) {
//     if(str[i] === "p") {
//       countP += 1;
//     } else if (str[i] === "t") {
//       countT += 1;
//     }
//   }
//   if(countP === countT) {
//     return true
//     } else {
//       return false;
//   }
//   // return `There are ${countP} instances of P in ${str}, and ${countT} instances of T in ${str}`;
// }

// console.log(checkPTs("pepetete topep"));

// function equal_pt(str)
// {
//   const str_p = str.replace(/[^p]/g, "");

//   const str_t = str.replace(/[^t]/g, "");

//   const p_num = str_p.length;
//   const s_num = str_t.length;

//   return p_num === s_num;

// }
// console.log(equal_pt("paatpss"));
// console.log(equal_pt("paatps"));

//56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.

// n1 = 80;
// n2 = 6000;

// var div = Math.round(n1 / n2).toString(),
//         result_array = div.split("");

//     if (div >= 1000)
//        {
//         for (var i = div.length - 3; i > 0; i -= 3)
//         {
//             result_array.splice(i, 0, ",");
//         }
//           result_array;
//     }
// console.log(result_array);

// 57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

// function makeCopies (str){
//   return str.repeat(5)
// }

// console.log(makeCopies("abc"))

// 58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.

// function makeString (str, times) {
//    if(str.length <= 2) {
//      return `String must have at least 3 characters!`
//    } else {
//     return str.substring(str.length - 3).repeat(5);
//    }
// }

// console.log(makeString("Pico"))

// 59. Write a JavaScript program to extract the first half of a string of even length.

// function extract1half (str) {
//   let half = str.length / 2;
//   return str.substring(0, str.length / 2)

// }

// console.log(extract1half("milo"))

// 60. Write a JavaScript program to create a new string without the first and last character of a given string. MEDZI PRVYM A POSLEDNYM PISMENOM

// function createStr (str) {
//   return str.substring(1, str.length -1);
// }

// console.log(createStr("Ezechiel"));

//PRVE A POSLEDNE PISMENO!
// function createStr (str) {
//  const medzi = str.substring(1, str.length -1);
//   const repl = str.replace(medzi, "");
//   console.log(repl)
// }

// console.log(createStr("Ezechiel"));

// 61. Write a JavaScript program to concatenate two strings except their first character.

// function concatStrings (str1, str2)  {
//   const cut1 = str1.substring(1, str1.length);
//     const cut2 = str2.substring(1, str1.length);
//   return cut1.concat(cut2);
// }

// console.log(concatStrings("Milos", "Leng"));

// 62. Write a JavaScript program to move last three characters to the start of a given string. The string length must be greater or equal to three.

// function movelast3 (str) {
//   if(str.length <= 3) {
//     return false
//   } else {
//     const last3 = str.substring(str.length - 3);
//     const firstPart = str.replace(last3, "");
//     return last3 + firstPart;
// }
// }
// console.log(movelast3("Matus"))

// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.

// function get3middle (str) {
//   if(str.length % 2 === 0) {
//     return false
//   } if (str.length < 2) {
//     return false
//   } else {
//    let mid = (str.length + 1) /2;
//     return str.slice(mid - 2, mid +1)
//   }
// }
// console.log(get3middle("pETEr"))
// console.log(get3middle("matUSInko"))

//64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.

// function str_con_cat (str1, str2) {
//   if (str1.length !== str2.length) {
//     const difference = Math.abs(str1.length - str2.length); //remove this difference
//     return str1.slice(str1[0], difference) + str2;
//   }
// }

// console.log(str_con_cat("milosko", "peto"));
// console.log(str_con_cat("Python", "JS"));
// console.log(str_con_cat("ab", "cdef"));

// function str_con_cat(str1, str2) {
//   const m = Math.min(str1.length, str2.length); // 2

//   return str1.substring(str1.length - m) + str2.substring(str2.length - m); //on + JS
// }

// console.log(str_con_cat("Python", "JS"));
// console.log(str_con_cat("ab", "cdef"));

// 65. Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6

// function check (str) {
//   const end = "Script"
//   if(str.length < 5) {
//     return false
//   } else {
//     return str.endsWith(end)
//   }
// }

// console.log(check("JavaScript"))
// console.log(check("Petercock"));

//66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

// const city_name = str => {
//   const strStart = "Los";
//    const strStart2 = "New";
//  if (str.startsWith(strStart) || str.startsWith(strStart2)) {
//    console.log(str)
//  } else {
//   return "";
//  }
// }

// console.log(city_name("New York"));
// console.log(city_name("Los Angeles"));
// console.log(city_name("Londons"));

// 67. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.

// function createStr(str) {
//  if(str.substring(str.length - 1) === "P" && str.substring(0, 1) === "P") {
//    return str.substring(1, str.length -1);
//  } else {
//    return str;
//  }
// }

// console.log(createStr("PiloskP"));
// console.log(createStr("matus"));

//68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.

//       function createStr (str, n) {
//         console.log(str.substring(0, n) + str.substring(str.length -n));
//       }

//       console.log(createStr("matusko", 2));

//69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

// function compute (arr) {
//  return arr[0] + arr[1] + arr[2];
// }

// console.log(compute([2, 3, 4]));

// 70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3

// function rotate (arr) {
//     return [arr[1], arr[2], arr[0]]
// }

// console.log(rotate([2, 3, 4]));

//71. Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1

// function check (arr) {
//   if (arr.pop() === 1 || arr.shift() ===1)
//     return true;
// }

// console.log(check([1, 2, 3]));

// 72. Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3

// function check (...arr) {
//   console.log(arr[0]);
//   console.log(arr[arr.length -1]);
//   console.log(arr[arr.length -1]);
//   // if(arr[0] === arr[arr.length -1])
//   //   return true;
// }

// console.log(check[2, 4, 5, 2]);

// const arr = [1, 2, 66];
// console.log(arr[arr.length -1])

// function check (arr) {
//    if(arr[0] === arr[arr.length -1])
//   return true;
// }

// const arr = [2, 3, 4, 2];
// console.log(check(arr));

// function check2(arr) {
//    if(arr[0] === arr[arr.length -1])
//   return true;
// }

// console.log(check([2, 3, 4, 2]));

// 73. Write a JavaScript program to reverse the elements of a given array of integers length 3
// function reverse3 (arr) {
//  return arr.reverse();
// }

// //OR:
// function reverse3(array) {
//     return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
// }

// console.log(reverse3([2, 3, 4, ]));
// console.log(reverse3([5, 4, 3]));
// console.log(reverse3([1, 0, -1]));
// console.log(reverse3([2, 3, 1]));

// 74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

// 75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.

// const arr1 = [2, 4, 4];
// const arr2 = [5, 8, 7];
// let newArr= [];

// function createArr (n1, n2) {
//  return newArr = [n1, n2];
// }

// console.log(createArr(arr1[1], arr2[1]));

// 76. Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1;
// function fn (arr) {
//   let newArr = [arr[0], arr[arr.length -1]];
//   return newArr;
// }

// console.log(fn([2, 3, 4, 4, 5, 66]));

// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3

// const arr = [4, 3];
// console.log(arr.includes(1));
// console.log(arr.includes(3));

// function incl(arr) {
//  console.log(arr.includes(1));
//    console.log(arr.includes(3));
// }

// console.log(incl([1, 3]));

// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.

// function is13 (nums) {
//   if(nums.indexOf(1) == -1 || nums.indexOf(3) == -1) {
//     return true;
// } else {
//   return false;
// }
// }

// console.log(is13([7, 8]));
// console.log(is13([3, 2]));
// console.log(is13([0, 1]));

//79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

// const arr = [30, 40, 1, 3, 45, 22]
// function test (arr, num) {
// let count = 0;
// for(let i = 0; i < arr.length; i++) {
//    if(arr[i] === num) {
//      count++;
//    }
// }
// if(arr.includes(30) && count === 2) {
//   return true;
// } else {
//   return false;
// }
// }

// console.log(test(arr, 40))

// function countInArray(array, what) {
//     return array.filter(item => item == what).length;
// }

// const array = [30, 40, 40];
// console.log(countInArray(array, 30));

//80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

// function swap (arr) {
//   const first = arr[0];
// const last = arr[arr.length - 1];
// const shifted= arr.shift(first);
// const popped = arr.pop(last);
//   return popped+ "," + arr + ","+ shifted;
// }

// console.log(swap([2, 3, 4, 4, 6, 7, 5]))

//81. Write a JavaScript program to add two digits of a given positive integer of length two.

// function add (int) {
//   const str = int.toString().split("");
//   const [n1, n2] = str;
//   const num1 = Number(n1);
//   const num2 = Number(n2);
//   return num1 + num2;

// }

// console.log(add(50));
// console.log(add(25));

//83. Write a JavaScript to find the longest string from a given array of strings
// function findString(arr) {
// return Math.max(...(arr.map(el => el.length)))
// }

// console.log(findString(["mama", "oco", "matusko"])); // 7

// function findLongestWord(array) {
//   var longestWord = "";

//   array.forEach(function(word) {
//     if(word.length > longestWord.length) {
//       longestWord = word;
//     }
//   });

//   return longestWord;
// }

// var word = findLongestWord(["The","matusinko", "quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
// console.log(word);

// function longest_string (arr) {
//     let longest = "";
//   arr.forEach(function(word) {
//     if(word.length > longest.length) {
//       longest = word;
//     }
//   })
//   return longest;
// }

// console.log(longest_string(['a', 'aa', 'aaa',
//                                           'aaaaalll','aaaa']))

//84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet.  Go to the editor
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

// function replace (str) {
//  const x = str.split("");
// for(let i = 0; i < x.length; i++) {
// let n = x[i].charCodeAt() - "a".charCodeAt();
//   n = (n +1) % 26;
//   x[i] = String.fromCharCode(n + "a".charCodeAt())
//   }
//   return x.join("");
// }

// console.log(replace("milos"));
// console.log(replace("milosko"));

//85. Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.

// function filterAr (arr) {
//   let first = [];
//   let second = [];
//   arr.filter((el, index) =>
//          index % 2  === 0 ? first.push(el) : second.push(el)
//      )
//  const reducer = (acc, curr) => acc + curr;
//  const x = first.reduce(reducer).toString();
//  const y = second.reduce(reducer).toString();
//  let newArr = [];
//   newArr.push(x);
//   newArr.push(y);
//   return newArr.map(el => Number(el));
// }

// console.log(filterAr([2, 1, 5, 3, 5, 0, 6]));

// //or this:

// let arr = [1,4,2,5,3];
// arr.reduce((p, c, i) => (p[i%2] += c, p), [0, 0])

//86. Write a JavaScript program to find the types of a given angle

// function findAngle(angle) {
//   if(angle < 90)
//     return `This is acute`
//     if(angle === 90)
//       return `this is right`;
//     if(angle > 90 && angle < 180)
//       return `Obtuse angle`;
//     if(angle === 180)
//       return `Straight angle`;
// }

// console.log(findAngle(90));

//87. Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements

// const arr1 = [2, 4, 5];
// const arr2 = [2, 4, 6];

// function check (a1, a2) {
//   if(a1 === a2) return true;
//   if(a1.length !== a2.length) return false;
//    for(let i = 0; i < a1.length; i++) {
//      if (a1[i] === a2[i]) {
//        return true
//      } else {
//        return false;
//      }
//    }
// }

// console.log(check(arr1, arr2));

//   function arraysEqual(a, b) {
//   if (a === b) return true;
//   if (a == null || b == null) return false;
//   if (a.length !== b.length) return false;

//   // If you don't care about the order of the elements inside
//   // the array, you should sort both arrays here.
//   // Please note that calling sort on an array will modify that array.
//   // you might want to clone your array first.

//   for (var i = 0; i < a.length; ++i) {
//     if (a[i] !== b[i]) return false;
//   }
//   return true;
// }

// 88. Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either

//  const result = (n1, n2, div) => (n1 % div === 0) && (n2 % div === 0);
// console.log(result(10, 5, 5));

//89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  Go to the editor
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

// function check_arithmetic_Expression (n1, n2, result) {
//   if(n1 + n2 === result)
//     return true;
//   if(n1 - n2 === result)
//     return true;
//   if(n1 * n2 === result)
//     return true;
//   if(n1 / n2 === result)
//     return true;
//   else return false;
// }

// console.log(check_arithmetic_Expression(10, 25, 35))
// console.log(check_arithmetic_Expression(10, 25, 250))
// console.log(check_arithmetic_Expression(30, 25, 5))
// console.log(check_arithmetic_Expression(100, 25, 4.0))
// console.log(check_arithmetic_Expression(100, 25, 25))

//90. Write a JavaScript program to find the kth greatest element of a given array of integers

// function greatest_k(arr, k) {
// arr.sort((a, b) => a -b);
//   return arr[k-1];
// }

// console.log(greatest_k([2, 4, 6, 1], 2));

//82
function add_two_int_without_carrying(a, b) {
  const toStr1 = a.toString().split('');
  const toStr2 = b.toString().split('');
  let newArr = [];
  for (let i = 0; i < toStr1.length; i++) {
    if (Number(toStr1[i]) + Number(toStr2[i]) > 10) {
      newArr.push(Number(toStr1[i]) + Number(toStr2[i]) - 10);
    } else if (Number(toStr1[i]) + Number(toStr2[i]) === 10) {
      newArr.push(1);
    } else {
      newArr.push(Number(toStr1[i]) + Number(toStr2[i]));
    }
  }
  return newArr.join('');
}

console.log(add_two_int_without_carrying(222, 911));
console.log(add_two_int_without_carrying(999, 999));
