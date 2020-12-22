import { Object3D, Vector3 } from 'three'

export default class Suzanne {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets
    this.controller = options.controller

    // Set up
    this.container = new Object3D()
    this.container.name = 'Suzanne'
    this.cursor = new Vector3(0, 0, -0.5)

    this.createSuzanne()
    this.controller.addEventListener('select', () => {this.onSelect()})
  }
  createSuzanne() {
    this.suzanne = this.assets.models.suzanne.scene.children[0].clone()
    this.suzanne.position.set(0, 0, -0.5).applyMatrix4(this.controller.matrixWorld)
    this.suzanne.quaternion.setFromRotationMatrix(this.controller.matrixWorld)
    this.suzanne.scale.set(0.1,0.1,0.1)
    this.container.add(this.suzanne)
  }
  onSelect() {
    this.cursor = this.cursor.set(0, 0, -0.5).applyMatrix4(this.controller.matrixWorld)
    this.createSuzanne()
  }
}
