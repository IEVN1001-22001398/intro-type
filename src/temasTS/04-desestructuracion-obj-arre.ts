interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;

}

interface Detalles{
    autor:string;
    anio:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'Friends',
    detalles:{
        autor:'Boywithuke',
        anio: 2025,
    }
};

console.log("el volumen actual es :", reproductor.volumen)

const{volumen,segundo,cancion,detalles}=reproductor;
const{autor:nuevoauto, anio}=detalles;

console.log("el volumen actual es :", volumen)




