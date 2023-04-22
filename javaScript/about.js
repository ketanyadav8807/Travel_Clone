const accordion = document.getElementsByClassName("contentBox")
 for(var i=0;i<accordion.length;i++){

    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

//sliding image

var img = [
    "/assets/slider-2.jpg.webp",
    "/assets/slider-1.jpg.webp",
    "/assets/slider-3.jpg.webp",
    "/assets/slider-4.jpg.webp",
    "/assets/slider-5.jpg.webp"
];

var i = -1
setInterval(function () {
 i++
 if (i === img.length) {
     i = 0;
 }
 document.getElementsByClassName("demo_class")[0].src = img[i];
}, 5000);

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
