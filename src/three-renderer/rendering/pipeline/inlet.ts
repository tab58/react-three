import { render } from 'react-dom';
import * as THREE from 'three';
import { MeshRenderer } from './mesh';

export const worldScene = new THREE.Scene();
export const worldCamera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

interface RenderStage {
  render(renderer: THREE.WebGLRenderer): void;
}

/**
 * Pipeline stages:
 *  - render background
 *  - render mesh objects (picking and view)
 *  - render mesh lines (picking and view)
 *  - render mesh points (picking and view)
 *  - render overlay menu
 */
const pipelineStages: RenderStage[] = [
  new MeshRenderer(worldScene, worldCamera)
];

export const executePipeline = (renderer: THREE.WebGLRenderer) => {
  
};