/**
 * Created by StudentGoIT on 18.05.2017.
 */
function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'sounds/gun1.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}
var ourBirds=[
    {
        'id': 'big_sinica',
        'name': 'Большая синица',
        'imgSrc': 'images/big_sinica.jpg',
        'birdSound': 'birds-sounds/golosa-ptic-bol-shaya-sinica-parus-major.mp3'
    },
    {
        'id': 'chizh',
        'name': 'Чиж',
        'imgSrc': 'images/chizh.jpeg',
        'birdSound': 'birds-sounds/golosa-ptic-chizh-spinus-spinus.mp3'
    },
    {
        'id': 'galka',
        'name': 'Галка',
        'imgSrc': 'images/galka.jpg',
        'birdSound': 'birds-sounds/golosa-ptic-galka-corvus-monedula.mp3'
    },
    {
        'id': 'korostel',
        'name': 'Коростель',
        'imgSrc': 'images/korostel.jpg',
        'birdSound': 'birds-sounds/golosa-ptic-korostel-crex-crex.mp3'
    }
]

var out = '';
for(key in ourBirds) {
    console.log(key);
    console.log(ourBirds[key].name);
    console.log(ourBirds[key].imgSrc);
    out += '<div class="col-3">';
    out += '<p>'+ourBirds[key].name+'</p>';
    out += '<img src="'+ourBirds[key].imgSrc+'" id="'+ourBirds[key].id+'" alt="bird">';
    out += '</div>';
}
document.getElementById('birds').innerHTML = out;

var audio = new Audio();

function birdSound() {
    console.log(this.id);
    var idB =this.id;
    if (audio.autoplay == 'true') {
        // pause(audio);
        audio.pause();
    } else {
        for(key in ourBirds) {
            if( idB == ourBirds[key].id){
                audio.src = ourBirds[key].birdSound;
                audio.autoplay = true;
            }
        }
    }

}

var birdSoundAll = document.querySelectorAll('.col-3 img');
    console.log(birdSoundAll);

for(var i=0; i < birdSoundAll.length; i++){
    birdSoundAll[i].addEventListener('click', birdSound);
     // this.onclick = birdSound;
}

