import * as THREE from 'three';

// const createScene = (renderer: THREE.WebGLRenderer) => {
//   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//   var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//   var cube = new THREE.Mesh( geometry, material );
//   scene.add( cube );
//   camera.position.z = 5;

//   return () => {
//     const createScene = (renderer: THREE.WebGLRenderer) => {
//       var scene = new THREE.Scene();
//       var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

//       var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//       var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

//       var cube = new THREE.Mesh( geometry, material );

//       scene.add( cube );
//       camera.position.z = 5;
//       var animate = function () {
//         requestAnimationFrame( animate );
//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.01;
//         renderer.render( scene, camera );
//       };
//       animate();
//     }
//   }
// }

export interface Updatable {
  tick(deltaSeconds: number): void;
}

export class RenderService {
  private _renderer: THREE.WebGLRenderer;
  private _scene: THREE.Scene;
  private _perpCamera: THREE.PerspectiveCamera;
  private _clock: THREE.Clock;

  public constructor(canvas: HTMLCanvasElement) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    this._renderer = renderer;
    this._scene = new THREE.Scene();
    this._perpCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this._clock = new THREE.Clock();

    this._clock.start();
    // this._startAnimationLoop();
  }

  private _setup() {
  }

  // private _startAnimationLoop() {
  //   requestAnimationFrame(this._startAnimationLoop);
  //   const deltaSeconds = this._clock.getDelta();

  //   for (const obj of this._updatableList) {
  //     obj.tick(deltaSeconds);
  //   }

  //   this._renderer.render(this._scene, this._perpCamera);
  // }

  public render() {
    this._renderer.render(this._scene, this._perpCamera);
  }

  public setToWindowDimensions() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const aspect = w / h;
    this._perpCamera.aspect = aspect;
    this._perpCamera.updateProjectionMatrix();

    this._renderer.setSize(w, h);
  }
}