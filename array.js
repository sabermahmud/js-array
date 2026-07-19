// 🟢 Basic Level (1–7)
// Task 1: Array Length
// const fruits = ["apple", "banana", "mango", "orange"];
// ➡️ Array-তে মোট কয়টি element আছে বের করো।

// const fruits = ["apple", "banana", "mango", "orange"];
// function countFruits (names){
//     return names.length
// }
// const totalFruits = countFruits(fruits);
// console.log(totalFruits)
// const countFruits = (names) => {
//     return names.length;
// }
// console.log(countFruits(fruits))



// Task 2: First & Last Element
// const colors = ["red", "green", "blue", "yellow", "black"];
// ➡️ প্রথম এবং শেষ element print করো।
// const colors = ["red", "green", "blue", "yellow", "black"];
// const getFirstAndLast = (colorsNames) => {
//     const firstOfArray =colorsNames[0];
//     const lastOfArray = colorsNames[colorsNames.length-1]
//     console.log(firstOfArray, lastOfArray)
// }
// getFirstAndLast (colors)



// Task 3: Middle Element
// const nums = [10, 20, 30, 40, 50];
// ➡️ মাঝের element print করো।

// const nums = [10, 20, 30, 40, 50];
// function getMiddle (numsArr){
//     if(numsArr.length === 0){
//         return "this array is empty"
//     }
//     const middleElement = numsArr[Math.floor(numsArr.length / 2)];
//     return middleElement;
// }
// const middle = getMiddle(nums)
// console.log(middle);




// Task 4: Print All Elements
// const countries = ["Bangladesh", "Saudi", "Qatar", "UAE"];
// ➡️ for...of ব্যবহার করে সব element print করো।
// const countries = ["Bangladesh", "Saudi", "Qatar", "UAE"];
// function allCountries (countriesNames){
//     for (let name of countriesNames){
//         console.log(name)
//     }
// } 
// allCountries(countries)



// Task 5: Print All Elements with Index
// const names = ["Saber", "Hasan", "Rahim", "Karim"];
// ➡️ প্রতিটি element-এর index এবং value print করো।
// const names = ["Saber", "Hasan", "Rahim", "Karim"];
// for(let i = 0; i < names.length; i++){
//     console.log(`${i}: ${names[i]}`)
// }


// Task 6: Sum of Array
// const numbers = [12, 15, 18, 20, 25];
// ➡️ সব সংখ্যার যোগফল বের করো।
// const numbers = [12, 15, 18, 20, 25];
// let sumOfNumbers = 0;
// for(let number of numbers){
//     sumOfNumbers += number;
// }
// console.log(sumOfNumbers)


// Task 7: Average
// const marks = [80, 90, 70, 100, 60];
// ➡️ Average বের করো।

// const marks = [80, 90, 70, 100, 60];
// let sumOfMArks = 0;
// for (let mark of marks) {
//     sumOfMArks += mark
// }
// const getAverage = sumOfMArks / marks.length;
// console.log(getAverage)


// 🟡 Intermediate Level (8–14)
// Task 8: Count Even Numbers
// const nums = [12, 5, 8, 19, 20, 44, 17];
// ➡️ কয়টি even number আছে বের করো।

// const countEvens = (nums) => {
//     let count = 0;
//     if (nums.length === 0) {
//         return "this array is empty"
//     }
//     for (let num of nums) {
//         if (num % 2 === 0) {
//             count++
//         }
//     }
//     return count
// }
// const countedEvens = countEvens([12, 5, 8, 19, 20, 44, 17])
// console.log(countedEvens)


// Task 9: Count Odd Numbers
// const nums = [12, 5, 8, 19, 20, 44, 17];
// ➡️ কয়টি odd number আছে বের করো।
// const countOdds = (nums) => {
//     if (nums.length === 0) {
//         return "this array is empty"
//     }
//     let count = 0;
//     for (let num of nums) {
//         if (num % 2 !== 0) {
//             count++
//         }
//     }
//     return count
// }
// const countedOdds = countOdds([12, 5, 8, 19, 20, 44, 17])
// console.log(countedOdds);



// Task 10: Largest Number
// const nums = [15, 80, 35, 120, 75];
// ➡️ সবচেয়ে বড় সংখ্যা বের করো।

const getMax = (nums) => {
    if(nums.length === 0){
        return "this array is empty"
    }
    let max = nums[0]
    for(num of nums){
        if(max < num){
            max = num
        }
    }
    return max 
}
const maxElement = getMax([-15, -80, -35, -120, -75])
console.log(maxElement)

// Task 11: Smallest Number
// const nums = [15, 80, 35, 120, 75];
// ➡️ সবচেয়ে ছোট সংখ্যা বের করো।



// Task 12: Find a Number
// const nums = [10, 25, 40, 55, 70];
// const target = 40;
// ➡️ includes() ব্যবহার করে number আছে কিনা দেখাও।



// Task 13: Count Positive Numbers
// const nums = [-5, 12, 0, 20, -8, 15];
// ➡️ Positive কয়টি সংখ্যা আছে?



// Task 14: Count Negative Numbers
// const nums = [-5, 12, 0, 20, -8, 15];
// ➡️ Negative কয়টি সংখ্যা আছে?




// 🟠 Function + Array (15–17)
// Task 15
// Function লেখো।
// function getEvenNumbers(numbers){
// }
// Input
// [12, 15, 18, 25, 30, 41]
// Output
// [12, 18, 30]




// Task 16
// Function লেখো।
// function getOddSum(numbers){
// }
// Output হবে সব odd সংখ্যার sum।




// Task 17
// Function লেখো।
// function getLargest(numbers){
// }
// Output হবে largest number।





// 🔴 Advanced Level (18–20)
// Task 18: Reverse Print
// const nums = [10,20,30,40,50];
// ➡️ শেষ element থেকে প্রথম element পর্যন্ত print করো।





// Task 19: Duplicate Count
// const nums = [10,20,10,30,40,20,50,10];
// ➡️ কতবার 10 এসেছে বের করো।





// Task 20: Second Largest Number ⭐⭐⭐
// const nums = [15, 80, 35, 120, 75, 120, 95];
// ➡️ Second Largest Number বের করো।
// শর্ত:
// sort() ব্যবহার করা যাবে না।
// Math.max() ব্যবহার করা যাবে না।
// শুধু loop এবং if ব্যবহার করবে।





// 🎯 Extra Challenge (নিজেকে যাচাই করার জন্য)
// Challenge 1 ⭐⭐⭐
// const nums = [12,15,18,21,24,27,30];
// ➡️ নতুন একটি array তৈরি করো যেখানে শুধুমাত্র ৩ দিয়ে বিভাজ্য সংখ্যাগুলো থাকবে।





// Challenge 2 ⭐⭐⭐⭐
// const names = [
//     "Saber",
//     "Hasan",
//     "Rahim",
//     "Saber",
//     "Karim",
//     "Rahim",
//     "Saber"
// ];
// ➡️ "Saber" কয়বার এসেছে বের করো।





// Challenge 3 ⭐⭐⭐⭐⭐
// const numbers = [10, 20, 30, 40, 50];
// নিচের functionটি সম্পূর্ণ করো:
// function getDifference(numbers){
//     // largest - smallest return করবে
// }
// Output:
// 40