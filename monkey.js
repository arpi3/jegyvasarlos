var  quantity  = prompt("Add meg a darabszámot");
var type = prompt("Add meg a típust");

var  types  = {
  nebulo: 110,
  adult: 230,
  oreg: 280,
  majom:100,
};

var price = types[type];
var discount = quantity  >= 10 ? 0.9 : 1;

var total = quantity * price * discount;

alert(total);
