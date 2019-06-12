var editor = new Quill('#editor', {
    modules: { toolbar: '#toolbar' },
    theme: 'snow'
});

$(function () {
    var password = window.prompt("password", "");
    var url = "https://req.shotel.vn/Mail/SendNotice"
    $("#btnSend").click(function (event) {
        var data = {
            password: password,
            title: $('#title').val(),
            body: editor.root.innerHTML,
            isAll: $("#isAll").is(':checked'),
        };
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(data),
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