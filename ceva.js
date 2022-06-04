$(document).ready(function(){
    $("#menu-toggle").click(function(){
        $("#side-nav").slideToggle(700, function(){
            alert("hai ca mere invatatu");
        });
    });
});