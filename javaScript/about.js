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