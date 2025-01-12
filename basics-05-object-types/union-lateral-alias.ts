type Combinable = number | string ;
type ConversionDescriptor = 'as-number' | 'as-text';


// union types
function combine(input1 : Combinable , input2 : Combinable , resultConversion : ConversionDescriptor) {
  let result;
  if ( typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  
  return result;
}


const combineAges = combine( 23, 56 , 'as-number');
console.log(combineAges);

const combinedStringAges = combine('23' , '45' , 'as-text');

const combinedNames = combine( 'Max', 'Anna' , 'as-text');
console.log(combinedNames);

// literal types

