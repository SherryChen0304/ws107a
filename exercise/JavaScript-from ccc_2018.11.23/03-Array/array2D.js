var a = [[1, 2, 3], [4, 5, 6]];

for (var i = 0; i < a.length; i++) {
    var line = "";
    for (var j = 0; j < a[i].length; j++) {
        line = line + a[i][j] + " ";
    }
    console.log(line);
}

for (i = 0; i < a.length; i++) {
    for (j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}