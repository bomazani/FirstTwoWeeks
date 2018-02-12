

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
let exerciseNum = 1;

// 1. Display an array from the cities in gotCitiesCSV
const cities = gotCitiesCSV.split(",");
const num1 = document.createElement("div");
num1.textContent = JSON.stringify(cities);
document.body.appendChild(num1);

// 2. Display an array of words from the sentence in bestThing
const words = bestThing.split(" ");
const num2 = document.createElement("div");
num2.textContent=JSON.stringify(words);
document.body.appendChild(num2);

// 3. Display a string separated by semi-colons instead of commas from gotCitiesCSV
const cities3= gotCitiesCSV.replace(/,/g,";");
const num3 = document.createElement("div");
num3.textContent = JSON.stringify(cities3);
document.body.appendChild(num3);

// 4. Display a CSV (comma-separated) string from the lotrCitiesArray
const cities4 = lotrCitiesArray.toString();
const num4 = document.createElement("div");
num4.textContent = cities4;
document.body.appendChild(num4);

// 5. Display the first 5 cities in lotrCitiesArray

const num5 = document.createElement("div");
num5.textContent = lotrCitiesArray.slice(0,5);
document.body.appendChild(num5);

// 6. Display the last 5 cities in lotrCitiesArray
const num6 = document.createElement("div");
let i = lotrCitiesArray.length
num6.textContent = lotrCitiesArray.slice((i-5),i);
document.body.appendChild(num6);

// 7. Display the 3rd to 5th city in lotrCitiesArray
// 8. Using splice, remove "Rohan" from lotrCitiesArray
// 9. Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray
// 10. Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"
// 11. Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray
// 12. Using slice, display the first 14 characters from bestThing
// 13. Using slice, display the last 12 characters from bestThing
// 14. Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even"
// 15. Repeat #13 using substring instead of slice.
// 16. Repeat #14 using substr instead of slice.
// 17. Find and display the index of "only" in bestThing
// 18. Find and display the index of the last word in bestThing
// 19. Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)
// 20. Find and display all cities from lotrCitiesArray that end with "or"
// 21. Find and display all the words in bestThing that start with a "b"
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
