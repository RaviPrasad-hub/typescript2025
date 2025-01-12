function addAndReturn( number1 : number , number2 : number) {
  return number1 + number2;
}


function add( number1 : number , number2 : number) : void {
  console.log(number1 + number2);
  return;
}

//console.log(addAndReturn(4,6));
//console.log(add(4,8));

let combineValues : (a: number , b: number) => number;
combineValues = addAndReturn;
console.log(combineValues(8,8));


const addAndHandle = (n1 : number , n2 : number , cb : (num : number) => void ) => {
  cb(n1+n2);
  return;
}

addAndHandle(10,24, (result) => {
  console.log(result);
})