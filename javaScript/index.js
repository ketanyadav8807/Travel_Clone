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
        nav_back_img.style.backgroundImage = "url('https://preview.colorlib.com/theme/travel2/images/xslider-1.jpg.pagespeed.ic.WRHModZqO2.webp')";
        nav_back_h.innerText = "Travel to the most beautiful places in the world, like Sahara Desert|"
        i++;
    }
    else if(i === 1){
        nav_back_img.style.backgroundImage = "url('https://preview.colorlib.com/theme/travel2/images/xslider-2.jpg.pagespeed.ic.LFDaLY_9ZA.webp')";
        i++ ;
        nav_back_h.innerText = "Travel to the most beautiful places in the world, like White City in Greece|"
    }
    else if(i === 2){
        nav_back_img.style.backgroundImage = "url('https://preview.colorlib.com/theme/travel2/images/xslider-3.jpg.pagespeed.ic.eE1plBizli.webp')";
        nav_back_h.innerText = "Travel to the most beautiful places in the world, like Petra in Jordan|";
        i++ ;
    }
    else if(i=== 3){
        nav_back_img.style.backgroundImage = "url('https://preview.colorlib.com/theme/travel2/images/xslider-4.jpg.pagespeed.ic.d5f_Nde2nm.webp')";
        i++ ;
        nav_back_h.innerText = "Travel to the most beautiful places in the world, like Machu Picchu in Peru|"
    }
    else{
        nav_back_img.style.backgroundImage = "url('https://preview.colorlib.com/theme/travel2/images/xslider-5.jpg.pagespeed.ic.GOv2qZlpc5.webp')";
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
       s1.src = "https://preview.colorlib.com/theme/travel2/images/ximg_1.jpg.pagespeed.ic.LGU4x9ownA.webp";
       s2.src = "https://preview.colorlib.com/theme/travel2/images/ximg_2.jpg.pagespeed.ic.KB4J-vC9lf.webp";
       s3.src = "https://preview.colorlib.com/theme/travel2/images/ximg_3.jpg.pagespeed.ic.gd4lnyCcRC.webp";
       slider++ ;
    }
    else if(slider === 1){
        s3.src = "https://preview.colorlib.com/theme/travel2/images/ximg_1.jpg.pagespeed.ic.LGU4x9ownA.webp";
        s1.src = "https://preview.colorlib.com/theme/travel2/images/ximg_2.jpg.pagespeed.ic.KB4J-vC9lf.webp";
        s2.src = "https://preview.colorlib.com/theme/travel2/images/ximg_3.jpg.pagespeed.ic.gd4lnyCcRC.webp";
        slider++ ;
    }
    else {
        s2.src = "https://preview.colorlib.com/theme/travel2/images/ximg_1.jpg.pagespeed.ic.LGU4x9ownA.webp";
        s3.src = "https://preview.colorlib.com/theme/travel2/images/ximg_2.jpg.pagespeed.ic.KB4J-vC9lf.webp";
        s1.src = "https://preview.colorlib.com/theme/travel2/images/ximg_3.jpg.pagespeed.ic.gd4lnyCcRC.webp";
        slider = 0;
    }
}, 2000);

