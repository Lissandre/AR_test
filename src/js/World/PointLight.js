import { Object3D, HemisphereLight, Color } from 'three'

export default class PointLightSource {
  constructor(options) {
    // Set options
    this.debug = options.debug

    // Set up
    this.container = new Object3D()
    this.container.name = 'Point Light'

    this.createPointLight()
  }
  createPointLight() {
    this.light = new HemisphereLight(0xffffff, 0xbbbbff, 1)
    this.light.position.set(0, 1, 0)
    this.container.add(this.light)
  }
}
