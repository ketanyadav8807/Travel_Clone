var img = [
    "/assets/slider-2.jpg.webp",
    "/assets/slider-1.jpg.webp",
    "/assets/slider-3.jpg.webp"
];

var i = -1
setInterval(function () {
    i++
    if (i === img.length) {
        i = 0;
    }
    document.getElementsByClassName("demo_class")[0].src = img[i];
}, 2000);

// paragraph
const accordion = document.getElementsByClassName("contentBox")
console.log(accordion);
 for(var j=0;j<accordion.length;j++){

    accordion[j].addEventListener('click',function(){
        this.classList.toggle('active')
    })
 }

// review slider
var img1 = ["/assets/person_1.jpg.webp",
    "/assets/person_2.jpg.webp", "/assets/person_3.jpg.webp"]
var name = ["Adam Anderson", "Lukas Devlin", "Adam Anderson"];


var i = -1
setInterval(function () {
    i++
    if (i === img1.length) {
        i = 0;
    }
    document.getElementsByClassName("slider_1")[0].src = img1[i];
    if (i === 0) {
        document.querySelector("#slider_box>h2").innerText = "Adam Anderson";
    } else if (i === 1) {
        document.querySelector("#slider_box>h2").innerText = "Lukas Devlin";
    } else if(i===2) {
        document.querySelector("#slider_box>h2").innerText = "Adam Anderson";
    }
}, 3000);

// nav bar

var ham = document.getElementById("hamIcon");
ham.addEventListener("click" , add_class_nav_right);

function add_class_nav_right(){
    var ham = document.getElementById("hamIcon");
    var nav_right = document.querySelector(".nav-right-part");
    nav_right.classList.toggle("nav-append");
    ham.style.display = "none";
    // console.log(nav_right)
}
var cross = document.getElementById("cross");
cross.addEventListener("click", cross_nav);

function cross_nav(){
    var remove_nav = document.querySelector(".nav-append");
    remove_nav.classList.remove("nav-append");
    ham.style.display = "block";
}




