import * as THREE from 'three'

export default class WallModel {

  geometry(length, width, height, hasDoor) {
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.BufferAttribute( this.vertices(length, width, height, hasDoor), 3 ) );
    geometry.computeVertexNormals();
    return geometry;
  }

  vertices(length, width, height, hasDoor) {
    if(hasDoor){
      return new Float32Array( [
        length/2, -width/2, height/2,
        length/2, -width/2, -height/2,
        length/8, -width/2, -height/2,

        length/8, -width/2, -height/2,
        length/8, -width/2, height/2,
        length/2, -width/2, height/2,

        length/8, -width/2, -height/6,
        length/8, -width/2, -height/2,
        -length/8, -width/2, -height/2,

        length/8, -width/2, -height/6,
        -length/8, -width/2, -height/2,
        -length/8, -width/2, -height/6,

        -length/2, -width/2, height/2,
        -length/2, -width/2, -height/2,
        -length/8, -width/2, -height/2,

        -length/8, -width/2, -height/2,
        -length/8, -width/2, height/2,
        -length/2, -width/2, height/2,
    ] );
    }else{
      return new Float32Array([
        length/2, -width/2, height/2,
        length/2, -width/2, -height/2,
       -length/2, -width/2, -height/2,
  
       -length/2, -width/2, -height/2,
       -length/2, -width/2, height/2,
        length/2, -width/2, height/2,
    ]);
    }
  }
}

