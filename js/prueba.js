// const costoProducto2=15000;
// const costoProducto3=15000;
// const costoProducto4=6500;
// const costoProducto5=13500
// let total=0;
// function mostrarTotal(total){
//     alert("El total de su compra es de $"+total);
// }
// do{
    
//     let valorIngresado=prompt("BIENVENIDO A BOCASTORE\nSeleccione el producto que desea comprar\n1.Camiseta Titular -$15.000\n2.Camiseta Suplente -$15.000\n3.Camiseta Mujer Titular-$15.000\n4.Short titular niño -$6.500\n5.Buzo Hombre Titular -$13.500");
//     if(valorIngresado=="1"){
//         total+=costoProducto1;
//     }else if(valorIngresado=="2"){
//         total+=costoProducto2;
//     }else if(valorIngresado=="3"){
//         total+=costoProducto3;
//     }else if(valorIngresado=="4"){
//         total+=costoProducto4;
//     }
//     else if(valorIngresado=="5"){
//         total+=costoProducto5;
//     }
//     else{
//         alert("El valor ingresado no es valido");
//     }
// }while(confirm("Desea seguir comprando?"))

// mostrarTotal(total);


        //PRE ENTREGA 2

//Este es el constructor de la clase producto
function Producto(nombre,precio,color,talle,sexo){
    this.nombre=nombre;
    this.precio=precio;
    this.color=color;
    this.talle=talle;
    this.sexo=sexo;
}
//La funcion la hice para usar funciones
function agregarYMostrarProductos(productos,productoAAgregar){
    productos.push(productoAAgregar);
    console.log(productoAAgregar);
}
//El new se usa para crear un objeto de una clase
const camisetaTitular=new Producto("CamisetaTitular",15000,"Azul y amarillo","M","Hombre");
const camisetSuplente=new Producto("CamisetaSuplente",15000,"Amarillo","M","Hombre y Mujer");
const shortTitular=new Producto("ShortTitular",9500,"Azul","L","Mujer");
const shortNiño= new Producto("ShortNiño",6500,"Azul y Amarillo","XS","Niño");
const buzoTitular= new Producto("BuzoTitular",13500,"Azul","S","Hombre");



const productos=[];
agregarYMostrarProductos(productos,camisetaTitular);
agregarYMostrarProductos(productos,shortTitular);
agregarYMostrarProductos(productos,camisetSuplente);
agregarYMostrarProductos(productos,shortNiño);
agregarYMostrarProductos(productos,buzoTitular);
console.log(productos);

//Esta const declarada, va a TOMAR EL VALOR de cada uno de los elementos del array
//en cada una de las iteraciones
for(const producto of productos){
 if(producto.talle=="M"){
         console.log(producto);
     }
    console.log(producto.nombre);
}

//Este "producto", cumple la misma funcion , que la variable declarada en for of , va tomando 
//los valores del array
const resultado= productos.filter((producto)=>producto.talle=="L");
console.log(resultado);