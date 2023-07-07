import * as THREE from 'three'

export default class GableModel {

  geometry(length, width, height) {
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.BufferAttribute( this.vertices(length, width, height), 3 ) );
    geometry.computeVertexNormals();
    return geometry;
  }

  vertices(length, width, height) {
      return new Float32Array([
        -length/2, -width/2, -height/2,
        0, -width/2, -height,
        length/2, -width/2, -height/2
    ]);
  }
}

