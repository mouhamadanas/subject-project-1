$(function(){

    $(".icon-hamburger").on("click",function(){
        $("header .container1 .right-cont nav ").slideDown();
        $("header .container1 .right-cont nav").css({
            "position": "absolute",
            "color": "black",
            "background-color": "rgb(37, 37, 37)",
            "width": "70%",
            "text-align": "center",
            "padding":"0px",
            "margin":"10px auto",
            "top":"100px",
            "border-radius":"20px",
        });
        $(this).css("display","none");
        $(".icon-close").css("display","flex");
    });
    $(".icon-close").on("click",function(){
        $(this).css("display","none");
        $(".icon-hamburger").css("display","flex");
        $("header .container1 .right-cont nav ").css("display","none")
    });
});