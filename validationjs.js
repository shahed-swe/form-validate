$(document).ready(function() {

    $("#validform").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            pr_address: "required",
            pe_address: "required",
            p_date: "required",
            trx_id: "required",
            amount: "required",
        }
    });

    $("#phone").attr("disabled", true);
    $("#pr_address").attr("disabled", true);
    $("#pe_address").attr("disabled", true);
    $("#p_date").attr("disabled", true);
    $("#pay_method").attr("disabled", true);
    $("#trx_id").attr("disabled", true);
    $("#amount").attr("disabled", true);
    $("#submit").attr("disabled", true);


    $("#email").on('input', function() {
        var input = $("#email").val();
        if (input) {
            $("#phone").attr("disabled", false);
        } else {
            $("#phone").attr("disabled", true);
        }
    });
    $("#phone").on('input', function() {
        var input = $("#phone").val();
        if (input) {
            $("#pr_address").attr("disabled", false);
        } else {
            $("#pr_address").attr("disabled", true);
        }
    });
    $("#pr_address").on('input', function() {
        var input = $("#email").val();
        if (input) {
            $("#pe_address").attr("disabled", false);
        } else {
            $("#phope_addressne").attr("disabled", true);
        }
    });
    $("#pe_address").on('input', function() {
        var input = $("#pe_address").val();
        if (input) {
            $("#p_date").attr("disabled", false);
        } else {
            $("#p_date").attr("disabled", true);
        }
    });
    $("#p_date").on('input', function() {
        var input = $("#p_date").val();
        if (input) {
            $("#pay_method").attr("disabled", false);
        } else {
            $("#pay_method").attr("disabled", true);
        }
    });
    $("#pay_method").on('input', function() {
        var input = $("#email").val();
        if (input) {
            $("#trx_id").attr("disabled", false);
        } else {
            $("#trx_id").attr("disabled", true);
        }
    });
    $("#trx_id").on('input', function() {
        var input = $("#trx_id").val();
        if (input) {
            $("#amount").attr("disabled", false);
        } else {
            $("#amount").attr("disabled", true);
        }
    });
    $("#amount").on('input', function() {
        var input = $("#amount").val();
        if (input) {
            $("#submit").attr("disabled", false);
        } else {
            $("#submit").attr("disabled", true);
        }
    });

    $('#submit').click(function() {
        // event.preventDefault();
        var amount = $('#amount').val();
        var take = parseInt(amount);
        if ($('input[type="checkbox"]').is(":checked")) {
            if (amount > 6000) {
                alert("You have to pay " + (take + 800));
            } else {
                alert("Not Done Yet");
            }
        } else {
            alert("You have to pay " + (take));
        }
    });
});