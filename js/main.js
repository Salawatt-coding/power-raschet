function saveAsXlsx() {
    var array = [];
    var table = document.querySelector("table tbody");
    var rows = table.children;
    for (var i = 0; i < rows.length; i++) {
        var fields = rows[i].children;
        var rowArray = [];
        for (var j = 0; j < fields.length; j++) {
            rowArray.push(fields[j].innerHTML);
        }
        array.push(rowArray);
    }

    alasql('SELECT * INTO XLSX("output.xlsx",{headers:false}) FROM ?', [array]);
}

function calculate_smth() {
    var cell01 = document.getElementById("cell01");
    var cell02 = document.getElementById("cell02");
    var cell03 = document.getElementById("cell03");
    var cell04 = document.getElementById("cell04");

    var value01 = document.getElementById("count01").value;
    var value02 = document.getElementById("count02").value;
    var value03 = document.getElementById("count03").value;

    cell01.textContent = value01;
    cell02.textContent = value02;
    cell03.textContent = value03;
    cell04.textContent = (1000 * 3600 * parseInt(value03, 10) / parseInt(value01, 10) / parseInt(value02, 10)).toFixed(2);

}
