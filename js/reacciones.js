let result = prompt('Ingrese el número de likes que quiere tener');

const likes = (number) => {
  let numString = number.toString();
  let numLength = number.toString().length;

  if (numLength < 4) {
    return numString;
  } else if (numLength >=4 && numLength <= 6) {
    let thousand = parseInt(number / 1000);
    return thousand + 'K';
  } else if (numLength >= 7 && numLength <= 9) {
    let million = parseInt(number / 1000000);
    return million + 'M';
  } else {
    let billion = parseInt(number / 1000000000);
    return billion + 'B';
  };
}

if (isNaN(result)) {
  alert('este no es un número');
}else if (result.toString().includes('.')){
  alert('debes colocar números enteros');
}else {
  alert(`tu tienes ${likes(result)} reacciones`);
};
