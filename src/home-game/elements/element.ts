import { Point2D } from '../utils/geometry'

export type CanvasDrawableRsc = Parameters<typeof CanvasRenderingContext2D.prototype.drawImage>[0];


export abstract class Element implements Renderable{
  abstract getResource(): CanvasDrawableRsc;
  abstract getPosition();
}


interface Renderable {
  getResource: () => CanvasDrawableRsc
  getPosition: () => Point2D
}

export {
  Renderable
}