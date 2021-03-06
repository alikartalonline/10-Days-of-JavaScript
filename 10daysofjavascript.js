

//*************  Day 0: Hello, World!  *************  

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
}






//*************  Day 0: Data Types  *************  

/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.

    console.log(firstInteger + Number(secondInteger));
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal + Number(secondDecimal));

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}









//*************  Day 1: Arithmetic Operators  *************  

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width

    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width)

    return perimeter;
}








//*************  Day 1: Functions  *************

// Method - 1:

/*
 * Create the function factorial here
 */
function factorial(n) {
    if ((n === 0) || (n === 1))
        return 1;
    else
        return (n * factorial(n - 1));
}

function main() {
    const n = +(readLine());

    console.log(factorial(n));
}





// Method - 2:

/*
 * Create the function factorial here
 */
function factorial(n) {

    let finalValue = 1;

    for (let i = n; i > 1; i--) {
        finalValue *= i;
    }

    return finalValue;
}


function main() {
    const n = +(readLine());

    console.log(factorial(n));
}










//*************  Day 1: Let and Const  *************

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

    const PI = Math.PI;
    let input = Number(readLine());

    // Print the area of the circle:

    console.log(PI * Math.pow(input, 2));

    // Print the perimeter of the circle:

    console.log(2 * PI * input);

}









//*************  Day 2: Conditional Statements: If - Else  *************

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) {
        return grade = "A";
    }
    if (score > 20 && score <= 25) {
        return grade = "B";
    }
    if (score > 15 && score <= 20) {
        return grade = "C";
    }
    if (score > 10 && score <= 15) {
        return grade = "D";
    }
    if (score > 5 && score <= 10) {
        return grade = "E";
    }
    if (score >= 0 && score <= 5) {
        return grade = "F";
    }

    return grade;
}


function main() {
    const score = +(readLine());

    console.log(getGrade(score));
}











//*************  Day 2: Conditional Statements: Switch  *************


// Method 1:  s.charAt(0)

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s.charAt(0)) {  // CharAt = ??lk Karakteri Bulmak idi (0) gibi ("Hint" yani "ipucunda" vermi??ti bunu)

        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A'
            break;

        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B'
            break;

        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C'
            break;

        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = 'D'
            break;
    }
    return letter;
}




// Method 2:  includes(s[0])  // includes(0) methodu -> arad??????m??z bilginin de??i??ken i??erisinde olup olmad??????n??n kontrol??d??r

function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {

        case 'aeiou'.includes(s[0]):
            letter = "A";
            break;

        case 'bcdfg'.includes(s[0]):
            letter = "B";
            break;

        case 'hjklm'.includes(s[0]):
            letter = "C";
            break;

        case 'npqrstvwxyz'.includes(s[0]):
            letter = "D";
            break;
    }

    return letter;
}








//*************  Day 2: Loops  *************


/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

let vowels = 'aeiou'
let s = 'javascriptloops'

function vowelsAndConsonants(s) {
    for (let index = 0; index < s.length; index++) {

        if (vowels.includes(s[index])) {
            console.log(s[index]);
        }
    }

    for (let index = 0; index < s.length; index++) {

        if (!vowels.includes(s[index])) {
            console.log(s[index]);
        }
    }

}

// console.log(vowelsAndConsonants(s)) yazd??rarak kendi konsolumuzda da g??rebiliriz...














//*************  Day 3: Arrays  *************


// *   Return the second largest number in the array.
// *   @param {Number[]} nums - An array of numbers.
// *   @return {Number} The second largest number in the array.



function getSecondLargest(nums) {

    let secondLargest = nums.sort(function (a, b) {  // secondLargest ad??nda bir de??i??ken a??t??k, 
        return b - a; // ve nums'u bu de??i??ken i??inde b??y??kten k????????e do??ru s??ralad??k
    });
    return secondLargest.find((secondLargest) => secondLargest < nums[0]);
    // daha sonra .find metoduyla ikinci b??y??k say??s?? bulmu?? olduk.
}













//*************  Day 3: Try, Catch, and Finally  *************


// Method - 1:

function reverseString(s) {

    try {
        let str = s.split("").reverse().join(""); // str: is the alphabetical reverse writing of "s"
        console.log(str);
    }
    catch (err) { // An error occured in the code 
        console.log(err.message);
        console.log(s);
    }

};
// reverseString("123") --> For Check







// Method - 2 : (similar way)

function reverseString(s) {

    try {
        s = s.split("").reverse().join(""); // b??l, ters ??evir, birle??tir
    }
    catch (err) {
        console.log("s.split is not a function") // hata var ise console'a bu raporu yazd??r ("soru" da b??yle istiyor)
    }
    finally {
        console.log(s) // hata var ise hata raporundan sonra da orjinal dize yaz??ls??n, hata yok ise sadece dize yaz??ls??n   
    }

};











//*************  Day 3: Throw  *************


/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

function isPositive(a) {

    if (a > 0) {
        return "YES"
    } else if (a === 0) {
        throw Error("Zero Error")
    } else if (a < 0) {
        throw Error("Negative Error")
    }

};






// Method 2:

function isPositive(a) {

    let final = 'YES';

    if (a < 0) {
        throw ({ message: 'Negative Error' });
    } else if (a === 0) {
        throw ({ message: 'Zero Error' });
    }
    return final;
};












//*************  Day 4: Create a Rectangle Object  *************

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {

    return (  // sorunun bizden object istedi??ini unutmamak laz??m, ????nk?? ben unuttum...
        {
            length: a,
            width: b,
            perimeter: 2 * (a + b),
            area: a * b,
        }
    );
};












//*************  Day 4: Classes *************

const reducer = (previousValue, currentValue) => previousValue + currentValue;

class Polygon {

    constructor(sides) {
        this.sides = sides
    }

    perimeter() {
        return this.sides.reduce(reducer)
    }

};










//*************  Day 5: Inheritance  *************

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return this.h * this.w
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(w) {
        super(w, w)
    }
}










//*************  Day 5: Arrow Functions  *************

// let nums = [1,2,3,4,5]  
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function modifyArray(nums) {

    let nums2 = nums.map(item => item % 2 == 0 ? item * 2 : item * 3)
    //console.log(nums2)


    return nums2
};
modifyArray(nums);










//*************  Day 6: JavaScript Dates  *************


// Method-1:
function getDayName(dateString) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const date = new Date(dateString);

    return days[date.getDay()]

}
console.log(getDayName("10/11/2009")); // Sunday




// Method-2:

function getDayName(dateString) {

    let dayName;
    // Write your code here

    let date = new Date(dateString);

    switch (date.getDay()) {
        case 0: dayName = "Sunday"; break;
        case 1: dayName = "Monday"; break;
        case 2: dayName = "Tuesday"; break;
        case 3: dayName = "Wednesday"; break;
        case 4: dayName = "Thursday"; break;
        case 5: dayName = "Friday"; break;
        case 6: dayName = "Saturday"; break;
    }

    return dayName;
}













//*************  Day 7: Regular Expressions I  *************


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aeiou]).*\1$/;
    return re;
    /*
     * Do not remove the return statement
     */
    return re;
}
//  K??sa bir a????klama eklemek istiyorum:
// ^ = birinci sat??r ba????ndaki karakteri se??er
// $ = ile sondaki karakteri se??ebiliriz!
// [] = Bir aral??k belirlememizi sa??l??yor.
// () = Parantez i??erisinde e??le??en eleman varsa saklan??r
// ^([aeiou]) = ise sat??r ba????ndaki k??????k aeiou ile ba??layan harfleri se??mek i??in
// . = Noktan??n yapm???? oldu??u ??ey, tek bir karakter se??imi yani biz sondaki karakteri se??ece??iz de??il mi o y??zden ??nce "." koymal??y??z
// * veya + = birbirine benzer ifadeler ikiside soruyu do??ru cevaplard?? k??saca;
// * veya +  = Devam??n?? getir diyoruz ama ayn?? karakterse getirir ki soru da bize ayn?? ??nl?? ile ba??lar ayn?? ??nl?? ile biter demi??ti
// \1$ = ile de ba??taki ifadenin ayn??s?? olan ifadeden varsa se??ecek demek. Yani a ise a gelmeli gibi. $ ile son ifadeye bak??yoruz bu ??ekilde.
// ??ok kafa yak??yor ya, beni de uyuz etti soru...


// Method 2: 
/^(a|e|i|o|u).+\1$/;  // a | e ==> a veya e demek, bu ??ekilde de yaz??labilirdi, ayn?? sonu??.







//*************  Day 7: Regular Expressions II  *************

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-zA-Z]*$/gm);
    /*
     * Do not remove the return statement
     */
    return re;
}
console.log(regexVar("Mr.X"))

// Method 1 or 2:
// const re = new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/gm);
// const re = new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-zA-Z]*$/gm);






//*************  Day 7: Regular Expressions III  *************

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    const re = new RegExp(/[0-9]+/gm);
    
    /*
     * Do not remove the return statement
     */
    return re;
}








//*************  Day 8: Day 8: Buttons Container  *************

// index.html:
/*
<!-- Enter your HTML code here -->

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    <body>
        <div id="btns" class="btnContainer">

    <button id="btn1" class="btnStyle">1</button>

    <button id="btn2" class="btnStyle">2</button>

    <button id="btn3" class="btnStyle">3</button>

    <button id="btn4" class="btnStyle">4</button>

    <button id="btn5" class="btnStyle" onClick="rotate()">5</button>


    <button id="btn6" class="btnStyle">6</button>

    <button id="btn7" class="btnStyle">7</button>

    <button id="btn8" class="btnStyle">8</button>

    <button id="btn9" class="btnStyle">9</button>

<script src="js/buttonsGrid.js" > </script>

</div>
    </body>
</html>
*/


// CSS 
/*
.btnContainer {
    width: 75%;
 }
 
 
 
 .btnContainer > .btnStyle {
    width: 30%;
    height: 48px;
    font-size: 24px;
 
 }
*/


 // JavaScript Method-1:
 let x = "4";
 let a = ["1", "2", "3", "6", "9", "8", "7", "4"];
 let b = ["1", "2", "3", "6", "9", "8", "7", "4"];
 
 
 let rotate = function () {
 
     for (let i = 7; i > 0; i--) {
         a[i] = a[i - 1];
     }
 
     a[0] = x;
     x = a[7];
 
     for (let i = 0; i < 8; i++) {
         document.getElementById("btn" + b[i]).innerText = a[i];
     }
 
 }

// JavaScript Method-2:
const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start positions ids in clockwise order
let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // rotating in clockwise order

let btn5 = document.getElementById("btn5");


btn5.onclick = function () {

    nums.unshift(nums.pop());

    for (i = 0; i <= 7; i++) {
        document.getElementById("btn" + ids[i]).innerHTML = nums[i];
    }

};













//*************  Day 8: Create a Button  *************

// *** Method-1 ***

// Html:
<div id="div"></div>


/*
Css: 

 #btn{
     height: 48px;
     width: 96px;
     font-size: 24px; 
  }

  
*/


// Javascript :
const butoncuk = document.querySelector('div')

let count = 0;

butoncuk.innerHTML = `<button id="btn">${count}</button>`

btn.onclick = function () {
    document.getElementById('btn').innerHTML = count = count + 1;
    console.log(count)
}


// *** Method-2 ***

// Html:
// <button type="button" id="btn">0</button>

// Javascript:
let butoncukDOM = document.getElementById('btn');
let count = 0;
butoncukDOM.addEventListener('click', function () {
    count = count + 1;
    butoncukDOM.innerHTML = count;
});

// *** Method-3 ***
// Html ile i??i ??abucak da ????zebiliriz ama kolaya ka??mak olur :)
<button type="button" id="btn" onclick="this.innerHTML++">0</button>












