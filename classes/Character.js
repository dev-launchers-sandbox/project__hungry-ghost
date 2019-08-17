import Phaser from "phaser";

export default class Character extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "johnny", 0);
    this.scene = scene;

    // Add this to the scene as a Phaser game object
    scene.add.existing(this);
    // Create the physics-based sprite that we will move around and animate
    this.sprite = scene.physics.add
      .existing(this)
      .setDrag(500, 0)
      .setMaxVelocity(200, 400);

    // Create the animations we need from the player spritesheet
    const anims = scene.anims;
    anims.create({
      key: "johnny-idle",
      frames: anims.generateFrameNumbers("johnny", { start: 0, end: 3 }),
      frameRate: 3,
      repeat: -1
    });
    anims.create({
      key: "johnny-walk",
      frames: anims.generateFrameNumbers("johnny", { start: 5, end: 7 }),
      frameRate: 12,
      repeat: -1
    });
  }
}
