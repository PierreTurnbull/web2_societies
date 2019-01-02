import React, { Component } from 'react'
import * as THREE from 'three';
import { vertexShader, fragmentShader, setRandomShader } from './shaders';
import { throttle, debounce } from 'lodash';
import scrollSpeed from 'utils/scrollSpeed';
import { TweenLite } from "gsap/TweenMax";


THREE.ImageUtils.crossOrigin = '';
let camera;
export default class Scene extends Component {

    constructor(props) {
        super(props);
        this.init = this.init.bind(this);
        this.animate = this.animate.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);

        this.img1 = this.props.img1;
        this.img2 = this.props.img2;
        this.img3 = this.props.img3;

        this.nb = 1;
        this.w = window.innerWidth;
        this.userScrollSpeed = 0.;
        this.renderer = null;
        this.scene = null;
        this.mesh = null;
        this.imageWidth = null;
        this.imageHeight = null;
        this.geometry = null;
        this.holdValue = this.props.holdValue;
        this.loader = new THREE.TextureLoader()
        this.random = Math.floor(Math.random() * 100.) + 1.;
        this.MyTexture1 = this.loader.load(this.img1);
        this.MyTexture2 = this.loader.load(this.img2);
        this.MyTexture3 = this.loader.load(this.img3);
        // setTimeout(() => {
        //     this.nb = 1;
        //     this.MyTexture = this.loader.load(this.img);
        //     this.uniforms.texture = { type: "sampler2D", value: this.MyTexture };
        // }, 1000)

        this.uniforms1 = {
            time: { type: "f", value: 1.0 },
            random: { type: "f", value: this.random },
            resolution: { type: "v2", value: new THREE.Vector2(this.imageWidth, this.imageHeight) },
            uvRate1: { type: "f", value: new THREE.Vector2(1, 1) },
            userScrollSpeed: { type: "f", value: this.userScrollSpeed }
        };
        this.uniforms2 = {
            time: { type: "f", value: 1.0 },
            random: { type: "f", value: this.random },
            resolution: { type: "v2", value: new THREE.Vector2(this.imageWidth, this.imageHeight) },
            uvRate1: { type: "f", value: new THREE.Vector2(1, 1) },
            userScrollSpeed: { type: "f", value: this.userScrollSpeed }
        };
        this.uniforms3 = {
            time: { type: "f", value: 1.0 },
            random: { type: "f", value: this.random },
            resolution: { type: "v2", value: new THREE.Vector2(this.imageWidth, this.imageHeight) },
            uvRate1: { type: "f", value: new THREE.Vector2(1, 1) },
            userScrollSpeed: { type: "f", value: this.userScrollSpeed }
        };

        this.material1 = new THREE.ShaderMaterial({
            uniforms: this.uniforms1,
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
        // console.log(this.props.this.scene.current != null ? this.props.this.scene.current.getBoundingClientRect().x : 'nullll');
        // console.log(this.canvas.clientHeight);
    }
    componentWillUnmount() {
        this.renderer.dispose();
        window.removeEventListener('resize', this.onWindowResize);
    }

    init() {
        camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.01, 1000);
        camera.position.z = 1;

        this.scene = new THREE.Scene();
        // this.scene = this.scene.clone();
        // geometry = new THREE.PlaneGeometry(1, 1, 1);
        this.geometry = new THREE.PlaneGeometry(
            1,
            1,
            20,
            20
        );

        this.geometry.verticesNeedUpdate = true;
        this.MyTexture1 = this.loader.load(this.img1);
        this.MyTexture2 = this.loader.load(this.img2);
        this.MyTexture3 = this.loader.load(this.img3);
        this.MyMap = this.loader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FXchrGaqzSZ-YmGRFPhzH30VcgbGWl_iVnFpVV_2u6oKeZCy');

        this.uniforms1.texture = { type: "sampler2D", value: this.MyTexture1 };
        this.uniforms2.texture = { type: "sampler2D", value: this.MyTexture2 };
        this.uniforms3.texture = { type: "sampler2D", value: this.MyTexture3 };

        this.uniforms1.map = { type: "sampler2D", value: this.MyMap };
        this.uniforms2.map = { type: "sampler2D", value: this.MyMap };
        this.uniforms3.map = { type: "sampler2D", value: this.MyMap };
        this.uniforms1.holdValue = { type: "sampler2D", value: this.props.holdValue };
        this.uniforms2.holdValue = { type: "sampler2D", value: this.props.holdValue };
        this.uniforms3.holdValue = { type: "sampler2D", value: this.props.holdValue };

        let setSpeed = throttle((speed) => {
            // console.log('SET');
            // this.uniforms.userScrollSpeed.value = skew;
            // console.log(this.uniforms.userScrollSpeed.value);

            TweenLite.to(this.uniforms1.userScrollSpeed, 1, { value: speed * 5 })
            TweenLite.to(this.uniforms2.userScrollSpeed, 1, { value: speed * 5 })
            TweenLite.to(this.uniforms3.userScrollSpeed, 1, { value: speed * 5 })
        }, 100);

        let setBack = debounce(() => {
            // console.log('SET BACK');

            TweenLite.to(this.uniforms1.userScrollSpeed, 1, { value: 0 })
            TweenLite.to(this.uniforms2.userScrollSpeed, 1, { value: 0 })
            TweenLite.to(this.uniforms3.userScrollSpeed, 1, { value: 0 })
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

        this.mesh1 = new THREE.Mesh(this.geometry, this.material1);
        this.mesh2 = new THREE.Mesh(this.geometry, this.material2);
        this.mesh3 = new THREE.Mesh(this.geometry, this.material3);

        this.scene.add(this.mesh1, this.mesh2, this.mesh3);

        console.log(this.props.scene1.current.scene.current.getBoundingClientRect());
        // console.log(this.props.scene2.current.scene.current.getBoundingClientRect().x);

        // this.mesh2.position.setX(-1.)
        // this.mesh3.position.setX(2.)

        setTimeout(() => {
            var position = new THREE.Vector3();
            position.getPositionFromMatrix(this.mesh2.matrixWorld);
            console.log(position);
        }, 1000);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.setClearColor('#eee');
        this.canvas.appendChild(this.renderer.domElement);

        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize, false);
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.uniforms1.time.value += 0.03;
        this.uniforms2.time.value += 0.03;
        this.uniforms3.time.value += 0.03;
        this.uniforms1.holdValue.value = this.props.holdValue;
        this.uniforms2.holdValue.value = this.props.holdValue;
        this.uniforms3.holdValue.value = this.props.holdValue;

        let sceneW = this.props.scene1.current.scene.current.clientWidth;
        let sceneH = this.props.scene1.current.scene.current.clientHeight;
        this.mesh1.scale.x = ((sceneW - 50) / 3 / sceneH) + 1 * this.props.holdValue/50.;
        this.mesh1.scale.y = ((sceneH - 50) / 3 / sceneW) + 1 * this.props.holdValue/50.;
        // console.log(this.uniforms.userScrollSpeed.value);
        this.renderer.render(this.scene, camera);
    }

    onWindowResize(event) {
        // this.material = new THREE.ShaderMaterial({
        //     uniforms: this.uniforms,
        //     vertexShader: vertexShader,
        //     fragmentShader: fragmentShader
        // });
        // console.log(this.canvas);
        // console.group('RESIZE');
        console.log(this.props.scene1.current.scene.current.clientHeight);

        let w = this.canvas.clientWidth;
        let h = this.canvas.clientHeight;
        camera.aspect = w / h;

        let dist = camera.position.z - this.mesh1.position.z;
        let height = 1;
        camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));

        // 

        let sceneW = this.props.scene1.current.scene.current.clientWidth;
        let sceneH = this.props.scene1.current.scene.current.clientHeight;

        this.renderer.setSize(w, h);
        // this.material.uniforms.uvRate1.value.y = w / h;

        this.mesh1.scale.x = ((sceneW - 50) / 3 / sceneH);
        this.mesh2.scale.x = 0.1;
        this.mesh3.scale.x = 0.1;

        this.mesh1.scale.y = sceneH / sceneW;
        this.mesh2.scale.y = 0.1;
        this.mesh3.scale.y = 0.1;

        const canvasRation = this.canvas.clientWidth / this.canvas.clientHeight;

        // this.mesh1.position.setX(-1)
        this.mesh1.position.x = (this.props.scene1.current.scene.current.getBoundingClientRect().x / (this.canvas.clientWidth) * 2) - .5
        this.mesh1.position.y = (this.props.scene1.current.scene.current.getBoundingClientRect().y / (this.canvas.clientHeight) * 2)

        console.log(this.mesh1.position.x);

        // if (w / h > 1) { // container paysage ?
        //     // console.log('> container paysage');
        //     if (this.imageWidth / this.imageHeight < 1) { // image portrait ?
        //         // console.log("image portrait");
        //         this.mesh1.scale.x = w / h;
        //         this.mesh1.scale.y = (this.mesh1.scale.x * h / w) * this.imageHeight / this.imageWidth;
        //     } else { // image paysage ?
        //         // console.log("image paysage", w / h);
        //         this.mesh1.scale.x = w / h * this.imageWidth / this.imageHeight;
        //         this.mesh1.scale.y = 1;
        //     }
        // } else { // container portrait ?
        //     // console.log('< container portrait');
        //     if (this.imageWidth / this.imageHeight < 1) { // image portrait ?
        //         // console.log("image portrait");
        //         this.mesh1.scale.x = 1;
        //         this.mesh1.scale.y = (this.mesh1.scale.x * h / w) * this.imageHeight / this.imageWidth;
        //     } else { // image paysage ?
        //         // console.log("image paysage");
        //         this.mesh1.scale.y = (h / w);
        //         this.mesh1.scale.x = (this.mesh1.scale.y * w / h) * this.imageWidth / this.imageHeight;
        //     }
        //     // this.mesh.scale.y = h/w;
        //     // this.mesh.scale.x = 1;
        //     // this.mesh.scale.y = 1;
        // }

        camera.updateProjectionMatrix();

    }
    render() {
        return (
            <div className={this.props.className} ref={(ref) => this.canvas = ref}>
            </div>
        )
    }
}
