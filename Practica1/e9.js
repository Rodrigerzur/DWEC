let sumaP = 0, sumaI =0;
let n=prompt("Introduce el extremo menor (Ten en cuenta que es un intervalo abierto)");
do{
    let n2=prompt("Introduce el extremo mayor (Ten en cuenta que es un intervalo abierto)");
}while(n>n2);
    for(let i=parseInt(n)+1;i<parseInt(n2);i++) {
    if (i%2==0){
        sumaP=i+sumaP;
    }
    if (i%2!=0){
        sumaI=i+sumaI;
    }
    
}
document.write(`<p>`+`La suma de pares es `+`${sumaP}`+`, y la suma de impares es `+`${sumaI}`+`</p>`);
