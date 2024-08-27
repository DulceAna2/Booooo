let numeros=[1,2,38,4,57,6,100];
//elegir elementos del arreglo
let numero=2;
console.log(numeros.indexOf(numero));
console.log(numeros.lastIndexOf(numero));
console.log(numeros.find(x=>x==2));

function Busqueda(value,index,array){
    return value>30
};
//ordenar los numeros de menor a mayor
numeros.sort(function(a, b){return a - b});
//ordenar los numeros de mayor a menor
numeros.sort(function(a, b){return b - a});
//method ejemplo utilizarlo para juegoss con cartas

//obtener el  min de un arreglo con 
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }
  //otro ejemplo de min
  function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }
//obtener el  max de un arreglo con 
  function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }
//otro ejemplo de max
function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }