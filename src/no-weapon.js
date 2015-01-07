function NoWeapon(){
    this.ap = 0;
}
NoWeapon.prototype.get_use_string = function(){
    return "";
}
module.exports = NoWeapon;