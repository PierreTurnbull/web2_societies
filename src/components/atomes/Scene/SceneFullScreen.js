import React, { Component } from 'react'
import * as THREE from 'three';
import { vertexShader, fragmentShader } from './shaders';
import { throttle, debounce } from 'lodash';
import scrollSpeed from 'utils/scrollSpeed';
import { TweenMax, Power2, TimelineLite, TweenLite } from "gsap/TweenMax";


// import img from './lol.jpeg';
// import imgz from './mdr.jpeg';

THREE.ImageUtils.crossOrigin = '';
// const images = [img, imgz];
let camera, scene, geometry, geometry2, geometry3, mesh1, mesh2, mesh3, renderer, MyTexture;
let loader = new THREE.TextureLoader();
// let userScrollSpeed = 1.;
export default class Scene extends Component {

    constructor(props) {
        super(props);
        this.init = this.init.bind(this);
        this.animate = this.animate.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);

        this.nb = 1;
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.l = window.innerLeft;
        this.t = window.innerRigth;
        this.userScrollSpeed = 1.

        this.img1 = this.props.img1;
        this.img2 = this.props.img2;
        this.img3 = this.props.img3;

        // this.MyTexture = loader.load(this.img,
        //     (texture) => {
        //         // this.w = texture.image.width
        //         // this.h = texture.image.height
        //         // this.uniforms.size = {
        //         //     type: "v2", value: new THREE.Vector2(this.w, this.h)
        //         // }
        //     });
        // setTimeout(() => {
        //     this.nb = 1;
        //     this.MyTexture1 = loader.load(this.props.img);
        //     this.uniforms.texture = { type: "sampler2D", value: this.MyTexture1 };
        // }, 1000)

        this.uniforms = {
            time: { type: "f", value: 2.0 },
            resolution: { type: "v2", value: new THREE.Vector2() },
            uvRate1: { type: "f", value: new THREE.Vector2(1, 1) },
            userScrollSpeed: { type: "f", value: this.userScrollSpeed }
        };
        this.uniforms2 = {
            time: { type: "f", value: 1.0 },
            resolution: { type: "v2", value: new THREE.Vector2() },
            uvRate1: { type: "f", value: new THREE.Vector2(1, 1) },
            userScrollSpeed: { type: "f", value: this.userScrollSpeed }
        };
        this.uniforms3 = {
            time: { type: "f", value: 3.3 },
            resolution: { type: "v2", value: new THREE.Vector2() },
            uvRate1: { type: "f", value: new THREE.Vector2(1, 1) },
            userScrollSpeed: { type: "f", value: this.userScrollSpeed }
        };

        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            // wireframe: true
        });

        this.material2 = new THREE.ShaderMaterial({
            uniforms: this.uniforms2,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            // wireframe: true
        });

        this.material3 = new THREE.ShaderMaterial({
            uniforms: this.uniforms3,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            // wireframe: true
        });

    }
    // componentWillReceiveProps(nextProps) {
    //     // this.uniforms.time.value = nextProps.time
    //     console.log('mdt', this.state, this.props, nextProps);

    //     if (nextProps.width !== this.props.width)
    //         this.uniforms.resolution.value.x = nextProps.width;

    //     if (nextProps.height !== this.props.height)
    //         this.uniforms.resolution.value.y = nextProps.height;
    // }

    componentDidMount() {
        this.init();
        this.animate();
        // console.log(this.canvas.clientHeight);
        setTimeout(() => {
            console.group("SIZE");
            // console.log(this.canvas.clientHeight);
            
            // console.log("1", this.props.scene1.current.scene.current.getBoundingClientRect().x)
            // console.log("2", this.props.scene2.current.scene.current.getBoundingClientRect().x);
            // console.log("3", this.props.scene3.current.scene.current.getBoundingClientRect().x);
            console.groupEnd();
        }, 2000)
    }

    resizeCanvasToDisplaySize() {
        const canvas = this.canvas;
        // look up the size the canvas is being displayed
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        // adjust displayBuffer size to match
        if (canvas.width !== width || canvas.height !== height) {
            // you must pass false here or three.js sadly fights the browser
            renderer.setSize(width, height, true);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            // update any render target sizes here
        }
    }

    init() {
        camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, .1, 1000);
        camera.position.z = 1;
        // let dist = camera.position.z - 1;
        // let height = 1;
        // camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));
        // camera.updateProjectionMatrix();
        // camera.updateMatrixWorld();

        scene = new THREE.Scene();
        console.log("FOV", camera.fov);

        // geometry = new THREE.PlaneGeometry(1, 1, 1);

        // geometry = new THREE.PlaneGeometry(1, 1, 1);
        geometry = new THREE.PlaneGeometry(this.canvas.clientWidth/this.canvas.clientHeight, 1);
        // geometry = new THREE.PlaneGeometry(1, 1, 1);
        geometry.verticesNeedUpdate = true;

        geometry2 = new THREE.PlaneGeometry(1, 1);
        // geometry2 = new THREE.PlaneGeometry(1, 1, 1);
        geometry2.verticesNeedUpdate = true;

        geometry3 = new THREE.PlaneGeometry(1, 1);
        // geometry3 = new THREE.PlaneGeometry(this.props.scene3.current.scene.current.getBoundingClientRect().width/this.canvas.clientWidth + (160/this.canvas.clientWidth), 1, 1);
        geometry3.verticesNeedUpdate = true;

        this.MyTexture1 = loader.load(this.img1,
            (texture) => {
                // this.w = texture.image.width
                // this.h = texture.image.height
                // this.uniforms.size = {
                //     type: "v2", value: new THREE.Vector2(texture.image.width, texture.image.height)
                // }
            });
        this.MyTexture2 = loader.load(this.img2,
            (texture) => {
                // this.w = texture.image.width
                // this.h = texture.image.height
                // this.uniforms.size = {
                //     type: "v2", value: new THREE.Vector2(texture.image.width, texture.image.height)
                // }
            });
        this.MyTexture3 = loader.load(this.img3,
            (texture) => {
                // this.w = texture.image.width
                // this.h = texture.image.height
                // this.uniforms.size = {
                //     type: "v2", value: new THREE.Vector2(texture.image.width, texture.image.height)
                // }
            });
        this.MyMap = loader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFfVJb6RQW58GJ-JAf4E5WHhdYsiONQgLZrbCPk0fBCRl0gN_',
            (texture) => {
            });

        this.uniforms.texture = { type: "sampler2D", value: this.MyTexture1 };
        this.uniforms2.texture = { type: "sampler2D", value: this.MyTexture2 };
        this.uniforms3.texture = { type: "sampler2D", value: this.MyTexture3 };
        this.uniforms.map = { type: "sampler2D", value: this.MyMap };
        this.uniforms2.map = { type: "sampler2D", value: this.MyMap };
        this.uniforms3.map = { type: "sampler2D", value: this.MyMap };

        let setSpeed = throttle((speed) => {
            TweenLite.to(this.uniforms.userScrollSpeed, 1, { value: speed * 5 })
        }, 100);

        let setBack = debounce(() => {
            TweenLite.to(this.uniforms.userScrollSpeed, 1, { value: 0 })
        }, 100);

        window.onscroll = () => {
            const speed = scrollSpeed();
            // this.userScrollSpeed = speed;
            setSpeed(speed / 200);
            setBack();
        };

        // this.uniforms.size = {
        //     type: "v2", value: new THREE.Vector2(10, 10)
        // }

        mesh1 = new THREE.Mesh(geometry, this.material);
        // scene.add(mesh1);
        mesh2 = new THREE.Mesh(geometry2, this.material2);
        // scene.add(mesh2);
        mesh3 = new THREE.Mesh(geometry3, this.material3);
        scene.add(mesh1, mesh2, mesh3);
        // mesh1.position.x = this.props.scene1.current.scene.current.getBoundingClientRect().left/this.canvas.clientWidth;

        mesh1.position.x = -.3;
        mesh2.position.x = 0;
        mesh3.position.x = 1 ;

        // console.log("getWorldPosition", mesh1.getWorldPosition());
        console.log("getWorldPosition", mesh1.matrixWorld.getPosition());

        // mesh1.position.set(0, 0, 0);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight, true);
        renderer.setClearColor('#000000')
        this.canvas.appendChild(renderer.domElement);
        
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize, false);
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.resizeCanvasToDisplaySize();
        this.uniforms.time.value += 0.03;
        this.uniforms2.time.value += 0.01;
        this.uniforms3.time.value += 0.04;
        // console.log(this.uniforms.userScrollSpeed.value);
        renderer.render(scene, camera);
    }

    onWindowResize(event) {
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });
        this.material2 = new THREE.ShaderMaterial({
            uniforms: this.uniforms2,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });
        this.material3 = new THREE.ShaderMaterial({
            uniforms: this.uniforms3,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });
        // console.log(this.canvas);
        // console.log(this.props.scene1.current.scene.current.getBoundingClientRect().width/this.canvas.clientWidth);

        let w = this.canvas.clientWidth;
        let h = this.canvas.clientHeight;
        renderer.setSize(w, h, false);

        camera.aspect = w / h;
        camera.updateMatrixWorld();

        // let dist = camera.position.z - mesh1.position.z;
        // let height = 1;
        // camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));

        // var vFOV = THREE.Math.degToRad( camera.fov ); 
        // var heightt = 2 * Math.tan( vFOV / 2 ) * dist; // visible heightt
        // var widthh = heightt * camera.aspect;           // visible widthh
        // this.heightt = heightt;
        // this.widthh = widthh;
        // console.log("H",vFOV, heightt, widthh);

        this.material.uniforms.uvRate1.value.y = h / w;
        this.material2.uniforms.uvRate1.value.y = h / w;
        this.material3.uniforms.uvRate1.value.y = h / w;

        // if (w / h > 1) {
        //     mesh1.scale.y = mesh1.scale.y *  h / h;
        //     mesh2.scale.y = mesh2.scale.y *  h / h;
        //     mesh3.scale.y = mesh3.scale.y *  h / h;
        // }

        mesh1.scale.x = w / h;
        mesh2.scale.x = w / h;
        mesh3.scale.x = w / h;

        // mesh1.position.x = -1 - this.props.scene.current.getBoundingClientRect().left / this.canvas.clientWidth + (150 / this.canvas.clientWidth);
        // mesh2.position.x = 0;
        // // mesh2.position.x = -(this.props.scene2.current.scene.current.getBoundingClientRect().left / this.canvas.clientWidth) / 2;
        // // mesh2.position.x = (this.props.scene2.current.scene.current.getBoundingClientRect().left / this.canvas.clientWidth / this.canvas.clientWidth) / 2;
        // mesh3.position.x = 1 - this.props.scene3.current.scene.current.getBoundingClientRect().left / this.canvas.clientWidth + (150 / this.canvas.clientWidth);

        camera.updateProjectionMatrix();
        this.uniforms.resolution.value.x = renderer.domElement.width;
        this.uniforms.resolution.value.y = renderer.domElement.height;
        this.uniforms2.resolution.value.x = renderer.domElement.width;
        this.uniforms2.resolution.value.y = renderer.domElement.height;
        this.uniforms3.resolution.value.x = renderer.domElement.width;
        this.uniforms3.resolution.value.y = renderer.domElement.height;

        // this.uniforms.size = {
        //     type: "v2", value: new THREE.Vector2(renderer.domElement.width, renderer.domElement.height)
        // }
        // this.uniforms2.size = {
        //     type: "v2", value: new THREE.Vector2(renderer.domElement.width, renderer.domElement.height)
        // }
        // this.uniforms3.size = {
        //     type: "v2", value: new THREE.Vector2(renderer.domElement.width, renderer.domElement.height)
        // }
    }
    render() {
        return (
            <div className={this.props.className} ref={(ref) => this.canvas = ref}>
            </div>
        )
    }
}
