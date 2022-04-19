const lista = [2,3,-1,2,-4,2,-3,3,-2,1,-3,3,-1,0,2,-4];

function calcularMediaCuadratica(lista){
    const listaordenada=lista.sort((a,b)=>{
        return a - b;
    })

    const listaCantidad={};

    listaordenada.forEach(ElementoActual => {
        if(listaCantidad[ElementoActual]>=1){
            listaCantidad[ElementoActual]+=1;
        }else{
            listaCantidad[ElementoActual]=1;
        }
    });

    const listaCuadrada = Object.entries(listaCantidad);
    const valores = [];
    let totalFrecuencia=0;

    listaCuadrada.forEach(elementoActual=>{ 
        var result=(Number(elementoActual[0])**2)*(elementoActual[1]);
        totalFrecuencia+=elementoActual[1];
        valores.unshift(result);
    })

    let valorAcumulado=0;

    for(let valor of valores){
        valorAcumulado+=valor;
    }

    const resultadofinal=Math.sqrt((valorAcumulado)/totalFrecuencia)
    console.log(resultadofinal);
}