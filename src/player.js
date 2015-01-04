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
    return this.name + "攻击了" + player.name + ","+ player.name +"受到了"+this.ap +"点伤害,"+ player.name + "剩余生命："+player.hp;
}

module.exports = Player;
