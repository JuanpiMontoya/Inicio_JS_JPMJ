function valorEstado(estado){
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

function valorDescuento(cant,precio)
{
  let descuento = 0
  const PrecioItem = calcularPrecio(cant,precio)
  if(PrecioItem >= 1000 && PrecioItem < 3000)
  {
    descuento = 3
  }
  else if (PrecioItem >= 1000 && PrecioItem < 7000)
  {
    descuento = 5
  }
  else if (PrecioItem >= 7000 && PrecioItem < 10000)
  {
    descuento = 7
  }
  else if (PrecioItem >= 10000 && PrecioItem < 30000)
  {
    descuento = 10
  }
  else if (PrecioItem < 1000)
  {
    descuento = 0
  }
  else
  {
    descuento = 15
  }
  return descuento
}

function calcularPrecioTotal(cant,precio,estado){
  const PrecioItem = calcularPrecio(cant,precio)
  const Impuesto = calcularImpuesto_y_Descuento(cant, precio,  valorEstado(estado))
  const Descuento = calcularImpuesto_y_Descuento(cant, precio, valorDescuento(cant,precio)) ;
  return  PrecioItem + Impuesto - Descuento;
}

const metodos = {calcularPrecio,valorEstado,calcularImpuesto_y_Descuento,valorDescuento,calcularPrecioTotal};

export default metodos;
