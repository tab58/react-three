import * as THREE from 'three';
import { EventController } from './events/eventController';

const createScene = (renderer: THREE.WebGLRenderer) => {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  renderer.setSize( window.innerWidth, window.innerHeight );
  
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  camera.position.z = 5;
  var animate = function () {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  };
  animate();
}

export class CanvasController {
  public renderer: THREE.WebGLRenderer;
  public eventController: EventController;

  public constructor(canvas: HTMLCanvasElement) {
    this.eventController = new EventController(canvas);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
    });
    createScene(this.renderer);
  }
}