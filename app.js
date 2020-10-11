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

    return new Promise ((resolve, reject) =>  {
        setTimeout(function () {
            data.push(newData);
            resolve();
        }, 1000);
    })
        

}

    
    


createPost({ name: 'Benson', job: 'Truck Driver' })
    .then(loadData);

