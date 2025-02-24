import { GameState } from '../game'

export class Renderer {
  render(ctx: GameState, canvas: HTMLCanvasElement) {
    const canvasCtx = canvas.getContext('2d')
    if(!canvasCtx) {
      throw new Error('Canavs context not define at render')
    }
    canvasCtx.drawImage(ctx.player.getResource(), ctx.player.getPosition().x, ctx.player.getPosition().y, 100, 100);
  }
}