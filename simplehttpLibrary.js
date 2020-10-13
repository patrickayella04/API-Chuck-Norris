function simpleHttp() {
    this.xhr = new XMLHttpRequest();
} 

simpleHttp.prototype.get = function (url) {
    setTimeout( () => {

        this.xhr.open('GET', url, true);
    
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
    
                const resopnseObject = JSON.parse(this.xhr.responseText);
    
                console.log(resopnseObject);
            
                document.getElementById('jokes').innerHTML = resopnseObject.value.joke;
                
            }
        }
        
        
        this.xhr.send(null);
    }, 3000);
}

