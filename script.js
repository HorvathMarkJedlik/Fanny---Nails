
$(".inner-switch").on("click", function() {
    if($("body").hasClass("dark")){
        $("body").removeClass("dark");
        $(".inner-switch").text("OFF");
    }else {
        $("body").addClass("dark");
        $(".inner-switch").text("ON");
    }
});

function validateForm() {
    var name = document.forms[0]["name"].value;
    var email = document.forms[0]["email"].value;
    var date = document.forms[0]["date"].value;
    var message = document.forms[0]["text"].value;

    if (name === "" || email === "" || date === "" || message === "") 
    {
        alert("Minden mezőt ki kell tölteni!");
    } 
    else 
    {

        alert("Foglalás elküldve!");
    }
}