const teclas = document.querySelectorAll(".teclas")
const controlVolum = document.getElementById("volum")

let dataKeys = [];

let audios = []

let audiossrc = [
    audio1 = new Audio('./audio/t1.mp3'),
    audio2 = new Audio('./audio/t2.mp3'),
    audio3 = new Audio('./audio/t3.mp3'),
    audio4 = new Audio('./audio/t4.mp3'),
    audio5 = new Audio('./audio/t5.mp3'),
    audio6 = new Audio('./audio/t6.mp3'),
    audio7 = new Audio('./audio/t7.mp3'),
    audio8 = new Audio('./audio/t8.mp3'),
    audio9 = new Audio('./audio/t9.mp3'),
    audio10 = new Audio('./audio/t10.mp3'),
    audio11 = new Audio('./audio/t11.mp3'),
    audio12 = new Audio('./audio/t12.mp3'),
    audio13 = new Audio('./audio/t13.mp3'),
    audio14 = new Audio('./audio/t14.mp3'),
    audio15 = new Audio('./audio/t15.mp3'),
    audio16 = new Audio('./audio/t16.mp3'),
    audio17 = new Audio('./audio/t17.mp3'),
]

let volm = 1

teclas.forEach(tecla => {
    //console.log(tecla.id);

    dataKeys.push(tecla.dataset.key);

    audios.push(
        {
            id: tecla.id,
            key: tecla.dataset.key
        },
    );
    
    tecla.addEventListener("click", (e) => {

        pos = audios.map(function(e) { return e.id; });

        console.log(tecla.id);
        audiossrc[pos.indexOf(tecla.id)].volume = volm
        audiossrc[pos.indexOf(tecla.id)].play()

        setInterval(audiossrc[pos.indexOf(tecla.id)].currentTime = 0, 1500)

        console.log(pos.indexOf(tecla.id)); // Retorna 0
    });
});

document.addEventListener("keyup", (press) => {
    if(dataKeys.includes(press.key.toLowerCase())) {
        pos = audios.map(function(e) { return e.key; });

        //console.log(tecla.id);
        audiossrc[pos.indexOf(press.key.toLowerCase())].volume = volm
        audiossrc[pos.indexOf(press.key.toLowerCase())].play()

        setInterval(audiossrc[pos.indexOf(press.key.toLowerCase())].currentTime = 0, 100)

        console.log(pos.indexOf(press.key.toLowerCase())); // Retorna 0
    }

    console.log(press.key.toLowerCase())
});