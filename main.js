import {types} from "./pokemonTypes.js"
let title = "          NOR FIR WAT ELE GRA ICE FIG POI GRO FLY PSY BUG ROC GHO DRA DAR STE FAI"
console.log(title)
for( let row in types ){
    let header = row;
    while(header.length < 10){
        header +=" "
    }
    const off = types[row]
    for (let col in off){
        let str = off[col]==1?" - ":""+off[col]
        while(str.length<3){
            str+=" "
        }
        header +=str+" "
    }
    console.log(header)
}