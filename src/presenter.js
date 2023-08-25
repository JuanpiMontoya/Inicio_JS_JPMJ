import metodos from "./Totalizador"

const cantidad = document.querySelector("#cant-item");
const precio = document.querySelector("#precio-x-item");
const estado = document.querySelector("#est-item")
const form = document.querySelector("#fb-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML += 
    "<p> Precio neto ("+ cantidad.value +"*$"+ precio.value +"): $"+ metodos.calcularPrecio(cantidad.value, precio.value)
   + "</br> Descuento (" + metodos.valorDescuento(cantidad.value,precio.value) + "%): $" + metodos.calcularImpuesto_y_Descuento(cantidad.value, precio.value,metodos.valorDescuento(cantidad.value,precio.value))
   + "</br> Impuestos para " + estado.value + "(%" + metodos.valorEstado(estado.value) + "): $" + metodos.calcularImpuesto_y_Descuento(cantidad.value, precio.value,metodos.valorEstado(estado.value))
   + "</br> Precio total (descuento e impuesto): $" + metodos.calcularPrecioTotal(cantidad.value, precio.value,estado.value)
   + "</p>"
});
