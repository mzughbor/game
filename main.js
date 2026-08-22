import * as THREE from 'three';

const canvas = document.querySelector('.webgl');

const scene = new THREE.Scene();
scene.background = new THREE.Color('#0b0d12');

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.set(0, 0, 10);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const geometry01 = new THREE.PlaneGeometry(4, 2, 6, 6);
const material = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    wireframe: true,
});

const plane = new THREE.Mesh(geometry01, material);
plane.position.set(5, 0, 0);
scene.add(plane);

const material02 = new THREE.MeshBasicMaterial({
    color: 0xa5b4fc,
    wireframe: true,
});

const sphere = new THREE.Mesh(geometry01, material02);
sphere.position.set(1.5, 0, 0);
sphere.scale.set(1, 2, 10);
scene.add(sphere);

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function animate() {
    requestAnimationFrame(animate);
    plane.rotation.x += 0.001;
    plane.rotation.y += 0.005;
    sphere.rotation.x += 0.004;
    sphere.rotation.y += 0.0001;
    renderer.render(scene, camera);
}

animate();
