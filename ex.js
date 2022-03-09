class Ex extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, "ex");
      this.scene = scene;
      scene.physics.world.enable(this);
      scene.add.existing(this);
    }
  }
  