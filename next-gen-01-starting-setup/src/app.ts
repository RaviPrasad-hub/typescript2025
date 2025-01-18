//arrow functions

const add = (a: number , b:number) => a + b;
const printOutput = (output : string | number) => console.log(output);
printOutput(add(5,12))


// default function parameters

const adddef = (a: number , b:number = 2) => a + b;
const printOutputDef = (output : string | number) => console.log(output);
printOutputDef(adddef(5));

// spread operator

const hobbies = ['dancing' , 'sports'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);


const person = {
    name : 'Ronu',
    age : '30'
};

const copiedPerson = {...person}; //perfect copy instead of just the reference;
console.log(copiedPerson)

// Rest parameters

const addNum = (...numbers: number[] | [number , number, number]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    } , 0);
};

const addedNumbers = addNum(5,10,3,21,1,2);
console.log(addedNumbers);

