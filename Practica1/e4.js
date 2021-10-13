    let minimo;
    let maximo;
    let acumulador = 0;
    let media;
    let suma = 0;
    let n;

    n=prompt("Introduce un numero");
    if(isNaN(n)==false && n!=0){
            acumulador++;
            suma=parseInt(n)+parseInt(suma);  
                maximo=n;
                minimo=n;
    }
    do{
        n=prompt("Introduce un numero");
        if(isNaN(n)==false && n!=0){
            acumulador++;
            suma=parseInt(n)+parseInt(suma);
            if(n>maximo){
                maximo=n;
            }
            if(n<minimo){
                minimo=n;
            }
        }else{ 
            alert("Valor no soportado");
        }
    }while(n!=0);

    media=suma/acumulador;

    document.write(`<p>`+`La media es `+`${media}`+`, el minimo es `+`${minimo}`+`" y el maximo es `+`${maximo}`+`</p>`);