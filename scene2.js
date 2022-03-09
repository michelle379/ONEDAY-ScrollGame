class Scene2 extends Phaser.Scene{
    constructor(){
        super({ key: "Scene2" });
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

        this.load.image("cloud","s2/clouds.png");
        this.load.image("t","assets/t.png");
        this.load.image("t1","assets/t1.png");
        this.load.image("t2","assets/t2.png");
        this.load.image("sky","s2/sky.png");
        this.load.image("2bg","s2/2bg.png");
        this.load.image("g21","s2/g1.png");
        this.load.image("g22","s2/g2.png");
        this.load.image("g23","s2/g3.png");
        this.load.image("s21","s2/stone.png");
        this.load.image("s22","s2/stone2.png");
        this.load.image("boundary",'assets/s1.png');
        this.load.image("coin","assets/c.png");
        this.load.image("b","s2/b.png");
        this.load.image("a1","s2/a1.png");
        this.load.image("a2","s2/a2.png");
        this.load.image("a11","s2/a11.png");
        this.load.image("a22","s2/a22.png");
        this.load.image("heart",'assets/heart.png');
        this.load.image("gd1",'assets/gd1.png');
        this.load.spritesheet("bat", "assets/bat2.png",{frameWidth:20 ,frameHeight:13});
        this.load.spritesheet("enemy", "assets/enemy1.png",{frameWidth:43.6 ,frameHeight:65});
        this.load.spritesheet('player','assets/rabbit3 - doux.png',
        {frameWidth:72 ,frameHeight:72 }
        );//角色圖

    }




    create(){
      this.sound.play('bgm');
        this.platforms=this.physics.add.staticGroup();
        this.platforms.create(  109,243  , 'gd1');
        this.platforms.create(  209,243  , 'gd1');
        this.platforms.create(  309,243  , 'gd1');
        this.platforms.create(  409,243  , 'gd1');
        this.platforms.create(  509,243  , 'gd1');
        this.platforms.create(  609,243  , 'gd1');
        this.platforms.create(  709,243  , 'gd1');
        this.platforms.create(  809,243  , 'gd1');
        this.platforms.create(  895,243  , 'gd1');
        this.platforms.create(  1388,243  , 'gd1');
        this.platforms.create(  1409,243  , 'gd1');
        this.platforms.create(  1530,243  , 'gd1');

        this.platforms2=this.physics.add.staticGroup();
        this.platforms2.create(  1993,375  , 'gd1');
        this.platforms2.create(  2250,375  , 'gd1');
        this.platforms2.create(  2450,375  , 'gd1');
        this.platforms2.create(  3509,243  , 'gd1');
        this.platforms2.create(  4030,243  , 'gd1');

        this.stone=this.physics.add.staticGroup();
        this.stone.create(2763,210,'s21').setScale(1.42);
        this.stone.create(2900,210,'s22').setScale(1.42);
        this.stone.create(230,130,'a11').setScale(1.55);

        

        this.add.tileSprite(1460,210,2512,304,"2bg").setScale(1.42);
        this.cameras.main.setBounds(200,0,3000,304);

        this.bridge=this.physics.add.staticGroup();
        this.bridge.create(1150,250,'b');

        this.coin=this.physics.add.staticGroup();
        this.coin.create(1080,203,'coin').setScale(1);
        this.coin.create(1130,203,'coin').setScale(1);
        this.coin.create(1175,203,'coin').setScale(1);
        this.coin.create(1220,203,'coin').setScale(1);

        this.stone=this.physics.add.staticGroup();
        this.stone.create(2763,210,'s21').setScale(1.42);
        this.stone.create(2900,210,'s22').setScale(1.42);
        this.stone.create(2350,110,'a11').setScale(1.55);
        this.stone.create(2270,235,'a11').setScale(1.55);

        this.lose=this.physics.add.staticGroup();
        this.lose.create(1800,130,'a22').setScale(1.75);

        this.a=this.physics.add.staticGroup();
        this.a.create(2350,110,'a1').setScale(1.55);
        this.a.create(2270,235,'a1').setScale(1.55);
        this.a.create(1800,130,'a2').setScale(1.75);

        this.lg=this.physics.add.staticGroup();
        this.lg.create(3070,350,"g22").setScale(1.55);
        this.lg.create(3150,350,"g21").setScale(1.55);
        this.lg.create(3110,235,"heart").setScale(1);

        this.enemy5 = new Enemy(this, 700, 180);
        this.enemy6 = new Enemy(this, 625, 180);
        this.enemy7 = new Enemy(this, 780, 180);
        this.enemy8 = new Enemy(this, 870, 180);

        
        
        this.enemys = [this.enemy5, this.enemy6,this.enemy7,this.enemy8];

        this.player=new Player(this,330,0);//角色設置

        this.n=this.physics.add.staticGroup();
        this.n.create(3110,230,'heart');


        this.add.image(3110,217,"t").setScale(0.65);

        this.boundarys=this.physics.add.staticGroup();
        this.boundarys.create(-283,130,'boundary');
        this.boundarys.create(3730,70,'boundary');
        this.boundarys.create(2700,-130,'boundary');
        this.boundarys.create(3100,-130,'boundary');

        

        this.g=this.physics.add.staticGroup();
        this.g.create(  2600,130, 'g21').setScale(1.42);
        this.g.create(  2500,130, 'g22').setScale(1.42);
        this.g.create(  2500,130, 'g23').setScale(1.42);
        this.g.create(  2200,45, 'g21').setScale(1.42);
        this.g.create(  2150,45, 'g22').setScale(1.42);
        this.g.create(  2100,45, 'g23').setScale(1.42);
        this.g.create(  1950,45, 'g22').setScale(1.42);
        this.g.create(  2000,45, 'g23').setScale(1.42);
        this.g.create(3060,222,"t2").setScale(1);
        this.g.create(3155,222,"t2").setScale(1);

        
        

        this.physics.add.collider(this.player, this.g);
        this.physics.add.collider(this.player, this.lg);
        this.physics.add.collider(this.player, this.stone);
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.enemys, this.platforms);
        this.physics.add.collider(this.player, this.platforms2);
        this.physics.add.collider(this.player, this.boundarys);
        
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
            frames:this.anims.generateFrameNumbers('player',{start:2,end: 5}),
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
    });//角色向右轉

        //this.anims.create({
          //  key:"gameover";
            //frames:[{key:playerdie,frame:}],
            //frameRate:
        //});

        this.cursors = this.input.keyboard.createCursorKeys();//鍵盤事件

        this.physics.add.overlap(
            this.coin, //o1
            this.player, //o2
            this.collisionc, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.player, //o1
            this.lose, //o2
            this.collision2, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.bridge, //o1
            this.player, //o2
            this.collision, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.a, //o1
            this.player, //o2
            this.collision, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.n, //o1
            this.player, //o2
            this.collision3, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.player, //o1
            this.enemys, //o2
            this.collisione4, //輸入程式
            null,
            this
          );

    this.score2 = Scene.score1;
    this.scoreText = this.add.text(10, 10, " ", {fontSize: 20,fill: "blue"});

    let camera=this.cameras.main;
    camera.startFollow(this.player);

    }

    
    collisionc(o2,o1){
      o1.disableBody(true,true);
      this.sound.play('pick');
  }
    collision(o2,o1){
        o1.disableBody(true,true);
    }
    collisione4(player,enemys){
      //player.anims.play("gameover", true);
      player.disableBody(true,true);
      this.finish=true;
      this.sound.stopAll();
        this.sound.play('lose');
      this.add.text(500, 150, "GameOver!", {
          fontSize: "64px",
          color: "#ff0000"
        });
      this.clickButton=this.add.text(550,250,'[Restart GAME]',{fontSize:'25px',color:'blue'}).setInteractive({useHandCursor:true})
      .on('pointerup',()=>{
              this.restart();
          });
    }

    collision2(lose,player){
        //player.anims.play("gameover", true);
        lose.disableBody(true,true);
        this.finish=true;
        this.sound.stopAll();
        this.sound.play('lose');
        this.add.text(1600, 150, "GameOver!", {
            fontSize: "64px",
            color: "#ff0000"
          });
        this.clickButton=this.add.text(1650,300,'[Restart GAME]',{fontSize:'25px',color:'blue'}).setInteractive({useHandCursor:true})
        .on('pointerup',()=>{
                this.restart();
            });
      }//結束遊戲+重來按鈕

      collision3(n,player){
        //player.anims.play("gameover", true);
        player.disableBody(true,true);
        
        if(!this.transitioning){
            this.cameras.main.once("camerafadeoutcomplete", () => { this.scene.start("Scene3") });
            
            this.sound.play('change');
            this.cameras.main.fadeOut(1000);
            this.transitioning = true;
        }

        
      }

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

    }}


