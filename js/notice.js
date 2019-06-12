var editor = new Quill('#editor', {
    modules: { toolbar: '#toolbar' },
    theme: 'snow'
});

$(function () {
    var password = window.prompt("password", "");
    var url = "http://localhost:8000/Mail/SendNotice"
    var data = {
        password: password,
        title: $('#title').val(),
        body: "body",
    };
    $("#btnSend").click(function (event) {
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {

            },
            error: function (error) {
                alert(error);
            }
        });
    });
});