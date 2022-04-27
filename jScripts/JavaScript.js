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

function Mystorage(Name, Email) {
    console.log('i am storage');

    //קבלת נתונים מההתחברות
    var userName = Name;
    var UserMail = Email;

   //הזנה לאחסון
    sessionStorage.setItem("UserName", userName);
    sessionStorage.setItem("UserMail", UserMail);

    console.log(sessionStorage.getItem("UserName"));
    console.log(sessionStorage.getItem("UserMail"));

}

function UserSign(UserMail) {
    var check = UserMail;
    var fromStorage = sessionStorage.getItem("UserMail");

    if (check != fromStorage) {
        window.location.href = "SignIn.aspx";
    }
    else {
        console.log("user is sign in");
    }
}



