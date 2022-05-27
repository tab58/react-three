import * as THREE from 'three';
import { CanvasController } from './canvasController';

export const onCanvasMount = (canvas: HTMLCanvasElement) => {
  const appController = new CanvasController(canvas);
};
