let sayac = 0;

let body=document.querySelector("body")
let h1=document.querySelector("h1")
h1.textcontent=`Sayaç: ${sayac}`
sayaciKontrolEt()

function arttir(){
    sayac++;
    h1.textContent = `sayaç: ${sayac}`
    sayaciKontrolEt()
    
}

function eksilt(){
sayac--;
h1.textContent = `sayaç: ${sayac}`
sayaciKontrolEt() 

}

function sayaciKontrolEt(){
    if(sayac>0){
        body.style.backgroundColor="green";
    }


else if(sayac<0){
    body.style.backgroundColor="red";
}

else {
    body.style.backgroundColor="white";
}

}
