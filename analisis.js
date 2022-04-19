const salarioHon=Honduras.map(
    function (personita){
        return personita.salary;
    }
);

const salariosHonSorted = salarioHon.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function esPar(numerito){
    return (numerito.length % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumalista=lista.reduce(
        function (valorAcumulado = 0, nuevoValor){
            return valorAcumulado + nuevoValor;
        }
    );
    const promedioLista = sumalista / lista.length;
    return promedioLista;
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista)){
        const personitaMitad1= lista[mitad -1];
        const personitaMitad2=lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad=lista[mitad];
        return personitaMitad;
    } 
}

console.log(medianaSalarios(salariosHonSorted));