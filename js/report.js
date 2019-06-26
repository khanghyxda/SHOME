google.charts.load('current', { 'packages': ['corechart'] });

$(function () {
    getData(10);
});

function getData(dayBefore) {
    var url = "https://req.shotel.vn/Admin/Report"
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
            });
            drawChart('report', dataChart);
        },
        error: function (error) {
            alert(error);
        }
    });
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
