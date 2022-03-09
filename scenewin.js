class Win extends Phaser.Scene{
    constructor(){
        super({ key: "Win" });
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
        this.load.audio('bgmwin', 'music/win.mp3');
        this.load.image("start",'assets/props.png');
        this.load.image("sky",'assets/sky.png');
        this.load.image("homel",'assets/home.l.png');
        this.load.image("homer",'assets/home.r.png');
        this.load.spritesheet('player','assets/rabbit3 - doux.png',
        {frameWidth:72 ,frameHeight:72 }
        );//角色圖

    }




    create(){
        this.sound.play('bgmwin');

        this.add.image(450,214,'sky').setScale(2.5);

        this.w=this.physics.add.staticGroup();
        this.w.create(430,200,'start');

        this.player=new Player(this,430,150).setScale(1.75);//角色設置
        this.platforms=this.physics.add.staticGroup();
        this.platforms.create(430,250,'gd1');

        this.add.image(480,500,'homel').setScale(3);
        this.add.image(472,500,'homer').setScale(3);

        this.physics.add.collider(this.player, this.platforms);
        
        this.anims.create({
            key:'jump',
            frames:this.anims.generateFrameNumbers('player',{start:2,end:4}),//開始到結尾的隔數
            frameRate:5  ,//角色圖片總隔數
            repeat:1
        });//角色向左轉

        this.physics.add.overlap(
            this.w, //o1
            this.player, //o2
            this.collision2, //輸入程式
            null,
            this
          );
    }


    collision2(player,w){
        player.anims.play("jump",true);
        this.finish=true;
        this.add.text(100, 30, "Thanks For Your Playing ~", {
            fontSize: "45px",
            color: "#ff0000"
          });
        this.clickButton=this.add.text(210,370,'[Restart GAME]',{fontSize:'25px',color:'black'}).setInteractive({useHandCursor:true})
        .on('pointerup',()=>{
            this.cameras.main.once("camerafadeoutcomplete", () => { this.scene.start("Menu") });
			this.cameras.main.fadeOut(500);
            this.transitioning = true;
            this.sound.stopAll();
            });
            
      }//結束遊戲+重來按鈕

    update(){
    }
}