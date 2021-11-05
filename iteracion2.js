// Iteración #2: Mix fors

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const volumenes = [];
let suma = 0;
let media;

for (var personaje of users){
    for (var sonidos in personaje.favoritesSounds){
       for (var propiedadSonido of Object.values(personaje.favoritesSounds[sonidos])){
           if (typeof propiedadSonido == "number") {
               volumenes.push (propiedadSonido);
           }
       }

    }

}

for (let volumen of volumenes){
    suma += volumen
}

media = suma /volumenes.length;

console.log (media);

//ok