
import  {getHeroeById}  from "../data/export-import.js";
import heroes from "../data/export-import-a.js";

//const promesa = new Promise((resolve,reject)=>{
//
//    setTimeout(()=>{
//
//        const heroe = getHeroeById(2)
//        console.log(heroe);
//        resolve(heroe)
//
//
//    },3000)
//
//});
//
//promesa.then((heroe)=>{
//    console.log('then de la promesa',heroe)
//})
//.catch(err => console.warn(err));

const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            const heroes = getHeroeById(id);
            if (heroes){
            resolve(heroes)}
            else{
            reject('no se encontro el heroe')
            }


        },3000)
    });
   

}
getHeroeByIdAsync(4).then( console.log)
.catch(console.warn);