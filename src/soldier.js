var Player = require('./player.js');
var NoArmor = require('./no-armor.js');
var NoWeapon = require('./no-weapon.js');

function Soldier(name, hp, ap, weapon, armor){
    Player.call(this, name, hp, ap);
    this.weapon = weapon ? weapon : new NoWeapon();
    this.armor = armor ? armor : new NoArmor();
}
Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.be_attacked = function (ap) {
    var damage = ap - this.armor.dp;
    this.hp -= damage;
    return damage;
};

Soldier.prototype.getAP = function() {
    return this.ap + this.weapon.ap;
};

Soldier.prototype._super_build_attack_with_string  = Player.prototype.build_attack_with_string;

Soldier.prototype.build_attack_with_string = function() {
    return this.weapon.get_use_string() + this._super_build_attack_with_string();
};

Soldier.prototype.role = function(){
    return "战士"
};

module.exports = Soldier;
