let n;
var lista="";
let suma=0;
do{
        n=prompt("INTRODUCE UN NUMERO");
        if(isNaN(n)){
            lista=lista + n + "</br>";
        }
        else if(n!=null){
          suma=parseInt(n)+suma;
        }
}while(n!=null);

document.write(`<p>`+`${suma}`+`</p>`);
document.write(`<p>`+`${lista}`+`</p>`);