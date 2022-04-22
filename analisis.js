//funciones Helper/utils
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

//calculadora de medianas

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

//mediana general

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

const medianaGeneralHon = medianaSalarios(salariosHonSorted)

//mediana top 10%


const spliceStart = (salariosHonSorted.length * 90)/100;
const spliceCount = salariosHonSorted.length - spliceStart;

console.log(spliceStart)
console.log(spliceCount)
const salariostop10 = salariosHonSorted.splice(
    spliceStart, spliceCount,
)

const medianaTop10= medianaSalarios(salariostop10);

console.log({medianaGeneralHon, medianaTop10});