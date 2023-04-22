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


var nav_back_img = document.getElementById("behind-nav-img");
var nav_back_h = document.getElementById("mid-text");

var i = 0;
setInterval(() => {
    if(i === 0){
        nav_back_img.style.backgroundImage = "url('/assets/slider-1.jpg.webp')";
        nav_back_h.innerText = "Travel to the most beautiful places in the world, like Sahara Desert|"
        i++;
    }
    else if(i === 1){
        nav_back_img.style.backgroundImage = "url('/assets/slider-2.jpg.webp')";
        i++ ;
        nav_back_h.innerText = "Travel to the most beautiful places in the world, like White City in Greece|"
    }
    else if(i === 2){
        nav_back_img.style.backgroundImage = "url('/assets/slider-3.jpg.webp')";
        nav_back_h.innerText = "Travel to the most beautiful places in the world, like Petra in Jordan|";
        i++ ;
    }
    else if(i=== 3){
        nav_back_img.style.backgroundImage = "url('/assets/slider-3.jpg.webp')";
        i++ ;
        nav_back_h.innerText = "Travel to the most beautiful places in the world, like Machu Picchu in Peru|"
    }
    else{
        nav_back_img.style.backgroundImage = "url('/assets/slider-4.jpg.webp')";
        i = 0;
        nav_back_h.innerText = "Travel to the most beautiful places in the world, like The Colosseum in Rome|";
    }
}, 3000);

var slider = 0;
setInterval(() => {
    var s1 = document.getElementById("slider_01");
    var s2 = document.getElementById("slider_02"); 
    var s3 = document.getElementById("slider_03");
    
    if(slider === 0){
       s1.src = "/assets/img_1.jpg.webp";
       s2.src = "/assets/img_2.jpg.webp";
       s3.src = "/assets/img_3.jpg.webp";
       slider++ ;
    }
    else if(slider === 1){
        s3.src = "/assets/img_3.jpg.webp";
        s1.src = "/assets/img_2.jpg.webp";
        s2.src = "/assets/img_1.jpg.webp";
        slider++ ;
    }
    else {
        s2.src = "/assets/img_3.jpg.webp";
        s3.src = "/assets/img_1.jpg.webp";
        s1.src = "/assets/img_2.jpg.webp";
        slider = 0;
    }
}, 2000);

// saurabh js

 var saurabh = 100;
        setInterval(function () {
            document.querySelector(".travels h1").innerText = saurabh;
            if (saurabh === 9313) {

            } else {
                saurabh++;
            }
        });
        8492
        var j = 50;
        setInterval(function () {
            document.querySelector(".Clients h1").innerText = j;
            if (j === 8492) {

            } else {
                j++;
            }
        });
        var k = 1;
        setInterval(function () {
            document.querySelector(".employees h1").innerText = k;
            if (k === 100) {

            } else {
                k++;
            }
        });

        var l = 1;
        setInterval(function () {
            document.querySelector(".countries h1").innerText = l;
            if (l === 120) {

            } else {
                l++;
            }
        }); 

