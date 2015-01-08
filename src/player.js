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

Player.prototype.build_attack_string = function (defencer, damage) {
    return this.role() + this.name + this.build_attack_with_string() + defencer.role() + defencer.name + ","
        + defencer.name + "受到了" + damage + "点伤害," + defencer.name + "剩余生命：" + defencer.hp;
};

Player.prototype.getAP = function(){
    return this.ap;
};

Player.prototype.attack = function (defencer) {
    var damage = defencer.be_attacked(this.getAP());
    return this.build_attack_string(defencer, damage);
};

Player.prototype.be_attacked = function(ap){
    this.hp -= ap;
    return ap;
};

Player.prototype.role = function () {
    return "普通人"
};

module.exports = Player;
