//calculos para el cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado**2;
}

function calcularPerimetro(){
    const input=document.getElementById("inputcuadrado");
    const value=input.value;

    const perimetro= perimetroCuadrado(value);
    alert(perimetro);
}

function calcularArea(){
    const input=document.getElementById("inputcuadrado");
    const value=input.value;

    const area= areaCuadrado(value);
    alert(area);
}

//calculos para el triangulo

function perimetroTriangulo(lado1, lado3){   
    valor1=Number(lado1);
    valor3=Number(lado3);
    const resultado = valor3 + (valor1*2);
    return resultado;
}

function areaTriangulo(lado1, lado3){
    valor1=Number(lado1);
    valor3=Number(lado3);

    
    const altura= Math.sqrt((valor1**2)-((valor3**2)/4))
    const area = (valor3 * altura)/2;
    return area;
}


function calcularPerimetroTriangulo(){
    const input=document.getElementById("inputtriangulo1")
    const value=input.value;

    const input3=document.getElementById("inputtriangulo3")
    const value3=input3.value;

    const perimetro=perimetroTriangulo(value, value3);
    alert(perimetro);
}


function calcularAreaTriangulo(){
    const input=document.getElementById("inputtriangulo1")
    const value=input.value;

    const input3=document.getElementById("inputtriangulo3")
    const value3=input3.value;

    const area=areaTriangulo(value, value3);
    alert(area);
}

//calculos para circulo

function calcularCircuferencia(){
    const radio=document.getElementById("inputradio");
    const value=radio.value;
    const valor=Number(value);

    const circuferencia=(valor * Math.PI * 2);
    alert(circuferencia);
}

function calcularAreaCirculo(){
    const radio=document.getElementById("inputradio");
    const value=radio.value;
    const valor=Number(value);

    const area=(Math.PI * (valor**2));
    alert(area);
}