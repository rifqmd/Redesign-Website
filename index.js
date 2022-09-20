// scrolling kanan dan kiri section kerjasama
var multipleCardCarousel = document.querySelector("#carouselExampleControls");
if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $("#carouselExampleControls .carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
        }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#carouselExampleControls .carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
        }
    });
} else {
    $(multipleCardCarousel).addClass("slide");
}


// function clik contact us
var modal = document.getElementById("contact-us");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};



// contact us

// Deploy ID : AKfycbyMFUOuioujxM1HAHgsWjYg_aljq6iHVQuWQJCZC-FQKXXr9lZ5D0E7_4yOkE3bsPGDLQ
// URL App : https://script.google.com/macros/s/AKfycbyMFUOuioujxM1HAHgsWjYg_aljq6iHVQuWQJCZC-FQKXXr9lZ5D0E7_4yOkE3bsPGDLQ/exec

const scriptURL = "https://script.google.com/macros/s/AKfycbyMFUOuioujxM1HAHgsWjYg_aljq6iHVQuWQJCZC-FQKXXr9lZ5D0E7_4yOkE3bsPGDLQ/exec";
const form = document.forms["contact-form"];

// select yg class namanya .btn-kirim || manipulasi dom\dokumen
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // ketika tombol submit di klik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle("d-none"); // toggle layak nya sebuah switch atau tombol lampu
    btnKirim.classList.toggle("d-none");

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
    })
        .then((response) => {
            // then

            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle("d-none");
            btnKirim.classList.toggle("d-none");

            // tampilkan alert
            myAlert.classList.toggle('d-none');

            // reset form
            form.reset();

            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});
