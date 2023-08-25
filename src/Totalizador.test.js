import metodos from "./Totalizador"

describe("Totalizaor", () => {
  it("Mostrar porcentaje por estado", () => {
    expect(metodos.valorEstado("CA")).toEqual(8.25);
  }); 

  it("Mostrar precio neto", () => {
    expect(metodos.calcularPrecio(10,10)).toEqual(100);
  });

  // Con estas 2 pruebas se pueden comprobar si los valores del impuesto y del precio total con el impuesto son los correctos, en base a cualquier estado que ingresemos segun lo pedido en el excel.
  //1 
  it("Mostrar precio impuesto", () => {
    expect(metodos.calcularImpuesto_y_Descuento(10,10,metodos.valorEstado("CA"))).toEqual(8.25);
  });
  //2
  it("Mostrar precio total con impuesto", () => {
    expect(metodos.calcularPrecioTotal(10,10,"CA")).toEqual(108.25);
  });

  //Pruebas para los descuentos
  it("Mostrar precio total con impuesto y descuento de 1000", () => {
    expect(metodos.calcularPrecioTotal(10,120,"TX")).toEqual(1239);
  });

  it("Mostrar precio total con impuesto y descuento de 3000", () => {
    expect(metodos.calcularPrecioTotal(105,45,"AL")).toEqual(4677.75);
  });

  it("Mostrar precio total con impuesto y descuento de 7000", () => {
    expect(metodos.calcularPrecioTotal(200,36,"NV")).toEqual(7272);
  });

  it("Mostrar precio total con impuesto y descuento de 10000", () => {
    expect(metodos.calcularPrecioTotal(115,97,"UT")).toEqual(10781.3075);
  });

  it("Mostrar precio total con impuesto y descuento de 30000", () => {
    expect(metodos.calcularPrecioTotal(225,140,"CA")).toEqual(29373.75);
  });
});
