import * as THREE from 'three';
import WallModel from './models/WallModel.js';
import GableModel from './models/GableModel.js';
import RoofPanelModel from './models/RoofPanelModel.js';

function buildShed(length, width, height){
    //Create the ground at the base of the shed
    const ground = createGround(length, width, height);
    application.add3DShape(ground, '#00FF00');
    
    //Create the front wall with door opening
    const wallWithDoor = new WallModel();
    application.add3DShape(wallWithDoor.geometry(length,width,height, true), '#FF2D00');

     //Create a wall and add it to the scene at 180 degrees from front wall
     const backWall = new WallModel();
     application.add3DShape(backWall.geometry(length, width, height), '#FF2D00', new THREE.Vector3(0, 0, Math.PI));

    //Create one wall and add it to the scene twice at 45 and 225 degrees from front wall
    const sideWall = new WallModel();
    application.add3DShape(sideWall.geometry(width, length, height), '#FF2D00', new THREE.Vector3(0, 0, (3 * Math.PI) / 2));
    application.add3DShape(sideWall.geometry(width, length, height), '#FF2D00', new THREE.Vector3(0, 0, Math.PI/2));

    //Create one gable and add it to the scene twice at 0 and 180 degrees from front wall
    const gable = new GableModel();
    application.add3DShape(gable.geometry(length, width, height), '#FFFFFF');
    application.add3DShape(gable.geometry(length, width, height), '#FFFFFF', new THREE.Vector3(0, 0, Math.PI));

    //Create one roof panel and add it twice at 0 and 180 degrees from the side wall
    const panel = new RoofPanelModel();
    application.add3DShape(panel.geometry(length,width,height), '#525252');
    application.add3DShape(panel.geometry(length,width,height), '#525252', new THREE.Vector3(0, 0, Math.PI));
} 

function createGround(length, width, height){
    //Creates a rectangle that is twice the length and twice the width of the passed in parameters
    const ground = new THREE.BufferGeometry();
    const vertices = new Float32Array( [
        length, -width, height/2,
        length, width, height/2,
        -length, width, height/2,

        -length, -width, height/2,
        -length, width, height/2,
        length, -width, height/2,
    ] );
    
    ground.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    ground.computeVertexNormals();
    return ground;
}

//On dimmension change rebuild the shed with the new width, length or height values
function lengthCallback(length) {
    var width = document.getElementById('widthInput').value;
    var height = document.getElementById('heightInput').value;
    application.clear();
    buildShed(length,width,height);
};

function widthCallback(width) {
    var length = document.getElementById('lengthInput').value;
    var height = document.getElementById('heightInput').value;
    application.clear(); 
    buildShed(length,width,height);
};

function heightCallback(height) {
    var width = document.getElementById('widthInput').value;
    var length = document.getElementById('lengthInput').value;
    application.clear();
    buildShed(length,width,height);
};

application.setLengthChangedCallback(lengthCallback);
application.setWidthChangedCallback(widthCallback);
application.setHeightChangedCallback(heightCallback);

//Create the default shed
buildShed(15, 15, 7);


