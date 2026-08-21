import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry01 = new THREE.PlaneGeometry(4, 2, 6, 6);
const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    wireframe: true
});

const plane = new THREE.Mesh(geometry01, material);
plane.position.set(5, 0, 0);
scene.add(plane);


//const geometry02 = new THREE.SphereGeometry(2,2,5,4);
const material02 = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
});

const sphere = new THREE.Mesh(geometry01, material02);
sphere.position.set(0, 0, 0);
sphere.scale.set(1, 2, 10);
scene.add(sphere);


renderer.render(scene, camera);


function animate() {
    requestAnimationFrame(animate);
    plane.rotation.x += 0.001;
    plane.rotation.y += 0.005;
    sphere.rotation.x += 0.004;
    sphere.rotation.y += 0.0001;    
    renderer.render(scene, camera);
}

animate();