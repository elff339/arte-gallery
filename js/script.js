/* ================================= */
/* ANA SAYFA - 3D CAROUSEL */
/* ================================= */

const carousel = document.getElementById("carousel");
const container = document.querySelector(".gallery-container");


/* Sadece ana sayfada carousel varsa çalıştır */

if (carousel && container) {

    let currentRotation = 0;
    let targetRotation = 0;

    let isDragging = false;
    let startX = 0;


    // MOUSE BASILDIĞINDA

    container.addEventListener("mousedown", (e) => {

        isDragging = true;

        startX = e.clientX;

    });


    // MOUSE BIRAKILDIĞINDA

    window.addEventListener("mouseup", () => {

        isDragging = false;

    });


    // MOUSE HAREKETİ

    window.addEventListener("mousemove", (e) => {

        if (!isDragging) return;

        const deltaX = e.clientX - startX;

        targetRotation += deltaX * 0.3;

        startX = e.clientX;

    });


    // MOUSE TEKERLEĞİ

    container.addEventListener("wheel", (e) => {

        e.preventDefault();

        targetRotation -= e.deltaY * 0.15;

    });


    // YUMUŞAK DÖNÜŞ

    function animate() {

        currentRotation +=
            (targetRotation - currentRotation) * 0.08;

        carousel.style.transform =
            `rotateY(${currentRotation}deg)`;

        requestAnimationFrame(animate);

    }

    animate();

}



/* ================================= */
/* ESER BİLGİLERİ */
/* ================================= */

const artworks = {

    1: {
        title: "İnci Küpeli Kız",
        artist: "Johannes Vermeer",
        image: "images/eser1.png",
        description: "Johannes Vermeer'in en tanınmış eserlerinden biridir. Genç bir kızın inci küpesi ve yüzündeki sakin ifade eserin en dikkat çekici özelliklerindendir."
    },

    2: {
        title: "Ayçiçekleri",
        artist: "Vincent van Gogh",
        image: "images/eser2.png",
        description: "Van Gogh'un ayçiçeklerini konu alan ünlü resim serilerinden biridir. Eserde canlı sarı tonları ve güçlü fırça darbeleri dikkat çeker."
    },

    3: {
        title: "Belleğin Azmi",
        artist: "Salvador Dalí",
        image: "images/eser3.png",
        description: "Salvador Dalí'nin sürrealizmin en tanınmış eserlerinden biridir. Eriyen saatler, zamanın akışkan ve değişken doğasını simgesel olarak ele alır."
    },

    4: {
        title: "Cafe Terrace at Night",
        artist: "Vincent van Gogh",
        image: "images/eser4.png",
        description: "Van Gogh'un gece atmosferini ve yıldızlı gökyüzünü kullandığı önemli eserlerinden biridir. Fransa'nın Arles kentindeki bir kafenin gece görünümünü tasvir eder."
    },

    5: {
        title: "Madame Monet ve Oğlu",
        artist: "Claude Monet",
        image: "images/eser5.png",
        description: "Claude Monet'nin eşi Camille Monet ve oğulları Jean'i tasvir ettiği eserlerinden biridir. Doğal ışık ve açık hava atmosferi Monet'nin izlenimci üslubunu yansıtır."
    },

    6: {
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        image: "images/eser6.png",
        description: "Leonardo da Vinci'nin dünyaca ünlü eseridir. Gizemli gülümsemesi ve bakışlarıyla sanat tarihinin en çok tanınan portrelerinden biri olmuştur."
    },

    7: {
        title: "Çığlık",
        artist: "Edvard Munch",
        image: "images/eser7.png",
        description: "Edvard Munch'un en tanınmış eseridir. Eserde korku, kaygı ve varoluşsal bunalım gibi yoğun duygular çarpıcı renkler ve dalgalı çizgilerle anlatılır."
    },

    8: {
        title: "The Elephants",
        artist: "Salvador Dalí",
        image: "images/eser8.png",
        description: "Salvador Dalí'nin sürrealist eserlerinden biridir. Uzun ve ince bacaklara sahip filler, gerçeküstü ve hayal gücüne dayalı bir görüntü oluşturur."
    },

    9: {
        title: "Kaplumbağa Terbiyecisi",
        artist: "Osman Hamdi Bey",
        image: "images/eser9.png",
        description: "Osman Hamdi Bey'in en bilinen eserlerinden biridir. Elindeki ney ve çevresindeki kaplumbağalar üzerinden sabır ve değişim gibi kavramlar yorumlanır."
    },

    10: {
        title: "Mihrap",
        artist: "Osman Hamdi Bey",
        image: "images/eser10.png",
        description: "Osman Hamdi Bey'in dikkat çeken eserlerinden biridir. Eserde figür, mimari detaylar ve doğu sanatına ait unsurlar bir arada kullanılmıştır."
    }

};



/* ================================= */
/* ESER BİLGİ PENCERESİNİ AÇ */
/* ================================= */

function openArtwork(id) {

    const artwork = artworks[id];

    if (!artwork) {
        return;
    }

    document.getElementById("modalImage").src =
        artwork.image;

    document.getElementById("modalImage").alt =
        artwork.title;

    document.getElementById("modalTitle").textContent =
        artwork.title;

    document.getElementById("modalArtist").textContent =
        artwork.artist;

    document.getElementById("modalDescription").textContent =
        artwork.description;

    document.getElementById("artworkModal").classList.add("active");

}



/* ================================= */
/* ESER BİLGİ PENCERESİNİ KAPAT */
/* ================================= */

function closeArtwork() {

    const modal = document.getElementById("artworkModal");

    if (modal) {

        modal.classList.remove("active");

    }

}



/* ================================= */
/* DIŞ KISMA TIKLAYINCA KAPAT */
/* ================================= */

const artworkModal =
    document.getElementById("artworkModal");


if (artworkModal) {

    artworkModal.addEventListener("click", function(event) {

        if (event.target === artworkModal) {

            closeArtwork();

        }

    });

}



/* ================================= */
/* ESC TUŞU İLE KAPAT */
/* ================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeArtwork();

    }

});
