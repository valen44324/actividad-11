var helado = 40; 
var topping;
var precio;
var precioFinal;

topping = prompt("Ingrese el topping deseado (Oreo, KitKat o Kinder):");


if (topping === "Oreo") {
  precio = 10;
} else if (topping === "KitKat") {
  precio = 15;
} else if (topping === "Kinder") {
  precio = 25;
} else {
  alert("No tenemos este topping.");
}

precioFinal = precio + helado;


if (topping === "Oreo" || topping === "KitKat" || topping === "Kinder") {
  alert("El helado cuesta $" + precioFinal);
}




var menu = prompt("Ingrese su elección de menú (carne, pescado o verdura):");
var bebida;

switch (menu) {
    case "carne":
        bebida = "vino tinto";
        break;
    case "pescado":
        bebida = "vino blanco";
        break;
    case "verdura":
        bebida = "agua";
        break;
    default:
        alert("Por favor, elija carne, pescado o verdura.");
        break;
}

if (bebida) {
    alert("La bebida recomendada es " + bebida);
}



var datos = [1, 2, 3, 4, 5];
for (var i = 0; i < datos.length; i++) {
    alert(datos[i]);
}



var numero = 1;
while (numero < 11) {
    alert(numero + " es más chico que 11");
    numero++;
}



