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
        
        loadData();
    
        // const resopnseObject = JSON.parse(xhr.responseText)
        // console.log(resopnseObject);
    
        xhr.send(null);
    }, 1000);
    
};

const data = [

    { name: 'Patrick', job: 'Software Engineer' },
    { name: 'Mary', job: 'Chef' }
];



function loadData() {

    setTimeout(function(){
        
        // for (let i = 0; i < data.length; i++) {
    
            
            
        //     console.log(data[i].name);
    
        //     document.getElementById('data').innerHTML = (data[i].name);
        // };

        let output = '';
    
        data.forEach(function (data) {

            
            console.log(data.job);

            
            output += `<li>${data.job}</li>`;
            
        })
        document.getElementById('data').innerHTML = output;
    }, 2000)
    
}