const evSahibi = document.querySelector('#evSahibi')
console.log(evSahibi)
const deplasman = document.querySelector('#deplasman')
const tbody = document.querySelector('tbody')

const takimlar = [
    {
        takimAdi: 'Galatasaray',
        galibiyet: 0,
        beraberlik: 0,
        maglubiyet: 0,
        attigiGol: 0,
        yedigiGol: 0,
        averaj: 0,
        puan: 0
    },
    {
        takimAdi: 'Fenerbahçe',
        galibiyet: 0,
        beraberlik: 0,
        maglubiyet: 0,
        attigiGol: 0,
        yedigiGol: 0,
        averaj: 0,
        puan: 0
    }
]

RastgeleSkorUret()


function RastgeleSkorUret() {
    let evSahibiSkor = Math.floor(Math.random() * 6)
    let deplasmanSkor = Math.floor(Math.random() * 6)
    evSahibi.textContent = evSahibiSkor
    deplasman.textContent = deplasmanSkor
    PuanTablosunuGuncelle(evSahibiSkor, deplasmanSkor)
    PuanTablosunuGoster()
}

function PuanTablosunuGuncelle(evSahibiSkor, deplasmanSkor) {
    //Galatasaray
    takimlar[0].attigiGol = evSahibiSkor
    takimlar[0].yedigiGol = deplasmanSkor
    takimlar[0].averaj = evSahibiSkor - deplasmanSkor

    //Fenerbahçe
    takimlar[1].attigiGol = deplasmanSkor
    takimlar[1].yedigiGol = evSahibiSkor
    takimlar[1].averaj = deplasmanSkor - evSahibiSkor


    //Galatasaray kazanırsa
    if (evSahibiSkor > deplasmanSkor) {
        takimlar[0].galibiyet = 1
        takimlar[1].maglubiyet = 1
        takimlar[0].puan = 3
    }

    //Fenerbahçe kazanırsa
    else if (deplasmanSkor > evSahibiSkor) {
        takimlar[1].galibiyet = 1
        takimlar[0].maglubiyet = 1
        takimlar[1].puan = 3
    }

    //Beraberlik
    else {
        takimlar[0].beraberlik = 1
        takimlar[1].beraberlik = 1

        takimlar[0].puan = 1
        takimlar[1].puan = 1
    }
}

function PuanTablosunuGoster() {
    const takimBir = `
    <tr>
    <td>${takimlar[0].takimAdi}</td>
    <td>${takimlar[0].galibiyet}</td>
    <td>${takimlar[0].beraberlik}</td>
    <td>${takimlar[0].maglubiyet}</td>
    <td>${takimlar[0].attigiGol}</td>
    <td>${takimlar[0].yedigiGol}</td>
    <td>${takimlar[0].averaj}</td>
    <td>${takimlar[0].puan}</td>
    </tr>
`

    const takimİki = `
    <tr>
    <td>${takimlar[1].takimAdi}</td>
    <td>${takimlar[1].galibiyet}</td>
    <td>${takimlar[1].beraberlik}</td>
    <td>${takimlar[1].maglubiyet}</td>
    <td>${takimlar[1].attigiGol}</td>
    <td>${takimlar[1].yedigiGol}</td>
    <td>${takimlar[1].averaj}</td>
    <td>${takimlar[1].puan}</td>
    </tr>
`

    tbody.innerHTML = takimBir + takimİki
}

