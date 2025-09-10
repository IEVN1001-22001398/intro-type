
import { calcularIVA2, type Producto } from "./05-desestructuracion-funciones";


const carrito:Producto[]=[
    {
    nombre:'Iphone 14',
    precio: 1500
    },
    {
    nombre:'Ipad air',
    precio: 900
    },
    {
    nombre:'mackbook pro',
    precio: 2500
    }
];


const [total,iva]=calcularIVA2(carrito);
console.log(`El total es: ${total}`);
console.log(`El total es: ${iva}`);