// Intersection Types

type Admin = {
    name : string;
    privileges : string[];
};

type Employee = {
    name : string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1 : ElevatedEmployee = {
    name : 'Max',
    privileges : ['create-server'],
    startDate : new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


// type guard
function add( a: Combinable , b:Combinable) {
    if(typeof a === 'string' || typeof b === 'string') { // type guard
        return a.toString() + b.toString();
    }
    return a+b;
}

type UnknownEmployee = Employee | Admin;
function printEMployeeInformation( emp : UnknownEmployee) {
    if('privileges' in emp) // type guard
    console.log(emp.privileges);
    if('startDate' in emp) // type guard
    console.log(emp.startDate)
}

printEMployeeInformation({name : 'Anjali' , startDate : new Date()});


class Car {
    drive() {
        console.log('Driving Car....');
    }

    drivingWith(fam : string) {
        console.log(`driving with ${fam}`)
    }
}

class Truck {
    drive() {
        console.log('Driving Truck....');
    }

    loadCargo(amount : number) {
        console.log('loading cargo....' + amount);
    } 
}


type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle : Vehicle) {
    vehicle.drive();
    if('drivingWith' in vehicle || vehicle instanceof Car) // type guard
        vehicle.drivingWith('daughter Teresa');
    if('loadCargo' in vehicle || vehicle instanceof Truck)
    vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

// Discrminated Unions - using switch

interface Bird {
    type: 'bird';
    flyingSpeed : number;
}
interface Horse {
    type: 'horse';
    runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal : Animal) {
    let speed;
    switch(animal.type) {
         case 'bird':
            speed = animal.flyingSpeed;
            break;

        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`${animal.type} is moving at speed : ${speed}`);
}

moveAnimal({type :'horse', runningSpeed : 200})
moveAnimal({type :'bird', flyingSpeed : 500})


// Type casting

const userInputElement = document.querySelector('user-input');
//or,
//const userInputElement1 = <HTMLInputElement>document.getElementById('user-input')!;

if(userInputElement) {
    (userInputElement as HTMLInputElement).value = 'hi there!!';
}


// Index properties

