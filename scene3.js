class Scene3 extends Phaser.Scene{
    constructor(){
        super({ key: "Scene3" });
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

      this.load.audio('bgex', 'music/explode.mp3');  
      this.load.audio('lose', 'music/lose.mp3');
      this.load.audio('pick', 'music/pick.mp3');
      this.load.audio('change', 'music/change.mp3');
      
      this.load.image("3bg","s3/bg31.png");
        this.load.image("bg30","s3/bg.png");
        this.load.image("g30","s3/g3.png");
        this.load.image("gd1",'assets/gd1.png');
        this.load.image("boundary",'assets/s1.png');
        this.load.image("props",'assets/props.png');//圖片
        this.load.image("t","assets/t.png");
        this.load.image("t1","assets/t1.png");
        this.load.image("t2","assets/t2.png");
        this.load.image("3t","assets/3t.png");
        this.load.image("3t1","assets/3t1.png");
        this.load.image("3t2","assets/3t2.png");
        this.load.image("jump","assets/jump.png");
        this.load.image("fly",'assets/heart.png');
        this.load.image("bg322",'s3/bg23.png');
        this.load.image("bg32",'s3/bg2.png');
        this.load.image("grass",'s3/tree.png');
        this.load.image("bg33",'s3/bg33.png');
        this.load.image("bg331",'s3/bg331.png');
        this.load.image("f31",'s3/f31.png');
        this.load.image("f32",'s3/f32.png');
        this.load.image("f33",'s3/f33.png');
        this.load.image("f34",'s3/f34.png');
        this.load.image("f35",'s3/f35.png');
        this.load.image("x",'s3/x.png');
        this.load.spritesheet("enemy", "assets/enemy1.png",{frameWidth:43.6 ,frameHeight:65})
        ;
        this.load.spritesheet("ex", "assets/ex.png",{frameWidth:216.3 ,frameHeight:227})
        ;
        this.load.spritesheet('player','assets/rabbit3 - doux.png',
        {frameWidth:72 ,frameHeight:72 }
        );//角色圖

    }




    create(){
        this.boundarys=this.physics.add.staticGroup();
        this.boundarys.create(-483,230,'boundary');
        this.boundarys.create(-483,330,'boundary');
        this.boundarys.create(-483,430,'boundary');
        this.boundarys.create(2500,430,'boundary');

        this.platforms=this.physics.add.staticGroup();
        this.platforms.create(  -60,550  , 'gd1');
        this.platforms.create(  285,550  , 'gd1');
        this.platforms.create(  670,550  , 'gd1');
        this.platforms.create(  709,550  , 'gd1');
        this.platforms.create(  909,550  , 'gd1');
        this.platforms.create(  1109,550  , 'gd1');
        this.platforms.create(  1200,550  , 'gd1');        
        this.platforms.create(  1630,550  , 'gd1');
        this.platforms.create(  1709,550  , 'gd1');
        this.platforms.create(  1909,550  , 'gd1');
        this.platforms.create(  2109,550  , 'gd1');

        this.t=this.physics.add.staticGroup();
        this.t.create(587,470,"t2").setScale(1);
        this.t.create(683,470,"t2").setScale(1);
        this.t.create(2000,247,"3t2").setScale(1);
        this.t.create(2000,353,"3t2").setScale(1);
        this.t.create(2000,445,"3t2").setScale(1);


        this.add.tileSprite(1000,195,2010,793,"3bg").setScale(1);
        this.cameras.main.setBounds(0,0,2007,580);

        this.add.image(  1037,555 , 'bg30');
        this.add.image(  1971,557 , 'bg30').setScale(1.07);
        this.add.image(  1100,180 , 'bg322');
        this.add.image(  1450,230 , 'bg322');

        this.tree=this.physics.add.staticGroup();
        this.tree.create(1798,503,"grass").setScale(1.75);
        this.tree.create(1502,503,"grass").setScale(1.75);

        this.enemy1 = new Enemy(this, 400, 497);
        this.enemy2 = new Enemy(this, 1750, 497);
        this.enemys = [this.enemy1, this.enemy2];

        this.d=this.physics.add.staticGroup();
        this.d.create(1100,180,'bg32').setScale(1);
        this.d1=this.physics.add.staticGroup();
        this.d1.create(1450,230,'bg32').setScale(1);

        this.prop=this.physics.add.staticGroup();
        this.prop.create(2000,300,'fly').setScale(1);

        this.player=new Player(this,130,140);//角色設置

        this.n=this.physics.add.staticGroup();
        this.n.create(2010,490,'fly');
        
        this.add.image(630,470,"t").setScale(0.65);
        this.add.image(2000,300,"3t").setScale(0.65);
        this.add.image(2000,490,"3t").setScale(0.65);


        this.e=this.physics.add.staticGroup();
        this.e.create(  630,485 , 'props');

        this.j=this.physics.add.staticGroup();
        this.j.create(  1100,502 , 'jump').setScale(2);
        this.j.create(  1850,502 , 'jump').setScale(2);
        this.j.create(1800,503,"grass").setScale(1.75);
        this.j.create(1500,503,"grass").setScale(1.75);
        this.j.create(900,370,"bg331").setScale(2);
        this.j.create(1170,433,"f31").setScale(1.1);
        this.j.create(1265,520,"f32").setScale(1.5);
        this.j.create(1255,500,"f33").setScale(2);
        this.j.create(1250,510,"f33").setScale(2);
        this.j.create(1246,490,"f33").setScale(2);
        this.j.create(1240,470,"f33").setScale(2);
        this.j.create(1237,480,"f33").setScale(1.5);
        this.j.create(1234,460,"f33").setScale(1.5);
        this.j.create(1231,440,"f33").setScale(1.5);
        this.j.create(1228,430,"f33").setScale(1.5);
        this.j.create(1225,420,"f33").setScale(1.5);
        this.j.create(1225,410,"f34").setScale(1.5);
        this.j.create(1220,400,"f34").setScale(1.5);
        this.j.create(1215,390,"f34").setScale(1.5);
        this.j.create(1210,380,"f34").setScale(1.5);
        this.j.create(1200,371,"f35").setScale(1.5);

        this.f=this.physics.add.staticGroup();
        this.f.create(  1098,450 , 'fly');

        this.ex = new Ex(this, 630, 530);

        this.ss3=this.physics.add.staticGroup();
        this.ss3.create(  110,555 , 'bg30');
        this.ss3.create(  1990,488, 'x');
        this.ss3.create(  900,370 , 'bg33').setScale(2);
        this.ss3.create(  1400,572 , 'g30').setScale(1.5);

        this.lose=this.physics.add.staticGroup();
        //this.lose.create(113,800,'lose');

        this.physics.add.collider(this.player, this.t);
        this.physics.add.collider(this.player, this.j);
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.enemys, this.platforms);
        this.physics.add.collider(this.ex, this.platforms);
        this.physics.add.collider(this.enemys, this.j);
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

        //this.anims.create({
          //  key:"gameover";
            //frames:[{key:playerdie,frame:}],
            //frameRate:
        //});

        this.anims.create({
          key:'eleft',
          frames:this.anims.generateFrameNumbers('enemy',{start:13,end:25}),//開始到結尾的隔數
          frameRate:10  ,//角色圖片總隔數
          repeat:-1
      });//角色向左轉

      this.anims.create({
        key:'eright',
        frames:this.anims.generateFrameNumbers('enemy',{start:0,end:12}),//開始到結尾的隔數
        frameRate:10  ,//角色圖片總隔數
        repeat:-1
    });//角色向右轉

    this.anims.create({
      key:'ex',
      frames:this.anims.generateFrameNumbers('ex',{start:0,end:7}),//開始到結尾的隔數
      frameRate:5  ,//角色圖片總隔數
      repeat:0
  });//角色向左轉

        this.cursors = this.input.keyboard.createCursorKeys();//鍵盤事件

        this.physics.add.overlap(
            this.player, //o1
            this.lose, //o2
            this.collision2, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.player, //o1
            this.enemy1, //o2
            this.collisione1, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.player, //o1
            this.enemy2, //o2
            this.collisione2, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.tree, //o1
            this.enemy2, //o2
            this.enemy_touch_boundary, //輸入程式
            null,
            this
          );

        this.physics.add.overlap(
            this.ss3, //o1
            this.player, //o2
            this.collision, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.d, //o1
            this.player, //o2
            this.collision3, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.prop, //o1
            this.player, //o2
            this.collisionp, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.d1, //o1
            this.player, //o2
            this.collision4, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.f, //o1
            this.player, //o2
            this.collision5, //輸入程式
            null,
            this
          );

          this.physics.add.overlap(
            this.n, //o1
            this.player, //o2
            this.collision6, //輸入程式
            null,
            this
          );
          this.physics.add.overlap(
            this.e, //o1
            this.player, //o2
            this.ep, //輸入程式
            null,
            this
          );

        let camera=this.cameras.main;
        camera.startFollow(this.player);
    }


    collision(player,ss3){ss3.disableBody(true, true);}

    collisione1(player,enemy1){
      //player.anims.play("gameover", true);
      player.disableBody(true,true);
      this.finish=true;
      this.sound.stopAll();
        this.sound.play('lose');
      this.add.text(300, 300, "GameOver!", {
          fontSize: "64px",
          color: "#ff0000"
        });
      this.clickButton=this.add.text(350,400,'[Restart GAME]',{fontSize:'25px',color:'pink'}).setInteractive({useHandCursor:true})
      .on('pointerup',()=>{
              this.restart();
          });
    }

    ep(player,e){
      //player.anims.play("gameover", true);
      player.disableBody(true,true);
      e.anims.play("ex",true);
      this.finish=true;
      this.sound.stopAll();
        this.sound.play('bgex');
      this.add.text(400, 300, "GameOver!", {
          fontSize: "64px",
          color: "#ff0000"
        });
      this.clickButton=this.add.text(450,400,'[Restart GAME]',{fontSize:'25px',color:'pink'}).setInteractive({useHandCursor:true})
      .on('pointerup',()=>{
              this.restart();
          });
    }

    collisione2(player,enemy2){
      //player.anims.play("gameover", true);
      player.disableBody(true,true);
      this.finish=true;
      this.sound.stopAll();
        this.sound.play('lose');
      this.add.text(1500, 300, "GameOver!", {
          fontSize: "64px",
          color: "#ff0000"
        });
      this.clickButton=this.add.text(1550,400,'[Restart GAME]',{fontSize:'25px',color:'pink'}).setInteractive({useHandCursor:true})
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
      this.add.text(1100, 150, "GameOver!", {
          fontSize: "64px",
          color: "#ff0000"
        });
      this.clickButton=this.add.text(1150,300,'[Restart GAME]',{fontSize:'25px',color:'pink'}).setInteractive({useHandCursor:true})
      .on('pointerup',()=>{
              this.restart();
          });
    }//結束遊戲+重來按鈕

    collisionp(prop,player){
      player.disableBody(true,true);
      this.finish=true;
      this.sound.stopAll();
      this.sound.play('lose');
      this.add.text(1350, 250, "GameOver!", {
          fontSize: "64px",
          color: "#ff0000"
        });
      this.clickButton=this.add.text(1400,350,'[Restart GAME]',{fontSize:'25px',color:'pink'}).setInteractive({useHandCursor:true})
      .on('pointerup',()=>{
              this.restart();
          });
    }//結束遊戲+重來按鈕

      collision3(d,player){
        d.disableBody(true,true);
        player.disableBody(true,true);
        this.finish=true;
        this.sound.stopAll();
        this.sound.play('lose');
        this.add.text(950, 90, "GameOver!", {
            fontSize: "64px",
            color: "#ff0000"
          });
        this.clickButton=this.add.text(1000,250,'[Restart GAME]',{fontSize:'25px',color:'pink'}).setInteractive({useHandCursor:true})
        .on('pointerup',()=>{
                this.restart();
            });
      }//結束遊戲+重來按鈕

      collision4(d1,player){
        d1.disableBody(true,true);
        player.disableBody(true,true);
        this.finish=true;
        this.sound.stopAll();
        this.sound.play('lose');
        this.add.text(1250, 250, "GameOver!", {
            fontSize: "64px",
            color: "#ff0000"
          });
        this.clickButton=this.add.text(1300,350,'[Restart GAME]',{fontSize:'25px',color:'pink'}).setInteractive({useHandCursor:true})
        .on('pointerup',()=>{
                this.restart();
            });
      }//結束遊戲+重來按鈕


      collision5(player,f){
        f.disableBody(true,true);
        this.sound.play('pick');
      }

      collision6(n,player){
        //player.anims.play("gameover", true);
        player.disableBody(true,true);
        
        if(!this.transitioning){
            this.cameras.main.once("camerafadeoutcomplete", () => { this.scene.start("Scene4") });
            this.sound.stopAll();
            this.sound.play('change');
            this.cameras.main.fadeOut(1000);
            this.transitioning = true;
        }
      }

      enemy_touch_boundary(enemy2,tree) {
        let random = Math.floor(Math.random() * 1000) % 2; //使其餘數介於0~//Math floor 取小於x的最大整數
        switch (random) {
          case 0:
            enemy2.setDirection("right");
            break;
          case 1:
            enemy2.setDirection("left");
            break;
          default:
            break;
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

        if(this.player.y >1020 && !this.transitioning)
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