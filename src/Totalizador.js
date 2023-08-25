function Totalizador(estado){
  let impuesto = 0;
  switch(estado){
    case "CA":
      impuesto = 8.25;
      break;
    case "NV":
      impuesto = 8.00;
      break;
    case "TX":
      impuesto = 6.25;
      break;
    case "AL":
      impuesto = 4.00;
      break;
    case "UT":
      impuesto = 6.65;  
      break;
  }
  return impuesto;
}

function calcularPrecio(cant,precio){
  return cant*precio;
}

function calcularImpuesto_y_Descuento(cant, precio, porcentaje){
  return calcularPrecio(cant,precio)*(porcentaje/100)
}

function calcularPrecioTotal(cant,precio,estado){
  const PrecioItem = calcularPrecio(cant,precio)
  const Impuesto = calcularImpuesto_y_Descuento(cant, precio, Totalizador(estado))
  let Descuento = 0;
  if(PrecioItem >= 1000 && PrecioItem < 3000)
  {
    Descuento = 3
  }
  else if (PrecioItem >= 1000 && PrecioItem < 7000)
  {
    Descuento = 5
  }
  else if (PrecioItem < 1000)
  {
    Descuento = 0
  }
  else
  {
    Descuento = 7
  }
  return  PrecioItem + Impuesto - calcularImpuesto_y_Descuento(cant, precio, Descuento);
}

const metodos = {calcularPrecio, Totalizador,calcularImpuesto_y_Descuento,calcularPrecioTotal};

export default metodos;
