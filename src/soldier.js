var Player = require('./player.js');

function Soldier(name, hp, ap, weapon, armor){
    Player.call(this, name, hp, ap);
    this.weapon = weapon;
    this.armor = armor;
}
Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.attack = function(player){
    player.hp -= this.ap + this.weapon.ap;
    return this.build_attack_string(player, this.ap + this.weapon.ap);
}

Soldier.prototype._super_build_attack_with_string  = Player.prototype.build_attack_with_string;

Soldier.prototype.build_attack_with_string = function() {
    return "用" + this.weapon.name + this._super_build_attack_with_string();
};

Soldier.prototype.role = function(){
    return "战士"
}

module.exports = Soldier;
