class Menu extends Phaser.Scene 
{
    constructor() 
    {
        super({ key: "Menu" });
        this.Control = false;
        this.state = "";
    }

    
    transitioning(transition_to)
    {
        this.transition_progess = 0;
        this.tweens.add({ targets: this, transition_progess: 1, ease: 'Linear', duration: 10, 
            
            onComplete: () => {this.scene.start(transition_to)},
        });
        this.cameras.main.setRenderToTexture(this.customPipeline);
    }
    
    button_hide()
    {
        this.help_container.visible = 0;
        this.Control = false;
        this.rectangle.y = -100;
        for(var i = 0; i < this.Button.length; i++)
        {
            this.Button[i].x = -500;
            this.Button[i].idle();
        }
    }

    button_show()
    {
        this.help_container.visible = 1;
        this.Selected_Button = 0;
        this.Button[this.Selected_Button].focus();
        for(var i = 0; i < this.Button.length; i++)
        {
            this.Button[i].x = -500;
            this.tweens.add({ targets: this.Button[i], x: this.game.config.width * 0.5, ease: 'Power1', duration: 800, delay: 250*i,})
        }
        this.time.addEvent({ delay: 1000 + 150*this.Button.length, callback: () => { 
            this.Control = true
        }})
    }

    preload() 
    {
        this.load.audio('button', 'music/button02a.mp3');
        this.load.audio('enter', 'music/enter2.mp3');
        this.load.audio('bgm', 'music/1.mp3');

        this.load.image("sky",'assets/sky.png');
        this.load.image("mo",'assets/mo.png');
        this.load.image("cl",'assets/cl.png');
        this.load.image("button_focus","PNG/simple/22.png");
        this.load.image("button_idle","PNG/simple/23.png");
        this.load.image("cloud","s2/clouds.png");
        this.load.image("gd1",'assets/gd1.png');
        this.load.image("q",'assets/p.png');
        this.load.image("p1",'assets/p1.png');
        this.load.image("start",'assets/props.png');
        this.load.spritesheet('player','assets/rabbit3 - doux.png',
        {frameWidth:72 ,frameHeight:72 }
        );//角色圖
    }

    create() 
    {
        this.sound.play('bgm');   
        this.add.image(450,214,'sky').setScale(2.5);
        this.add.image(320,160,'mo').setScale(3);
        this.add.image(420,215,'cl').setScale(1.5);
        this.start=this.physics.add.staticGroup();
        this.start.create(130,350,'start');
        this.player=new Player(this,130,350);//角色設置


        this.platforms=this.physics.add.staticGroup();
        this.platforms.create(  109,411  , 'gd1');
        this.platforms.create(  209,411  , 'gd1');
        this.platforms.create(  309,411  , 'gd1');
        this.platforms.create(  409,411  , 'gd1');
        this.platforms.create(  509,411  , 'gd1');
        this.platforms.create(  609,411  , 'gd1');
        this.platforms.create(  709,411  , 'gd1');
        this.platforms.create(  809,411  , 'gd1');
        this.platforms.create(  909,411  , 'gd1');
        this.physics.add.collider(this.player, this.platforms);
        //this.bg_clouds = this.add.tileSprite(0, -8, this.game.config.width, 160, "menu_bg_clouds").setOrigin(0);
        //this.bg_mountains = this.add.tileSprite(0, 80, this.game.config.width, 112, "menu_bg_mountains").setOrigin(0);
        //this.bg_grass2 = this.add.tileSprite(0, 120, this.game.config.width, 50, "menu_bg_grass2").setOrigin(0);
        //this.bg_grass1 = this.add.tileSprite(0, 164, this.game.config.width, 25, "menu_bg_grass1").setOrigin(0);
        
        this.rectangle = this.add.rectangle(0, -100, this.game.config.width, 22, 0xffffff).setOrigin(0, 0.65);



        this.add.image( 763,300 ,'q').setScale(1);
        this.add.image( 110,135 ,'p1').setScale(0.9);

        this.Button = [];

        this.button_level1 = new Menu_Button(this, -500, this.game.config.height * 0.6, "START", () => { 
            this.Control = false;
            this.time.addEvent({ delay: 1300, callback: () =>  { this.transitioning("Scene"); } })
        });
        this.button_level2 = new Menu_Button(this, -500, this.game.config.height * 0.8, "STAGE2", () => { 
            this.Control = false;
            this.time.addEvent({ delay: 1300, callback: () =>  { this.transitioning("Scene3"); } })
        });

        this.click = this.add.text(110, 120, "★★關卡選擇★★", {fontFamily: 'monospace', fontSize: 15, color: '#FF4545', align: 'center' }).setOrigin(0.5);
        this.click = this.add.text(105, 150, "上下鍵選擇關卡", {fontFamily: 'monospace', fontSize: 15, color: 'black', align: 'center' }).setOrigin(0.5);
        this.click = this.add.text(105, 180, "空白鍵進入關卡", {fontFamily: 'monospace', fontSize: 15, color: 'black', align: 'center' }).setOrigin(0.5);

        this.click = this.add.text(775, 271, "★★遊玩方式★★", {fontFamily: 'monospace', fontSize: 20, color: 'orange', align: 'center' }).setOrigin(0.5);
        this.click = this.add.text(775, 352, "跳:空白鍵", {fontFamily: 'monospace', fontSize: 20, color: 'black', align: 'center' }).setOrigin(0.5);
        this.click = this.add.text(775, 298, "左:左鍵", {fontFamily: 'monospace', fontSize: 20, color: 'black', align: 'center' }).setOrigin(0.5);
        this.click = this.add.text(775, 325, "右:右鍵", {fontFamily: 'monospace', fontSize: 20, color: 'black', align: 'center' }).setOrigin(0.5);
        this.click = this.add.text(775, 379, "restart:滑鼠", {fontFamily: 'monospace', fontSize: 20, color: 'red', align: 'center' }).setOrigin(0.5);



        this.Button.push(this.button_level1,this.button_level2);

        this.title = this.add.text(this.game.config.width * 0.5, 100, "ONE DAY", {fontFamily: 'monospace', fontSize: 128, fontStyle: 'bold', color: '#ffffff', align: 'center' }).setOrigin(0.5);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.customPipeline = this.game.renderer.getPipeline('Transition' + Phaser.Math.Between(1, 3));
        this.credit_container = this.add.container(0, 0);
        this.help_container = this.add.container(0, 0);

        this.credit_container.visible = 0;
        this.button_show();

        this.anims.create({
            key:'right',
            frames:this.anims.generateFrameNumbers('player',{start:5,end: 7}),//開始到結尾的隔數
            frameRate: 10 ,//角色圖片總隔數
            repeat:1
        });//角色向右轉

        this.physics.add.overlap(
            this.player, //o1
            this.start, //o2
            this.collision, //輸入程式
            null,
            this
          );


        this.cursors = this.input.keyboard.createCursorKeys();//鍵盤事件
    }
    collision(o1, o2) {
        
        o1.anims.play("right", true);
    }

    update()
    {   
        this.Button.forEach((button) => { button.update(); });
        if(this.rectangle.alpha <= 0.25)
            this.rectangle.setAlpha(Phaser.Math.FloatBetween(0.05, 0.25))

            //this.bg_clouds.tilePositionX += 0.1;
            //this.bg_mountains.tilePositionX += 0.125;
            //this.bg_grass2.tilePositionX += 0.2;
            //this.bg_grass1.tilePositionX += 0.25;


        switch(this.state)
        {
            
            
            case "Credits":
                if (this.cursors.space.isDown)
                {
                    this.state = "";
                    this.title.visible = 1;
                    this.credit_container.visible = 0;
                    this.button_show();
                }
                break;

            default:
                if(this.Control)
                {
                    let direction = this.cursors.down.isDown - this.cursors.up.isDown;
                    if(direction != 0)
                    {
                        let new_selected_button = Phaser.Math.Clamp(this.Selected_Button + direction, 0, this.Button.length - 1);
                        this.time.addEvent({ delay: 1300 });
                        if(new_selected_button != this.Selected_Button)
                        {
                            
                            this.Button[this.Selected_Button].idle();
                            
                            this.Selected_Button = new_selected_button;
                            this.Button[this.Selected_Button].focus();
                            this.sound.play('button');
                        }
                    }
                    else if (this.cursors.space.isDown)
                    {
                        this.sound.play('enter');
                        let button = this.Button[this.Selected_Button];
                        this.rectangle.y = button.y;
                        this.rectangle.setAlpha(1);
                        this.tweens.add({ targets: this.rectangle, alpha: 0.2, ease: 'Linear', duration: 100, })
                        button.action();
                    }
                }
                break;
        }
    


    this.player.update();//換場景
}
}