export function practicaArraysConStrings() {
    const comida = ['pizza','hamburguesa'];
    console.log(`Lista de Comida: ${comida}`);

    console.log('Agregamos a la lista gruiso con el metodo .push():');
    comida.push('Guiso');
    console.log(`Lista de Comida: ${comida}`);

    console.log(`.pop elimina el último elemento y después lo devuelve:`);
    console.log(`${comida.pop()} a sido eliminado de la lista de comidas`);
    console.log(`Lista de Comida: ${comida}`);

    console.log(`.shift elimina el primer elemento y después lo devuelve:`);
    console.log(`${comida.shift()} a sido eliminado de la lista de comidas`);
    console.log(`Lista de Comida: ${comida}`);

    console.log(`.unshift agrega uno o más elementos al incio del array:`);
    console.log('Agregar una pizza');
    comida.unshift('pizza');
    console.log(`Lista de Comida: ${comida}`);
    console.log('Ahora agregar empanada, fideos y tarta:');
    comida.unshift('empanada','fideos','tarta');
    console.log(`Lista de Comida: ${comida}`);
}

export function practicaArraysConEnteros() {
    const numeros = [1,2,3,4,5];

    console.log(`Usamo .map para crear un numero array con todos elevados al cuadrado:`);
    console.log(numeros.map(n => n **2));

    console.log(`Usamo .map para crear un numero array con todos los impares del array anterior:`);
    console.log(numeros.map(n => n % 2 != 0));

    //.map SE USA PARA DEVOLVER LOS ELEMENTOS QUE DEVUELVE UNA CONDICIÓN EN ESPECÍFICA

    console.log('Usamos .filter para mostrar inpares y pares:');
    console.log(numeros.filter(n => n % 2 != 0));
    console.log(numeros.filter(n => n % 2 === 0));
    console.log(numeros.filter(n => n < 5));

    //.filter SE USA PRA DEVOLVER LOS ELEMENTOS QUE CUMPLEN CON UNA CONDICIÓN ESPECÍFICA

    console.log('Usamos .reduce para hacer operaciones algebraicas:');
    console.log(numeros.reduce((a,b) => (a + b),0));
    console.log(numeros.reduce((a,b) => (a - b),0));
    console.log(numeros.reduce((a,b) => (a * b),1));

    //.reduce RECORRE TODO EL ARRAY DE IZQUIERDA A DERECHA REDUCIENDO TODO EL ARRAY A UN SOLO VALOR

    numeros.forEach(n => console.log(n));
}

