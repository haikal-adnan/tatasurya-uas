function buka_menu(){
    document.querySelector(".penutup_menu").style.display = "block"; 
    document.querySelector(".app").style.display = "flex"; 
    setTimeout(function(){
        document.querySelector(".app").style.width = "250px"; 
    }, 100);
}

function tutup_menu(){
    document.querySelector(".app").style.width = "0";
    setTimeout(function(){
        document.querySelector(".penutup_menu").style.display = "none";
        document.querySelector(".app").style.display = "none"; 
    }, 100);
}

window.addEventListener('resize', function() {
    if (window.innerWidth >= 1200) {
        document.querySelector(".app").style.display = "flex"; 
        document.querySelector(".app").style.width = "250px"; 
    }
    else{
        tutup_menu();
    }
});

let soal = 1;
const kumpulan_soal = {
    1: "Manakah planet yang termasuk dalam kategori 'Planet dalam' berdasarkan jaraknya dengan matahari?",
    2: "Apa yang termasuk dalam benda-benda langit tata Surya?",
    3: "Apa yang menyebabkan planet-planet terlihat bercahaya di Tata Surya?",
    4: "Di mana letak utama asteroid dalam tata surya?",
    5: "Berikut pernyataan yang benar tentang Bumi adalah"
}

const kumpulan_jawaban = {
    1: ["Uranus", "Venus", "Jupiter", "Saturnus"],
    2: ["Meteorit dan koment", "Planet, satelit, dan meteorit", "Bintang dan planet", "Satelit dan asteroid"],
    3: ["Mereka memantulkan cahaya dari bulan", "Mereka memancarkan cahaya dari intinya", "Cahaya yang dipantulkan dari matahari", "Mereka memiliki sumber cahaya sendiri"],
    4: ["Di antara lintasan planet Venus dan Bumi", "Di antara planet Bumi dan Mars", "Di antara planet Mars dan Jupiter", "Di antara lintasan planet Jupiter dan Saturnus"],
    5: ["Bumi terkadang disebut sebagai 'Planet Merah'", "Bumi adalah salah satu dari empat planet gas raksasa", "Bumi merupakan planet terbesar dalam Tata Surya", "Bumi adalah planet terdekat dari matahari"]
}

const jawaban_benar = {
    1: "Venus",
    2: "Planet, satelit, dan meteorit",
    3: "Cahaya yang dipantulkan dari matahari",
    4: "Di antara planet Mars dan Jupiter",
    5: "Bumi adalah planet terdekat dari matahari"
}

function checkJawaban(jawaban) {
    if (jawaban === jawaban_benar[soal]) {
        alert('Jawaban benar!');
    } else {
        alert('Jawaban salah!');
    }
    soal++;
    if (soal <= Object.keys(kumpulan_soal).length) {
        loadSoal();
    } else {
        alert('Kuis selesai!');
        window.location.href = 'materi.html';
    }
}

function loadSoal() {
    document.getElementById('soalText').innerText = kumpulan_soal[soal];
    const answers = kumpulan_jawaban[soal];
    const divs = document.querySelectorAll('.ans > div > div');
    divs.forEach((div, index) => {
        div.querySelector('.answersText').innerText = answers[index];
        div.setAttribute('onclick', `checkJawaban('${answers[index]}')`);
    });
}

window.onload = loadSoal;