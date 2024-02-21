
$(".inner-switch").on("click", function() {
    if($("body").hasClass("dark")){
        $("body").removeClass("dark");
        $(".inner-switch").text("OFF");
    }else {
        $("body").addClass("dark");
        $(".inner-switch").text("ON");
    }
});

function Hitelesites() {
    var name = document.forms[0]["name"].value;
    var email = document.forms[0]["email"].value;
    var date = document.forms[0]["date"].value;

    if (name === "" || email === "" || date === "") 
    {
        alert("Minden mezőt ki kell tölteni!");
    } 
    else 
    {

        alert("Foglalás elküldve!");
    }
}


// document.querySelector(".anyu")
// .addEventListener("click", function(){
//     document.querySelector(".card-group").style.filter = "blur(5px)";
//     document.querySelector(".apu").style.filter = "blur(10px)";
//     document.querySelector(".anyuka1").style.display = "flex";
//     document.querySelector(".anyuka1").style.oapcity = "1";
//     document.querySelector(".anyuka1").style.height = "20vw";
//     document.querySelector(".anyuka1").style.transition = "1s";
// })

function frissitSzalonAllapot() {
    var jelenlegiIdo = new Date();
    var ora = jelenlegiIdo.getHours();

    var etteremTextElem = document.getElementById('szalontext');
    var onlineElem = document.getElementById('online');
    var offlineElem = document.createElement('span');
    offlineElem.id = 'offline';
    offlineElem.textContent = 'ZÁRVA';

    if (ora >= 8 && ora < 16) {
        etteremTextElem.removeChild(offlineElem);
        etteremTextElem.appendChild(onlineElem);
    } else {
        etteremTextElem.removeChild(onlineElem);
        etteremTextElem.appendChild(offlineElem);
    }
}

frissitEttremAllapot();

setInterval(frissitEttremAllapot, 60000);