import { Renderable } from './element'
import resourceManagerInstance from '../resources/resource-loader'

export class Player implements Renderable {
  getResource() {
    return resourceManagerInstance.getRes('player')
  }

  getPosition() {
    return {x: 0, y: 0}
  }
}