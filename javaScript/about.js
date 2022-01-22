const accordion = document.getElementsByClassName("contentBox")
 for(var i=0;i<accordion.length;i++){

    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
 }

 //sliding image
 var img = ["https://preview.colorlib.com/theme/travel2/images/xslider-4.jpg.pagespeed.ic.d5f_Nde2nm.webp",
 "https://preview.colorlib.com/theme/travel2/images/xslider-1.jpg.pagespeed.ic.WRHModZqO2.webp",
 "https://preview.colorlib.com/theme/travel2/images/xslider-2.jpg.pagespeed.ic.LFDaLY_9ZA.webp"
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
