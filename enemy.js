class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, "enemy");
      this.scene = scene;
      scene.physics.world.enable(this);
      scene.add.existing(this);
      this.direction = "left";
    }
  
    //取得目前面朝的方向，getDirection()
    getDirection() {
      return this.direction;
    }
    //改變朝向dir方向，setDirection(dir)
    setDirection(dir) {
      this.direction = dir;
    }
  }
  