$(document).ready(function () {

       $(".card").mouseover(function () {
        $(this).css({ "transform": "translateY(-20px)" });
        $(this).css({ "transition": "0.4s ease-out" });

    })

    $(".card").mouseout(function () {
        $(this).css({ "transform": "translateY(0px)" });
        $(this).css({ "transition": "0.4s ease-out" });
    })

    $("#NextPartBtn").mouseover(function () {
        $(this).css({ "transform": "translateY(-5px)" });
        $(this).css({ "transition": "0.2s ease-out" });

    })

    $("#NextPartBtn").mouseout(function () {
        $(this).css({ "transform": "translateY(0px)" });
        $(this).css({ "transition": "0.2s ease-out" });
    })


    $("#DoneDefineDuty").click(function () {
        $(".DoneBlock").removeClass("definDutyMapHide");
        $(".DoneBlock").addClass("definDutyMapShow");
    })

    $(".DoneBlock").click(function () {
        $(this).removeClass("definDutyMapShow");
        $(this).addClass("definDutyMapHide");
    })

}); // end of document

function storage() {
    Console.log('i am storage');
    var userName = document.getElementById(TextBox1.Text);
    var UserMail = document.getElementById(TextBox2.Text);
    sessionStorage.setItem("UserName", userName);
    sessionStorage.setItem("UserMail", UserMail);

}


