function Player(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}

Player.prototype.isAlive = function(){
    return this.hp > 0;
}

Player.prototype.attack = function(player){
    player.hp -= this.ap;
}

module.exports = Player;
