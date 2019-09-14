google.charts.load('current', { 'packages': ['corechart'] });

$(function () {
    getData(10);
});

function getData(dayBefore) {
    var url = urlApi + "/Admin/Report"
    var data = {
        dayBefore: dayBefore
    };
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var reports = data.reports;
            var dataChart = [['Date', 'Register', 'Action User', 'Create Room User']];
            reports.forEach(function (elm) {
                dataChart.push([moment(elm.day).format("DD"), elm.numberUser, elm.numberUserLog, elm.numberUserRoom])
                $("#table-data tbody").append("<tr>")
                $("#table-data tbody").append("<td>" + moment(elm.day).format("DD") + "</td>")
                $("#table-data tbody").append("<td>" + joinArray(elm.userLog) + "</td>")
                $("#table-data tbody").append("<td>" + joinArray(elm.userRegister) + "</td>")
                $("#table-data tbody").append("<td>" + joinArray(elm.userRoom) + "</td>")
                $("#table-data tbody").append("</tr>")
            });
            drawChart('report', dataChart);
        },
        error: function (error) {
            alert(error);
        }
    });
}

function joinArray(array) {
    return array.map(function(elem){
        return elem.id;
    }).join(",");
}

function drawChart(elementId, data) {
    console.log(data);
    var options = {
        title: 'Report',
        legend: { position: 'bottom' }
    };

    const chartFunc = () => {
        return new google.visualization.LineChart(document.getElementById(elementId));
    };

    // tslint:disable-next-line:no-shadowed-variable
    const func = (chartFunc, options) => {
        const datatable = google.visualization.arrayToDataTable(data);
        chartFunc().draw(datatable, options);
    };

    const callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
}
