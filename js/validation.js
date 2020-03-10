$(function () {
    $("#regform").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            fName: "required",
            lName: "required",
            uName: "required",
            gender: "required",
            eq: "required",
            tc: "required"
        },
        messages: {
            email: {
                required: "Input an Email"
            }
        }
    }); 
});