//
const characters = ['shane','alison','belle'];
//desestructuracion de un array
const[... p3] = characters;
//al hacer referencia posicional de un elemento del array se puede llamar a consola
console.log(p3);

const returnsArray = () =>{
    return['ABC',123];
} 
const [letters,numbers]=  returnsArray();
console.log(letters,numbers);

//tarea

const useState = (value) => {
    return[value, ()=> {console.log('Hola Mundo')}];
}

const [nombre ,setNombre] = useState('Ami');

console.log(nombre);
setNombre();
