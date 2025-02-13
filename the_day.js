document.addEventListener("DOMContentLoaded", function() {
    let container = document.querySelector(".container");
    let card = document.querySelector(".card");

    container.addEventListener("mouseenter", function() {
        card.style.transform = "translateY(-90px)";
        card.style.transition = "transform 0.6s";
    });

    container.addEventListener("mouseleave", function() {
        card.style.transform = "translateY(0)";
    });
});
// The correct one



// document.addEventListener("DOMContentLoaded", function() {
//     let container = document.querySelector(".container");
//     let card = document.querySelector(".card");
//     const envelope = document.getElementById("envelope");

//     envelope.addEventListener("click", function() {
//         envelope.classList.toggle("open");
//     });

//     container.addEventListener("mouseenter", function() {
//         card.style.transform = "translateY(-90px)";
//         card.style.transition = "transform 0.6s";
//     });

//     container.addEventListener("mouseleave", function() {
//         card.style.transform = "translateY(0)";
//     });
// });




// document.addEventListener("DOMContentLoaded", function() {
//     const container = document.querySelector(".container");
//     const card = document.querySelector(".card");
//     const envelope = document.getElementById("envelope");

//     if (container) {
//         container.addEventListener("mouseenter", function() {
//             if (card) {
//                 card.style.transform = "translateY(-90px)";
//                 card.style.transition = "transform 0.6s";
//             } else {
//                 console.error("Element with class 'card' not found.");
//             }
//         });

//         container.addEventListener("mouseleave", function() {
//             if (card) {
//                 card.style.transform = "translateY(0)";
//             }
//         });
//     } else {
//         console.error("Element with class 'container' not found.");
//     }

//     if (envelope) {
//         envelope.addEventListener("click", function() {
//             envelope.classList.toggle("open");
//         });
//     } else {
//         console.error("Element with id 'envelope' not found.");
//     }
// });




