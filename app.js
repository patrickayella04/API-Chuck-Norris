document.getElementById('findJoke-btn').addEventListener('click', loadJokes);





function loadJokes() {
    setTimeout(function () {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://api.icndb.com/jokes/random', true);
    
        xhr.onload = () => {
            if (xhr.status === 200) {
    
                const resopnseObject = JSON.parse(xhr.responseText);
    
                console.log(resopnseObject);
            
                document.getElementById('jokes').innerHTML = resopnseObject.value.joke;
                
            }
        }
        
        
        xhr.send(null);
    }, 2000);
    
};

const data = [

    { name: 'Patrick', job: 'Software Engineer' },
    { name: 'Mary', job: 'Chef' }
];



// function loadData() {

//     setTimeout(function(){
        
//         let output = '';
    
//         data.forEach(function (data) {

            
//             console.log(data.job);

            
//             output += `<li>${data.job}</li>`;
            
//         })
//         document.getElementById('data').innerHTML = output;
//     }, 2000)
    
// };

// function createPost(newData, callback) {
//     setTimeout(function () {
//         data.push(newData);
//         callback();
//     }, 5000);
    
// }

// createPost({ name: 'Benson', job: 'Truck Driver' }, loadData);

// loadData()

function loadData() {

    setTimeout(function(){
        
        let output = '';
    
        data.forEach(function (data) {

            
            console.log(data.job);

            
            output += `<li>${data.job}</li>`;
            
        })
        document.getElementById('data').innerHTML = output;
    }, 2000)
    
};

function createPost(newData) {

    return new Promise((resolve, reject) => {
        
        
        setTimeout(function () {
                
            data.push(newData);
            const err = true;

            if (!err) {
                reject(console.log('Error in machine!'))
            } else {
                resolve();
            }
            

        }, 1000);
        

        
    })
        

}

    
    


createPost({ name: 'Benson', job: 'Truck Driver' })
    .then(loadData);
//////////////////////////////////////////////////////////////////


// function Car(color, make) {
//     this.color = color;
//     this.make = make;

//      this.calculateAgeCar = function (makeYear) {
//         this.makeYear = makeYear;
//         const age = 2020 - makeYear;

//         return age;
//     }
// }

// const car1 = new Car('blue', 'ford');

// console.log(car1.calculateAgeCar(1978));

// // 
// Car.prototype.getCar = function () {
//     return `This ${this.make} comes in a range of colors. This particular model comes in ${this.color}.`;
// };

// console.log(car1.getCar())


class Car {
    constructor(color,make) {
        this.color = color;
        this.make = make;
    }

    calculateAgeOfCar(makeYear) {
        this.makeYear = makeYear;
        const age = 2020 - makeYear;

        return age;
    }

    getCar() {
        return `This ${this.make} comes in a range of colors. This particular model comes in ${this.color}.`;
    }
}

const car1 = new Car('Blue', 'Ford');

console.log(car1)

console.log(car1.calculateAgeOfCar(1973));

console.log(car1.getCar())

class Customer extends Car {
    constructor(color, make, firstName, lastName, purchaseNumber) {
        super(color, make); // Calls parent class constructor
        this.firstName = firstName;
        this.lastName = lastName;
        this.purchaseNumber = purchaseNumber;
    }
    greeting() {
        return `Hello ${this.firstName} ${this.lastName}, thank you for placing your order on your new sports ${this.make} in racing ${this.color}. Please remember your purchase number: ${this.purchaseNumber}.`;
    }
}

const customer1 = new Customer('Green', 'Mustang', 'Patrick', 'Nyeko', '111-22-333');
console.log(customer1);
console.log(customer1.greeting())