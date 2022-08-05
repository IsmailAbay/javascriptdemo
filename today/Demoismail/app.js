// liste 
let isimler = [
    'ismail',
    'rıdvan',
    'gülfidan',
    'ibrahim',
    'ishak',
    'ömer',
    'hasan',
    'erkan'

]

// etiket seçiciler
let ul = document.querySelector('ul')
let span = document.querySelector('span')
let input = document.querySelector('input')

// span etiketini gizleme 
span.style.visibility = 'hidden'

// ul etiketine li etiketlerini dahil eder
listeOluştur(isimler)

// arama yap butonu 
function aramaYap() {
    let arananİsimler = isimler.filter(isim => (isim.includes(input.value)))

    if (arananİsimler.length === 0)
        span.style.visibility = 'visible'
    else
        span.style.visibility = 'hidden'
        ul.innerHTML = ""
        listeOluştur(arananİsimler)
}

function listeOluştur(isimler) {
    for (let isim of isimler){
        ul.innerHTML += `<li>${isim}</li>`
    }
}