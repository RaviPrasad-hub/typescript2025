// const ADMIN =0 ;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN  = 'ADMIN' , READ_ONLY = 20 , AUTHOR = 'AUTHOR' };

type personProps = {
  name : string;
  age : number;
  hobbies : string[];
  role : [ any , string]
}

const person: personProps = {
  name: 'Maximilian',
  age: 30,
  hobbies : ['Cooking' , 'Dancing'],
  role : [ Role.ADMIN , 'author']
};

let favoriteActivities : any[];
favoriteActivities = ["Dancing",'basketball',1];
console.log(person.name);

for( const hobby of person.hobbies) {
  console.log(`hobby is ${hobby.toUpperCase()}`);
}