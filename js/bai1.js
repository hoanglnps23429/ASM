function choso() {
    var a = Math.round(Math.random() * 10);
    var b = Math.round(Math.random() * 10);
    var c = Math.round(Math.random() * 10);
  
    document.getElementById("soa").value = a;
    document.getElementById("sob").value = b;
    document.getElementById("soc").value = c;
    var btn = document.getElementById("btngiai");
    btn.disabled = false;
    btn.className = "nut";
}

function error() {
    var a = document.getElementById("soa").value;
        var b = document.getElementById("sob").value;
        var c = document.getElementById("soc").value;

if (isNaN(a)){
document.getElementById("ketqua").innerHTML = "<p>Không thể tính dược kết quả do gía trị điền vào không phải là số!</p>";
alert("Chỉ được nhập số! Hãy kiểm tra lại và nhập đúng định dạng");
return false;
}else if(isNaN(b)){
document.getElementById("ketqua").innerHTML = "<p>Không thể tính dược kết quả do gía trị điền vào không phải là số!</p>";
alert("Chỉ được nhập số! Hãy kiểm tra lại và nhập đúng định dạng");
return false; 
}else if(isNaN(c)){
document.getElementById("ketqua").innerHTML = "<p>Không thể tính dược kết quả do gía trị điền vào không phải là số!</p>";
alert("Chỉ được nhập số! Hãy kiểm tra lại và nhập đúng định dạng");
return false;
}
else {
return true;
}
}
var ptb2 = {

    
    ganbien: function () {
             var a = Number(document.getElementById("soa").value);
             var b = Number(document.getElementById("sob").value);
             var c = Number(document.getElementById("soc").value);
             var delta = Math.pow(b, 2) - 4 * a * c;
           
             if ( a > 10 || b > 10 || c > 10  ) {
                      alert("Cưng ơi vui lòng nhập số không lớn hơn 10 nha");
                      location.reload();
             } 
           
            
             
             else if (a == 0) {
                      //pt1
                      if (b == 0) {
                               if (c == 0) {
                                        document.getElementById("ketqua").innerHTML = "<p>Vô Số Nghiệm</p>";
                               } else {
                                        document.getElementById("ketqua").innerHTML = "<p>Vô Nghiệm</p>";
                               }
                      } else {
                               var x = -c / b;
                               str = `<p>Phương trình có nghiệm kép: ${x.toFixed(2)}</p>`;
                               document.getElementById("ketqua").innerHTML = str;
                      }
             } else {
                      var delta = b * b - 4 * a * c;
                      if (delta < 0) {
                               //ptvn
                               document.getElementById("ketqua").innerHTML = "<p>Vô Nghiệm</p>";
                      } else if (delta == 0) {
                               //pt nghiệm kép
                               var x = -b / (2 * a);
                               x = x.toFixed(2);
                               str = `<p>Phương trình có nghiệm kép: ${x}</p>`;
                               document.getElementById("ketqua").innerHTML = str;
                      } else {
                               //2 nghiệm
                               var x1 = (-b - Math.sqrt(delta)) / (2 * a);
                               var x2 = (-b + Math.sqrt(delta)) / (2 * a);
                               var str = `<p>Phương trình có 2 nghiệm phân biệt </p>
                          <p>X<sub>1</sub> = ${x1.toFixed(2)} </p>
                          <p>X<sub>2</sub> = ${x2.toFixed(2)} </p>`;
                               document.getElementById("ketqua").innerHTML = str;
                      }
             }
             btn = document.getElementById("btngiai");
             btn.className = "nut_khoa";
             btn.disabled = true;
    },
};
var solangiai = 0;
function dem() {
    solangiai++;
    document.getElementById("solangiai").innerHTML = solangiai;
}
function tg() {
    var d = new Date();
    var nam = d.getFullYear();
    var thang = d.getMonth() + 1;
    var ngay = d.getDate();
    var gio = d.getHours();
    var phut = d.getMinutes();
    var giay = d.getSeconds();
    var str = ` Bây giờ là ${ngay}/${thang}/${nam}  ${gio}:${phut}:${giay} `;
    document.getElementById("hvn").innerHTML = str;
}
setInterval("tg()", 1000);
