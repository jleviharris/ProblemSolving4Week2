"use strict"
// 1. Write a method that prints the next 20 leap years.
// function printLeapYears(){

// };

// 2. Write a method that finds the longest palindromic substring of a given string.
// function longestPalindromic(string){

// };

// 3. Write a method to convert a given number to hours and minutes.
//Finished
// function convertToHoursAndMins(string){
//     string = parseInt(prompt('Enter minutes and ill convert to hours and minutes'))
//     let exactHours = string / 60;
//     let hours = Math.floor(exactHours);
//     let mins = ((string/60)-hours)*60;
//     alert(`${hours} Hours and ${mins} minutes`);
// };
// convertToHoursAndMins();
// 4. Write a method to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference

// 5. Write a method to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

// 6. Write a method to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
// Finished
// function aAndB (string){
//     string = prompt('Enter text and ill tell you if there is an "a" and "b" seperated by three places');
//     for (let i=0; i<string.length; i++){
//         if(string[i]=== 'a'){
//             if(string[i+4]=== 'b'){
//                 alert('There is an a and b seperated by three spaces in this string');
//                 return;
//             }
//         }else {i++;
//         }
//     }alert('There is no "a" and "b" seperated by three places')};
// aAndB();

// 7. Write a method to check if a given string contains equal number of p's and t's present.
//Finished
// let p = 1;
// let t = 1;
// let string;
// function PAndT (string) {
//     string = prompt("Enter text to see if p's = t's");
//     for (let i=0; i<string.length; i++){
//         if (string[i] === "p"){
//             p++;
//         } else if (string[i] === "t"){
//             t++;
//         };
//     }   if (t>p){
//         console.log(`There is ${t -p} more t's than p's`);
//         alert(`There are ${t -p} mnore t's than p's`);
//     } else if (t<p){
//         console.log(`There is ${p - t} more t's than p's`);
//         alert(`There are ${p - t} mnore t's than p's`);
//     } else if (p=t){
//         console.log("There are the same number of p's as t's");
//         alert("There are the same number of p's as t's.");
//     }
// };
// PAndT(string);

// 8. Write a method to compute the sum of all digits that occur in a given string. 
// string = prompt("Enter text with numbers and I'll tell you the sum of all the numbers you've entered")
// function numOfDigits(string){

// };

// 9. Write a method to check whether a given fraction is proper or not.  Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.
//create a function that takes in a string
// split the string where there is a division sign
// check if the fraction is proper or not
// retrun the answer
// function isItProper(string){

// };
// 10. Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”
// string = prompt("Enter your text and I'll translate to Pig Latin");
// function pigLatin (string){

// }

// 11. Write a method that returns the largest element in an array.
function largestElement(array){
    
    for (let i=0; i<array.length;i++){
        for (let j=1; j<array.length;j++){
            if (array[i]<array[j]){
                array.shift();
                j--;
            } else if (array[i]>array[j]){
                array.push(array[i]);
                array.shift();
                j--;
            } else if (array[i] === array[j]){
                array.shift();
                j--;
            }
        }
    }alert(array);
}
    let array = [1, 2, 5, 8, 9, 33, 33, 10, 4, 9, 105];
    largestElement(array);
// 12. Write a method that rotates a list by k elements. You input a value for k that represents how many places in the array you want to rotate by. For example, if k is rotated by 2, 
// function rotateByK(array){

// };