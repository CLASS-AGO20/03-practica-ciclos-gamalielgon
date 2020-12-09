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
}

let app = new App();
console.log(app.factorial(4));
console.log(app.convertirAString(4));