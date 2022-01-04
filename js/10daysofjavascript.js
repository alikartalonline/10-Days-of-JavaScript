 // 10 Days of JavaScript




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
    perimeter= 2 * (length+width)

    return perimeter;
}



//*************  Day 1: Functions  *************

// Method - 1:

/*
 * Create the function factorial here
 */
function factorial (n) {
    if ((n === 0) ||  (n === 1) )
    return 1;
    else
    return (n * factorial(n-1)); 
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
    
    for(let i = n; i>1; i--) {
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
    
     console.log(PI * Math.pow(input,2));
    
    // Print the perimeter of the circle:
    
    console.log(2 * PI * input); 

    }



//*************  Day 2: Conditional Statements: If - Else  *************

    function getGrade(score) {
        let grade;
        // Write your code here
        if (score > 25 && score <= 30){
        return grade = "A";
    }   
        if (score > 20 && score <= 25){
        return grade = "B";
    }   
       if (score > 15 && score <= 20){
        return grade = "C";
    }
        if (score > 10 && score <= 15){
        return grade = "D";
    }
        if (score > 5 && score <= 10){
        return grade = "E";
    }
        if (score >= 0 && score <= 5){
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
    switch(s.charAt(0)) {  // CharAt = İlk Karakteri Bulmak idi (0) gibi ("Hint" yani "ipucunda" vermişti bunu)

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


// Method 2:  includes(s[0])  // includes(0) methodu -> aradığımız bilginin değişken içerisinde olup olmadığının kontrolüdür


function getLetter(s) {
    let letter;
    // Write your code here
    switch(true) {
          
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
    for (let index = 0; index < s.length; index++){

        if (vowels.includes(s[index])){
            console.log(s[index]);
        }
    }

    for (let index = 0; index < s.length; index++){

        if (!vowels.includes(s[index])){
            console.log(s[index]);
        }
    }

}

// console.log(vowelsAndConsonants(s)) yazdırarak kendi konsolumuzda da görebiliriz...





//*************  Day 3: Arrays  *************

 
// *   Return the second largest number in the array.
// *   @param {Number[]} nums - An array of numbers.
// *   @return {Number} The second largest number in the array.



function getSecondLargest(nums) {
    
    let secondLargest = nums.sort(function(a,b) {  // secondLargest adında bir değişken açtık, 
            return b-a; // ve nums'u bu değişken içinde büyükten küçüğe doğru sıraladık
        });
         return secondLargest.find((secondLargest) => secondLargest < nums[0]); 
         // daha sonra .find metoduyla ikinci büyük sayısı bulmuş olduk.
    }
    







