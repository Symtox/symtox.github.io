import resourceManagerInstance from './resources/resource-loader'
import { Player } from './elements/player'
import { Element } from './elements/element'
import { Renderer } from './rendering/renderer'
import playerImg from './resources/assets/player.png'
export class Game {

  private timestamp = 0;
  private renderer = new Renderer()
  private gameState = {
    player: new Player,
    elements: []
  }

  constructor(private canvas: HTMLCanvasElement) {
    this.animate = this.animate.bind(this);
  }


  private animate(timestamp: number) {

    const elapsed = timestamp - this.timestamp;
    this.timestamp = timestamp;

    this.renderer.render(this.gameState, this.canvas)

    requestAnimationFrame(this.animate)
  }

  public async init() {
    await this.loadTextures()
  }

  public start() {
    requestAnimationFrame(this.animate)
  }

  private async loadTextures() {
    await resourceManagerInstance.load(playerImg, 'player')
  }
}

export type GameState = {
  player: Player;
  elements: Element[];
}

