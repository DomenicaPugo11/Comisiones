const VENTAS_BASE=5;

function calcularComision(numeroVenta,precioProducto){
    let comision=0;
    if (numeroVenta>VENTAS_BASE){
        let ventasExtras=numeroVenta-VENTAS_BASE;
        comision= ventasExtras * (precioProducto*0.10);
    }
    return comision;
}

function calcular(){
    //**Recuperamos propiedades de la caja de texto
    //let ctxSueldoBase=document.getElementById("txtSueldoBase");
    //let ctxVentas=document.getElementById("txtVentas");
    //let ctxPrecio=document.getElementById("txtPrecio");
    //**Recuperamos el valor de las cajas de texto
    //let suelsoBaseStr=ctxSueldoBase.value;
    //let numeroVentasStr=ctxVentas.value;
    //let precioProductoStr=ctxPrecio.value;
    //**Convertimos el texto a numero
    //let sueldoBase=parseFloat(sueldoBaseStr);
    //let numeroVentas=parseFloat(numeroVentasStr);
    //let precioProducto=parseFloat(precioProductoStr);

    let sueldoBase=recuperarFloat("txtSueldoBase");
    let numeroVentas=recuperarFloat("txtVentas");
    let precioProducto=recuperarFloat("txtPrecio");

    let comision=calcularComision(numeroVentas,precioProducto);
    let total=sueldoBase+comision;

    //let spSueldoBase=document.getElementById("spSueldoBase");
    //let spComision=document.getElementById("spComision");
    //let spTotal=document.getElementById("spTotal");
    //**spSueldoBase.textContent=sueldoBase;
    //spComision.textContent=comision;
    //spTotal.textContent=total;

    mostrarEnSpan("spSueldoBase",sueldoBase);
    mostrarEnSpan("spComision",comision);
    mostrarEnSpan("spTotal",total);
}