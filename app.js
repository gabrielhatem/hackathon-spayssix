const config = {
    width: 400,
    height: 600,
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

PlayState = {};

let game = new Phaser.Game(config);
let ship;
let asteroid;

function preload(){
    this.load.image('ship', 'images/spaceship.png');
    this.load.image('spacebg','images/space-bg.jpg');
    this.load.image('asteroid', 'images/asteroid.png');
    this.load.image('bullet', 'images/bullet.png')
}

function fire(){
    let coordonates = ship.body.position;
    let shipWidth = ship.body.width;
    let shipHeight = ship.body.height;
    let x = coordonates[0] - shipWidth;
    let y = coordonates[1] - shipHeight;
    let bullet = this.physics.add.image(x, y, 'bullet');
}

function create(){
    this.renderer.clearBeforeRender = false;
    this.renderer.roundPixels = true;
    this.add.tileSprite(0, 0, game.width, game.height, 'spacebg');
    ship = this.physics.add.image(210, 500, 'ship');
    asteroid = this.physics.add.image(300, 0, 'asteroid');
    asteroid.setVelocityY(250);
    ship.body.collideWorldBounds = true;
    // this.state.add('play', PlayState);
    // this.state.start('play');
    // var cursors = this.input.keyboard.creatCursorKeys();
    console.log(game);
    this.input.keyboard.on('keydown-SPACE', function (event) {
        fire(ship);
    });
    this.input.keyboard.on('keydown-UP', function (event) {
        ship.setVelocity(0, -300);
        console.log
    });
    this.input.keyboard.on('keyup-UP', function (event) {
        setTimeout(() => {
            ship.setVelocityY(0);
        }, 50);
    });

    this.input.keyboard.on('keydown-DOWN', function (event) {
        ship.setVelocity(0, 300);
    });
    this.input.keyboard.on('keyup-DOWN', function (event) {
        setTimeout(() => {
            ship.setVelocityY(0);
        }, 50);
    });

    this.input.keyboard.on('keydown-LEFT', function (event) {
        ship.setVelocity(-300, 0);
    });
    this.input.keyboard.on('keyup-LEFT', function (event) {
        setTimeout(() => {
            ship.setVelocityX(0);
        }, 50);
    });

    this.input.keyboard.on('keydown-RIGHT', function (event) {
        ship.setVelocity(300, 0);
    });
    this.input.keyboard.on('keyup-RIGHT', function (event) {
        setTimeout(() => {
            ship.setVelocityX(0);
        }, 50);
    });
}

function update(){

  
}