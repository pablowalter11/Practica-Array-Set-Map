export function practicaMaps() {
    const personajes = [
        {
            legajo: 1,
            nombre: 'Mario',
            habilidad: 'saltar'
        },
        {
            legajo: 2,
            nombre: 'Sonic',
            habilidad: 'correr'
        },
        {
            legajo: 3,
            nombre: 'Crash',
            habilidad: 'girar'
        }
    ];

    console.log(personajes);

    const mapaPersonajes = new Map();
    
    personajes.forEach(n => {
        mapaPersonajes.set(n.legajo,n);
    });

    console.log(mapaPersonajes);
    console.log(mapaPersonajes.get(2));
    console.log(mapaPersonajes.get(3));
    console.log(mapaPersonajes.get(1));

    mapaPersonajes.get(1).nombre += ' Bros';
    mapaPersonajes.get(2).nombre = 'Sonic the Hedgehog';
    mapaPersonajes.get(3).nombre = 'Crash Bandicoot';

    console.log(mapaPersonajes);

    mapaPersonajes.delete(3);

    mapaPersonajes.forEach(p => console.log(p));

    const pjEncontrado = [...mapaPersonajes.values()].find(
        p => p.legajo === 2
    );
    console.log(pjEncontrado);
}