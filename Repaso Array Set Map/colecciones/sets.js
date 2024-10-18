export function practicaSets() {
    const alumno1 = {
        legajo: 1,
        nombre: 'Pablo'
    }
    const alumno2 = {
        legajo: 2,
        nombre: 'Ivan'
    }
    const alumno3 = {
        legajo: 3,
        nombre: 'Marcos'
    }
    const alumno4 = {
        legajo: 4,
        nombre: 'Gonzalo'
    }
    
    const sets = new Set();
    sets.add(alumno3);
    sets.add(alumno1);
    sets.add(alumno2);
    console.log(sets);

    console.log(sets.has(alumno4));
    console.log(sets.has(alumno2));

    const alumnoExiste = [...sets].some(
        al => al.legajo === 1
    )

    console.log(alumnoExiste);

    sets.delete(alumno3);

    console.log(sets);
    
    alumno1.nombre = 'Walter';

    sets.add(alumno1);

    sets.forEach(al => console.log(al));
}