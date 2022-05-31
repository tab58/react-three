import * as THREE from 'three';

export class MeshRenderer {
  private _camera: THREE.Camera;

  public constructor(camera: THREE.Camera) {
    this._camera = camera;
  }

  public render(renderer: THREE.Renderer, worldScene: THREE.Scene) {
    renderer.render(worldScene, this._camera);
  }
}