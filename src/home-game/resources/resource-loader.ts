import { type CanvasDrawableRsc } from '../elements/element'
import playerImg from './assets/player.png'

export class ResourceManager {

  constructor() {
  }

  private resources: { [key: string]: CanvasDrawableRsc } = {}


  async load(file: string, resource: string) {
    const res = new Image()
    res.src = playerImg

    return new Promise((resolve, reject) => {
      res.onload = (() => {
        this.resources[resource] = res
        resolve()
      })

      res.onerror = ((e) => {
        console.log(`error loading resource ${resource}`)
        reject()
      })
    })

  }

  getRes(resource: string) {
    const res = this.resources[resource]
    if (!res) {
      throw new Error('Resource is not loaded')
    }
    return res
  }
}

const resourceManagerInstance = new ResourceManager()
export default resourceManagerInstance