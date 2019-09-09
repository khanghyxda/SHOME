google.charts.load('current', { 'packages': ['corechart'] });
var password;

$(function () {
    password = window.prompt("password", "");
});

function setUserCheat() {
    var url = urlApi + "/Admin/SetUserCheat"
    var data = {
        mainUserId: $("#mainUserId").val(),
        password : password
    };
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            
        },
        error: function (error) {
            alert(error);
        }
    });
}

function removeUserCheat() {
    var url = urlApi + "/Admin/RemoveUserCheat"
    var data = {
        mainUserId: $("#mainUserId").val(),
        password: password
    };
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            
        },
        error: function (error) {
            alert(error);
        }
    });
}