import * as THREE from 'three';
import { executePipeline, worldCamera, worldScene } from './pipeline/inlet';

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

export class RenderController {
  private _renderer: THREE.WebGLRenderer;
  private _worldCamera = worldCamera;
  private _worldScene = worldScene;

  public constructor(canvas: HTMLCanvasElement) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    this._renderer = renderer;
  }

  private _setup() {
    
  }

  public render() {
    executePipeline(this._renderer);
  }

  public setToWindowDimensions() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const aspect = w / h;
    this._worldCamera.aspect = aspect;
    this._worldCamera.updateProjectionMatrix();

    this._renderer.setSize(w, h);
  }
}