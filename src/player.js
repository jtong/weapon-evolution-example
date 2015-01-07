function Player(name, hp, ap) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}

Player.prototype.isAlive = function () {
    return this.hp > 0;
};

Player.prototype.build_attack_with_string = function() {
    return "攻击了";
};

Player.prototype.build_pre_damage_string = function(){
    return "";
};

Player.prototype.build_attack_string = function (player, attack_result) {
    return this.role() + this.name + this.build_attack_with_string() + player.role() + player.name + ","
        + this.build_pre_damage_string(attack_result.attack_impact) + player.name + "受到了" + attack_result.damage + "点伤害," + player.name + "剩余生命：" + player.hp;
};

Player.prototype.getAP = function(){
    return this.ap;
};

Player.prototype.do_attack = function(player) {
    var damage = player.be_attacked(this.getAP());
    return  {
        damage: damage
    };
}

Player.prototype.attack = function (player) {
    var attack_result = this.do_attack(player);
    return this.build_attack_string(player, attack_result);
};

Player.prototype.be_attacked = function(ap){
    this.hp -= ap;
    return ap;
};

Player.prototype.role = function () {
    return "普通人"
};

module.exports = Player;
