var table;
$(document).ready(function () {
    table = $('#table').DataTable({

    });

    $("#dtFrom").datepicker({
        showAnim: "drop",
        dateFormat: 'dd/mm/yy',
        defaultDate: new Date(),
    });
    $("#dtFrom").datepicker('setDate', new Date());

    $("#dtTo").datepicker({
        showAnim: "drop",
        dateFormat: 'dd/mm/yy',
        defaultDate: new Date(),
    });
    $("#dtTo").datepicker('setDate', new Date());

    search();
});

function search() {
    const data = {
        from: $("#dtFrom").val(),
        to: $("#dtTo").val(),
    };
    const url = urlApi + "/Payment/GetTemporary"
    $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        url: url,
        cache: false,
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            updateTable(data);
        }
    });
}

function updateTable(data) {
    table.clear();
    var dataSet = [];
    for (i = 0; i < data.length; i++) {
        var status = "Chưa thanh toán";
        if (data[i].temp.status == 1) {
            status = "Đã thanh toán";
        }
        if (data[i].temp.status == 2) {
            status = "Giao dịch lỗi";
        }
        var dataRow = [data[i].temp.paymentId,
            data[i].temp.mainUserId,
            data[i].temp.code,
            data[i].type.name,
            data[i].type.price,
            status,
            // data[i].temp.transactionNo,
            data[i].time];
        dataSet.push(dataRow)
    }
    table.rows.add(dataSet)
    table.draw();
}