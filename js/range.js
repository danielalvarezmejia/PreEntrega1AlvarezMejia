alert('Identifica el rango entre números enteros');

let resultA = prompt('Coloca el primer número');
let resultB = prompt('Coloca el segundo número');

const contarRango = (a, b) => {
  let rango = 0;

  if(a < b) {
    for(let i = a + 1; i < b; i++) {
      rango++
    }
  } else {
    for(let i = a - 1; i > b; i--) {
      rango++;
    }
  }
  return rango;
};

if (isNaN(resultA) || isNaN(resultB)) {
  alert('este no es un número');
}else if (resultA.toString().includes('.') || resultB.toString().includes('.')){
  alert('debes colocar números enteros');
}else {
  alert(`el rango entre ${resultA} y ${resultB} es ${contarRango(Number(resultA), Number(resultB))}`);
};

//terminado