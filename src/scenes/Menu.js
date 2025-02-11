class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }
    preload() {
        // load images/tile sprites
        this.load.image('background', './assets/background.png')
        this.load.image('arrows', './assets/arrows.png')
        this.load.image('esc', './assets/esc.png')
        this.load.image('spacebar', './assets/spacebar.png')
        this.load.image('ball', './assets/ball.png')
        this.load.image('ball2', './assets/ball2.png')
        this.load.image('big-ball', './assets/big-ball.png')
        this.load.image('ball-diagonal', './assets/ball-diagonal.png')
        this.load.image('menu-background', './assets/menu-background.png')
        this.load.spritesheet('character', './assets/Character_002.png', {
            frameWidth: 48
        })
        // load audio
        this.load.audio('background-music', './assets/background-music.wav')
        this.load.audio('play-music', './assets/play-music.wav')
        this.load.audio('gameover', './assets/gameover.wav')
        this.load.audio('moo', './assets/moo.wav')
        this.load.audio('neigh', './assets/neigh.wav')
        this.load.audio('oink', './assets/oink.wav')
        this.load.audio('cluck', './assets/cluck.wav')
        
    }
    

    create() {
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '70px',
            fontStyle: 'bold',
            color: '#000000',
            align: 'right',
            fixedWidth: 0
        }
        let tutorialConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            fontStyle: 'bold',
            color: '#000000',
            align: 'right',
            fixedWidth: 0
        }
        // display menu text
        this.background = this.add.tileSprite(0, 0, 800, 800, 'menu-background').setOrigin(0, 0)
        this.add.image(game.config.width - 50, -5, 'arrows').setOrigin(1, 0).setScale(.6)
        this.add.image(520, 25, 'esc').setOrigin(1, 0).setScale(.6)
        this.add.image(300, 25, 'spacebar').setOrigin(1, 0).setScale(.6)
        this.add.text(185, 190, 'Start Game', tutorialConfig).setOrigin(0.5)
        this.add.text(410, 190, 'Pause Game', tutorialConfig).setOrigin(0.5)
        this.add.text(640, 190, 'Move Character', tutorialConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, 700, 'FARM ATTACK', menuConfig).setOrigin(0.5)
        menuConfig.backgroundColor = '#00FF00'
        menuConfig.color = '#000'
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)     
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC) 
        //play music
        this.music = this.sound.add('background-music', { 
            volume: 0.5, 
            loop: true 
        });
        this.music.play();
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          this.music.stop(); 
          this.scene.start('playScene')    
        }
      }
}