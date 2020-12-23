import { TubePainter } from 'three/examples/jsm/misc/TubePainter'
import { DoubleSide, Object3D, Vector3 } from 'three'

export default class Tube {
  constructor(options) {
    // Set options
    this.time = options.time
    this.controller = options.controller

    // Set up
    this.container = new Object3D()
    this.cursor = new Vector3(0, 0, -0.2)
    this.painter = new TubePainter()
    this.controller.userData.skipFrames = 0
    this.params = {
      color: 0xffffff,
      size: 0.5
    }

    this.setPainter()
    this.render()
    this.setEvents()
  }
  setPainter() {
    this.painter.setSize(this.params.size)
    this.painter.mesh.material.side = DoubleSide
    this.container.add(this.painter.mesh)
  }
  setEvents() {
    this.controller.addEventListener('selectstart', () => {this.onStart()})
    this.controller.addEventListener('selectend', () => {this.onEnd()})
  }
  onStart() {
    this.userData.isSelecting = true
    this.userData.skipFrames = 2
  }
  onEnd() {
    this.userData.isSelecting = false
  }
  render() {
    this.time.on('tick', () => {
      this.userData = this.controller.userData
      this.cursor.set(0, 0, -0.2).applyMatrix4(this.controller.matrixWorld)
      if (this.userData.isSelecting === true) {
        if (this.userData.skipFrames >= 0) {
          this.userData.skipFrames--
          this.painter.moveTo(this.cursor)
        } else {
          this.painter.lineTo(this.cursor)
          this.painter.update()
        }
      }
    })
  }
}