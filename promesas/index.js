const promesa1 = new Promise(function(resolve, reject) {
    resolve("Manuel");
 });
 console.log(promesa1); 
const promesa2 = new Promise(function(resolve, reject) {
    setTimeout(funcion = () => { resolve("manuel");}, 5000)
 });
 promesa2.then((resolve) => console.log(resolve));
const num = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero % 2  == 0) {
            resolve("es par");  
        } else {
            reject("es impar"); 
        }
    })
 }
 console.log(num(61)); 

// 4. A la funcion anterior, modificarla para que la promesa se rechaze ( reject() ) con el error: 
// 'Valor Invalido' si el valor enviado por parametro no es un numero.

const validar = (numero) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(numero)) {
            resolve("true");  
        } else {
            reject("false"); 
        }
    })
 }

 console.log(validar(5));

// 5. Crear un arreglo de 10 objetos productos, con la forma { nombre, precio, estaVendido }, 
// crear una funcion filtrarPorPrecio que reciba un precio (numero) y retorne una promesa, 
// la promesa debe filtrar el arreglo de productos y crear uno nuevo con  
// los productos cuyos precios sean iguales o menores que el numero recibido,   
// la promesa debe resolver, luego de 5 segundos, con el arreglo de productos filtrados. 
// En este ejercicio usar async/await al momento de consumir la funcion

const productoslst = [
    {
        nombre: "gemfan mck", 
        precio: 2.99, 
        sold: true
    },
    {
        nombre: "betaflight f4", 
        precio: 30, 
        sold: false  
    },
    {
        nombre: "tmotor40a", 
        precio: 65, 
        sold: true 
    },
    {
        nombre: "fatshark hdo2", 
        precio: 450, 
        sold: false
    },
    {
        nombre: "floss3.0", 
        precio: 52, 
        sold: false 
    },
    {
        nombre: "iflight xing", 
        precio: 19, 
        sold: false 
    },
    
]; 



const filtro = async (numero) => {

    const funcion1 = new Promise((resolve, reject) => {
    setTimeout(funcion = () => {
            const funcion2 = productoslst.filter(({precio}) => {
                return precio <= numero; 
            });
            resolve(funcion2); 
        }, 5000)
    }); 

    let result = await funcion1; 
    return result;  
}

filtro(75).then(result => console.log(result)); 2