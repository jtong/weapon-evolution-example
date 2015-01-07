function Weapon(name, ap){
    this.name = name;
    this.ap = ap;
}

Weapon.prototype.get_use_string = function(){
    return "用" + this.name;
}
module.exports = Weapon;