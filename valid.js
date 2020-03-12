$(document).ready(function() {

    $("#submit").css('display', 'none');
    $('#password').on('input', function() {
        var password = $("#password").val();
        if (password) {
            $("#submit").css('display', 'block');
        } else {
            $("#submit").css('display', 'none');
        }
    });

    $("#submit").click(function() {
        var input1 = $("#user_name").val();
        var input2 = $("#password").val();
        if (input1 && input2) {
            if (input1 == "Shahed" && input2 == "32100505") {
                alert("Welcome To the New World Of Hacking");
            } else {
                alert("Wrong user name or password");
            }
        } else {
            alert("Good bye");
        }
    });

});