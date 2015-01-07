function Player(name, hp, ap) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}

Player.prototype.isAlive = function () {
    return this.hp > 0;
}

Player.prototype.build_attack_with_string = function() {
    return "攻击了";
}

Player.prototype.build_attack_string = function (player, damage) {
    return this.role() + this.name + this.build_attack_with_string() + player.role() + player.name + ","
        + player.name + "受到了" + damage + "点伤害," + player.name + "剩余生命：" + player.hp;
}
Player.prototype.attack = function (player) {
    player.be_attacked(this.ap);
    return this.build_attack_string(player, this.ap);
}

Player.prototype.be_attacked = function(ap){
    this.hp -= ap;
    return ap;
}
Player.prototype.role = function () {
    return "普通人"
}

module.exports = Player;
