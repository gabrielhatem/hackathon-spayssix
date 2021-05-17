const config = {
    width: 800,
     height: 500,
     type: Phaser.AUTO,
     physics: {
         default: 'arcade'
     },
     scene: {
         preload: preload,
         create: create,
         update: update
     }
}
let game = new Phaser.Game(config);
let ship; 

function preload(){
    this.load.image('ship', 'images/spaceship.png');
    this.load.image('spacebg','images/space-bg.jpg');
}

function create(){
    this.renderer.clearBeforeRender = false;
    this.renderer.roundPixels = true;
    this.add.tileSprite(0, 0, game.width, game.height, 'spacebg');
    ship = this.physics.add.image(350, 200, 'ship');
    ship.body.collideWorldbounds = true;

    // var cursors = this.input.keyboard.creatCursorKeys();
    console.log(this.input.keyboard);
    
}

function update(){
    
    this.input.keyboard.on('keydown-UP', function (event) {
        ship.setVelocity(0, -300)
    });
    this.input.keyboard.on('keyup-UP', function (event) {
        setTimeout(() => {
            ship.setVelocityY(0);
        }, 100);
    });

    this.input.keyboard.on('keydown-DOWN', function (event) {
        ship.setVelocity(0, 300)
    });
    this.input.keyboard.on('keyup-DOWN', function (event) {
        setTimeout(() => {
            ship.setVelocityY(0);
        }, 100);
    });

    this.input.keyboard.on('keydown-LEFT', function (event) {
        ship.setVelocity(-300, 0)
    });
    this.input.keyboard.on('keyup-LEFT', function (event) {
        setTimeout(() => {
            ship.setVelocityX(0);
        }, 100);
    });

    this.input.keyboard.on('keydown-RIGHT', function (event) {
        ship.setVelocity(300, 0)
    });
    this.input.keyboard.on('keyup-RIGHT', function (event) {
        setTimeout(() => {
            ship.setVelocityX(0);
        }, 100);
    });
}