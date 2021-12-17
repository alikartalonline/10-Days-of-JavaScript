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






