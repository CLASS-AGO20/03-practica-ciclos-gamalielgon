export default class App {

    factorial(numero) {
        let suma = 1;
        for(let i = 1; i <= numero; i++){
            suma = i * suma;
        }
        return suma;
    }
    convertirAString(numero){
        let aletras = "";
        let i = 1;
        while(i <= numero){
            aletras = "*" + aletras;
            i++;
        }
        return aletras;
    }
    obtenerDivisibles(numero){
        let divisores = 0;
        let div = numero;
        let i = 0;
        do{
            if(numero%div==0){
                divisores++;
            }
            i++;
            div = div - 1;

        } while(i <= numero);
        return divisores;
    }
    elevar(numero, potencial){
        let potencia = 1;
        for(let i = 1; i <= potencial; i++){
            potencia = numero * potencia;
        }
        return potencia;
    }
}

let app = new App();
console.log(app.factorial(4));
console.log(app.convertirAString(4));
console.log(app.obtenerDivisibles(4));
console.log(app.elevar(4,4));
