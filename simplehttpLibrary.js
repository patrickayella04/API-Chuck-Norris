// function simpleHttp() {
//     this.xhr = new XMLHttpRequest();
// } 

// simpleHttp.prototype.get = function (url, callback ) {
//     setTimeout( () => {

//         this.xhr.open('GET', url, true);
    
//         this.xhr.onload = () => {
//             if (this.xhr.status === 200) {
    
//                 const resopnseObject = JSON.parse(this.xhr.responseText);
    
//                 // console.log(resopnseObject);
//                 callback(resopnseObject);
                
//                 document.getElementById('jokes').innerHTML = resopnseObject.value.joke;

//                 // return resopnseObject
                
//             }

           
            
//         }
        
        
//         this.xhr.send(null);
//     }, 3000);
// }



class simpleHttp {
    // constructor() {
    //     this.xhr = new XMLHttpRequest();
    // }

//     get = function (url, callback) {

//         setTimeout( () => {

//             this.xhr.open('GET', url, true);
        
//             this.xhr.onload = () => {
//                 if (this.xhr.status === 200) {
        
//                     const resopnseObject = JSON.parse(this.xhr.responseText);
        
//                     // console.log(resopnseObject);
//                     callback(null, resopnseObject);
                    
//                     // document.getElementById('jokes').innerHTML = resopnseObject.value.joke;

//                     document.getElementById('jokes').innerHTML = resopnseObject;
                    
//                 } else {
//                     callback('Error: ' + this.xhr.status)
//                 }
//             }
            
//             this.xhr.send(null);
//         }, 3000);
//     }
    
    
// get = function (url) {

//     return new Promise((resolve, reject) => {
//         setTimeout( () => {

//             this.xhr.open('GET', url, true);
        
//             this.xhr.onload = () => {
                
//                 if (this.xhr.status === 200) {
//                 const resopnseObject = JSON.parse(this.xhr.responseText);
//                     resolve(resopnseObject);
//                 } else {
//                     reject('Error: ' + this.xhr.status);
//                 } 
//             }
            
//             this.xhr.send(null);
//         }, 3000);
//     })
    
// }
    
    get (url) {
            

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => resolve(data.value.joke))
                    .catch(error => reject(error));
                    
            })
            
            
        });
                    
    };


//     post = function (url, data, callback) {

//         this.xhr.open('POST', url, true);

//         this.xhr.setRequestHeader('Content-type', 'application/json');
        
//         let self = this;
//         this.xhr.onload = function () {
                    
//             callback(null, self.xhr.responseText);
                    
//         }
        
//         this.xhr.send(JSON.stringify(data));
//     }

// }
    
    
    

// post = function (url, data, callback) {

//     this.xhr.open('POST', url, true);

//     this.xhr.setRequestHeader('Content-type', 'application/json');
    
//     // let self = this;
//     this.xhr.onload = () => {
                
//         callback(null, this.xhr.responseText);
                
//     }
    
//     this.xhr.send(JSON.stringify(data));
// }

}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



// class simpleHttp {

//         constructor() {
//             this.xhr = new XMLHttpRequest();
//         }

//         get = function (url) {

//             return new Promise((resolve, reject) => {
                
//                 setTimeout(() => {

//                     this.xhr.open('GET', url, true);
                
//                     this.xhr.onload = () => {

//                         if (this.xhr.status === 200) {
                
//                             const responseObject = JSON.parse(this.xhr.responseText);
                
//                             console.log(resopnseObject);
                            
                            
//                             document.getElementById('jokes').innerHTML = resopnseObject.value.joke;
            
//                             // return responseObject
                            
//                         }

//                         resolve();
            
//                     }
                    
//                     this.xhr.send(null);
//                 }, 3000);

//             });

//     }

// }



