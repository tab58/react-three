import * as THREE from 'three';

export class MeshRenderer {
  private _scene: THREE.Scene;
  private _camera: THREE.Camera;

  public constructor(scene: THREE.Scene, camera: THREE.Camera) {
    this._camera = camera;
    this._scene = scene;
  }

  public render(renderer: THREE.Renderer) {
    renderer.render(this._scene, this._camera);
  }
}