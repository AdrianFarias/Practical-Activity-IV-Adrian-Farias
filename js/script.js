
/*Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback: 'You are old
 enough to drive' but if not 18 give another feedback stating to wait for the number of years, he needs to
 turn 18. */
let age = prompt('enter your age')
if (age >= 18) {
    console.log('You are old enough to drive')
}
else {
    console.log('You are left with ' + (18 - age) + ' years to drive')
}


/* Compare the values of myAge and yourAge using if … else. Based on the comparison and log the
 result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input */
let myage = 20
let yourage = prompt('enter your age:')

if (yourage > myage) {
    console.log('You are ' + (yourage - myage) + ' years older than me.')
}
else if (yourage < myage) {
    console.log('I am ' + (myage - yourage) + ' years older than you.')
}



/* If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
 ● usingif else
 ● ternary operator */
let a = 4
let b = 3

if (a > b) {
    console.log('a is greater than b')
}
else {
    console.log('a is less than b')
}

let resul = a > b
    ? console.log('a is greater than b')
    : console.log('a is less than b')



/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
 ● September,October or November,the season is Autumn.
 ● December,Januaryor February, the season is Winter.
 ● March,April or May, the season is Spring
 ● June,July orAugust, the season is Summer */
let month = prompt('enter a month')
month = month.toLowerCase()

switch (month) {
    case 'september':
    case 'october':
    case 'november':
        console.log('the season is autumn')
        break

    case 'december':
    case 'january':
    case 'february':
        console.log('the season is winter')
        break

    case 'march':
    case 'april':
    case 'may':
        console.log('the season is spring')
        break

    case 'june':
    case 'july':
    case 'august':
        console.log('the season is summer')
        break

    default:
        console.log('it is not a month')
}


/* Write a code which can give grades to students according to their scores:
 ● 80-100,A
 ● 70-89,B
 ● 60-69,C
 ● 50-59,D
 ● 0-49,F */
 let cali = prompt('enter a score between 0 and 100')

if (cali >= 80 && cali <= 100) {
    console.log('A')
} else if (cali >= 70 && cali <= 89) {
    console.log('B')
} else if (cali >= 60 && cali <= 69) {
    console.log('C')
} else if (cali >= 50 && cali <= 59) {
    console.log('D')
} else if (cali >= 0 && cali <= 49) {
    console.log('F')
} else {
    console.log('it is not beetween 0 and 100')
}


