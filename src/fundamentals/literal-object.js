//objetos literales

const person = {
    name: 'Ami',
    age: '28',
    country :'Chile',
    adress:{
        city:'Santiago',
        street:'Las Encinas'
    }
};

//hacer un nuevo objeto mediante  ...

const person2 = {...person};//se clona el objeto con un nuevo espacio en memoria

person2.name = 'Pedro';
person2.adress = 'Av Siemprevivas';
person2.country = 'Russia';
person2.age = 38;

console.log({person});
console.log({person2});