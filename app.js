let takimAdi = document.querySelector("input")
let takimListesi = document.querySelector("#takimListesi")
console.log(takimAdi)
console.log(takimListesi)




function takimEkle(){
    let listItem = document.createElement("li")
    listItem.textContent=takimAdi.value
    takimListesi.append(listItem)
    takimAdi.value=""
}