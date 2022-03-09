class Menu_Button extends Phaser.GameObjects.Sprite
{
	constructor(scene, x, y, text = "", action = () => { }) 
    {
        super(scene, x, y, 'button_idle');
        scene.add.existing(this);
        this.text = scene.add.text(x, y, text, {fontFamily: 'monospace', fontStyle: 'bold', color: '#ffffff', align: 'center' });
        this.action = action;
        this.setOrigin(0.5, 0.53);
        this.idle();
    }

    update()
    {
    	this.text.setPosition(this.x, this.y);
    	this.text.setAlpha(this.alpha);
    	this.text.setScale(this.scaleX, this.scaleY);
    }


    focus()
    {
    	this.setTexture("button_focus").setScale(1);
        this.text.setFontSize(38).setOrigin(0.5, 0.65);
    }

    idle()
    {
    	this.setTexture("button_idle").setScale(1);
        this.text.setFontSize(16).setOrigin(0.5, 0.75);
    }
}