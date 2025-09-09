
interface Alumno{
    nombre:string;
    edad:number;
    curso:string;
    email?:string;
    nota: number|string;
}



const alumno:Alumno={
    edad: 23,
    nombre: "Juan",
    curso: "Typescript",
    email: "juanito@gmail.com",
    nota: 7.5
}

console.log(`el nombre es ${alumno.nota}la nota es ${alumno.nota}`)




let mascotas:string[]=['Perro','Gato','Hamster'];
mascotas[1]='Pajaro';
mascotas.push('Tortuga');
console.log(mascotas);

let notas:(number|string)[]=[7,8,9,'Aprobado'];
notas.push(20);
notas.push('Sobresaliente');
console.log(notas);