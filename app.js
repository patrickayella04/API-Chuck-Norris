



// function loadJokes() {
//     setTimeout(function () {
//         const xhr = new XMLHttpRequest();

//         xhr.open('GET', 'http://api.icndb.com/jokes/random', true);
    
//         xhr.onload = () => {
//             if (xhr.status === 200) {
    
//                 const resopnseObject = JSON.parse(xhr.responseText);
    
//                 console.log(resopnseObject);
            
//                 document.getElementById('jokes').innerHTML = resopnseObject.value.joke;
                
//             }
//         }
        
        
//         xhr.send(null);
//     }, 2000);
    
// };

const loadJokes = new simpleHttp();

// const jokes = loadJokes.get('http://api.icndb.com/jokes/15', function (err, jokes) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(jokes)
//     }
// });

// const jokes = loadJokes.get('http://api.icndb.com/jokes/15').then( (post) => {
//     console.log(post)
// }).catch((error) => {
//     console.log(error)
// });

// loadJokes.get('http://api.icndb.com/jokes/15').then((joke) => {
//     document.getElementById('jokes').innerHTML = joke;
//     console.log(joke);
// }).catch((error) => {
//     console.log(error)
// });
// const getJoke = loadJokes.get('http://api.icndb.com/jokes/random').then((joke) => {
    
//     console.log(joke);
// }).catch((error) => {
//     console.log(error)
// });

// Get post
// document.getElementById('findJoke-btn').addEventListener('click', function () {
    
//     loadJokes.get('http://api.icndb.com/jokes/random')
//         .then((joke) => {
//         document.getElementById('jokes').innerHTML = joke;
//         console.log(joke);
//     }).catch((error) => {
//         console.log(error)
//     });
    
// });
///////////////////////////////////////////////////////////////////
const data = {
    email: 'patrickayella04@gmail.com',
    body: 'Why did the chicken cross the road? It wanted to',
    name: 'Patrick Nyeko',
    username: 'patnyeko'
}

// Get post (placehoder)
loadJokes.get('https://jsonplaceholder.typicode.com/users')
        .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error)
    });




// Create Post
// loadJokes.post('https://jsonplaceholder.typicode.com/users', data)
//         .then((data) => {
//         console.log(data);
//     }).catch((error) => {
//         console.log(error)
//     });

//Update Post
// loadJokes.put('https://jsonplaceholder.typicode.com/users/2', data)
//         .then((data) => {
//         console.log(data);
//     }).catch((error) => {
//         console.log(error)
//     });



loadJokes.delete('https://jsonplaceholder.typicode.com/users/2', data)
        .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error)
    });


///////////////////////////////////////////////////////////////
// const data = {
//     title: 'Custom Post',
//     body: 'This is a custom post'
// };

// loadJokes.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(post)
//     }
// });


    


// console.log(jokes)

// document.getElementById('findJoke-btn').addEventListener('click', loadJokes);





// const data = [

//     { name: 'Patrick', job: 'Software Engineer' },
//     { name: 'Mary', job: 'Chef' }
// ];



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

// function createPost(newData) {

//     return new Promise((resolve, reject) => {
        
        
//         setTimeout(function () {
                
//             data.push(newData);
//             const err = true;

//             if (!err) {
//                 reject(console.log('Error in machine!'))
//             } else {
//                 resolve();
//             }
            

//         }, 1000);
        

        
//     })
        

// }

    
    


// createPost({ name: 'Benson', job: 'Truck Driver' })
//     .then(loadData);
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


// class Car {
//     constructor(color,make) {
//         this.color = color;
//         this.make = make;
//     }

//     calculateAgeOfCar(makeYear) {
//         this.makeYear = makeYear;
//         const age = 2020 - makeYear;

//         return age;
//     }

//     getCar() {
//         return `This ${this.make} comes in a range of colors. This particular model comes in ${this.color}.`;
//     }
// }

// const car1 = new Car('Blue', 'Ford');

// console.log(car1)

// console.log(car1.calculateAgeOfCar(1973));

// console.log(car1.getCar())

// class Customer extends Car {
//     constructor(color, make, firstName, lastName, purchaseNumber) {
//         super(color, make); // Calls parent class constructor
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.purchaseNumber = purchaseNumber;
//     }
//     greeting() {
//         return `Hello ${this.firstName} ${this.lastName}, thank you for placing your order on your new sports ${this.make} in racing ${this.color}. Please remember your purchase number: ${this.purchaseNumber}.`;
//     }
// }

// const customer1 = new Customer('Green', 'Mustang', 'Patrick', 'Nyeko', '111-22-333');
// console.log(customer1);
// console.log(customer1.greeting())
// console.log(customer1.getCar());



////////////////////////////////////////////////////
// async await 

// async function myFunc() {
    // return 'Hello, Patrick';
    // If we do anything asyncrhonous in here we can use 'await' to wait until its resolved.
    
    ///////////////////////////////////
    // My way - still works 
    // const promise = new Promise((resolve, reject) => {

    // const error = false;
    // if (!error) {
    //     setTimeout(() => resolve('Hello'), 1000);
    // } else {
    //     reject(console.log('Error has occured...'))
    // }
    // });

    // const res = await promise; // Wait until promise is resolved. 
    
    // return res;
    /////////////////////////////////////////////////////////
    // Second way
    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('Hello'), 1000);
    // });

    // const error = false;

    // if (!error) {
    //     const response = await promise; // Wait until promise is resolved
//         return response;
//     } else {
//         await Promise.reject(new Error('Something went wrong...'))
//     }




// }

// myFunc()
//     .then(response => console.log(response))
//     .catch(error => console.log(error))


