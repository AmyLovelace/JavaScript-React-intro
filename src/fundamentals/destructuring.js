//desestructuracion

const persona = {
    nombre:'Amy',
    edad:48,
    pwd:'chupicabri'
};

//definimos la const ,abrimos llave donde estara lo que se abstraerá del objeto que esta expresado despues del = en este caso es persona
const{ nombre , edad, pwd} = persona;
console.log(nombre);
console.log(edad);
console.log(pwd);

const useContext = ({nombre,edad,pwd,rango = 'general'}) => {console.log(nombre,edad,pwd,rango);
    return{
        //nombreClave:clave,
        //anios:edad
    }
}

const amyLovelace = {
    nombreClave:'Amy',
    anios:666,
}

const {nombreClave,anios} = amyLovelace;
console.log(nombreClave,anios);
