const VENTAS_BASE=5;

function calcularComision(numeroVenta,precioProducto){
    let comision=0;
    if (numeroVenta>VENTAS_BASE){
        let ventasExtras=numeroVenta-VENTAS_BASE;
        comision= ventasExtras * (precioProducto*0.10);
    }
    return comision;
}

function validarSueldoBase(){
    let valor = recuperarTexto("txtSueldoBase");
    let error = document.getElementById("errorSueldoBase");

    if(valor==""){
        error.textContent="El campo no puede estar vacío";
        return false;
    }

    if(isNaN(valor)){
        error.textContent="Solo se permiten números";
        return false;
    }

    if(valor.length>5){
        error.textContent="Máximo 5 dígitos";
        return false;
    }

    error.textContent="";
    return true;
}


function validarVentas(){
    let valor = recuperarTexto("txtVentas");
    let error = document.getElementById("errorVentas");

    if(valor==""){
        error.textContent="El campo no puede estar vacío";
        return false;
    }

    if(isNaN(valor)){
        error.textContent="Solo se permiten números";
        return false;
    }

    if(valor.length>5){
        error.textContent="Máximo 5 dígitos";
        return false;
    }

    error.textContent="";
    return true;
}


function validarPrecio(){
    let valor = recuperarTexto("txtPrecio");
    let error = document.getElementById("errorPrecio");

    if(valor==""){
        error.textContent="El campo no puede estar vacío";
        return false;
    }

    if(isNaN(valor)){
        error.textContent="Solo se permiten números";
        return false;
    }

    if(valor.length>5){
        error.textContent="Máximo 5 dígitos";
        return false;
    }

    error.textContent="";
    return true;
}

function calcular(){
    if (validarSueldoBase()==false ||
        validarVentas()==false ||
        validarPrecio()==false){
        return;
    }
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