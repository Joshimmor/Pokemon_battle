export class Pokemon{
    attacks = []
    constructor(name,type, sprite,weight,level){
      this.name = name
      this.type = type
      this.sprite = sprite
      this.weight = weight
      this.level = level
      this.hp = level * 15
    }
    //take hits
    damage(){
      this.hp -= 5
    }
    //heal
    heal(){
      this.hp = this.level * 15
    }
  }
  