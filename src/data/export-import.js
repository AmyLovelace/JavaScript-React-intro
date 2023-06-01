import heroes,{owners} from '../data/export-import-a.js';

export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id );


//console.log(getHeroeById(4))

export const getHeroeByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner );

//console.log(getHeroeByOwner('Marvel'));
