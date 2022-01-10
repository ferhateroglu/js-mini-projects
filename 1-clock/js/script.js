let myName = prompt('Adınızı giriniz');
let nameElement = document.querySelector('#myName');
nameElement.innerText = myName;
let gunler = ['PAZAR','PAZARTESİ','SALI','ÇARŞAMBA','PERŞEMBE','CUMA','CUMARTESİ'];
const showTime = () => {
    let dateTime = new Date();
    let saat = dateTime.getHours();
    let dakika = dateTime.getMinutes();
    let saniye = dateTime.getSeconds();
    let gun = dateTime.getDay();
    let myClock = document.querySelector('#myClock');

    myClock.innerHTML = `<h1>${saat}:${dakika}:${saniye} ${gunler[gun]}</h1>`
}
setInterval(showTime,10);