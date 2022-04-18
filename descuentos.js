function calcularPrecioConDescuento(precio, descuento, cupon){
    const porcentajePrecioConDescuento=100- descuento;
    const precioConDescuento = ((precio * porcentajePrecioConDescuento)/100) - cupon;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const price=document.getElementById("inputprice");
    const discount=document.getElementById("inputdiscount");
    const coupon=document.getElementById("cupon")

    const precio= price.value;
    const descuento=discount.value;
    const cupon=coupon.value;

    if(cupon==""){
        cupon=0;
    }

    const precioConDescuento=calcularPrecioConDescuento(precio, descuento, cupon);

    const resultP= document.getElementById("resultP");

    if(precioConDescuento<=0){
        resultP.innerText="increible, su cupon cancelo el total del pedido";
    }else{
        resultP.innerText="el precio con descuento es: " + precioConDescuento;
    }
    
    
}