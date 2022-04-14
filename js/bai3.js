function changePrice() {
    var arrPrice = document.getElementsByName('price');
    var priceChoice = document.getElementById('mucgia').value;
    for (i = 0; i < arrPrice.length; i++) {
        var price = arrPrice[i].innerText;
        if (price < priceChoice || priceChoice == -1) {
            arrPrice[i].parentNode.style.display = "";

        } else {
            arrPrice[i].parentNode.style.display = "none";
        }
    }
    monetTotal();
}

function checkQuantity(i) {
    var arrQantity = document.getElementsByName('soluong');
    arrQantity[i].disabled = !arrQantity[i].disabled;
    if (arrQantity[i].disabled == true) {
        arrQantity[i].value = 0;
        arrQantity[i].parentNode.nextElementSibling.innerText = '';
    }
    moneyTotal();
}

function calculateMoney(obj) {
    var changeQantity = obj.value;
    var parent = obj.parentNode;
    var changePrice = parent.parentNode.children[2].innerText;
    var money = changePrice * changeQantity;
    parent.parentNode.children[4].innerText = money;
    moneyTotal();
}

function monetTotal() {
    var monetTotal = 0;
    var arrMoney = document.getElementsByName('thanhtien');
    for (var i = 0; i < arrMoney.length; i++) {
        if (arrMoney[i].parentNode.style.disabled == '') {
            var totaCount = arrMoney[i].innerText;
            var money = Number(totalCount);
            moneyTotal += money;
        }
    }
    document.getElementById('tinhtong').innerText = monetTotal;
}