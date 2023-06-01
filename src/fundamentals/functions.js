//funciones 

const greatings = function (name){
    return `Hola, ${name}`;
}
//funcion flecha /arrow function

const greatings2 = (name) => {
    return `Hola, ${name}`;
}

//arrow function simplificada , sin return pero con la misma funcionalidad
const greatings3 = (name) =>  `Hola, ${name}`;

console.log(greatings('Ami'));
console.log(greatings2('Adelin'));
console.log(greatings3('Andy'));

//

const getUser = () => ({
        uid:'ABCDE123',
        username:'daddyslilgirl'
    });
const user = getUser();
console.log(user);

//ejercicio 
//transformar en una arrow function
//tiene que retornar un objeto implicito
//probar

function getUsuarioActivo(namo){
    return{
        uid:'ABCD43',
        username:namo
    }
}

//
const getActiveUser =(name)=>({
    uid:'ABCD43',
    username:name
})

const ActiveUser = getActiveUser('Ami');
console.log(ActiveUser);