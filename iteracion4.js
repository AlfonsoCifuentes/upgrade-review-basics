//Iteración#4: Métodos findArrayIndex

const animales = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
const frutas = ["Pera", "Naranja", "Mandarina", "Kiwi"];

function findArrayIndex(array, text) {
  for (i = 0; i <= array.length; i++) {
    if (array[i] == text) {
      return [i];
    }
  }

  if (array[i] != text) {
    return "El texto no está en el Array";
  }
}


