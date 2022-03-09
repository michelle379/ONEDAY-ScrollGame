class Lose extends Phaser.Scene{
    constructor(){
        super({ key: "Lose" });
        this.player=null;
        this.platforms=null;
        this.cursors=null;
        this.heart=null;
        this.lose=null;
        this.boundarys=null;
        this.finish = false;
        this.time = 0;
        
    }
    preload(){
        this.load.image("gd1",'assets/gd1.png');
        this.load.image("r",'assets/r.png');
        this.load.image("bg32",'s3/bg2.png');
        this.load.audio('bgmlose', 'music/lose2.mp3');
        this.load.spritesheet('player','assets/rabbit3 - doux.png',
        {frameWidth:72 ,frameHeight:72 }
        );//角色圖

    }




    create(){
        this.sound.stopAll();
        this.sound.play('bgmlose');

        this.platforms=this.physics.add.staticGroup();
        this.platforms.create(450,300,'gd1');

        this.add.image(450,214,'bg32').setScale(20.5);

        this.player=new Player(this,130,100000);//角色設置

        this.r=this.physics.add.staticGroup();
        this.r.create(400,270,'r').setScale(1.75);

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.r, this.platforms);

        this.physics.add.overlap(
            this.r, //o1
            this.platforms, //o2
            this.collision2, //輸入程式
            null,
            this
          );
        
    }


    collision2(platforms,r){
        this.finish=true;
        this.add.text(250, 120, "GameOver!", {
            fontSize: "64px",
            color: "#ff0000"
          });
        this.clickButton=this.add.text(320,340,'[Restart GAME]',{fontSize:'25px',color:'pink'}).setInteractive({useHandCursor:true})
        .on('pointerup',()=>{
            this.cameras.main.once("camerafadeoutcomplete", () => { this.scene.start("Menu") });
			this.cameras.main.fadeOut(500);
			this.transitioning = true;
            });
      }//結束遊戲+重來按鈕

      restart() {
        this.scene.start();
        this.animationKey = "stop";
        this.finish = false;
      //  this.time = 500;
      }

    update(){
    }
}