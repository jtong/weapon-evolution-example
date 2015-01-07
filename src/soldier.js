var Player = require('./player.js');
var NoArmor = require('./no-armor.js');

function Soldier(name, hp, ap, weapon, armor){
    Player.call(this, name, hp, ap);
    this.weapon = weapon;
    this.armor = armor ? armor : new NoArmor();
}
Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.be_attacked = function (ap) {
    var damage = ap - this.armor.dp;
    this.hp -= damage;
    return damage;
};

Soldier.prototype.attack = function (player) {
    var damage = player.be_attacked(this.ap + this.weapon.ap, player);
    return this.build_attack_string(player, damage);
};

Soldier.prototype._super_build_attack_with_string  = Player.prototype.build_attack_with_string;

Soldier.prototype.build_attack_with_string = function() {
    return "用" + this.weapon.name + this._super_build_attack_with_string();
};

Soldier.prototype.role = function(){
    return "战士"
}

module.exports = Soldier;
