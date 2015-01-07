var Player = require('../src/player.js');
var Game = require('../src/game.js');
var Soldier = require('../src/soldier.js');
var Weapon = require('../src/weapon');
var Armor = require('../src/armor');
var DeadlyAttackEffect = require("../src/effect/deadly-attack-effect.js");

describe("Effect", function(){
    describe("deadly attack effect", function(){

        it("soldier with weapon vs soldier with armor trigger effect attack string", function(){
            var zhangsan = new Soldier("张三", 100, 10, new Weapon("利剑",2, new DeadlyAttackEffect()));
            var lisi = new Soldier("李四", 100, 8, null, new Armor("皮甲", 2));
            var attack_string = zhangsan.attack(lisi);

            expect(attack_string).toBe("战士张三用利剑攻击了战士李四,张三发动了致命一击,李四受到了30点伤害,李四剩余生命：70");
        });




    })
});
