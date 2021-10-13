let numero=prompt("Introduce numero de asteriscos");
        for(let i=0;i<parseInt(numero);i++){
            for(let x=0;x<=i;x++){
                document.write(`*`);
            }
            document.write(`</br>`);
        }