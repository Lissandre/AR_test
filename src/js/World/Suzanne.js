import { Object3D } from 'three'

export default class Suzanne {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'Suzanne'

    this.createSuzanne()
  }
  createSuzanne() {
    this.suzanne = this.assets.models.suzanne.scene
    this.suzanne.position.set(0,0,-0.5)
    this.suzanne.scale.set(0.1,0.1,0.1)
    this.container.add(this.suzanne)
  }
}
