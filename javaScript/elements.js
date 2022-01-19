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

// inside form
var x = 0;
function register() {
    if (x % 2 === 0) {
        document.getElementById("register").style.display = "block";
        x++;

    } else {
        document.getElementById("register").style.display = "none";
        x++;
    }
}

var y = 0
function paypal() {
    if (y % 2 === 0) {
        document.getElementById("paypal").style.display = "block";
        y++;
    } else {
        document.getElementById("paypal").style.display = "none";
        y++;
    }
}

var z = 0;
function bank() {
    if (z % 2 === 0) {
        document.getElementById("bank").style.display = "block";
        z++;
    } else {
        document.getElementById("bank").style.display = "none";
        z++;
    }

}

// review slider





