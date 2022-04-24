/* 1 2 3 4 5 6 7 8 9 10
i = 1;
n = 10

i = 6 --> 6 / 1 = 6; 6 / 2; 6/3 ; 6/4


*/

var timSoNguyenTo = function () {
  var n = document.getElementById("n_value").value * 1;
  var ketQua = "";

  for (var i = 2; i <= n; i++) {
    var a;
    var count = 0;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      a = i % j;
      if (a == 0) count++;
      console.log({ i, j, a, count });
    }
    if (count == 0) ketQua += i + " ";
  }

  console.log({ ketQua });
  document.getElementById("bai_them_ket_qua").innerHTML = ketQua;
};
