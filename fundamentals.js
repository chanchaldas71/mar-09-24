// 1. How to declare a variable using let and const
const fattherName = 'Arnold';
let season = 'Rainy'
season = 'winter'

//2. 6 basic condition >, <, ===, !==, <=, >=;
// multiple conditon : &&, ||
if (fattherName === 'Arnold' || season === 'Rainy') {

}
else if () {

}
else {

}

// 3. Array
// index, 
// length, push, 
const number = [53, 523, 232, 12,0];

// 4.  for loop
for (let i =0; i<number.length; i++) {
    const numbers = number[i];
    console.log(numbers)
}

// 5. function
function maltiply (num1, num2) {
    const result = num1*num2;
    return result;
}

const output = maltiply(2,3);

// 6. object
// 3 ways to access property by name 
const student = {
    name:'Abhijit',
    age: 21,
    favMovie:['Avenger','Infinity War']
}
const myvariable = 'age';
console.log(student.name); //direct by property
console.log(student['name']) //access via property name string
console.log(student[age]) //access via property name in a varible