var m = require('jsmockito').JsMockito;
var Player = require('../src/player.js');
var Game = require('../src/game.js');

describe("player", function(){
    it("spec", function(){
        var zhang_san = new Player("张三", 100, 10);
        var li_si = new Player("李四", 100, 8);
        var mocked_console = m.spy(console);
        var game = new Game(zhang_san, li_si, mocked_console);
        game.fight();
        m.verify(mocked_console).log("李四被打败了.");
    });

    it("attack", function(){
        var zhangsan = new Player("张三", 100, 10);
        var lisi = new Player("李四", 100, 8);
        zhangsan.attack(lisi);
        expect(lisi.hp).toBe(90);
    })
})
