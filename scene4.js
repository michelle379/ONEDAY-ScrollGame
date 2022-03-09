class Scene4 extends Phaser.Scene{
    constructor(){
        super({ key: "Scene4" });
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

        this.load.image("4bg","s4/bg4.png");
        this.load.image("4bg1","s4/bg41.png");
        this.load.image("4bg2","s4/bg42.png");
        this.load.image("4bg3","s4/bg43.png");
        this.load.image("ch","s4/ch.png");
        this.load.image("c1","s4/c3.png");
        this.load.image("c2","s4/c2.png");
        this.load.image("c12","s4/c12.png");
        this.load.image("star","s4/star.png");
        this.load.image("star1","s4/star1.png");
        this.load.image("fl2","s4/fl2.png");
        this.load.image("fl1","s4/fl1.png");
        this.load.image("gd1",'assets/gd1.png');
        this.load.image("boundary",'assets/s1.png');
        this.load.image("t","assets/t.png");
        this.load.image("heart",'assets/heart.png');
        this.load.image("homel",'assets/home.l.png');
        this.load.image("homer",'assets/home.r.png');
        this.load.image("f41",'s4/f3.png');
        this.load.image("f42",'s4/f32.png');
        this.load.image("f43",'s4/f33.png');
        this.load.image("f44",'s4/f34.png');
        this.load.image("f45",'s4/f35.png');
        this.load.image("z1",'s4/z1.png');
        this.load.image("z2",'s4/z2.png');
        this.load.image("z3",'s4/z3.png');
        this.load.spritesheet("enemy", "assets/enemy1.png",{frameWidth:43.6 ,frameHeight:65});
        this.load.spritesheet('player','assets/rabbit3 - doux.png',
        {frameWidth:72 ,frameHeight:72 }
        );//角色圖

    }




    create(){
      this.sound.play('bgm');
        this.boundarys=this.physics.add.staticGroup();
        this.boundarys.create(-483,430,'boundary');
        this.boundarys.create(3500,430,'boundary');
        this.boundarys.create(3370,230,'boundary');

        
        this.platforms=this.physics.add.staticGroup();
        this.platforms.create(  109,470  , 'gd1');
        this.platforms.create(  309,470  , 'gd1');
        this.platforms.create(  509,470  , 'gd1');
        this.platforms.create(  709,470  , 'gd1');
        this.platforms.create(  909,470  , 'gd1');
        this.platforms.create(  1109,470  , 'gd1');
        this.platforms.create(  1309,470  , 'gd1');
        this.platforms.create(  2309,470  , 'gd1');
        this.platforms.create(  2509,470  , 'gd1');
        this.platforms.create(  2709,470  , 'gd1');
        this.platforms.create(  2909,470  , 'gd1');
        this.platforms.create(  3109,470  , 'gd1');


        

        this.t=this.physics.add.staticGroup();
        this.t.create(  437,410  , 'heart');
        this.t.create(  395,410  , 'heart');
        this.t.create(  2097,390  , 'heart');
        this.t.create(  2055,390  , 'heart');


        this.add.tileSprite(1900,230,3000,256,"4bg").setScale(1.9);
        this.cameras.main.setBounds(300,0,2700,470);

        this.add.image(928,456,'4bg1').setScale(1.9);
        this.add.image(2928,456,'4bg1').setScale(1.9);
        this.add.image(1022,455,'4bg2').setScale(2.2);
        this.add.image(619,455,'4bg3').setScale(1.9);
        this.add.image(9,455,'4bg3').setScale(1.9);
        
        this.add.image(2902,345,'homel');

        this.add.image(2615,290,"fl1").setScale(1);

        this.fl=this.physics.add.staticGroup();
        this.fl.create(2620,433,'fl2').setScale(1.9);
        this.fl.create(2430,307,'f41').setScale(2);
        this.fl.create(2430,357,'f41').setScale(2);
        this.fl.create(2380,290,"f43").setScale(2);
        this.fl.create(2380,320,"f43").setScale(2);
        this.fl.create(2360,410,"f45").setScale(1.5);
        this.fl.create(2360,430,"f45").setScale(1.5);
        this.fl.create(2360,350,"f44").setScale(1.5);
        this.fl.create(2360,380,"f44").setScale(1.5);

        this.fl.create(2240,410,"f45").setScale(1.5);
        this.fl.create(2240,430,"f45").setScale(1.5);
        this.fl.create(2320,350,"f44").setScale(1.5);
        this.fl.create(2320,380,"f44").setScale(1.5);
        this.fl.create(2380,234,"f43").setScale(2);
        this.fl.create(2377,260,"f43").setScale(2);
        this.fl.create(2335,290,"f43").setScale(2);
        this.fl.create(2335,320,"f43").setScale(2);
        this.fl.create(2385,212,"f42").setScale(1.5);

        this.fl.create(1806,415,"z2").setScale(1.5);
        this.fl.create(1390 ,418,"z2").setScale(1.5);
        this.fl.create(1742,365,"z3").setScale(1.5);
        this.fl.create(1443,365,"z1").setScale(1.5);

        this.fl.create(1957,179,"c12").setScale(1.5);
        this.fl.create(1610,165,"c12").setScale(1.5);

        this.fl.create(1160,315,"c12").setScale(1.5);
        this.fl.create(1100,315,"c12").setScale(1.5);
        this.fl.create(1130,315,"c12").setScale(1.5);
        this.fl.create(1070,315,"c12").setScale(1.5);
        this.fl.create(1010,315,"c12").setScale(1.5);
        this.fl.create(1040,315,"c12").setScale(1.5);
        this.fl.create(950,315,"c12").setScale(1.5);
        this.fl.create(980,315,"c12").setScale(1.5);
        this.fl.create(920,315,"c12").setScale(1.5);
        this.fl.create(890,315,"c12").setScale(1.5);
        this.fl.create(830,315,"c12").setScale(1.5);
        this.fl.create(860,315,"c12").setScale(1.5);
        

        this.ss4=this.physics.add.staticGroup();
        this.ss4.create(1970,457,'4bg3').setScale(2.3);
        this.ss4.create(1958,179 ,'c1').setScale(1.5);
        this.ss4.create(1610,165,'c2').setScale(1.5);
        this.ss=this.physics.add.staticGroup();
        this.ss.create(873,280 ,'heart').setScale(1.5);
        this.ss.create(1125,280,'heart').setScale(1.5);

        this.enemy3 = new Enemy(this, 1200, 410);
        this.enemy4 = new Enemy(this, 1250, 410);
        this.enemys = [this.enemy3, this.enemy4];

        this.player=new Player(this,409,360);//角色設置


        this.add.image(2565,456,'4bg3').setScale(1.9);
        this.add.image(2860,457,'4bg2').setScale(1.9);
        this.add.image(2809,457,'4bg2').setScale(1.9);

        this.win=this.physics.add.staticGroup();
        this.win.create(2970,400,'heart');

        this.add.image(2900,345,'homer');


        this.add.image(2069,430,"t").setScale(0.65);
        this.add.image(409,450,"t").setScale(0.65);
        this.add.image(2615,150,"star1").setScale(1);
        

        this.lose=this.physics.add.staticGroup();
        this.lose.create(2615,150,'star');
        this.lose2=this.physics.add.staticGroup();
        this.lose2.create(958,280 ,'ch').setScale(1);
        this.lose2.create(1040,280,'ch').setScale(1);

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.player, this.boundarys);
        this.physics.add.collider(this.player, this.t);
        this.physics.add.collider(this.player, this.fl);
        this.physics.add.collider(this.enemys, this.platforms);
        
        
        this.anims.create({
            key:'left',
            frames:this.anims.generateFrameNumbers('player',{start:14,end:16}),//開始到結尾的隔數
            frameRate:10  ,//角色圖片總隔數
            repeat:1
        });//角色向左轉

        this.anims.create({
            key:'right',
            frames:this.anims.generateFrameNumbers('player',{start:5,end: 7}),//開始到結尾的隔數
            frameRate: 10 ,//角色圖片總隔數
            repeat:1
        });//角色向右轉

        this.anims.create({
            key:'up',
            frames:this.anims.generateFrameNumbers('player',{start:0,end: 7}),
            frameRate:10  //角色圖片總隔數
        });//角色向上跳

        this.anims.create({
          key:'eleft',
          frames:this.anims.generateFrameNumbers('enemy',{start:13,end:25}),//開始到結尾的隔數
          frameRate:10  ,//角色圖片總隔數
          repeat:1
      });//角色向左轉

      this.anims.create({
        key:'eright',
        frames:this.anims.generateFrameNumbers('enemy',{start:0,end:12}),//開始到結尾的隔數
        frameRate:10  ,//角色圖片總隔數
        repeat:-1
    });//角色向左轉

        //this.anims.create({
          //  key:"gameover";
            //frames:[{key:playerdie,frame:}],
            //frameRate:
        //});

        this.cursors = this.input.keyboard.createCursorKeys();//鍵盤事件

        let camera=this.cameras.main;
        camera.startFollow(this.player);

        this.physics.add.overlap(
            this.win, //o1
            this.player, //o2
            this.collision3, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.lose, //o1
            this.player, //o2
            this.collision2, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.lose2, //o1
            this.player, //o2
            this.collision22, //輸入程式
            null,
            this
          );
          this.physics.add.overlap(
            this.ss4, //o1
            this.player, //o2
            this.collision, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.ss, //o1
            this.player, //o2
            this.collisionz, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.player, //o1
            this.enemys, //o2
            this.collisione3, //輸入程式
            null,
            this
          );
    }


    collision(player,ss4){ss4.disableBody(true, true);}
    collisionz(player,ss){ss.disableBody(true, true);this.sound.play('pick');}

    collisione3(player,enemys){
      //player.anims.play("gameover", true);
      player.disableBody(true,true);
      this.finish=true;
      this.sound.stopAll();
        this.sound.play('lose');
      this.add.text(600, 150, "GameOver!", {
          fontSize: "64px",
          color: "#ff0000"
        });
      this.clickButton=this.add.text(650,250,'[Restart GAME]',{fontSize:'25px',color:'blue'}).setInteractive({useHandCursor:true})
      .on('pointerup',()=>{
              this.restart();
          });
    }

    collision2(lose,player){
        //player.anims.play("gameover", true);
        lose.disableBody(true,true);
        player.disableBody(true,true);
        this.finish=true;
        this.sound.stopAll();
        this.sound.play('lose');
        this.add.text(2400, 200, "GameOver!", {
            fontSize: "64px",
            color: "#ff0000"
          });
        this.clickButton=this.add.text(2450,300,'[Restart GAME]',{fontSize:'25px',color:'blue'}).setInteractive({useHandCursor:true})
        .on('pointerup',()=>{
                this.restart();
            });
      }//結束遊戲+重來按鈕

      collision22(lose2,player){
        //player.anims.play("gameover", true);
        lose2.disableBody(true,true);
        player.disableBody(true,true);
        this.finish=true;
        this.sound.stopAll();
        this.sound.play('lose');
        this.add.text(860, 150, "GameOver!", {
            fontSize: "64px",
            color: "#ff0000"
          });
        this.clickButton=this.add.text(910,230,'[Restart GAME]',{fontSize:'25px',color:'blue'}).setInteractive({useHandCursor:true})
        .on('pointerup',()=>{
                this.restart();
            });
      }//結束遊戲+重來按鈕

      restart() {
        this.scene.start();
        this.animationKey = "stop";
        this.finish = false;
      //  this.time = 500;
      }

      collision3(n,player){
        //player.anims.play("gameover", true);
        player.disableBody(true,true);
        if(!this.transitioning){
            this.cameras.main.once("camerafadeoutcomplete", () => { this.scene.start("Win") });
            this.sound.stopAll();
            this.sound.play('change');
            this.cameras.main.fadeOut(1000);
            this.transitioning = true;
        }
    }

    update(){

        if(this.player.y >600 && !this.transitioning)
		{
			this.cameras.main.once("camerafadeoutcomplete", () => { this.scene.start("Lose") });
			this.cameras.main.fadeOut(1000);
			this.transitioning = true;
        }
        this.player.update();
  
          if(this.cursors.left.isDown){
              this.player.setVelocityX(-300);
              this.player.anims.play("left",true);//左鍵
          }else if(this.cursors.right.isDown){
              this.player.setVelocityX(300);
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

  for (let enemy of this.enemys) {
    if (enemy.getDirection() === "left") {
      enemy.setVelocity(-50, 0);
      enemy.anims.play("eleft",true);
    } else if(enemy.getDirection() === "right"){
      enemy.setVelocity(50, 0);
      enemy.anims.play("eright",true);
    } 
    }
    }

}