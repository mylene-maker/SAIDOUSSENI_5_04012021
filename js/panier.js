/////////// Recupération des données//////////////////////
xhr = new XMLHttpRequest();
xhr.onreadystatechange = function (){
    console.log(this);

    if (this.readyState == 4 && this.status == 200){
        var response = JSON.parse(this.responseText);
        console.log(response);
    }
};

xhr.open("GET", "http://localhost:3000/api/teddies");
xhr.responseType = "text";
xhr.send();



