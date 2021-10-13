let sumaP = 0, sumaI =0;

for(let i=1;i<100;i++) {
    if (i%2==0){
        sumaP=i+sumaP;
    }
    if (i%2!=0 && i!=1){
        sumaI=i+sumaI;
    }
    
}
document.write(`<p>`+`La suma de pares es `+`${sumaP}`+`, y la suma de impares es `+`${sumaI}`+`</p>`);