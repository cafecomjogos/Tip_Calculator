function formatMoney(value) {
  
  value = Math.ceil(value * 100)/100; // arredonda o valor para uma casa acima
  value = value.toFixed(2);
  return "R$ " + value;

}

function formatSplit(value){
  if (value === "1") return value + " Pessoa";
  return value + " Pessoas"
}



function update() {
  let bill = Number(document.getElementById("yourBill").value); // pega o valor que foi digitado dentro do elemento
  let tipPercent = document.getElementById("tipInput").value;
  let split = document.getElementById("splitInput").value;

  let tipValue = bill * (tipPercent / 100); // fica entre () para calcular primeiro
  let tipEach = tipValue / split;
  let newBillValue = (bill + tipValue) / split; // fica entre () para calcular primeiro
  document.getElementById("tipPercent").innerHTML = tipPercent + "%";
  document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
  document.getElementById("totalWithTip").innerHTML = formatMoney(bill + tipValue);
  document.getElementById("splitValue").innerHTML = formatSplit(split);
  document.getElementById("billEach").innerHTML = formatMoney(newBillValue);
  document.getElementById("TipEach").innerHTML = formatMoney(tipEach);
}


let container = document.getElementById("container");
container.addEventListener("input", update);