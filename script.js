
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

