const number = [53, 523, 232, 12,0];
const student = {
    name:'Abhijit',
    age: 21,
    favMovie:['Avenger','Infinity War']
}
// 1. template string
const about = `My Name is ${student.name} age of ${student.age} has number ${number[4]} also likes movies ${student.favMovie[0]}`;
console.log(about);
// 2. Arrow function
const getfiftyFive = () => 55;
const addsixtyfive = num => num + 65;
const isEven = x => x %2 ==0;
const addThree = (x,y,z) => x + y + z;
const doMath = (num1,num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = number;
number.push(44);
console.log(newNumbers)

// create a new array from a older array and add an element
const currentNumbers =[...number,66];
console.log(number);
console.log(newNumbers);
console.log(currentNumbers);
