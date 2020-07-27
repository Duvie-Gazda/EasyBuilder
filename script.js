let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
    if(ajax.status === 200){
        if(ajax.readyState === 4){
            console.log(this.response);
        }
    }
}
ajax.open('GET','https://localhost:5001/easy?id=2&name=Vitalik&price=6.6',true);
ajax.send();