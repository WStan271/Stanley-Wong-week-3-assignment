/* 
1)
(a)Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
*/
var ages = [3,9,23,64,2,8,28,93]
result = ages [0] - ages[ages.length-1]
console.log(result)

//(b)Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(50)
result2 = ages [0] - ages[ages.length-1]
console.log(result2)
//(c)Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let sum = 0
for (let i = 0; i<ages.length;i++)
{
    sum += ages[i]
    console.log(ages[i])
}
console.log("Sum is: " +sum)
console.log("Average is: " +sum/(ages.length))

/*
2)
(a)Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
*/
var letterSum = 0
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
for (var i = 0; i<names.length;i++)
{
    letterSum += names[i].length
}
console.log("Sum is: " +letterSum)
console.log("Average is: " +letterSum/(names.length))
//(b)Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
var concatArray = []
for (let i = 0; i<names.length;i++)
{
    concatArray = concatArray + " " + names[i]
}
console.log(concatArray)

/* 3)How do you access the last element of any array?

You can access the last element of array by using the .length function to get the size of the array then subtract it by 1 to get the index of last element

//4)How do you access the first element of any array?

First element in array always has index of zero

*/

//5) Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

var nameLengths = []

for (let i = 0; i<names.length;i++)
{
    nameLengths.push(names[i].length)
}
console.log("Name lengths are: " +nameLengths)

//6)Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
var nameLengthSum = 0
for (let i = 0; i<nameLengths.length;i++)
{
    nameLengthSum += nameLengths[i]
}
console.log(nameLengthSum)

//7) Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

function conCat(word,n)
{
    var newWord = ''
    for (let i = 0; i<n;i++)
    {
       newWord = newWord.concat(word)
    }
    return newWord
}

console.log(conCat("word",4))

//8) Write a function that takes two parameters, firstName and lastName, and returns a full name 
function fullName (firstname, lastname)
{
    return firstname + " " + lastname
}
console.log("Full Name: "+fullName("Stanley", "Wong"))

//9)Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function greaterThanOneHundred (array)
{
    let sum = 0
    for (let i = 0;i<array.length;i++)
    {
        sum += array[i]
    }
    if (sum > 100)
    {
        return true
    }
    else
        return false
}

console.log("greaterThanOneHundred "+greaterThanOneHundred([10]))
console.log("greaterThanOneHundred "+greaterThanOneHundred([101]))

//10)Write a function that takes an array of numbers and returns the average of all the elements in the array.

function sumFunction(array)
{

let newSum = 0
for (let i = 0; i<array.length;i++)
{
    newSum += array[i]
}
return newSum

}
console.log("sumFunction: " +sumFunction([1,2,3]))

//11) Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function twoArrays(array1,array2)
{
    let array1Sum = 0
    let array2Sum = 0
    for (let i = 0; i<array1.length;i++)
    {
        array1Sum += array1[i]
    }
    for (let i = 0; i<array2.length;i++)
    {
        array2Sum += array2[i]
    }
    if(array1Sum > array2Sum)
    {
        return true
    }
    else 
    {
        return false
    }
    
}

console.log("Two arrays: "+twoArrays([2,2],[1,1]))

//12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside,moneyInPocket)
{
    if(isHotOutside === true && moneyInPocket > 10.50)
    {
        return true
    }
    else 
    {
        return false
    }
}
console.log("willBuyDrink: "+willBuyDrink(true,80))
console.log("willBuyDrink: "+willBuyDrink(false,5))

//13)Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function canIgoToSleep (homeWork,chores,alarm)
{
    if(homeWork === false)
    {
        console.log("Go finish your homework")
    }
    if(chores=== false)
    {
        console.log("Go finish your chores")
    }
    if(alarm === false)
    {
        console.log("Go set up your alarm")
    }
    if(homeWork === true && chores === true && alarm === true)
    {
        console.log("You may go to sleep")
    }
}

canIgoToSleep(true,true,true)
canIgoToSleep(false,false,false)

// This function is for people that dont know if they should go to sleep or not. It helps people decide if it is an appropriate time to sleep or not.