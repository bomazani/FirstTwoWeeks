

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
let exerciseNum = 1;

// 1. Display an array from the cities in gotCitiesCSV
const cities1 = gotCitiesCSV.slice();
const cities = cities1.split(",");
const num1 = document.createElement("div");
num1.textContent = "1. " + JSON.stringify(cities);
document.body.appendChild(num1);

// 2. Display an array of words from the sentence in bestThing
const words1 = bestThing.slice();
const words = words1.split(" ");
const num2 = document.createElement("div");
num2.textContent="2. " + JSON.stringify(words);
document.body.appendChild(num2);

// 3. Display a string separated by semi-colons instead of commas from gotCitiesCSV
const cities3= gotCitiesCSV.replace(/,/g,";");
const num3 = document.createElement("div");
num3.textContent = "3. " + JSON.stringify(cities3);
document.body.appendChild(num3);

// 4. Display a CSV (comma-separated) string from the lotrCitiesArray
const cities4a = lotrCitiesArray.slice();
const cities4 = cities4a.toString();
// console.log(lotrCitiesArray);
const num4 = document.createElement("div");
num4.textContent = "4. " + cities4;
document.body.appendChild(num4);

// 5. Display the first 5 cities in lotrCitiesArray
const cities5a = lotrCitiesArray.slice();
const cities5 = cities5a.slice(0,5);
// console.log(cities5);
const num5 = document.createElement("div");
num5.textContent = "5. " + JSON.stringify(cities5);
// num5.textContent = "5. " + lotrCitiesArray.slice(0,5);
document.body.appendChild(num5);

// 6. Display the last 5 cities in lotrCitiesArray
const num6 = document.createElement("div");
let i = lotrCitiesArray.length;
const cities6a = lotrCitiesArray.slice();
const cities6 = cities6a.slice((i-5),i);
num6.textContent = "6. " + JSON.stringify(cities6);
document.body.appendChild(num6);

// 7. Display the 3rd to 5th city in lotrCitiesArray
const cities7 = lotrCitiesArray.slice();
console.log(cities7);
const num7 = document.createElement("div");
num7.textContent = "7. " + cities7.slice(2, 5);
document.body.appendChild(num7);

// 8. Using splice, remove "Rohan" from lotrCitiesArray
const num8 = document.createElement("div");
let num8Array = lotrCitiesArray.slice();
num8Array.splice(2, 1);
num8.textContent = "8. " + num8Array;
document.body.appendChild(num8);

// 9. Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray
const num9 = document.createElement("div");
let num9Array = lotrCitiesArray.slice();
// console.log(lotrCitiesArray);
num9Array.splice(5, );
num9.textContent = "9. " + num9Array
document.body.appendChild(num9);

// 10. Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"
const num10 = document.createElement ("div");
let num10Array = num9Array.slice();
num10Array.splice(2, 0, "Rohan");
num10.textContent = "10. " + num10Array;
document.body.appendChild(num10);

// 11. Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray
const num11 = document.createElement ("div");
let num11Array = lotrCitiesArray.slice();
// console.log(lotrCitiesArray);
num11Array.splice(4, 1, "Deadest Marshes");
num11.textContent = "11. " + num11Array;
document.body.appendChild(num11);

// 12. Using slice, display the first 14 characters from bestThing
const num12 = document.createElement ("div");
let num12ArrayA = bestThing.slice();
let num12Array = num12ArrayA.slice(0,14);
num12.textContent = "12. " + num12Array;
document.body.appendChild(num12);
// ** Need to remove spaces **

// 13. Using slice, display the last 12 characters from bestThing
const num13 = document.createElement ("div");
let num13ArrayA = bestThing.slice();
let num13Array = num13ArrayA.slice(-12);
num13.textContent = "13. " + num13Array;
document.body.appendChild(num13);
// ** Need to remove spaces **

// 14. Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even"
const num14 = document.createElement ("div");
let num14Array = bestThing.slice(22, 38);
num14.textContent = "14. " + num14Array;
document.body.appendChild(num14);
// ** Need to remove spaces **

// 15. Repeat #13 using substring instead of slice.
const num15 = document.createElement ("div");
let num15Array = bestThing.substr(-12);
num15.textContent = "15. " + num15Array;
document.body.appendChild(num15);

// 16. Repeat #14 using substr instead of slice.
const num16 = document.createElement ("div");
let num16Array = bestThing.substr(22, 16);
num16.textContent = "16. " + num16Array;
document.body.appendChild(num16);

// 17. Find and display the index of "only" in bestThing
const num17 = document.createElement ("div");
const words17a = bestThing.slice();
const words17 = words17a.split(" ");
let num17Array = words17.indexOf("only");
num17.textContent = "17. " + num17Array;
document.body.appendChild(num17);

// 18. Find and display the index of the last word in bestThing
const num18 = document.createElement ("div");
const words18 = bestThing.split(" ");
num18.textContent = "18. " + words18.length;
document.body.appendChild(num18);

// 19. Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)
// prints the exercise# "19.""
const num19 = document.createElement ("div");
num19.textContent = "19. ";
document.body.appendChild(num19);
// creates a new array "words19" which splits "bestThing" whenever a space occurs.
const words19 = bestThing.split(" ");
// for loop starting a zero and running through the end of "words19".
for(i=0; i<words19.length; i++){
    // creates a new variable to return the results of the loop.
    const num19b = document.createElement ("div");
    // creates a string "string19" for each word in "words19".
    string19 = words19[i].toString();
    // search each word for "oo";
    let posAA = string19.indexOf('aa');
    let posEE = string19.indexOf('ee');
    let posII = string19.indexOf('ii');
    let posOO = string19.indexOf('oo');
    let posUU = string19.indexOf('uu'); 
        // ** Lines 144-147 did not work. Decided to write long-hand if/else statements. 
        // else if(posAA>0||posEE>0||posII>0||posOO>0||posUU>0){
            // num19b.textContent = string19;
            // document.body.appendChild(num19b);
            // }

    // If "aa", "ee", "ii", "oo", "uu" was not found a value of -1 was returned. 
    // If value is >= 0, then num19b is printed.
    // If/else prevents the same word from printing multiple times if double vowels occur more than once in the same word.
        if(posAA>0){
            num19b.textContent = string19;
            document.body.appendChild(num19b);
        }else if(posEE>=0){
                num19b.textContent = string19;
                document.body.appendChild(num19b);
            } else if(posII>=0){
                num19b.textContent = string19;
                document.body.appendChild(num19b);
                } else if(posOO>=0){
                    num19b.textContent = string19;
                    document.body.appendChild(num19b);
                    } else if(posUU>=0){
                        num19b.textContent = string19;
                        document.body.appendChild(num19b);
                        } 
        }   



// 20. Find and display all cities from lotrCitiesArray that end with "or"

const num20b = document.createElement ("div");
num20b.textContent = "20. ";
document.body.appendChild(num20b);

for(i=0; i<lotrCitiesArray.length; i++){
    // console.log(lotrCitiesArray.length)
    const num20 = document.createElement("div");
    lotrCopy = lotrCitiesArray.slice();
    // string20 = lotrCitiesArray[i].toString();
    string20 = lotrCopy[i].toString();
    console.log(lotrCopy);
    console.log(string20);
    
    // search end of each word for "or";
    let posOR = string20.indexOf("or");
        console.log(posOR);

        // if(posOR=string20.length-2){
        if(posOR>+0){
            // num20.textContent = string20;
            // num20.textContent = lotrCitiesArray[i];
            num20.textContent = lotrCopy[i];
            document.body.appendChild(num20);
        }
    }  
    // ** Not returning the expected results. 
    // ** console.log(posOR) is returning 1,4,-1,-1,-1,-1
    // ** returns any city with "or" anywhere, not just ending in "or".

// 21. Find and display all the words in bestThing that start with a "b"
// const words21 = bestThing.slice();
// const words21a = words1.split(" ");
// // console.log(words21a);
// const num21 = document.createElement("div");
// const num21a = document.createElement("div");
// num21.textContent="21. ";
// // document.body.appendChild(num21);
// for(i=0; i<words21a.length; i++){
//     if(words21[i].slice(0)=="B"){
//         num21a.textContent = words21[i];
//         console.log(words21(i))
//         document.body.appendChild(num21a);
//     }
// }
// ** Not Working **

// 22. Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"
// 23. Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"
// 24. Display the index of "Mirkwood" in lotrCitiesArray
// 25. Find and display the first city in lotrCitiesArray that has more than one word
// 26. Reverse the order in lotrCitiesArray
// 27. Sort lotrCitiesArray alphabetically
// 28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)
// 29. Using pop, remove the last city from lotrCitiesArray
// 30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array
// 31. Using shift, remove the first city from lotrCitiesArray
// 32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array
