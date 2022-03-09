class Scene extends Phaser.Scene{
    constructor(){
        super({ key: "Scene" });
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
        
      this.load.audio('lose', 'music/lose.mp3');
      this.load.audio('pick', 'music/pick.mp3');
      this.load.audio('change', 'music/change.mp3');
      
      this.load.image("bg",'assets/s1.png');
        this.load.image("boundary",'assets/s1.png');
        this.load.image("bg2",'assets/s1-2.png');
        this.load.image("gd1",'assets/gd1.png');
        this.load.image("home",'assets/home1.5.png');
        this.load.image("right",'assets/right2.png');
        this.load.image("homel",'assets/home.l.png');
        this.load.image("homer",'assets/home.r.png');
        this.load.image("heart",'assets/heart.png');
        this.load.image("lose",'assets/heart.png');//圖片
        this.load.spritesheet('player','assets/rabbit3 - doux.png',
        {frameWidth:72 ,frameHeight:72 }
        );//角色圖

        //this.load.audio('music','assets/',

        //);//音檔
        
    }
    create(){
        
        this.boundarys=this.physics.add.staticGroup();
        this.boundarys.create(-483,130,'boundary');
        this.boundarys.create(1260,70,'boundary');

        this.add.image( 100,300 ,'gd1');
        this.add.image( 450,115 ,'bg');
        this.add.image( 450,165 ,'bg');
        this.add.image( 450,200 ,'bg');//背景設置

        
        this.platforms=this.physics.add.staticGroup();
        this.platforms.create(  109,290  , 'gd1');
        this.platforms.create(  350, 345 , 'gd1');
        this.platforms.create(  700, 300 , 'gd1');
        this.platforms.create(  750, 296 , 'gd1');//地板設置

        this.add.image( 1210,300 ,'bg2');
        this.add.image( 1210,250 ,'bg2');
        this.add.image( 430,300 ,'bg2');
        this.add.image( 430,270 ,'bg2');
        this.add.image( 430,250 ,'bg2');
        this.add.image( 430,230 ,'bg2');

        this.add.image( 610,240 ,'right');

        this.add.image(90,180,'home');


        this.add.image(832,175,'homel');

        this.heart=this.physics.add.staticGroup();
        this.heart.create(  300,290  , 'heart');
        this.heart.create(  350, 290 , 'heart');
        this.heart.create(  400, 290 , 'heart');

        this.lose=this.physics.add.staticGroup();
        this.lose.create(900,230,'lose');

        this.player=new Player(this,130,240);//角色設置

        this.add.image(829,174,'homer');


        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.player, this.boundarys);
        

        //this.component1=this.physics.add.staticGroup();//靜態物件設置
        //this.component1.create(  ,  , 'component1');
        //this.component1.create(  ,  , 'component1');
        //this.component1.create(  ,  , 'component1').setScale(2).refreshBody();//可改變大小


        //this.component3=this.physics.add.group();//動態物件設置
        //this.component3.create(  ,  , 'component3');
        //this.component3.create(  ,  , 'component3');
        //this.component3.create(  ,  , 'component3').setScale(2).refreshBody();//可改變大小

        //this.finish.create( , ,'finish');//結束物件

        this.anims.create({
            key:'left',
            frames:this.anims.generateFrameNumbers('player',{start:14,end:16}),//開始到結尾的隔數
            frameRate:10,//角色圖片總隔數
            repeat:1,
            flipX:true,
        });//角色向左轉

        this.anims.create({
            key:'right',
            frames:this.anims.generateFrameNumbers('player',{start:5,end: 7}),//開始到結尾的隔數
            frameRate: 10 ,//角色圖片總隔數
            repeat:1
        });//角色向右轉

        this.anims.create({
            key:'up',
            frames:this.anims.generateFrameNumbers('player',{start:2,end: 5}),
            frameRate:10  //角色圖片總隔數
        });//角色向上跳

        //this.anims.create({
          //  key:"gameover";
            //frames:[{key:playerdie,frame:}],
            //frameRate:
        //});

          this.physics.add.overlap(
            this.player, //o1
            this.lose, //o2
            this.collision2, //輸入程式
            null,
            this
          ); //重疊偵測,和載入collision程式

        //this.time = 500;
       // this.timeText = this.add.text(10, 10, "Time:", {fontSize: "32px",color: "red"});
       // this.time.addEvent({
         //   delay: 1000,
           // callback: function() {
         //       this.time--;
           // },
          //  callbackScope: this,
          //  loop:true,
       // });//倒數計時

       this.cursors = this.input.keyboard.createCursorKeys();//鍵盤事件

       this.physics.add.overlap(
        this.heart, //o1
        this.player, //o2
        this.player_touch_heart, //輸入程式
        null,
        this
      ); //重疊偵測,和載入collision程式

    }


   player_touch_heart(player,heart){
    heart.disableBody(true, true);
    this.sound.play('pick');
   }

   // collision(o1, o2) {
        //o1.disableBody(true, true); //碰到時 o1(this.player) 隱形
     //   o1.anims.play("gameover", true);
        //this.add.text(250, 150, "GameOver!", {
          //fontSize: "64px",
          //color: "#ff0000"
        //});
     // } //o1=overlap第一項

      collision2(lose,player){
        //player.anims.play("gameover", true);
        lose.disableBody(true,true);
        this.finish=true;
        this.sound.stopAll();
        this.sound.play('lose');
        this.add.text(250, 150, "GameOver!", {
            fontSize: "64px",
            color: "#ff0000"
          });
        this.clickButton=this.add.text(300,250,'[Restart GAME]',{fontSize:'25px',color:'blue'}).setInteractive({useHandCursor:true})
        .on('pointerup',()=>{
                this.restart();
            });
      }//結束遊戲+重來按鈕

      restart() {
        this.sound.play('bgm');
        this.scene.start();
        this.animationKey = "stop";
        this.finish = false;
      //  this.time = 500;
      }


    update(){

        if(this.player.y >470 && !this.transitioning)
		{
      this.cameras.main.once("camerafadeoutcomplete", () => { this.scene.start("Scene2") });
      this.sound.stopAll();
      this.sound.play('change');
			this.cameras.main.fadeOut(1000);
			this.transitioning = true;
        }
        
        this.player.update();//換場景

        if(this.cursors.left.isDown){
            this.player.setVelocityX(-200);
            this.player.anims.play("left",true);//左鍵
        }else if(this.cursors.right.isDown){
            this.player.setVelocityX(200);
            this.player.anims.play("right",true);//右鍵
        }
        else{
            this.player.setVelocityX(0);//停止
        }
        if(this.cursors.space.isDown&& this.player.body.touching.down&&this.cursors.left.isDown){
          this.player.setVelocityY(-250);
          this.player.anims.play("up-l",true);
      }
      else if(this.cursors.space.isDown&& this.player.body.touching.down&&this.cursors.right.isDown){
        this.player.setVelocityY(-250);
        this.player.anims.play("up-r",true);
    }
    else if(this.cursors.space.isDown&& this.player.body.touching.down){
        this.player.setVelocityY(-250);
        this.player.anims.play("up-r",true);
    }
    }
}