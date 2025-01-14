let userInput: unknown;
let userName: string;
let error = '';

userInput = 5;
userInput  = 'Max';
if(typeof userInput === 'string'){
  userName = userInput;
}

try {
  const generateError = (message : string , code : number ) : never => {
    throw { messageIs : message ,
      errorCode : code
    }
  }
  error = generateError('Server error occured', 500);
  
} catch ( Exception ) {
  console.log('error is , ' + error);
}



