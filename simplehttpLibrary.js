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
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    get = function (url, callback) {
        setTimeout( () => {

            this.xhr.open('GET', url, true);
        
            this.xhr.onload = () => {
                if (this.xhr.status === 200) {
        
                    const resopnseObject = JSON.parse(this.xhr.responseText);
        
                    // console.log(resopnseObject);
                    callback(resopnseObject);
                    
                    document.getElementById('jokes').innerHTML = resopnseObject.value.joke;
    
                    // return resopnseObject
                    
                }
    
               
                
            }
            
            
            this.xhr.send(null);
        }, 3000);
    }
}





