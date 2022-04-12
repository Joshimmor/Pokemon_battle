
function choose_pokemon(starter){
    let starter_poke = new Pokemon(starter.name,starter.types[0].type.name, 
        starter.sprites.front_default,
        starter.weight,Math.floor(Math.random() * 5))
        console.log(starter_poke)
}
